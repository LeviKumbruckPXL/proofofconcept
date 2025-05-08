import { DragHelper, Toast, Grid, StringHelper, Calendar, Store } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';
//region "lib/Drag.js"

class Drag extends DragHelper {
    static  configurable = {
        callOnFunctions      : true,
        // Don't drag the actual cell element, clone it
        cloneTarget          : true,
        // We size the cloned element using CSS
        autoSizeClonedTarget : false,

        // Only allow drops on calendar tasks
        dropTargetSelector : '.b-cal-event',
        // Drag only the icon inside the cell
        proxySelector      : 'i',
        // Only allow dragging cell elements inside on the equipment grid
        targetSelector     : '.b-grid-row:not(.b-group-row) .b-grid-cell'
    };

    // Listening to events using the onXXX notation, similar to this.on('dragStart', () => {})
    onDragStart({ event, context }) {
        // save a reference to the equipment so we can access it later
        context.equipment = this.grid.getRecordFromElement(context.grabbed);

        // Prevent tooltips from showing while dragging
        this.calendar.features.eventTooltip.disabled = true;
    }

    // In the onDrop, we instruct the drag helper to transition the drag proxy element to an approximate destination
    // before updating the event record (done in onDropFinalized)
    async onDrop({ context }) {
        if (context.valid) {
            const
                equipmentItem = context.equipment,
                eventRecord   = this.calendar.resolveEventRecord(context.target);

            if (eventRecord.equipment.includes(equipmentItem)) {
                context.valid = false;
                Toast.show(`${equipmentItem.name} is already assigned to ${eventRecord.name}`);
            }
            else {
                const
                    equipmentWrap = context.target.closest('.b-cal-event').querySelector('.b-event-equipment-wrap'),
                    animTarget    = equipmentWrap?.lastElementChild || equipmentWrap;

                if (animTarget) {
                    await this.animateProxyTo(animTarget, {
                        align  : 'l0-r14',
                        offset : [
                            equipmentWrap?.lastElementChild ? parseInt(getComputedStyle(equipmentWrap.lastElementChild).marginInlineEnd) : 0
                        ]
                    });
                }
                eventRecord.equipment = eventRecord.equipment.concat(equipmentItem);
                Toast.show(`Added ${equipmentItem.name} to ${eventRecord.name}`);
            }
        }

        this.calendar.features.eventTooltip.disabled = false;
    }
};

//endregion

//region "lib/EquipmentGrid.js"

class EquipmentGrid extends Grid {

    /**
     * Original class name getter. See Widget.$name docs for the details.
     */
    static $name = 'EquipmentGrid';

    // Factoryable type name
    static type = 'equipmentgrid';

    static configurable = {
        disableGridRowModelWarning : true,
        ui                         : 'toolbar',
        collapsible                : true,
        features                   : {
            filterBar : {
                compactMode : true
            },
            cellEdit : false
        },

        rowHeight : 100,

        columns : [{
            text       : 'Type to filter...',
            field      : 'name',
            htmlEncode : false,
            cellCls    : 'b-equipment',
            renderer   : ({ record }) => StringHelper.xss`<i class="b-equipment-icon ${record.iconCls}"></i>${record.name}`
        }]
    };
};

// Register this widget type with its Factory
EquipmentGrid.initClass();

//endregion

//region "lib/MyCalendar.js"

// Render icons representing the equipment assigned to the task
const eventRenderer = ({ eventRecord }) => {
    return {
        class    : 'b-event-name',
        children : [
            eventRecord.name || '',
            {
                tag      : 'ul',
                class    : 'b-event-equipment-wrap',
                children : eventRecord.equipment.map(item => {
                    return {
                        tag     : 'i',
                        dataset : {
                            btip : item.name
                        },
                        class : item.iconCls
                    };
                })
            }
        ]
    };
};

class MyCalendar extends Calendar {
    // Original class name getter. See Widget.$name docs for the details.
    static $name = 'MyCalendar';
    // Factoryable type name
    static type = 'mycalendar';

    static configurable = {
        modes : {
            agenda : null,
            day    : {
                eventRenderer
            },
            week : {
                eventRenderer
            }
        },
        features : {
            eventEdit : {
                // Add an extra combo box to the editor to select equipment
                items : {
                    equipment : {
                        type         : 'combo',
                        weight       : 900, // At end
                        editable     : false,
                        multiSelect  : true,
                        valueField   : 'id',
                        displayField : 'name',
                        ref          : 'equipment',
                        name         : 'equipment',
                        label        : 'Equipment'
                    }
                }
            }
        }
    };

    construct(config) {
        super.construct(config);

        const equipmentCombo = this.features.eventEdit.editor.widgetMap.equipment;
        // Assign equipment combo store to be the same as chainedStore in grid
        equipmentCombo.store = this.equipmentStore.chain();
    }
};

// Register this widget type with its Factory
Calendar.initClass();

//endregion

const equipmentStore = new Store({
    id     : 'equipment',
    fields : [
        'name',
        'iconCls'
    ],
    sorters : [
        { field : 'name', ascending : true }
    ]
});

const calendar = new MyCalendar({
    // Start life looking at this date
    date     : new Date(2023, 9, 12),
    appendTo : 'container',
    equipmentStore,

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        crudStores : [equipmentStore],
        loadUrl    : 'data/data.json',
        autoLoad   : true,
        eventStore : {
            fields : [
                // A custom equipment field where we store items assigned to the task
                {
                    name : 'equipment',
                    convert(data) {
                        return (data || []).map(id => equipmentStore.getById(id));
                    }
                }
            ]
        }
    },

    // Ad add our source Grid as a sibling of the viewContainer.
    // It shares the width *inside* the Calendar
    items : {
        splitter : {
            type   : 'splitter',
            weight : 110
        },
        equipment : {
            type   : 'equipmentgrid',
            weight : 120,
            title  : 'Equipment',
            // Use a chained Store to avoid its filtering to interfere with calendar's rendering
            store  : equipmentStore.chain()
        }
    }
});

const drag = new Drag({
    grid         : calendar.widgetMap.equipment,
    calendar,
    outerElement : calendar.widgetMap.equipment.contentElement
});
