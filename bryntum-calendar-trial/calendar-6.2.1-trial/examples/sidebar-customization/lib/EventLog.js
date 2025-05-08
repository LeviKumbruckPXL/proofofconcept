import Panel from '../../../lib/Core/widget/Panel.js';
import DateHelper from '../../../lib/Core/helper/DateHelper.js';
import DomHelper from '../../../lib/Core/helper/DomHelper.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';
import EventHelper from '../../../lib/Core/helper/EventHelper.js';
import Rectangle from '../../../lib/Core/helper/util/Rectangle.js';

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

export default fetchDocs;

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
