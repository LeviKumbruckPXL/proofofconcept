var {
    Calendar
} = bryntum.calendar;
const calendar = new Calendar({
    // Start life looking at this date
    date        : '2024-05-27',
    // 'day', 'week', 'month', etc.
    mode        : 'day',
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad : true,
        loadUrl  : 'data/data.json'

    // Changes can be automatically sent to your server after every change
    // autoSync : true,
    // syncUrl  : './yourEndPoint'
    },
    hideNonWorkingDays : true,
    modeDefaults       : {
        dayStartTime     : 8,
        dayEndTime       : 18,
        showAllDayHeader : false,
        hideBorders      : true
    },
    modes : {
        day : {
            type               : 'dayagenda',
            hideNonWorkingDays : false
        },
        week : {
            type            : 'dayagenda',
            title           : 'Week Agenda',
            range           : '1 w',
            syncHourHeights : true
        }
    },
    sidebar : {
        items : {
            datePicker : {
                // highlight the selected cell's week row
                highlightSelectedWeek : true
            },
            checkboxes : {
                type     : 'container',
                weight   : 100,
                defaults : {
                    type : 'checkbox'
                },
                style : 'flex-shrink:0;gap:0',
                items : {
                    hideEmptyHours : {
                        text     : 'Hide empty hours',
                        onChange : 'up.onToggleHideEmptyHours'
                    },
                    hideBorders : {
                        text     : 'Hide borders',
                        checked  : true,
                        onChange : 'up.onToggleHideBorders'
                    },
                    hideTimeAxis : {
                        text     : 'Hide time axes',
                        onChange : 'up.onToggleHideTimeAxis'
                    },
                    horizontalFlow : {
                        text     : 'Stack events vertically',
                        checked  : true,
                        onChange : 'up.onToggleEventFlow'
                    },
                    syncHourHeights : {
                        text     : 'Sync hour heights',
                        checked  : true,
                        onChange : 'up.onSyncHourHeightsToggle'
                    }
                }
            }
        }
    },
    appendTo : 'container',
    features : {
        eventEdit : {
            items : {
                // Knock the "all day" option out of the event editor.
                // It's not relevant in this app.
                allDay : null
            }
        }
    },
    responsive : {
    // Drop to medium state when below 900 width
    // The WeekAgenda is too busy and only for larger form factors
        medium : {
            when : 900
        }
    },
    onResponsiveStateChange({
        state
    }) {
    // Only allow selection of the WeekAgenda if we're on a large device
        if (state === 'large') {
            this.widgetMap.weekShowButton.show();
            this.modes.month.autoRowHeight = false;
        }
        else {
            this.widgetMap.weekShowButton.hide();

            // Week rows showing all events looks better on a small device
            this.modes.month.autoRowHeight = true;
            if (this.mode === 'week') {
                this.mode = 'day';
            }
        }
    },
    onToggleHideEmptyHours({
        checked
    }) {
        this.eachView(v => {
            v.hideEmptyHours = checked;
        });
    },
    onToggleHideBorders({
        checked
    }) {
        this.eachView(v => {
            v.hideBorders = checked;
        });
    },
    onToggleHideTimeAxis({
        checked
    }) {
        this.eachView(v => {
            v.hideTimeAxis = checked;
        });
    },
    onToggleEventFlow({
        checked
    }) {
        this.eachView(v => {
            v.eventFlowDirection = checked ? 'column' : 'row';
        });
    },
    onSyncHourHeightsToggle({
        checked
    }) {
    // Only relevant for a multi day view
        this.modes.week.syncHourHeights = checked;
    },
    onBeforeActiveItemChange({
        activeItem
    }) {
        const me = this;

        // Don't allow selection of week view unless we're large.
        // Clicking week number from month or year view shows the week mode by default.
        if (me.responsiveState !== 'large' && activeItem === me.modes.week) {
            me.queueMicrotask(() => me.mode = 'day');
            return false;
        }
    }
});
