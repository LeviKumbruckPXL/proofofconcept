import { type Calendar, DateHelper } from '@bryntum/calendar';
import { type BryntumCalendarProps } from '@bryntum/calendar-react';
import AppEventModel from './lib/AppEventModel';

export const calendarConfig : BryntumCalendarProps = {

    // Start life looking at this date
    date : new Date(2020, 9, 12),

    // Show the event list
    modes : {
        list : {
            // If we use field names which the EventList creates for itself, our config
            // gets merged into the default, so we can affect the EventList's own columns.
            columns : [{
                type  : 'column',
                field : 'name',
                flex  : '0 0 12em',
                renderer({ record }) {
                    const event = record as AppEventModel;
                    return [{
                        tag       : 'i',
                        className : 'b-icon b-icon-circle',
                        style     : `color:${event.resource?.eventColor}`
                    }, {
                        text : event.name
                    }];
                }
            }],

            features : {
                headerMenu : {
                    // We can't group by other fields, so disable all grouping menu options
                    items : {
                        groupAsc    : false,
                        groupDesc   : false,
                        groupRemove : false
                    }
                },

                group : {
                    field : 'eventStartDate',

                    // Render the group date for the first (group field) column
                    renderer({ rowElement, grid, isFirstColumn, groupRowFor }) {
                        const calendar = grid as any as Calendar;
                        if (isFirstColumn) {
                            // the second argument dateFormat should be precisely as 'YYYY-MM-DD'
                            rowElement.dataset.date = DateHelper.format(groupRowFor, 'YYYY-MM-DD');
                            return DateHelper.format(groupRowFor, calendar.dateFormat);
                        }
                        return '';
                    }
                }
            }
        }
    },

    mode : 'list',

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        loadUrl    : './data/busy.json',
        // This demo uses a custom Event model with extra fields
        eventStore : {
            modelClass : AppEventModel
        },
        autoLoad : true
    }
};
