var {
    DateHelper,
    StringHelper,
    DomClassList,
    Toast,
    Calendar
} = bryntum.calendar;
const tickWidth = 70;
const showInfo = () => Toast.show({
    timeout : 3500,
    html    : 'Please note that this example uses the <a href="//bryntum.com/products/scheduler">Bryntum Scheduler</a>, which is licensed separately.'
});
const calendar = new Calendar({
    appendTo    : 'container',
    // Start life looking at this date
    date        : new Date(2023, 9, 12, 7),
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },
    // These will take precedence over the Scheduler's features.
    features : {
        eventMenu : {
            items : {
                editEvent : {
                    text   : 'Edit',
                    weight : 100
                }
            }
        }
    },
    sidebar : {
        resourceFilter : {
            // We want to filter the resourceStore as well as the eventStore
            filterResources : true
        }
    },
    tbar : {
        items : {
            scale : {
                type    : 'slider',
                text    : 'Scale',
                min     : 25,
                max     : 100,
                value   : tickWidth,
                weight  : 650,
                width   : 100,
                onInput : ({
                    value
                }) => calendar.modes.timeline.tickSize = value
            }
        }
    },
    mode  : 'timeline',
    modes : {
        day : {
            dayStartTime : 7,
            dayEndTime   : 22
        },
        week : {
            dayStartTime : 7,
            dayEndTime   : 22
        },
        timeline : {
            type                : 'scheduler',
            // Used by the Calendar's mode selector button
            title               : 'Timeline',
            // Used by resourceInfo column to base src for image field:
            resourceImagePath   : '../_shared/images/users/',
            // Change default event style for Scheduler to better match Calendars look
            eventStyle          : 'calendar',
            // Calendar does not use initial animations, match that
            useInitialAnimation : false,
            columns             : [{
                type  : 'resourceInfo',
                field : 'name',
                text  : 'Staff/Resource',
                width : 175
            }],
            features : {
                nonWorkingTime     : true,
                timeRanges         : true,
                resourceTimeRanges : true
            },
            workingTime : {
                fromHour : 7,
                toHour   : 22
            },
            // The timeline encapsulates one week by default
            // Uncomment this to change the default range
            // It steps backwards and forwards in time by its configured range
            // range : '2 weeks',

            barMargin  : 3,
            viewPreset : {
                base    : 'hourAndDay',
                tickWidth,
                headers : [{
                    unit       : 'day',
                    dateFormat : 'ddd MM/DD'
                }, {
                    unit       : 'hour',
                    dateFormat : 'h a'
                }]
            },
            // Custom eventRenderer to match style used by Calendar
            eventRenderer({
                eventRecord,
                renderData
            }) {
                if (eventRecord.isInterDay) {
                    renderData.eventStyle = 'interday';
                    return StringHelper.encodeHtml(eventRecord.name);
                }
                renderData.style = 'align-items: start';
                const {
                        eventColor,
                        iconCls
                    } = renderData,
                    noIcon = !(iconCls !== null && iconCls !== undefined && iconCls.length),
                    isRecurring = eventRecord.isRecurring || eventRecord.isOccurrence;
                return {
                    class    : 'b-cal-event-body',
                    children : [{
                        class    : 'b-event-header',
                        children : [{
                            class : 'b-event-time',
                            text  : DateHelper.format(eventRecord.startDate, 'LST')
                        }, isRecurring && {
                            tag   : 'i',
                            class : {
                                'b-icon'                : 1,
                                'b-fw-icon'             : 1,
                                'b-cal-event-icon'      : !noIcon,
                                'b-cal-recurrence-icon' : noIcon,
                                'b-icon-recurring'      : noIcon,
                                ...DomClassList.normalize(iconCls, 'object')
                            },
                            style : eventColor ? {
                                color : eventColor
                            } : null
                        }]
                    }, {
                        class : 'b-cal-event-desc',
                        text  : eventRecord.name
                    }]
                };
            }
        }
    }
});


setTimeout(showInfo, 3000);
