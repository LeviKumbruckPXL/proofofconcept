import { BryntumCalendarProps } from '@bryntum/calendar-angular';

/**
 * Application config file
 */

export const calendarProps: BryntumCalendarProps = {
    // Start life looking at this date
    date : new Date(2020, 9, 12),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        transport : {
            load : {
                url : 'assets/data/data.json'
            }
        },
        autoLoad : true
    },

    // All stores are owned / managed by a project. We just provide project configuration setup here.
    project : {
    // If we configure our project with a State Transaction Manager
    // It is able to track and undo and redo changes.
    // The undo/redo widget below automatically finds this in its owner hierarchy.
        stm : {
            autoRecord : true,

            // Provides the title for transactions listed in the UndoRedo combo
            getTransactionTitle() {
                return 'Transaction ' + this.position;
            }
        }
    },

    // The Calendar's top toolbar.
    // We can alter its items configuration.
    // In this case, we add a new UI item.
    tbar : {
        items : {
            // An UndoRedo widget hooked up to our Project.
            // It handles undoing and redoing anything that the Project's State Tracking Manager does.
            undoRedo : {
                type   : 'undoredo',
                width  : 350,
                weight : 650
            }
        }
    },

    // Modes are the views available in the Calendar.
    // An object may be used to configure the view.
    // null means do not include the view.
    modes : {
        agenda : null,
        year   : null,
        month  : null,
        day    : null
    }
};
