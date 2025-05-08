const calendar = new Calendar({
    appendTo   : targetElement,
    height     : 500,
    hourHeight : 100,
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

    features : {
        timeRanges : true,
        eventMenu  : {
            items : {
                // Custom reference to the new menu item
                moveForward : {
                    text   : 'Move 1 hour ahead',
                    icon   : 'b-fa b-fa-long-arrow-alt-down',
                    cls    : 'b-separator', // Add a visual line above the item
                    weight : 400, // Add the item to the bottom
                    onItem : ({ eventRecord }) => {
                        eventRecord.shift(1, 'hour');
                    }
                }
            }
        },
        scheduleMenu : {
            items : {
                // Custom reference to the new menu item
                timeBreak : {
                    text   : 'Add a break',
                    icon   : 'b-fa b-fa-clock',
                    cls    : 'b-separator', // Add a visual line above the item
                    weight : 200, // Add the item to the bottom
                    onItem : ({ date, resourceRecord }) => {
                        calendar.timeRangeStore.add({
                            name           : 'Break',
                            startDate      : date,
                            duration       : 1,
                            durationUnit   : 'h',
                            timeRangeColor : 'blue'
                        });
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
            dayStartTime : 8,
            hourHeight   : 80
        },
        day : {
            dayStartTime : 8
        }
    }
});
