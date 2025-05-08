import { EventModel, DateHelper, Calendar } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';
//region "lib/AppEvent.js"

// A custom Event class with a few extra fields. You can extend this to add any fields and methods you want.
class AppEvent extends EventModel {

    // Add some extra fields to demonstrate the createColumnsFromModel option of ColumnPicker
    static fields = [{
        name : 'notes',

        // Provide defaults for when a column is autocreated for this field
        column : {
            width  : '20em',
            editor : {
                type : 'textareapickerfield'
            }
        }
    }, {
        name : 'important',
        type : 'boolean'
    }];

    static defaults = {
        invitees : []
    };

    // Define field getter to enable grouping by the start date *not including time portion*
    get eventStartDate() {
        return this.getData('eventStartDate') || DateHelper.startOf(this.startDate);
    }
}

//endregion

const calendar = new Calendar({
    // Start life looking at this date
    date : new Date(2020, 9, 12),

    modeDefaults : {
        weight : 100
    },

    // Show the event list first by assigning it the lowest weight
    modes : {
        list : {
            weight  : 1,
            // If we use field names which the EventList creates for itself, our config
            // gets merged into the default, so we can affect the EventList's own columns.
            columns : [{
                field : 'name',
                flex  : '0 0 12em',
                renderer({ record }) {
                    return [{
                        tag       : 'i',
                        className : 'b-icon b-icon-circle',
                        style     : `color:${record.resource?.eventColor}`
                    }, {
                        text : record.name
                    }];
                }
            }],
            features : {
                columnPicker : {
                    createColumnsFromModel : true
                },
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
                    renderer({ grid, rowElement, isFirstColumn, groupRowFor }) {
                        if (isFirstColumn) {
                            // the second argument dateFormat should be precisely as 'YYYY-MM-DD'
                            rowElement.dataset.date = DateHelper.format(groupRowFor, 'YYYY-MM-DD');
                            return DateHelper.format(groupRowFor, grid.dateFormat);
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
        loadUrl    : 'data/busy.json',
        // This demo uses a custom Event model with extra fields
        eventStore : {
            modelClass : AppEvent
        },
        autoLoad : true
    },

    appendTo : 'container'
});
