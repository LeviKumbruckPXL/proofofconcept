targetElement.innerHTML = '<p>Open editor to change setup / cleanup:</p>';
const calendar = new Calendar({
    appendTo : targetElement,
    height   : 700,
    date     : new Date(2022, 4, 6, 9),

    features : {
        eventBuffer : {
            renderer({ eventRecord, preambleConfig, postambleConfig }) {
                if (eventRecord.preamble) {
                    preambleConfig.tooltip = `${DateHelper.as('minutes', eventRecord.preamble)} min drive time`;
                    preambleConfig.icon = 'b-fa b-fa-car';
                    preambleConfig.cls  = 'travel-before';
                    preambleConfig.text = eventRecord.preamble.toString(true);
                }

                if (eventRecord.postamble) {
                    postambleConfig.tooltip = `${DateHelper.as('minutes', eventRecord.postamble)} min drive time`;
                    postambleConfig.icon = 'b-fa b-fa-car';
                    postambleConfig.cls  = 'travel-after';
                    postambleConfig.text = eventRecord.postamble.toString(true);
                }
            }
        }
    },

    project : {
        resourcesData : [
            { id : 1, name : 'John', car : 'Tesla', image : false, iconCls : 'b-icon b-fa-user' },
            { id : 2, name : 'Eva', car : 'Honda', image : false, iconCls : 'b-icon b-fa-user' },
            { id : 3, name : 'Dan', car : 'Buick', image : false, iconCls : 'b-icon b-fa-user' }
        ],

        eventsData : [
            { id : 1, resourceId : 1, name : 'UN Meeting', startDate : '2022-05-03T10:00:00', duration : 3, durationUnit : 'h', preamble : '1 hour', postamble : '30 minute' },
            { id : 2, resourceId : 2, name : 'Board meeting', startDate : '2022-05-04T11:00:00', duration : 2, durationUnit : 'h', preamble : '40 minute', postamble : '50 minute', resizable : false, eventColor : 'red' },
            { id : 3, resourceId : 3, name : 'Starbucks meeting', startDate : '2022-05-05T13:00:00', duration : 3, durationUnit : 'h', preamble : '35 minute', postamble : '45 minute', resizable : false, eventColor : 'red' }
        ]
    }
});
