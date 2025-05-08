var {
    Calendar,
    DateHelper
} = bryntum.calendar;
const calendar = new Calendar({
    appendTo    : 'container',
    date        : '2025-01-27',
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
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
        dayresource : {
            dayStartTime       : 8,
            dayEndTime         : 19,
            hourHeight         : 80,
            // Save a little space by hiding weekends.
            hideNonWorkingDays : true,
            // Configure a nice min-width for the resource columns
            minResourceWidth   : '10em',
            // Demo uses more padding than default, switch to the short event duration "earlier" to fit contents
            shortEventDuration : '1 hour',
            eventRenderer({
                eventRecord,
                resourceRecord,
                renderData: {
                    cls
                }
            }) {
                if (eventRecord.partySize > resourceRecord.maxCapacity) {
                    cls.add('overbooked');
                }
            },
            tickRenderer({
                startTime,
                endTime,
                events,
                subTickCount,
                resourceRecord
            }) {
                // We only want to render ticks on the hour
                if (resourceRecord && startTime.getMinutes() === 0) {
                    const resourceCapacity = resourceRecord.maxCapacity,
                        tickEvents = this.eventStore.getEvents({
                            startDate : startTime,
                            endDate   : endTime,
                            resourceRecord
                        }),
                        usedCapacity = tickEvents.reduce((total, event) => total + event.partySize || 0, 0);
                    return {
                        rowspan   : subTickCount,
                        className : {
                            unused     : events.length === 0,
                            overbooked : usedCapacity > resourceCapacity
                        },
                        children : [{
                            className : 'time',
                            text      : DateHelper.format(startTime, this.timeFormat)
                        }, {
                            className : 'capacity',
                            text      : `${resourceCapacity - usedCapacity}/${resourceCapacity}`
                        }]
                    };
                }
            }
        }
    },
    features : {
        eventEdit : {
            items : {
                partySizeField : {
                    type   : 'number',
                    name   : 'partySize',
                    label  : 'Party size',
                    weight : 200
                }
            }
        }
    }
});
