import { Calendar } from '@bryntum/calendar';
import { BryntumCalendarProps } from '@bryntum/calendar-angular';

export const calendarProps: BryntumCalendarProps = {
    // Start life looking at this date
    date : new Date(2020, 9, 12),

    timeRangesFeature : {
        // configure timeRanges feature...
        headerWidth : 42
    },

    eventTooltipFeature : {
        // Configuration options are passed on to the tooltip instance
        // We want the tooltip's left edge aligned to the right edge of the event if possible.
        align : 'l-r'
    },

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'assets/data/data.json'
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
                    source.up(Calendar.type).cls = { 'custom-styles' : checked };
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
