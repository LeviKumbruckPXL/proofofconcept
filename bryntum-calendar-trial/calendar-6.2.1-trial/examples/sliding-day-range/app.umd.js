var {
    Calendar,
    DateHelper
} = bryntum.calendar;
const date = new Date(2024, 8, 2);
const calendar = new Calendar({
    date,
    crudManager : {
        autoLoad : true,
        loadUrl  : 'data/data.json'
    },
    modes : {
        day         : null,
        week        : null,
        month       : null,
        year        : null,
        agenda      : null,
        twoWeekView : {
            title       : 'Two weeks',
            type        : 'dayview',
            startDate   : date,
            endDate     : DateHelper.add(date, 14, 'day'),
            minDayWidth : 50
        }
    },
    listeners : {
        dateRangeChange({
            new: {
                startDate,
                endDate
            }
        }) {
            this.tbar.widgetMap.selectRange.value = [startDate, DateHelper.add(endDate, -1, 'd')];
        }
    },
    sidebar : {
        items : {
            datePicker : null
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
            selectRange : {
                fieldStartDate : {
                    placeholder : 'Select range start'
                },
                fieldEndDate : {
                    placeholder : 'Select range end'
                },
                type  : 'daterangefield',
                value : [date, DateHelper.add(date, 14, 'day')],
                onAction({
                    value,
                    source,
                    userAction
                }) {
                    if (userAction) {
                        const cal = source.up('calendar');
                        cal.activeView.setConfig({
                            startDate : value[0],
                            endDate   : DateHelper.add(value[1], 1, 'd')
                        });
                    }
                }
            }
        }
    }
});
