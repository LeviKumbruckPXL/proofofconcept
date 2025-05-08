// Check webpack.config.js for @bryntum path aliasing

import DemoHeader from '@bryntum/lib/Core/widget/DemoHeader.js';
import Calendar from '@bryntum/lib/Calendar/view/Calendar.js';

// Import the features you need
import '@bryntum/lib/Calendar/feature/EventTooltip.js';

// Import styling
import './index.scss';

new Calendar({
    adopt : 'demo-component',

    date : new Date(2024, 10, 10),

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
