import { BryntumCalendarProps, BryntumSliderProps } from '@bryntum/calendar-angular';
import { Calendar } from '@bryntum/calendar';

/**
 * Application config file
 */

export const calendarProps : BryntumCalendarProps = {
    // Start life looking at this date
    date : new Date(2023, 3, 2),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        transport : {
            load : {
                url : 'assets/data/data.json'
            }
        },
        autoLoad : true
    },

    // Resource avatar images are loaded from this path
    resourceImagePath : './assets/users/',

    modes : {
        day         : null,
        week        : null,
        month       : null,
        year        : null,
        agenda      : null,
        dayresource : {
            // Save a little space by hiding weekends.
            hideNonWorkingDays : true,

            // Configure a nice min-width for the resource columns
            minResourceWidth : '10em',

            // Demo uses more padding than default, switch to the short event duration "earlier" to fit contents
            shortEventDuration : '1 hour'
        }
    },

    sidebar : {
        // Existing sidebar widgets can be customized and extra UI Widgets can be easily added too
        items : {
            datePicker : {
                tbar : {
                    // Hide the next/prev year buttons for a bit cleaner UI
                    items : {
                        prevYear : false,
                        nextYear : false
                    }
                }
            },
            resourceFilter : {
                minHeight : '22em',
                store     : {
                    // Group resources by a custom `team` field
                    groupers : [
                        { field : 'team', ascending : true }
                    ]
                },
                // initially select record team members of the Austin team
                selected : [1, 2, 3]
            }
        }
    },

    eventTooltipFeature : {
        // Configuration options are passed on to the tooltip instance
        // We want the tooltip's left edge aligned to the right edge of the event if possible.
        align : 'l-r'
    },

    tbar : {
        items : {
            hideEmptyresources : {
                type     : 'checkbox',
                text     : 'Hide unscheduled resources',
                weight   : 600,
                checked  : false,
                style    : 'margin   : 0 1em',
                onChange : ({ value, source }) => {
                    source.up(Calendar.type).activeView.hideEmptyResources = value;
                }
            },

            showAvatars : {
                type     : 'checkbox',
                text     : 'Show avatar',
                weight   : 600,
                checked  : true,
                style    : 'margin   : 0 1em',
                onChange : ({ value, source }) => {
                    source.up(Calendar.type).activeView.showHeaderAvatars = value;
                }
            },

            hideWeekends : {
                type     : 'checkbox',
                text     : 'Hide weekends',
                weight   : 600,
                checked  : true,
                style    : 'margin   : 0 1em',
                onChange : ({ value, source }) => {
                    source.up(Calendar.type).activeView.hideNonWorkingDays = value;
                }
            },

            viewWidth : {
                type        : 'slider',
                text        : 'Resource width',
                weight      : 640,
                min         : 4,
                max         : 35,
                value       : 10,
                width       : 150,
                unit        : 'em',
                showValue   : false,
                showTooltip : true,
                onInput     : ({ source, value }) => {
                    source.up(Calendar.type).activeView.minResourceWidth = `${value}${(source as unknown as BryntumSliderProps).unit}`;
                }
            }
        }
    }

};
