import { Panel, DateHelper, DomHelper, StringHelper, EventHelper, Rectangle, Calendar, Editor } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';
//region "lib/EventLog.js"

const
    eventClasses   = [
        'Calendar',
        'DayView',
        'MonthView',
        'YearView',
        'EventList',
        'AgendaView',
        'ResourceView',
        'DayResourceView',
        'EventSelection',
        'Panel',
        'Container',
        'Widget',
        'Grid',
        'GridBase',
        'GridElementEvents',
        'RowManager'
    ],
    docClasses     = new Map(),
    blockedEventRe = /populate|mouseo|navigate|layoutevents|renderevents|resize|before.*(?:mouse|key|elementpointer)/i,
    modifierKeys   = {
        CapsLock : 1,
        Shift    : 1,
        Control  : 1,
        Alt      : 1,
        Meta     : 1
    };

// Pull in docs data to acquire Class event names
const fetchDocs = async docsJson => {
    const
        docsDataResponse = await fetch(docsJson),
        docsDataJSON     = (await docsDataResponse.text()).replace(/^.*?{/, '{'),
        docsData         = JSON.parse(docsDataJSON);

    for (const cls of docsData.classes) {
        cls.eventsMap = new Map();

        for (const event of cls.events || []) {
            cls.eventsMap.set(event.name.toLowerCase(), event);
        }

        if (!docClasses.get(cls.name) || cls.modulePath?.startsWith('Calendar')) {
            docClasses.set(cls.name, cls);
        }
    }
};

class EventLog extends Panel {
    static $name = 'EventLog';
    static type = 'eventlog';

    static configurable = {
        scrollable : true,
        tools      : {
            delete : {
                cls     : 'b-icon-trash',
                tooltip : 'Clear event log',
                handler : 'clear'
            },
            pause : {
                cls     : 'b-fa',
                tooltip : 'Pause logging',
                text    : '\f28b',
                handler : 'toggleLogPaused'
            }
        },
        tbar : {
            items : {
                eventNameFilter : {
                    label : 'Filter',
                    flex  : 1,
                    type  : 'textfield'
                }
            }
        }
    };

    onPaint({ firstPaint }) {
        if (firstPaint) {
            this.setTimeout(() => {
                this.up('calendar').on({
                    catchAll : 'onCalendarEvent',
                    thisObj  : this
                });
            }, 500);
        }
        EventHelper.on({
            element     : this.contentElement,
            forSelector : '.element-link',
            click       : 'onLogTargetClick',
            thisObj     : this
        });
    }

    onLogTargetClick({ target }) {
        if (target.textContent.startsWith('#')) {
            target = document.querySelector(target.textContent);

            const el = Rectangle.from(target)?.visualize({
                parent : document.body,
                style  : {
                    backgroundColor : 'red',
                    opacity         : 0.4
                }
            });
            el && this.setTimeout(() => el.remove(), 1000);
        }
    }

    onCalendarEvent({ eventName, domEvent, record, eventRecord, week, date, month, item, target : t, selection, startDate, endDate }) {
        // Try to filter down the event stream a little to make it useful
        if (!this.isPainted || eventName.match(blockedEventRe) || (eventName === 'navigate' && !eventRecord) || modifierKeys[domEvent?.key]) {
            return;
        }

        const
            calendar   = this.up('calendar'),
            filter     = this.widgetMap.eventNameFilter.value,
            target     = !(month || week || date) && (t || domEvent?.target),
            targetLink = t ? `#${target.id || (target.id = DomHelper.getId(target))}` : '';

        // Allow user to filtert events
        if (filter) {
            const
                inverse = filter.startsWith('~'),
                match   = Boolean(eventName.match(new RegExp(filter.substring(inverse ? 1 : 0), 'i')));

            if (inverse ? match : !match) {
                return;
            }
        }

        if (item) {
            const
                newRecord = calendar.activeView.getEventRecord(item),
                to        = newRecord ? StringHelper.xss`to ${newRecord.name}` : 'off any event';

            this.log(eventName, `Navigated ${to}`);
        }
        else if (selection) {
            this.log(eventName, StringHelper.xss`Selected ${selection[0] ? selection[0].name : 'Nothing'}`);
        }
        else if (startDate && endDate) {
            this.log(eventName, `${DateHelper.makeKey(startDate)} - ${DateHelper.makeKey(endDate)}`);
        }
        else {
            const e = eventRecord || record;

            this.log(eventName, `${e ? (e.name || e.id) + ' ' : ''} ${month || week || (date && DateHelper.format(date, 'YYYY-MM-DD HH:mm')) || ''}`.trim(), targetLink);
        }
    }

    log(eventName, message, target) {
        const logEl = this.contentElement;

        let docsUrl;

        // Find where the event is documented.
        // If we cannot, then we do not create a link
        for (let i = 0, { length } = eventClasses; i < length && !docsUrl; i++) {
            if (docClasses.get(eventClasses[i])?.eventsMap?.get(eventName.toLowerCase())) {
                docsUrl = `https://bryntum.com/products/calendar/docs/api/Calendar/view/Calendar#event-${eventName}`;
            }
        }

        if (!this.paused) {
            DomHelper.createElement({
                parent   : logEl,
                children : [{
                    tag       : docsUrl ? 'a' : 'span',
                    target    : '_blank',
                    className : 'event-name b-no-monkeys',
                    text      : eventName,
                    href      : docsUrl
                }, {
                    className : 'log-message',
                    children  : [
                        message || '',
                        target ? {
                            className : 'element-link',
                            text      : target
                        } : null
                    ]
                }]
            });
            logEl.scrollTop = Number.MAX_SAFE_INTEGER;
        }
    }

    toggleLogPaused() {
        this.paused = !this.paused;
        this.widgetMap.pause.element.classList.toggle('b-pressed', this.paused);
    }

    clear() {
        this.contentElement.innerHTML = '';
    }

}

EventLog.initClass();

//endregion

const calendar = new Calendar({
    // Start life looking at this date
    date : new Date(2020, 9, 12),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        loadUrl  : `data/data.json`,
        autoLoad : true
    },

    appendTo : 'container',

    // Features named by the properties are included.
    // An object is used to configure the feature.
    features : {
        eventTooltip : {
            // Configuration options are passed on to the tooltip instance
            // We want the tooltip's left edge aligned to the right edge of the event if possible.
            align : 'l-r'
        },
        eventCopyPaste : null
    },

    modes : {
        month : {
            // Overflow button looks different if we are expanding the week height when clicked
            overflowButtonRenderer(buttonConfig, count) {
                buttonConfig.style.justifyContent = 'unset';
                buttonConfig.className['b-fa'] = 1;

                if (this.overflowClickAction === 'shrinkwrap') {
                    buttonConfig.className['b-fa-arrow-down'] = 1;
                    buttonConfig.text = 'Expand';
                }
                else {
                    buttonConfig.className['b-fa-window-maximize'] = 1;
                    buttonConfig.text = `Show ${count} more`;
                }

                return buttonConfig;
            }
        }
    },

    // The Calendar's top toolbar.
    // We can alter its items configuration.
    // In this case, we add a new UI item.
    tbar : {
        items : {
            settings : {
                type    : 'button',
                icon    : 'b-fa b-fa-cog',
                tooltip : 'Settings',

                // High weight so it goes at the end
                weight : 800,
                style  : 'margin-inline-start: 1em',
                menu   : {
                    align : 't100-b100',
                    items : {
                        hideEventOverflow : {
                            text     : 'Hide event overflow',
                            checked  : false,
                            onToggle : ({ checked }) => calendar.modes.agenda.hideEventOverflow = checked,
                            style    : 'margin-inline-end:1em'
                        },
                        toggleShowWeek : {
                            text    : 'Week column',
                            checked : true,
                            onToggle({ checked }) {
                                calendar.activeView.showWeekColumn = checked;
                            }
                        },
                        toggleNonWorkingDays : {
                            text    : 'Nonworking days',
                            checked : true,
                            onToggle({ checked }) {
                                calendar.activeView.hideNonWorkingDays = !checked;
                            }
                        },
                        toggleMonthViewOverflowClick : {
                            text    : 'Expand row on overflow click',
                            checked : false,
                            onToggle({ checked }) {
                                calendar.activeView.overflowClickAction = checked ? 'shrinkwrap' : 'popup';
                            }
                        },
                        collapseExpandedWeeks : {
                            text : 'Collapse expanded weeks',
                            icon : 'b-fa-angle-up b-fa-fw',
                            onItem() {
                                for (let i = 0; i < 6; i++) {
                                    calendar.activeView.flexWeekRow(i);
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    // The utility panel which is at the left by default.
    // We can alter its items configuration.
    sidebar : {
        width : '20em',
        // Extra UI Widgets can be easily added to the sidebar
        items : {
            // Provided widgets can be removed.
            // We don't want the date picker in our app.
            datePicker : null,

            addNew : {
                // Top position
                weight    : 0,
                type      : 'button',
                text      : 'Create',
                icon      : 'b-fa b-fa-plus',
                cls       : 'b-raised b-green',
                // Will look in ownership hierarchy and call on the Calendar
                listeners : {
                    click : 'up.createEvent',

                    // Use the default (which is the Calendar date).
                    // The event will be pushed into 2nd position.
                    args : [undefined]
                }
            },
            filterTitle : {
                type   : 'toolbar',
                // Add simple title just before resourceFilter
                weight : 199,
                cls    : 'resource-filter-title',
                items  : {
                    title : {
                        tag  : 'strong',
                        type : 'widget',
                        html : 'My calendars'
                    },
                    spacer : '->',
                    addNew : {
                        type    : 'button',
                        cls     : 'b-add-calendar b-transparent',
                        icon    : 'b-fa b-fa-plus',
                        tooltip : 'Add calendar',
                        onClick : 'up.onAddCalendarClick'
                    }
                }
            },
            resourceFilter : {
                minHeight     : '12em',
                // Add the select/deselect all checkbox
                selectAllItem : true
            },
            eventLog : {
                // We want this in last position
                weight : 250,
                type   : 'eventlog',
                cls    : 'calendar-event-log',
                title  : 'Interaction log'
            }
        }
    },

    keyMap : {
        'Ctrl+P' : function() {
            this.widgetMap.eventLog.toggleLogPaused();
        },
        'Ctrl+K' : function() {
            this.widgetMap.eventLog.clear();
        }
    },

    // adds a new calendar item to the list and lets user edit the name
    onAddCalendarClick() {
        const
            { resourceFilter } = this.widgetMap,
            [newCalendar] = this.resourceStore.add({ name : 'New calendar' }),
            calendarEditor = Editor.new({
                owner      : this,
                appendTo   : this.sidebar.element,
                inputField : {
                    type       : 'textfield',
                    autoSelect : true
                },
                internalListeners : {
                    afterEdit : () => {
                        calendarEditor.destroy();
                        resourceFilter.getItem(newCalendar).focus();
                    }
                }
            });

        calendarEditor.startEdit({
            target : resourceFilter.getItem(newCalendar),
            record : newCalendar,
            field  : 'name'
        });
    },

    listeners : {
        // On view paint, sync our settings with the active view's settings
        viewPaint({ source : view }) {
            const {
                hideEventOverflow,
                toggleShowWeek,
                toggleMonthViewOverflowClick,
                collapseExpandedWeeks,
                toggleNonWorkingDays
            } = this.tbar.widgetMap.settings.menu.widgetMap;

            // This setting is only for AgendaView
            hideEventOverflow.disabled = !view.isAgendaView;

            // These views can hide and show a week column
            if (view.isMonthView || view.isYearView) {
                toggleShowWeek.disabled = toggleMonthViewOverflowClick.disabled = collapseExpandedWeeks.disabled = false;
                toggleShowWeek.checked  = view.showWeekColumn;
            }
            else {
                toggleShowWeek.disabled = toggleMonthViewOverflowClick.disabled = collapseExpandedWeeks.disabled = true;
            }

            // A one day DayView can't toggle hiding and showing nonworking days
            if (view.isDayView && view.duration === 1) {
                toggleNonWorkingDays.disabled = true;
            }
            else {
                toggleNonWorkingDays.disabled = false;
                toggleNonWorkingDays.checked  = !view.hideNonWorkingDays;
            }
        }
    }
});

// Import docs data to acquire Class event names.
fetchDocs('data/docs_calendar.js');
