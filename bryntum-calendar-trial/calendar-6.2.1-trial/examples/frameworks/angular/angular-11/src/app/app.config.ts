/**
 * Application config file
 */

import { BryntumCalendarProps } from '@bryntum/calendar-angular';

export const calendarProps : BryntumCalendarProps = {

    eventTooltipFeature : {
        align : 'l-r'
    },

    date : new Date(2020, 9, 11),

    // Modes are the views available in the Calendar.
    // An object is used to configure the view.
    modes : {
        year : false
    }
};
