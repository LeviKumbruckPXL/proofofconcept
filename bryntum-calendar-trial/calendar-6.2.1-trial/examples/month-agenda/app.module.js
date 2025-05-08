import { Calendar } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

const calendar = new Calendar({
    // Start life looking at this date
    date : new Date(2020, 9, 13),

    // 'day', 'week', 'month', etc.
    mode : 'month',

    modes : {
        month : {
            // If the month view is converted to be MonthAgenda (In this example, it is)
            // then configure exactly how it should render the event dots in compact mode.
            // We want a stripe containing event blocks.
            eventDots : {
                stripe : true,
                size   : 8
            }
        }
    },

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad : true,
        loadUrl  : 'data/data.json'
    },

    sidebar : {
        items : {
            count : {
                name    : 'countOrDots',
                weight  : 100,
                type    : 'radiogroup',
                inline  : true,
                options : {
                    dots    : 'Dots',
                    count   : 'Count',
                    heatmap : 'Heatmap'
                },
                value     : 'dots',
                listeners : {
                    change : 'up.onCountOrDotsChange'
                }
            },
            range : {
                name    : 'rangeType',
                weight  : 100,
                type    : 'radiogroup',
                inline  : true,
                options : {
                    day   : 'Day',
                    month : 'Month'
                },
                value     : 'day',
                listeners : {
                    change : 'up.onRangeTypeChange'
                }
            }
        }
    },

    appendTo : 'container',

    onBeforeCreateMode({ config }) {
        // Switch out the MonthView for a phone-compatible MonthAgenda for demo purposes.
        // In a real app, this would test globalThis.matchMedia('(max-width : 600px)').matches)
        if (config.type === 'month')  {
            config.type = 'monthagenda';

            // To use a DayView below the month:
            // config.agenda = {
            //     type         : 'dayview',
            //     dayStartTime : 8
            // };
        }
    },

    onCountOrDotsChange({ value }) {
        this.modes.month.showEvents = value;
    },

    onRangeTypeChange({ value }) {
        const { agenda } = this.modes.month;

        // Can't set the range if we do use a DayView below
        agenda.range = agenda.isDayView ? '1 d' : value;
    }
});
