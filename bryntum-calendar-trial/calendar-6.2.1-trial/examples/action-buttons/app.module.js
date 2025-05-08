import { Calendar, StringHelper } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

const calendar = new Calendar({
    // Start life looking at this date
    date : new Date(2024, 0, 10),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        loadUrl  : 'data/data.json',
        autoLoad : true
    },

    appendTo : 'container',

    hideNonWorkingDays : true,

    modeDefaults : {
        dayStartTime  : 6,
        hourHeight    : 55,
        actionButtons : {
            edit : {
                tooltip : 'Edit event',
                cls     : 'b-icon-edit',
                handler : 'up.onEditAction'
            },
            delete : {
                tooltip : 'Delete event',
                cls     : 'b-icon-trash',
                handler : 'up.onDeleteAction'
            }
        },
        eventRenderer : 'up.dayViewRenderer'
    },

    // actionButtons only render in Day and week views.
    // Other views show event bars which are too small.
    modes : {
        month  : null,
        year   : null,
        agenda : null
    },

    // Features named by the properties are included.
    // An object is used to configure the feature.
    features : {
        // We're using action buttons on the events instead
        eventMenu : false
    },

    dayViewRenderer({ view : { actionButtons }, eventRecord }) {
        // read-only events may not be changed, so don't show the UI
        if (eventRecord.readOnly) {
            delete actionButtons.delete;
            delete actionButtons.edit;
        }
        // We can mutate the details of the actionButtons before render
        else {
            actionButtons.delete.tooltip = StringHelper.xss`Delete ${eventRecord.name}`;
            actionButtons.edit.tooltip = StringHelper.xss`Edit ${eventRecord.name}`;
        }
    },

    onEditAction({ eventRecord }) {
        this.editEvent(eventRecord);
    },

    onDeleteAction({ eventRecord }) {
        this.removeEvents([eventRecord]);
    }
});
