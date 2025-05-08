var {
    Calendar,
    StringHelper,
    GridRowModel,
    Duration
} = bryntum.calendar;
const calendar = new Calendar({
    // Start life looking at this date
    date        : new Date(2025, 4, 12),
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        loadUrl  : 'data/data.json',
        autoLoad : true,
        stores   : {
            id         : 'unplanned',
            modelClass : class extends GridRowModel {
                get fullDuration() {
                    // Set up value from individual fields
                    return new Duration({
                        unit      : this.durationUnit,
                        magnitude : this.duration
                    });
                }
            }
        }
    },
    modes : {
        agenda : null
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
        externalEventSource : {
            grid      : 'unscheduled',
            droppable : true
        }
    },
    sidebar : {
        items : {
            externalEvents : {
                type     : 'grid',
                id       : 'unscheduled',
                title    : 'Unscheduled Events',
                flex     : '1 1 0',
                weight   : 250,
                // The name of the store to use as source of events
                // As defined in the CrudManager
                store    : 'unplanned',
                features : {
                    stripe   : true,
                    sort     : 'name',
                    cellEdit : false,
                    group    : false
                },
                columns : [{
                    text       : 'Unassigned tasks',
                    flex       : 1,
                    field      : 'name',
                    htmlEncode : false,
                    renderer   : data => StringHelper.xss`<i class="${data.record.iconCls}"></i>${data.record.name}`
                }, {
                    text   : 'Duration',
                    type   : 'duration',
                    width  : 80,
                    align  : 'right',
                    editor : false
                }],
                rowHeight : 50
            },
            resourceFilter : {
                flex : '0 1 auto'
            }
        }
    },
    listeners : {
        beforeDropExternal({
            eventRecord,
            dropOnCalendar
        }) {
            // If drag originates from calendar and drop happens outside it, remove it from calendar's event store
            if (!dropOnCalendar) {
                // Remove from calendar
                calendar.eventStore.remove(eventRecord);
            }
        }
    }
});
