var {
    Calendar,
    Toast
} = bryntum.calendar;

// Set random PHP session ID if it doesn't exist
const cookie = 'PHPSESSID=calendar-php';
if (!document.cookie.includes(cookie)) {
    document.cookie = `${cookie}-${Math.random().toString(16).substring(2)}`;
}
const processException = event => {
    var _response$parsedJson;
    const {
            action,
            response
        } = event,
        serverMessage = response === null || response === undefined || (_response$parsedJson = response.parsedJson) === null || _response$parsedJson === undefined ? undefined : _response$parsedJson.msg,
        exceptionText = `Command "${action}" failed.${serverMessage ? ` Server response: ${serverMessage}` : ''}`;
    Toast.show({
        html    : exceptionText,
        cls     : 'php-demo-error-message',
        timeout : 5000
    });
    if (!serverMessage) {
        console.error(`App Exception: ${exceptionText}`, event);
    }
};
const calendar = new Calendar({
    // Start life looking at this date
    date       : new Date(2020, 9, 12),
    // 'day', 'week', 'month', etc.
    mode       : 'week',
    eventStore : {
    // Setup urls
        createUrl      : 'php/event/create.php',
        readUrl        : 'php/event/read.php',
        updateUrl      : 'php/event/update.php',
        deleteUrl      : 'php/event/delete.php',
        // Load and save automatically
        autoLoad       : true,
        autoCommit     : true,
        // Send as form data and not a JSON payload
        sendAsFormData : true,
        // Make it read only to prevent changes while committing
        listeners      : {
            beforeCommit : () => {
                calendar.readOnly = true;
            },
            commit : () => {
                calendar.readOnly = false;
            },
            exception : event => {
                processException(event);
                calendar.readOnly = false;
            }
        }
    },
    resourceStore : {
    // Setup urls
        createUrl      : 'php/resource/create.php',
        readUrl        : 'php/resource/read.php',
        updateUrl      : 'php/resource/update.php',
        deleteUrl      : 'php/resource/delete.php',
        // Load and save automatically
        autoLoad       : true,
        autoCommit     : true,
        // Send as form data and not a JSON payload
        sendAsFormData : true,
        // Make it read only to prevent changes while committing
        listeners      : {
            beforeCommit : () => {
                calendar.readOnly = true;
            },
            commit : () => {
                calendar.readOnly = false;
            },
            exception : event => {
                processException(event);
                calendar.readOnly = false;
            }
        }
    },
    sidebar : {
        items : {
            datePicker : {
                // highlight the selected cell's week row
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
    },
    tbar : {
        items : {
            reloadButton : {
                type : 'button',
                icon : 'b-fa b-fa-sync',
                text : 'Reload',
                async onAction() {
                    await Promise.all([calendar.resourceStore.load(), calendar.eventStore.load()]);
                    Toast.show('Data reloaded');
                }
            },
            resetButton : {
                type  : 'button',
                color : 'b-red',
                icon  : 'b-fa b-fa-recycle',
                text  : 'Reset database',
                async onAction() {
                    await Promise.all([calendar.resourceStore.load({
                        reset : true
                    }), calendar.eventStore.load({
                        reset : true
                    })]);
                    Toast.show('Database was reset');
                }
            }
        }
    }
});
