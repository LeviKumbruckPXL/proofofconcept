import { Calendar, type EventTooltipConfig, type TimeRangesConfig } from '@bryntum/calendar';
import type { BryntumCalendarProps } from '@bryntum/calendar-vue-3';

export const calendarConfiguration : BryntumCalendarProps = {
    // Start life looking at this date
    date : new Date(2020, 9, 12),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },

    cls : 'custom-styles',

    tbar : {
        items : {
            customCheckbox : {
                type    : 'checkbox',
                text    : 'Custom styles',
                checked : true,
                weight  : 650,
                onChange({ checked, source }) {
                    const calendar = source.up(Calendar.type) as Calendar;
                    calendar.cls = { 'custom-styles' : checked };
                }
            }
        }
    },

    modes : {
        day : {
            dayStartTime : 8,
            dayEndTime   : 22,
            hourHeight   : 70
        },
        week : {
            dayStartTime : 8,
            dayEndTime   : 22,
            hourHeight   : 70
        },
        weekResources : {
            // Type has the final say over which view type is created
            type : 'resource'
        }
    }
};

// Configurations for Calendar features
export const timeRangesFeatureConfig : TimeRangesConfig = {
    // configure timeRanges feature...
    headerWidth : 42
};

export const eventTooltipFeatureConfig : EventTooltipConfig = {
    // Configuration options are passed on to the tooltip instance
    // We want the tooltip's left edge aligned to the right edge of the event if possible.
    align : 'l-r'
};
