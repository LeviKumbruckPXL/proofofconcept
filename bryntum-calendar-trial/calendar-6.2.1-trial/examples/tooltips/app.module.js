import { Calendar, DateHelper, StringHelper, BrowserHelper } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

const calendar = new Calendar({
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        eventStore : {
            // Field definition added to the event record fields in this store
            fields : [
                { name : 'room' }
            ]
        },
        transport : {
            load : {
                url : 'data/data.json'
            }
        },
        autoLoad : true
    },

    appendTo : 'container',

    // Start life looking at this date
    date : '2020-01-01',

    includeWeekendsButton : {
        tooltip : 'Show the weekends'
    },

    // Features named by the properties are included.
    // An object is used to configure the feature.
    features : {
        eventTooltip : {
            // Configuration options are passed on to the tooltip instance.
            // Override the default which is to show on click unless we're on a touch device.
            showOn : BrowserHelper.isTouchDevice ? 'click' : 'hover',

            // We want the tooltip's top edge aligned to the bottom edge of the event if possible.
            align : {
                align : 't-b',

                // Mustn't shrink because of large, graphical content
                minHeight : null
            },

            tools : {
                left : {
                    cls     : 'b-icon-previous',
                    weight  : 20,
                    tooltip : {
                        // Value found by looking up ownership hierarchy.
                        // Will find an implementation in the Calendar
                        getHtml : 'up.moveEarlierTooltip'
                    },

                    // Handler is on the Calendar
                    handler : 'up.moveEarlier'
                },

                right : {
                    cls     : 'b-icon-next',
                    weight  : 10,
                    tooltip : {
                        // Value found by looking up ownership hierarchy.
                        // Will find an implementation in the Calendar
                        getHtml : 'up.moveLaterTooltip'
                    },

                    // Handler is on the Calendar
                    handler : 'up.moveLater'
                }
            },

            renderer : data => `<dl>
                <dt>Assigned to:</dt>
                <dd>
                    ${data.eventRecord.resource.get('image') ? `<img class="resource-image" src="../_shared/images/users/${data.eventRecord.resource.get('image')}"/>` : ''}
                    ${StringHelper.encodeHtml(data.eventRecord.resource.name)}
                </dd>
                <dt>Time:</dt>
                <dd>
                    ${DateHelper.format(data.eventRecord.startDate, 'LT')} - ${DateHelper.format(data.eventRecord.endDate, 'LT')}
                </dd>
                ${data.eventRecord.get('note') ? `<dt>Note:</dt><dd>${data.eventRecord.isLink ? data.eventRecord.note : StringHelper.encodeHtml(data.eventRecord.note)}</dd>` : ''}
    
                ${data.eventRecord.get('image') ? `<dt>Image:</dt><dd><img class="image" src="${data.eventRecord.get('image')}" alt="${data.eventRecord.get('imageDescr')}"/></dd>` : ''}
            </dl>
            `,

            onBeforeShow() {
                // Delete tool hidden for recurring occurrences
                this.tools.delete.hidden = Boolean(this.eventRecord?.isOccurrence);

                const colour = this.activeTarget && getComputedStyle(this.activeTarget).getPropertyValue('--cal-event-color');

                // Use the event's color in our tooltip header
                this.headerElement.style.setProperty('background-color', colour);
            }
        },
        scheduleTooltip : true
    },

    moveEarlier(domEvent, { eventRecord }) {
        // Move backwards by the configured autoCreate step time quantum
        const step = DateHelper.parseDuration(this.autoCreate.step);

        eventRecord.shift(-step.magnitude, step.unit);
    },

    moveLater(domEvent, { eventRecord }) {
        // Move backwards by the configured autoCreate step time quantum
        const step = DateHelper.parseDuration(this.autoCreate.step);

        eventRecord.shift(step.magnitude, step.unit);
    },

    moveEarlierTooltip() {
        return `Move event earlier by ${this.autoCreate.step}`;
    },

    moveLaterTooltip() {
        return `Move event later by ${this.autoCreate.step}`;
    }
});
