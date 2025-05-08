import { EventModel, Model, Store, StringHelper } from '@bryntum/calendar';
import { BryntumCalendarProps, BryntumGridProps } from '@bryntum/calendar-angular';
import { AppEventModel, EquipmentModel } from 'src/lib/app.types';

// Configuration for custom equipmentStore
export const equipmentStore = new Store({
    id     : 'equipment',
    fields : [
        'name',
        'iconCls'
    ],
    sorters : [
        { field : 'name', ascending : true }
    ]
});

// Render icons representing the equipment assigned to the task
const eventRenderer = ({ eventRecord }: { eventRecord: EventModel }): string => {
    const event = eventRecord as AppEventModel;
    return `<div class="b-event-name">${StringHelper.encodeHtml(event.name || '')}</div>
            <ul class="b-event-equipment-wrap">
                ${event.equipment.map((equipment: EquipmentModel) => `<li data-btip="${StringHelper.encodeHtml(equipment.name)}"
                class="${equipment.iconCls}"></li>`).join('')}
            </ul>`;
};

export const calendarProps: BryntumCalendarProps = {
    // Start life looking at this date
    date : new Date(2023, 9, 12),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        crudStores : [equipmentStore],
        loadUrl    : 'assets/data/data.json',
        autoLoad   : true,
        eventStore : {
            fields : [
                // A custom equipment field where we store items assigned to the task
                {
                    name : 'equipment',
                    convert(data) {
                        return (data || []).map((id: string | number | Model) => equipmentStore.getById(id));
                    }
                }
            ]
        }
    },

    modes : {
        agenda : null,
        day    : {
            eventRenderer
        },
        week : {
            eventRenderer
        }
    },

    eventEditFeature : {
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
};

export const equipmentGridProps: BryntumGridProps = {
    cls                        : 'b-equipment-grid',
    title                      : 'Equipment',
    disableGridRowModelWarning : true,
    ui                         : 'toolbar',
    collapsible                : true,
    rowHeight                  : 100,
    columns                    : [{
        type       : 'column',
        text       : 'Type to filter...',
        field      : 'name',
        htmlEncode : false,
        cellCls    : 'b-equipment',
        renderer   : ({ record }) => {
            const equipment = record as EquipmentModel;
            return StringHelper.xss`<i class="b-equipment-icon ${equipment.iconCls}"></i>${equipment.name}`;
        }
    }],

    filterBarFeature : {
        compactMode : true
    },
    cellEditFeature : false
};
