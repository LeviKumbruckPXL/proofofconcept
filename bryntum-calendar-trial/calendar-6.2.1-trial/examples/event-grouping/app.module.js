import { Calendar, EventSorter, DateHelper, DomHelper } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

const calendar = new Calendar({
    // Start life looking at this date
    date : new Date(2023, 3, 12),

    // Set the initial mode ("day", "week", "month", "year" etc)
    mode : 'week',

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        },
        eventStore : {
            fields : [{
                name : 'type'
            }, {
                name : 'deliveries',
                type : 'array'
            }, {
                name : 'count',
                type : 'int'
            }]
        }
    },

    modeDefaults : {
        eventRenderer : 'up.renderGroupedEvent'
    },

    modes : {
        day  : null,
        week : null
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

    listeners : {
        dayCellPopulated : 'afterDeyCellPopulated'
    },

    afterDeyCellPopulated(event) {
        const
            { events, date } = event,
            deliveries       = [];

        // Extract deliveries from the events array into "deliveries"
        for (let i = 0, { length } = events; i < length;) {
            let e = events[i];

            if (e.type === 'delivery') {
                // Rendered event won't be draggable.
                e.draggable = false;

                e = e.copy(e.id);
                e.iconCls = 'b-fa-shipping-fast';
                deliveries.push(e);
                events.splice(i, 1);
                length--;
            }
            else {
                i++;
            }
        }

        // Add one special grouped event to the event array containing
        // the deliveries.
        if (deliveries.length) {
            event.events.unshift(new this.project.eventStore.modelClass({
                deliveries,
                type      : 'delivery-group',
                name      : 'Deliveries',
                startDate : date,
                endDate   : DateHelper.add(date, 1, 'd'),
                allDay    : true
            }));
        }
    },

    renderGroupedEvent({ eventRecord, renderData }) {
        if (eventRecord.type === 'delivery-group') {
            renderData.cls['grouped-event'] = 1;
            renderData.solidBar = true;
            renderData.showBullet = false;
            return eventRecord.deliveries.map(d => {
                const {
                    eventColor,
                    iconCls
                } = d;

                return {
                    className : 'b-cal-event-wrap',
                    dataset   : {
                        eventId : d.id
                    },
                    children : [{
                        className : 'b-cal-event',
                        dataset   : {
                            btip : `${d.name}, ${DateHelper.format(d.startDate, 'HH:mm')} - ${d.count} packages`
                        },
                        style : eventColor ? {
                            '--cal-event-color' : DomHelper.createColorStyle(eventColor)
                        } : '',
                        children : [iconCls ? {
                            tab       : 'i',
                            className : `b-fa ${iconCls}`
                        } : null,
                        String(d.data.count)
                        ]
                    }]
                };
            });
        }
    }
});
