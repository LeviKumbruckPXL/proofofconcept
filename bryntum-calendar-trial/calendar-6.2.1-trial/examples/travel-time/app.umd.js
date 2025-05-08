var {
    Calendar,
    DateHelper,
    Duration,
    StringHelper
} = bryntum.calendar;

// IMPORTANT NOTICE: You are not allowed to use this access_token outside our demos, you are required to obtain your own
const leafletToken = 'pk.eyJ1IjoibWF0c2JyeW50c2UiLCJhIjoiY2tlcHdqd2lrM3hlZjJybHRpeDR0amo1cCJ9.PJc0GY_loGf0iQKlewuL0w';
const calendar = new Calendar({
    appendTo          : 'container',
    resourceImagePath : '../_shared/images/users/',
    date              : '2024-07-01',
    features          : {
        eventBuffer : {
            tooltipTemplate : ({
                duration
            }) => `<i class="b-icon b-fa-car"></i>Travel time: ${duration}`,
            renderer({
                eventRecord,
                preambleConfig,
                postambleConfig
            }) {
                if (eventRecord.preamble) {
                    preambleConfig.tooltip = `${DateHelper.as('minutes', eventRecord.preamble)} min drive time`;
                    preambleConfig.icon = eventRecord.preambleIcon;
                    preambleConfig.cls = eventRecord.preambleCls;
                    preambleConfig.text = eventRecord.preamble.toString(true) + (eventRecord.preambleText ? ` (${eventRecord.preambleText})` : '');
                }
                if (eventRecord.postamble) {
                    postambleConfig.tooltip = `${DateHelper.as('minutes', eventRecord.postamble)} min drive time`;
                    postambleConfig.icon = eventRecord.postambleIcon;
                    postambleConfig.cls = eventRecord.postambleCls;
                    postambleConfig.text = eventRecord.postamble.toString(true) + (eventRecord.postambleText ? ` (${eventRecord.postambleText})` : '');
                }
            }
        },
        eventEdit : {
            items : {
                preambleField : {
                    name   : 'preamble',
                    type   : 'durationfield',
                    weight : 200,
                    label  : 'Drive to'
                },
                postambleField : {
                    name   : 'postamble',
                    type   : 'durationfield',
                    weight : 210,
                    label  : 'Drive back'
                }
            }
        },
        // The tooltip feature is customized to contain a LeafletJS map
        eventTooltip : {
            minWidth  : null,
            // Don't auto hide the tooltip when moving the mouse over it
            allowOver : true,
            // We initialize the map when the tooltip is shown
            onShow({
                source: tooltip
            }) {
                const {
                        eventRecord
                    } = tooltip,
                    {
                        lat,
                        lon
                    } = (eventRecord === null || eventRecord === undefined ? undefined : eventRecord.address) || {};
                if (tooltip.map) {
                    tooltip.map.remove();
                    // Calling `remove` on already removed instance will throw
                    tooltip.map = null;
                }
                if (lat && lon) {
                    const map = tooltip.map = window.L.map('eventmap', {
                        zoomControl : false,
                        zoom        : 13,
                        center      : [lat, lon]
                    });
                    window.L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${leafletToken}`, {
                        attribution : '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>',
                        id          : 'mapbox/streets-v11',
                        tileSize    : 512,
                        zoomOffset  : -1,
                        accessToken : leafletToken
                    }).addTo(map);
                    window.L.marker([lat, lon]).addTo(tooltip.map);
                }
            },
            // Define a custom HTML template with a map placeholder to show in the tooltip
            renderer : ({
                eventRecord
            }) => {
                var _eventRecord$address;
                // Read from main event if this is a split part
                eventRecord = eventRecord.event || eventRecord;
                return `<header>
                     ${eventRecord.resource.get('image') ? `<img class="resource-image" src="../_shared/images/users/${eventRecord.resource.get('image')}.jpg"/>` : ''}
                    <div class="resource-info">
                        <span class="resource-name">${StringHelper.encodeHtml(eventRecord.resource.name)}</span>
                        <span class="resource-role">${StringHelper.encodeHtml(eventRecord.resource.role)}</span>
                    </div>
                </header>
                <div class="event-info">
                    <div class="event-details">
                        <strong><i class="b-icon b-fa-calendar"></i>${StringHelper.encodeHtml(eventRecord.name)}</strong>
                        ${DateHelper.format(eventRecord.startDate, 'LT')} - ${DateHelper.format(eventRecord.endDate, 'LT')}
                        <strong><i class="b-icon b-fa-map-marker"></i></i>Address</strong>
                        <span>${((_eventRecord$address = eventRecord.address) === null || _eventRecord$address === undefined ? undefined : _eventRecord$address.name) || ''}</span>
                        <strong><i class="b-icon b-fa-car-side"></i>Travel time</strong>
                        <span>${Duration.from(eventRecord.preamble || '')} <i class="b-icon b-fa-arrow-right"></i></span>
                        <span>${Duration.from(eventRecord.postamble || '')} <i class="b-icon b-fa-arrow-left"></i></span>
                    </div>
                    <div id="eventmap"></div>
                </div>
            `;
            }
        }
    },
    crudManager : {
        autoLoad   : true,
        eventStore : {
            fields : [
                // A few additional fields used to customize the travel time elements
                {
                    name      : 'preamble',
                    convert   : value => value ? new Duration(value) : null,
                    serialize : value => !(value !== null && value !== undefined && value.magnitude) ? null : value
                }, {
                    name : 'preambleText'
                }, {
                    name         : 'preambleIcon',
                    defaultValue : 'b-fa b-fa-car'
                }, {
                    name : 'preambleCls'
                }, {
                    name      : 'postamble',
                    convert   : value => value ? new Duration(value) : null,
                    serialize : value => !(value !== null && value !== undefined && value.magnitude) ? null : value
                }, {
                    name : 'postambleText'
                }, {
                    name         : 'postambleIcon',
                    defaultValue : 'b-fa b-fa-car'
                }, {
                    name : 'postambleCls'
                }, {
                    name         : 'durationUnit',
                    defaultValue : 'h'
                }]
        },
        transport : {
            load : {
                url : 'data/data.json'
            }
        },
        // This config enables response validation and dumping of found errors to the browser console.
        // It's meant to be used as a development stage helper only so please set it to false for production systems.
        validateResponse : true
    },
    modeDefaults : {
        fitHours     : true,
        dayStartTime : 6,
        dayEndTime   : 20
    },
    tbar : {
        items : {
            'travel-time-toggle-button' : {
                weight  : 610,
                type    : 'slidetoggle',
                label   : 'Show travel time',
                color   : 'b-blue',
                checked : true,
                onChange({
                    checked
                }) {
                    calendar.features.eventBuffer.disabled = !checked;
                }
            },
            'duration-toggle-button' : {
                weight  : 620,
                type    : 'slidetoggle',
                label   : 'Show duration label',
                color   : 'b-blue',
                checked : true,
                onChange({
                    checked
                }) {
                    calendar.features.eventBuffer.showDuration = checked;
                }
            }
        }
    }
});
