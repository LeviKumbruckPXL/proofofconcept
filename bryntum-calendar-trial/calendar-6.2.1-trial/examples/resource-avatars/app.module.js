import { Calendar, CrudManager } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

// The CrudManager arranges loading and syncing of data in JSON form from/to a web service
const crudManager = new CrudManager({
        resourceStore : {
            sorters : [{ field : 'name', ascending : true }]
        },
        transport : {
            load : {
                url : 'data/data.json'
            }
        },
        autoLoad : true
    }),

    calendar    = new Calendar({
        crudManager,

        // Start life looking at this date
        date : new Date(2022, 5, 5),

        appendTo : 'container',

        // Where the avatar rendering utility finds the resource images
        resourceImagePath : '../_shared/images/users/',

        tbar : {
            items : {
                stack : {
                    weight : 650,
                    type   : 'checkbox',
                    label  : 'Stack MultiDay Events',

                    // "up." means resolve in ownership chain. Will call on the Calendar
                    onChange : 'up.onStackEventsChange'
                }
            }
        },

        // A block of configs which is applied to all modes.
        modeDefaults : {
            showBullet          : false,
            eventHeight         : 35,
            showResourceAvatars : true,

            // In our app, all events are solid blocks.
            eventRenderer({ renderData }) {
                renderData.solidBar = true;
            }
        },

        // Modes are the views available in the Calendar.
        // An object may be used to configure the view.
        // null means do not include the view.
        modes : {
            day   : null,
            week  : null,
            month : {
                // Don't allow the month view to shrink below this height,
                // to make sure resource avatars are actually visible
                minHeight : 740
            }
        },
        features : {
            eventEdit : {
                timeFormat : 'LTS'
            }
        },

        onStackEventsChange({ checked }) {
            this.modes.month.stackMultiDayEvents = checked;
        }
    });
