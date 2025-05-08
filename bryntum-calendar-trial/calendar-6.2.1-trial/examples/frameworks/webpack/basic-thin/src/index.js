// Check webpack.config.js for @bryntum path aliasing

import DemoHeader from '@bryntum/core-thin/lib/widget/DemoHeader.js';
import Calendar from '@bryntum/calendar-thin/lib/view/Calendar.js';

// Import the features you need
import '@bryntum/calendar-thin/lib/feature/EventTooltip.js';

// Import styling
import './index.scss';

new Calendar({
    adopt : 'demo-component',

    // Start life looking at this date
    date : new Date(2020, 9, 12),

    features : {
        eventTooltip : true
    },

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        transport : {
            load : {
                url : 'data/data.json'
            }
        },
        autoLoad : true
    }

});

// Demo header is used for Bryntum styling and not required for your application
new DemoHeader();
