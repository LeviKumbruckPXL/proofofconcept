import { Calendar, DateHelper } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

// hide data generation
let
    now       = new Date(),
    startDate = DateHelper.floor(now, { unit : 'week', magnitude : 1 }),
    events    = (() => {
        const result = [];

        for (let i = 0; i < 7; i += 2) {
            const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), now.getHours(), now.getMinutes());

            result.push({
                name      : `Event ${i + 1}`,
                startDate : DateHelper.max(DateHelper.floor(date, { unit : 'h', magnitude : 1 }), startDate),
                endDate   : DateHelper.min(DateHelper.ceil(date,  { unit : 'h', magnitude : 1 }), DateHelper.add(startDate, 1, 'd'))
            });
            startDate = DateHelper.add(startDate, 2, 'd');
        }

        return result;
    })();
// end-hide

const calendar = new Calendar({
    appendTo : 'container',

    // We cooked up some events for the current week just for this demo
    events,

    // The utility panel which is at the left by default.
    // We can alter its items configuration.
    // We've added checkboxes to change the showCurrentTime property.
    sidebar : {
        items : {
            timeOptions : {
                type   : 'container',
                weight : 100,
                layout : 'vbox',
                items  : {
                    title : {
                        html  : 'Current time options',
                        style : 'margin-block: 1em .5em'
                    },
                    showTime : {
                        type     : 'checkbox',
                        text     : 'Show time',
                        checked  : true,
                        onChange : 'up.onCheckboxToggle'
                    },
                    fullWidth : {
                        type     : 'checkbox',
                        text     : 'Full width',
                        checked  : true,
                        onChange : 'up.onCheckboxToggle'
                    },
                    onTop : {
                        type     : 'checkbox',
                        text     : 'On top',
                        checked  : true,
                        onChange : 'up.onCheckboxToggle'
                    }
                }
            }
        }
    },

    // Start life looking at today
    date : now,

    // Start with the line covering the full width of the week
    modeDefaults : {
        showCurrentTime : {
            showTime  : true,
            fullWidth : true
        }
    },

    // Modes are the views available in the Calendar.
    // An object may be used to configure the view.
    // null means do not include the view.
    modes : {
        year   : null,
        month  : null,
        agenda : null
    },

    onCheckboxToggle() {
        const
            me              = this,
            {
                showTime, fullWidth, onTop
            }               = me.widgetMap,
            showCurrentTime = {
                showTime  : showTime.checked,
                fullWidth : fullWidth.checked,
                onTop     : onTop.checked
            };

        // Set the options into all our views
        me.eachView(v => v.showCurrentTime = showCurrentTime);
    }
});
