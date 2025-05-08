import { Calendar, Collection, type EventTooltipConfig, ResourceFilter, ResourceModel, ResourceView, StringHelper, WeekView, Widget } from '@bryntum/calendar';
import type { BryntumCalendarProps } from '@bryntum/calendar-vue-3';

/**
 * Application configuration
 */

class AppResourceModel extends ResourceModel {
    declare city: string;
    declare name: string;
    declare temperature: number;
    declare title: string;
    declare weather: string;
    declare image: string;

    static override get fields() {
        return [
            { name : 'city' },
            { name : 'name' },
            { name : 'temperature', type : 'number' },
            { name : 'title' },
            { name : 'weather' }
        ];
    }
}

const getSubViewHeader = (widget: Widget) => {
    const resource = (widget.owner as WeekView).resource as AppResourceModel;

    return StringHelper.xss`
            <span class="weather">${resource.weather}</span>
            <div class="location">
                <span class="city">${resource.city}</span>
                <span>${resource.temperature}F°</span>
            </div>`;
};

export const calendarConfiguration: BryntumCalendarProps = {
    // Start life looking at this date
    date : new Date(2021, 9, 10),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        transport : {
            load : {
                url : './data/data.json'
            }
        },
        resourceStore : {
            modelClass : AppResourceModel
        },
        autoLoad : true
    },

    sidebar : {
        items : {
            resourceFilter : {
                // Initially select resource IDs 2, 3 and 4
                selected : [2, 3, 4]
            }
        }
    },

    // Resource avatar images are loaded from this path
    resourceImagePath : './users/',

    // The subviews have a close tool which filters them out
    modeDefaults : {
        view : {
            // Show a close icon to filter out the resource
            tools : {
                close : {
                    cls     : 'b-fa b-fa-times',
                    tooltip : 'Filter out this resource',
                    handler(event: Event, view: WeekView) {
                        const
                            calendar           = view.up('calendar') as Calendar,
                            { resourceFilter } = calendar.widgetMap;

                        ((resourceFilter as ResourceFilter).selected as Collection).remove(view.resource);
                    }
                }
            },
            strips : {
                // A simple widget showing location, temperature and a weather icon for each resource
                resourceInfo : {
                    type : 'widget',
                    dock : 'header',
                    cls  : 'b-resource-location',
                    // This method gets called when the panel is created and we return some meta data about the
                    // resource, like weather and city. Will be found on the Calendar
                    html : getSubViewHeader
                }
            }
        }
    },

    modes : {
        // Let's not show the default views
        day           : null,
        week          : null,
        month         : null,
        year          : null,
        agenda        : null,
        weekResources : {
            // Type has the final say over which view type is created
            type               : 'resource',
            title              : 'Week',
            // Specify how wide each resource panel should be
            resourceWidth      : '30em',
            hideNonWorkingDays : true,

            // This is a config object for the subviews
            view : {
                dayStartTime : 8
                // Dock an additional widget at the end of the header
            },

            // Info to display below a resource name
            meta : resource => (resource as AppResourceModel).title
        },
        monthResources : {
            type               : 'resource',
            title              : 'Month',
            resourceWidth      : '30em',
            hideNonWorkingDays : true,

            view : {
                type : 'monthview'
            },

            meta : resource => (resource as AppResourceModel).title
        }
    },

    // The Calendar's top toolbar.
    // We can alter its items configuration.
    // In this case, we add some new UI items.
    tbar : {
        items : {
            label : {
                type   : 'label',
                text   : 'Resource width',
                weight : 630
            },
            // A slider controlling the width of each resource
            viewWidth : {
                type        : 'slider',
                weight      : 640,
                min         : 12,
                max         : 100,
                value       : 30,
                width       : 90,
                unit        : 'em',
                showValue   : false,
                showTooltip : true,
                onInput({ value, source }: {
                    value: number
                    source: Widget
                }) {
                    const calendar = source.up('calendar') as unknown as Calendar;
                    // All views must be synced with the requested resource width
                    calendar.eachView((v: ResourceView) => v.resourceWidth = value + 'em');
                }
            }
        }
    }
};

// Features named by the properties are included.
// An object is used to configure the feature.

export const eventTooltipFeatureConfig: EventTooltipConfig = {
    // Configuration options are passed on to the tooltip instance
    // We want the tooltip's left edge aligned to the right edge of the event if possible.
    align : 'l-r'
};
