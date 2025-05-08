import { BryntumCalendarProps } from '@bryntum/calendar-angular-thin';

export const calendarProps : BryntumCalendarProps = {
    // Start life looking at this date
    date : new Date(2020, 9, 12),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        transport : {
            load : {
                url : 'assets/data/data.json'
            }
        },
        autoLoad : true
    },

    eventTooltipFeature : {
        // Configuration options are passed on to the tooltip instance
        // We want the tooltip's left edge aligned to the right edge of the event if possible.
        align : 'l-r'
    }
};
