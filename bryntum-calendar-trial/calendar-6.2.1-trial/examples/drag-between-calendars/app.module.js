import { Container } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

const container = new Container({
    appendTo : 'container',
    layout   : 'hbox',
    defaults : {
        // Not adjusting our appearance based on screensize as running two large calendars will need a bit of
        // screen real estate
        responsive        : false,
        resourceImagePath : '../_shared/images/users/',

        // Only the DayResource view is available
        modes : {
            dayresource : {
                minResourceWidth : '10em',
                range            : '3d',
                dayStartTime     : 8,
                dayEndTime       : 19,
                hourHeight       : 70
            },
            day    : null,
            week   : null,
            month  : null,
            year   : null,
            agenda : null
        },
        tbar : {
            items : {
                todayButton : { cls : 'b-transparent' }
            }
        },
        sidebar : {
            collapsed      : true,
            resourceFilter : { filterResources : true }
        },
        listeners : {
            layoutUpdate({ source }) {
                // Synchronize the hourHeight between the two Calendar instances
                const other = container.widgetMap[source.calendar.ref === 'stockholmCalendar' ? 'miamiCalendar' : 'stockholmCalendar'];
                other.activeView.hourHeight = source.hourHeight;
                // Also sync vertical scroll
                other.activeView.scrollable.y = source.scrollable.y;
            }
        }
    },
    items : {
        stockholmCalendar : {
            type  : 'calendar',
            title : 'Team Stockholm',
            date  : new Date(2025, 8, 1),
            flex  : 1,
            tools : {
                summaryPeople : {
                    cls  : 'b-fa b-fa-user b-title-summary',
                    type : 'widget'
                },
                summaryEvents : {
                    cls  : 'b-fa b-fa-list-check b-title-summary',
                    type : 'widget'
                }
            },
            // CrudManager arranges loading and syncing of data in JSON form from/to a web service
            crudManager : {
                autoLoad : true,
                loadUrl  : 'data/stockholm.json'
            },
            onDataChange() {
                const
                    { summaryPeople, summaryEvents } = this.widgetMap,
                    resourceCount = this.resourceStore.count,
                    eventCount = this.eventStore.count,
                    tooltip = `${resourceCount} team members, ${eventCount} tasks`;

                summaryPeople.html = resourceCount;
                summaryEvents.html = eventCount;
                summaryPeople.tooltip = summaryEvents.tooltip = tooltip;
            }
        },
        split         : { type : 'splitter' },
        miamiCalendar : {
            type  : 'calendar',
            title : 'Team Miami',
            date  : new Date(2025, 8, 1),
            flex  : 1,

            tools : {
                summaryPeople : {
                    cls  : 'b-fa b-fa-user b-title-summary',
                    type : 'widget'
                },
                summaryEvents : {
                    cls  : 'b-fa b-fa-list-check b-title-summary',
                    type : 'widget'
                }
            },
            // CrudManager arranges loading and syncing of data in JSON form from/to a web service
            crudManager : {
                autoLoad : true,
                loadUrl  : 'data/miami.json'
            },
            onDataChange() {
                const
                    { summaryPeople, summaryEvents } = this.widgetMap,
                    resourceCount = this.resourceStore.count,
                    eventCount = this.eventStore.count,
                    tooltip = `${resourceCount} team members, ${eventCount} tasks`;

                summaryPeople.html = resourceCount;
                summaryEvents.html = eventCount;
                summaryPeople.tooltip = summaryEvents.tooltip = tooltip;
            }
        }
    }
});
