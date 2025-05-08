const calendar = new Calendar({
    appendTo : targetElement,
    height   : 500,

    // We have a little less width in our context, so reduce the responsive breakpoints
    responsive : {
        small : {
            when : 480
        },
        medium : {
            when : 640
        }
    },

    // Start life looking at this date
    date    : '2023-10-01',
    sidebar : false,

    events : [{
        id           : 1,
        name         : 'Meeting',
        startDate    : new Date(2023, 9, 4, 10),
        duration     : 2,
        durationUnit : 'h'
    }],

    resources : [
        {
            id   : 1,
            name : 'Bob'
        },
        {
            id   : 2,
            name : 'Kim'
        }
    ],

    // Features named by the properties are included.
    // An object is used to configure the feature.
    features : {
        eventMenu : {
            items : {
                deleteEvent : false
            }
        },
        scheduleMenu : {
            items : {
                addEvent : false
            }
        }
    },

    // Modes are the views available in the Calendar.
    // An object is used to configure the view.
    modes : {
        agenda : null,
        year   : null,
        week   : {
            dayStartTime : 8
        },
        day : {
            dayStartTime : 8
        }
    }
});
