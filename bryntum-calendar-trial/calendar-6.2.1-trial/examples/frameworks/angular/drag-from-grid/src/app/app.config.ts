/**
 * Application config file
 */
import { EventModel, StringHelper } from '@bryntum/calendar';
import { BryntumCalendarProjectModelProps, BryntumCalendarProps, BryntumGridProps } from '@bryntum/calendar-angular';
import { events, resources, unplannedData } from './app.data';

export const projectProps: BryntumCalendarProjectModelProps = {
    events,
    resources
};

export const calendarProps: BryntumCalendarProps = {
    eventTooltipFeature : {
        align : 'l-r'
    },

    externalEventSourceFeature : {
        grid : 'unscheduled'
    },

    date : new Date(2020, 9, 11),

    // Modes are the views available in the Calendar.
    // An object is used to configure the view.
    modes : {
        agenda : null
    }
};

export const gridProps: BryntumGridProps = {
    id          : 'unscheduled',
    title       : 'Unscheduled Events',
    collapsible : true,
    flex        : '0 0 300px',
    ui          : 'calendar-banner',
    store       : {
        modelClass : EventModel,
        data       : unplannedData
    },
    stripeFeature   : true,
    sortFeature     : 'name',
    cellEditFeature : false,
    groupFeature    : false,
    columns         : [
        {
            type       : 'column',
            text       : 'Unassigned tasks',
            flex       : 1,
            field      : 'name',
            htmlEncode : false,
            renderer   : ({ record }) => {
                const event = record as EventModel;
                return StringHelper.xss`<i class="${event.iconCls}"></i>${event.name}`;
            }
        },
        {
            type     : 'column',
            text     : 'Duration',
            width    : 100,
            align    : 'right',
            editor   : false,
            field    : 'duration',
            renderer : ({ record }) => {
                const event = record as EventModel;
                return `${event.duration} ${event.durationUnit}`;
            }
        }
    ],

    rowHeight : 50
};
