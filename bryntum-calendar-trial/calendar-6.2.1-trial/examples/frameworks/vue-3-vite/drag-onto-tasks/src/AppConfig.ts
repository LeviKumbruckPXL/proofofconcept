import { type EventEditConfig, EventModel, type FilterBarConfig, StringHelper } from '@bryntum/calendar';
import type { BryntumCalendarProps, BryntumGridProps } from '@bryntum/calendar-vue-3';
import type { AppEventModel, EquipmentModel } from './lib/EquipmentStore';

/**
 * Application configuration
 */

// Render icons representing the equipment assigned to the task
const eventRenderer = ({ eventRecord }: { eventRecord: EventModel }): string => {
    const event = eventRecord as AppEventModel;
    return `<div class="b-event-name">${StringHelper.encodeHtml(event.name || '')}</div>
            <ul class="b-event-equipment-wrap">
                ${event.equipment.map((equipment: EquipmentModel) => `<li data-btip="${StringHelper.encodeHtml(equipment.name)}"
                class="${equipment.iconCls}"></li>`).join('')}
            </ul>`;
};

export const myCalendarConfig : BryntumCalendarProps = {
    // Start life looking at this date
    date  : new Date(2023, 9, 12),
    modes : {
        agenda : null,
        day    : {
            eventRenderer
        },
        week : {
            eventRenderer
        }
    }
};

// Configurations for feature in the Calendar
export const eventEditFeatureConfig : EventEditConfig = {
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
};

export const equipmentGridConfig : BryntumGridProps = {
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
    }]
};

// Configuration for feature in the Grid
export const filterBarFeatureConfig : FilterBarConfig = {
    compactMode : true
};
