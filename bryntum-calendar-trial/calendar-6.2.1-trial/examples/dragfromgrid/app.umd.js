var {
    Calendar,
    Splitter,
    Grid,
    StringHelper,
    GridRowModel,
    Duration
} = bryntum.calendar;
const calendar = new Calendar({
    // Start life looking at this date
    date        : new Date(2020, 9, 12),
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
    appendTo : 'calendar-container',
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
new Splitter({
    appendTo : 'calendar-container'
});
const unscheduledGrid = new Grid({
    id          : 'unscheduled',
    appendTo    : 'calendar-container',
    title       : 'Unscheduled Events',
    collapsible : true,
    flex        : '0 0 300px',
    ui          : 'calendar-banner',
    // Calendar's stores are contained by a project, pass it to the grid to allow it to access them
    project     : calendar.project,
    // The unplanned tasks came across in the initial data load
    store       : calendar.crudManager.getStore('unplanned'),
    features    : {
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
        width  : 100,
        align  : 'right',
        editor : false
    }],
    rowHeight : 50
});
