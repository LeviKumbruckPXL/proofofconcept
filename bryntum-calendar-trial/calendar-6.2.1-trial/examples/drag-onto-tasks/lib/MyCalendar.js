import Calendar from '../../../lib/Calendar/view/Calendar.js';

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

export default class MyCalendar extends Calendar {
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
