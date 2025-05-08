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

    events : [],

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
        scheduleMenu : {
            items : {
                addMany : {
                    text   : 'Add activities',
                    weight : 200,
                    icon   : 'b-fa b-fa-fw b-fa-calendar-plus',
                    onItem({ item, date }) {
                        calendar.eventStore.add([
                            { name : 'Task', startDate : date, duration : 1, durationUnit : 'h' },
                            { name : 'Task #2', startDate : DateHelper.add(date, 1, 'h'), duration : 1, durationUnit : 'h' },
                            { name : 'Task #3', startDate : DateHelper.add(date, 2, 'h'), duration : 1, durationUnit : 'h' }
                        ]);
                    }
                }
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
