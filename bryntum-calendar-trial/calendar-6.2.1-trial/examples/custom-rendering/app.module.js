import { EventModel, Combo, ResourceStore, Calendar, DayView, DateHelper, CrudManager, DomSync, StringHelper } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';
//region "lib/Event.js"

// A custom Event class with a few extra fields. You can extend this to add any fields and methods you want.
class Event extends EventModel {

    static $name = 'Event';

    static get fields() {
        return [{
            name     : 'invitees',
            internal : true
        }, {
            name     : 'image',
            internal : true
        }, {
            name : 'important',
            type : 'boolean'
        },
        {
            name : 'nbrAttachments',
            text : '#Attachments',
            type : 'integer'
        }];
    }

    static get defaults() {
        return {
            invitees : []
        };
    }
}

//endregion

//region "lib/InviteeSelector.js"

class InviteeSelector extends Combo {
    static $name = 'InviteeSelector';

    static type = 'inviteeSelector';

    static get configurable() {
        return {
            store        : new ResourceStore(),
            label        : 'Invitees',
            displayField : 'name',
            multiSelect  : true,
            editable     : false
        };
    }

    construct() {
        super.construct(...arguments);

        this.store = this.crudManager.resourceStore;
    }
}

// Register this type with its factory
InviteeSelector.initClass();

//endregion

//region "lib/MultiDayView.js"

/**
 * A DayView which shows a range of days from its configured start date.
 *
 * By default it will show seven days.
 *
 * Its range may be changed by an application.
 *
 * When active, it sets the owning Calendar's date picker to show the range it covers
 * and when the user selects a date in the date picker, it changes its own start date to that date.
 */
class MultiDays extends DayView {
    static $name = 'MultiDays';

    static configurable = {
        title : 'Multi Days',

        // Default range is 7 days
        range : '7 d',

        // It cannot have its endDate set
        fixedDuration : true
    };

    // Don't duplicate the month and year name if the start and end are in the same month.
    // eg "May 1 - 3, 2022" insteadf of "May 1 2022 - May 3, 2022"
    get description() {
        const
            me                     = this,
            { startDate, endDate } = me;

        if (DateHelper.diff(startDate, endDate, 'd') > 1) {
            const
                startMonth   = DateHelper.getMonthName(startDate.getMonth()),
                endMonth     = DateHelper.getMonthName(endDate.getMonth()),
                endMonthName = startMonth !== endMonth ? `${endMonth} ` : '';

            // Dont duplicate month name if possible. If same month use eg "May 1 - 3, 2022"
            return `${startMonth} ${startDate.getDate()} - ${endMonthName} ${endDate.getDate() - 1}, ${endDate.getFullYear()}`;
        }
        return super.description;
    }

    previous() {
        this.date = DateHelper.add(this.startDate, -this.duration, 'd');
    }

    next() {
        this.date = this.startDate = DateHelper.add(this.startDate, this.duration, 'd');
    }

    onShow() {
        const { datePicker } = this.calendar.widgetMap;

        super.onShow?.(...arguments);

        // Set the Calendar date picker's range to be the range we cover
        datePicker.setConfig({
            multiSelect : 'range',
            selection   : [
                this.startDate,
                DateHelper.add(this.endDate, -1)
            ]
        });

        // Attempting to select a date results in this view changing its startDate.
        // That s then reflected back to the Calendar's date picker in onRangeChange.
        this.dateListener = datePicker.on({
            beforeDateSelect : ({ date }) => {
                this.startDate = date;
                return false;
            }
        });
    }

    onHide() {
        this.calendar.widgetMap.datePicker.multiSelect = false;
        this.dateListener?.();
        super.onHide?.();
    }

    // When we change range, update the Calendar's date picker to show the range
    onRangeChange({ new : { startDate, endDate } }) {
        this.calendar.widgetMap.datePicker.selection = [startDate, DateHelper.add(endDate, -1)];
    }
}

Calendar.Modes.register('multidays', MultiDays);

//endregion

// The CrudManager arranges loading and syncing of data in JSON form from/to a web service
const crudManager = new CrudManager({
        resourceStore : {
            sorters : [{ field : 'name', ascending : true }]
        },
        // This demo uses a custom Event model with extra fields
        eventStore : {
            modelClass : Event
        },
        transport : {
            load : {
                url : 'data/data.json'
            }
        },
        autoLoad : true
    }),

    sevenDaysMenu = [{
        text        : '1 day',
        checked     : false,
        toggleGroup : 'multiDays'
    }, {
        text        : '2 days',
        checked     : false,
        toggleGroup : 'multiDays'
    }, {
        text        : '3 days',
        checked     : false,
        toggleGroup : 'multiDays'
    }, {
        text        : '4 days',
        checked     : false,
        toggleGroup : 'multiDays'
    }, {
        text        : '5 days',
        checked     : false,
        toggleGroup : 'multiDays'
    }, {
        text        : '6 days',
        checked     : false,
        toggleGroup : 'multiDays'
    }, {
        text        : '7 days',
        checked     : false,
        toggleGroup : 'multiDays'
    }],

    calendar = new Calendar({
        crudManager,

        // A block of configs which is applied to all modes.
        // We want overflow popups to show right on top of the day cell, so reconfigure
        // its align object.
        modeDefaults : {
            overflowPopup : {
                align : {
                    align  : 'c-c',
                    anchor : false
                }
            }
        },

        // Show event presence as up to three event-coloured dots in the date picker cells
        datePicker : {
            showEvents : 'dots'
        },

        sidebar : {
            items : {
                showEvents : {
                    weight  : 10,
                    type    : 'slidetoggle',
                    label   : 'Events in date picker',
                    checked : true,

                    // "up." means resolve in owner will call on the Calendar
                    onChange : 'up.onShowEventsChange'
                }
            }
        },

        // The Calendar's top toolbar.
        // We can alter its items configuration.
        // In this case we add a new item.
        tbar : {
            items : {
                // A new toolbar item. It can be accessed by the name "showWeekColumn"
                // in the Calendar's widgetMap property.
                showWeekColumn : {
                    // Insert just before the modeSelector ButtonGroup which has weight : 700
                    weight    : 650,
                    type      : 'checkbox',
                    label     : 'Show week column',
                    labelCls  : 'b-show-week-cb-label',
                    checked   : true,
                    listeners : {
                        // 'up.' means method is on a parent Widget. It will find the Calendar
                        change : 'up.onShowWeekToggle'
                    }
                }
            }
        },

        // Start life looking at this date
        date : new Date(2020, 9, 12),

        appendTo : 'container',

        // Features named by the properties are included.
        // An object is used to configure the feature.
        features : {
            eventEdit : {
                editorConfig : {
                    width : 500
                },

                // Any items configured on the eventEdit feature are merged into the items
                // definition of the default editor.
                // If a system-supplied name is used as a property, it will reconfigure that existing
                // field.
                // Configuring a system-supplied field as false removes that field.
                // If a new property name is used, it will be added to the editor.
                // Fields are sorted in ascending order of their weight config.
                // System-supplied input fields have weights from 100 to 800.
                // This new item is therefore inserted below the first existing field.
                items : {
                    // Add a multiselect combo box to select invitees
                    inviteeSelector : {
                        // name is the input name which corresponds to the field in the
                        // event record which is being edited.
                        name : 'invitees',
                        type : 'inviteeselector',

                        // We prefer the clear trigger at the end.
                        // Higher weights gravitate towards center.
                        clearable : {
                            weight : -1000
                        },

                        // We'd like ESC to revert to initial value.
                        revertOnEscape : true,

                        // Insert just after event name which is at 100
                        weight : 110,

                        // Don't allow it to grow our of control.
                        // Will begin to scroll the chips when it hits this limit.
                        maxHeight : '8em',
                        crudManager
                    },

                    // All DatePickers inside a Calendar can show events
                    startDateField : {
                        picker : {
                            showEvents : 'dots'
                        }
                    },
                    endDateField : {
                        picker : {
                            showEvents : 'dots'
                        }
                    }
                }
            }

            // Uncomment this to show custom tooltip
            // eventTooltip : {
            //     align : 'l-r',
            //
            //     // Mustn't shrink because of large, graphical content
            //     minWidth : null,
            //
            //     renderer : data => `<dl>
            //         <dt>Assigned to:</dt>
            //         <dd>${StringHelper.encodeHtml(data.eventRecord.resource.name)}</dd>
            //         <dt>Time:</dt>
            //         <dd>
            //             ${DateHelper.format(data.eventRecord.startDate, 'LT')} - ${DateHelper.format(data.eventRecord.endDate, 'LT')}
            //         </dd>
            //
            //         ${data.eventRecord.get('image') ? `<dt>Image:</dt><dd><img class="b-event-image" src="${data.eventRecord.get('image')}"/></dd>` : ''}
            //         ${data.eventRecord.get('invitees').length > 0 ? `
            //             <dt>Invitees:</dt>
            //             <dd>
            //                 <ul>
            //                     ${data.eventRecord.get('invitees').map(invitee => `<li>${StringHelper.encodeHtml(calendar.resourceStore.getById(invitee).name)}</li>`).join('')}
            //                 </ul>
            //             </dd>
            //             ` : ''}
            //     </dl>
            //     `
            // }
        },

        // Modes are the views available in the Calendar.
        // An object may be used to configure the view.
        // null means do not include the view.
        modes : {
            month : {
                descriptionRenderer() {
                    const
                        eventsInView = this.eventStore.records.filter(eventRec => DateHelper.intersectSpans(this.startDate, this.endDate, eventRec.startDate, eventRec.endDate)).length,
                        startWeek = this.month.getWeekNumber(this.startDate),
                        endWeek = this.month.getWeekNumber(this.endDate);

                    // We describe the month in terms of its week range in our app
                    return `Week ${startWeek[1]} ${startWeek[0]} - ${endWeek[1]} ${endWeek[0]} (${eventsInView} event${eventsInView === 1 ? '' : 's'})`;
                },

                showWeekColumn : true,

                // Make week cell more informative
                weekRenderer(targetElement, [year, week]) {
                    DomSync.sync({
                        targetElement,
                        domConfig : {
                            children : [{
                                className : 'b-week-name',
                                html      : `Week ${week}`
                            }],
                            dataset : {
                                btip : 'Click to view week in detail'
                            }
                        }
                    });
                },

                dayCellRenderer(cellData) {
                    if (!(cellData.date - new Date(2020, 9, 14))) {
                        cellData.cls['hackathon-dayoff'] = true;

                        cellData.headerStyle.fontWeight = 'bold';

                        // Mutate day cell information
                        cellData.isNonWorking = true;

                        return `${cellData.date.getDate()} Day off yay!`;
                    }
                },

                eventRenderer({ eventRecord, renderData }) {
                    // highlight all events which are related to conferences
                    if (eventRecord.name.indexOf('conference') !== -1) {
                        renderData.style.fontWeight = 'bold';
                        renderData.cls['conference-event'] = true;
                    }

                    if (eventRecord.name === 'Breakfast') {
                        // Use our own classes. Overrides any iconCls from the data.
                        // Default rendering will add its own classes after us.
                        renderData.iconCls = 'b-fa b-fa-coffee';
                    }
                }
            },
            week : {
                // Add extra element on special date
                dayHeaderRenderer(dayHeaderDomConfig, cellData) {
                    if (!(cellData.date - new Date(2020, 9, 14))) {
                        dayHeaderDomConfig.className['b-highlight-day'] = 1;
                        dayHeaderDomConfig.children.push('\ud83c\udf89 Day off');
                    }
                },

                columnHeaderRenderer({ events }) {
                    const hours = events.reduce((v, e) => {
                        return v + DateHelper.as('h', e.fullDuration);
                    }, 0);

                    return `${hours} hours`;
                },

                dayCellRenderer(domConfig, cellData) {
                    if (!(cellData.date - new Date(2020, 9, 14))) {
                        domConfig.className['hackathon-dayoff'] =
                        domConfig.className['b-nonworking-day'] = 1;
                    }
                    return domConfig;
                },

                // Render an icon showing number of invitees (editable in the event editor)
                eventRenderer : ({ eventRecord, renderData }) => {
                    if (eventRecord.important) {
                        renderData.bodyColor = '#ff9f9f';
                        renderData.iconCls['b-fa b-fa-exclamation'] = 1;
                    }
                    else if (eventRecord.nbrAttachments > 0) {
                        renderData.iconCls['b-fa b-fa-paperclip'] = 1;
                    }
                    else if (eventRecord.invitees.length > 0) {
                        renderData.iconCls['b-fa b-fa-user-friends'] = 1;
                    }

                    return `
                        <span class="b-event-name">${StringHelper.encodeHtml(eventRecord.name)}</span>
                        ${eventRecord.image ? `<img src="${eventRecord.image}" alt="${
                            StringHelper.encodeHtml(eventRecord.name)}" class="b-event-image"/>` : ''}
                    `;
                }
            },

            // Here is our custom mode
            multiDays : {
                type           : 'multidays',
                activationKey  : 'u',
                selectorButton : {
                    split  : true,
                    menu   : sevenDaysMenu,
                    onItem : 'up.onMultiDaySelect'
                }
            },

            year : {
                dayCellRenderer({ cellConfig, events, date }) {
                    if (date.getMonth() === 4 && date.getDate() === 25) {
                        // My friends birthday, don't forget
                        cellConfig.dataset.btip = 'Happy birthday Dave!';
                        cellConfig.style.backgroundColor = 'transparent';
                        return '<i class="b-icon b-fa-birthday-cake"></i>';
                    }
                    else if (date.getDate() === 25) {
                        // Paycheck day!! Mark in bold
                        cellConfig.style.fontWeight = '700';
                    }
                },
                // Show event presence as up to three event-coloured dots in the date cells
                showEvents : 'dots'
            },
            agenda : {
                columns : {
                    agenda : {
                        afterRenderCell({ cellElement, record }) {
                            // Manipulate the cell as we need
                            cellElement.classList.toggle('is-sunday', record.day === 0);
                        }
                    }
                },

                // Render an icon showing number of invitees (editable in the event editor)
                eventRenderer : ({ eventRecord, renderData }) => {
                    if (eventRecord.important) {
                        renderData.iconCls['b-fa b-fa-exclamation'] = 1;
                    }
                    else if (eventRecord.nbrAttachments > 0) {
                        renderData.iconCls['b-fa b-fa-paperclip'] = 1;
                    }
                    else if (eventRecord.invitees.length > 0) {
                        renderData.iconCls['b-fa b-fa-user-friends'] = 1;
                    }

                    if (eventRecord.image) {
                        // The event is not a fixed height which they usually are
                        // in AgendaView, so we have to set that into the renderData
                        renderData.eventHeight = 'auto';
                        renderData.cls['b-with-image'] = 1;
                    };

                    return [{
                        className : 'b-event-name',
                        html      : StringHelper.encodeHtml(eventRecord.name)
                    }, eventRecord.image ? {
                        tag    : 'img',
                        height : 100,
                        src    : eventRecord.image,
                        alt    : StringHelper.encodeHtml(eventRecord.name)
                    } : null];
                }
            }
        },

        // Will be automatically called when the Calendar fires its viewPaint event
        onViewPaint() {
            // Sync the visibility of the show week checkbox
            this.widgetMap.showWeekColumn[this.mode === 'month' ? 'show' : 'hide']();
        },

        onShowEventsChange({ checked }) {
            this.datePicker.showEvents = checked ? 'dots' : false;
        },

        // Handler for checkbox change event. Sync month mode's state.
        onShowWeekToggle({ checked }) {
            this.modes.month.showWeekColumn = checked;
        },

        onMultiDaySelect({ item : { text } }) {
            this.modes.multiDays.range = text;
            this.mode = 'multiDays';
        }
    });
