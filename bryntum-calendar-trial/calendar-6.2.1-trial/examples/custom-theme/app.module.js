import { Calendar } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

const calendar = new Calendar({
    // Start life looking at this date
    date : new Date(2020, 9, 12),

    // 'day', 'week', 'month', etc.
    mode : 'week',

    // CrudManager arranges loading and syncing of data in JSON format from/to a web service
    crudManager : {
        autoLoad : true,
        loadUrl  : 'data/data.json'

        // Changes can be automatically sent to your server after every change
        // autoSync : true,
        // syncUrl  : './yourEndPoint'
    },

    sidebar : {
        items : {
            datePicker : {
                // Highlight the selected cell's week row
                highlightSelectedWeek : true
            }
        }
    },

    appendTo : 'container',

    // Features named by the properties are included.
    // An object is used to configure the feature.
    features : {
        eventTooltip : {
            // Configuration options are passed on to the tooltip instance
            // We want the tooltip's left edge aligned to the right edge of the event if possible.
            align : 'l-r'
        }
    }
});
