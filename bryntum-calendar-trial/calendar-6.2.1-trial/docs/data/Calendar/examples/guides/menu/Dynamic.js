let accessGranted = false;
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

    features : {
        eventMenu : {
            // Process event items before showing the menu
            processItems({ items, column, record }) {
                // Not possible to edit, delete, or duplicate event if there are no rights for it
                if (!accessGranted) {
                    items.editEvent     = false;
                    items.deleteEvent   = false;
                    items.duplicate = false;
                }
            }
        },
        scheduleMenu : {
            // Process schedule zone items before showing the menu
            processItems({ items }) {
                // Not possible to add new events if there are no rights for it
                if (!accessGranted) {
                    items.addEvent = false;
                }
            }
        }
    },

    tbar : [
        {
            text        : 'Limited rights',
            toggleable  : true,
            pressed     : !accessGranted,
            icon        : 'b-fa b-fa-square',
            pressedIcon : 'b-fa b-fa-check-square',
            color       : 'b-blue b-raised',
            onToggle({ pressed }) {
                accessGranted = !pressed;
            }
        }
    ],

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
