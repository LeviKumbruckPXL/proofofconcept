import { Popup, DomSync, MessageDialog, Calendar, DateHelper, Duration } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';
//region "lib/EventSummaryPopup.js"

// A custom popup shown on event click, which includes a summary of the currently selected events and a button
// letting user perform actions on the selection
class EventSummaryPopup extends Popup {
    static type = 'eventsummary';

    static configurable = {
        calendar : null,

        align : {
            align         : 't-b',
            monitorResize : true
        },

        focusable    : false,
        trapFocus    : false,
        autoShow     : false,
        autoClose    : false,
        anchor       : true,
        scrollAction : 'realign',
        draggable    : true,
        header       : false,
        layoutStyle  : {
            alignItems : 'center'
        },
        items : {
            table : {
            },
            actionButton : {
                type : 'button',
                text : 'Actions',
                cls  : 'b-raised b-blue',
                menu : [
                    {
                        text   : 'Remove',
                        icon   : 'b-fa b-fa-trash',
                        // Event handler for this icon is on the ownership hierarchy (see below)
                        onItem : 'up.onRemoveEventsClick'
                    },
                    {
                        text   : 'Move to next day',
                        icon   : 'b-fa b-fa-arrow-right',
                        // Event handler for this icon is on the ownership hierarchy (see below)
                        onItem : 'up.onMoveToNextDayClick'
                    }
                ]
            }
        }
    };

    construct() {
        super.construct(...arguments);

        // Make sure this widget is destroyed if the owning Calendar instance is destroyed
        const
            me       = this,
            calendar = me.owner = me.calendar;

        // Show this widget when clicking events, and update the contents on selection change
        calendar.on({
            selectionChange     : me.syncValues,
            eventClick          : me.onEventClick,
            beforeEventEditShow : me.onEventEdit,
            thisObj             : me
        });

        // Hide this widget when event dragging starts
        calendar.features.drag?.on({
            beforeDragStart : me.hide,
            thisObj         : me
        });

        // Always refresh contents (if we're visible) when changes cause a UI refresh
        calendar.on({
            refresh : me.onUIRefresh,
            thisObj : me,
            buffer  : 100
        });
    }

    async onMoveToNextDayClick() {
        this.calendar.selectedEvents.forEach(event => event.shift(1, 'd'));
    }

    async onRemoveEventsClick() {
        const { calendar } = this;

        if (await MessageDialog.confirm({ title : 'Delete events?', message : 'Do you you want to delete the events?' }) === MessageDialog.okButton) {
            calendar.eventStore.remove(calendar.selectedEvents);
        }
    }

    onUIRefresh() {
        if (this.isVisible) {
            this.syncValues();
        }
    }

    onEventEdit() {
        this.hide();
    }

    onEventClick({ source, fromOverflowPopup }) {
        const
            me = this,
            { selectedEvents } = me.calendar;

        if (selectedEvents.length === 0) {
            me.hide();
        }
        else {
            if (!me.isVisible || selectedEvents.length === 1) {
                // Keep focus in the overflow popup if we are shown from one
                me.owner = fromOverflowPopup ? source.overflowPopup : source.calendar;
                me.syncValues();
            }
        }
    }

    syncValues() {
        const
            { calendar }       = this,
            { selectedEvents } = calendar,
            eventRecord        = selectedEvents[selectedEvents.length - 1],
            alignTo            = eventRecord && calendar.activeView.getEventElement(eventRecord);

        if (alignTo) {
            const values = [
                calendar.eventStore.count,
                selectedEvents.length,
                calendar.eventStore.reduce((v, event) => v + event.value || 0, 0),
                selectedEvents.reduce((v, event) => v + event.value || 0, 0)
            ];

            DomSync.sync({
                targetElement : this.widgetMap.table.element,
                domConfig     : {
                    children : [{
                        class : 'summary-header',
                        text  : 'Total Items'
                    }, {
                        class : 'summary-header',
                        text  : 'Selected Items'
                    }, {
                        class : 'summary-header',
                        text  : 'Total Value'
                    }, {
                        class : 'summary-header',
                        text  : 'Selected Value'
                    }, ...values.map((v, i) => {
                        return {
                            class : 'summary-value',
                            text  : i > 1 ? `$${v}` : v
                        };
                    })]
                }
            });
            this.showBy({
                target : alignTo
            });
        }
        else {
            this.hide();
        }
    }
}
EventSummaryPopup.initClass();

//endregion

const calendar = new Calendar({
    appendTo : 'container',
    date     : new Date(2025, 3, 1),

    // CrudManager arranges loading and syncing of data in JSON form from/to a backend
    crudManager : {
        eventStore : {
            // Add app-specific data fields of our Events
            fields : [
                { name : 'value', type : 'int' },
                { name : 'travelTime', type : 'int' },
                { name : 'address' }
            ]
        },
        autoLoad : true,
        loadUrl  : 'data/data.json'
    },

    resourceImagePath : '../_shared/images/users/',
    multiEventSelect  : true,

    modeDefaults : {
        // Uncomment to save a little space by hiding weekends.
        // hideNonWorkingDays : true,

        // Slightly larger time axis ticks
        hourHeightBreakpoints : [140, 300, 500, 1000],

        dayStartTime   : 8,
        dayEndTime     : 18,
        hourHeight     : 70,
        dashedSubticks : true,

        // We're using same-day events only
        showAllDayHeader : false,

        // Demo uses more padding than default and shows an address, switch to the short event duration "earlier" to fit contents
        shortEventDuration : '30 min',

        // No whitespace clickable gutter on right of day columns
        eventLayout : {
            gutterWidth : 0
        },

        // This callback gets the DomConfig object that creates the event block
        // We add an element to show the drive time.
        eventRenderer : 'up.renderEventWithAddress'
    },
    mode  : 'dayresource',
    modes : {
        dayresource : {
            // Configure a nice min-width for the resource columns
            minResourceWidth : '180px',
            allDayEvents     : {
                resourceHeaderExtraRenderer : 'up.renderResourceAppointmentSummary'
            }
        }
    },

    tbar : {
        items : {
            viewWidth : {
                type        : 'slider',
                label       : 'Resource width',
                weight      : 640,
                min         : 180,
                max         : 300,
                value       : 180,
                width       : 250,
                showValue   : false,
                showTooltip : false,
                onInput     : 'up.onDayResourceWidthChanged'
            }
        }
    },

    features : {
        timeRanges   : true,
        eventTooltip : false,
        eventBuffer  : {
            renderer : 'up.driveTimeRenderer'
        },

        eventEdit : {
            items : {
                // Knock the "all day" option out of the event editor.
                // It's not relevant in this app.
                allDay : null,
                value  : {
                    type   : 'number',
                    step   : 10,
                    label  : 'Value',
                    name   : 'value',
                    // Insert just before start time which is at 300
                    weight : 290
                },
                address : {
                    type   : 'text',
                    label  : 'Address',
                    name   : 'address',
                    weight : 291
                },
                preamble : {
                    type   : 'durationfield',
                    step   : 5,
                    label  : 'Travel time',
                    name   : 'preamble',
                    weight : 292
                }
            }
        }
    },

    sidebar : {
        // Existing sidebar widgets can be customized and extra UI Widgets can be easily added too
        items : {
            datePicker : {
                multiSelect : true,
                activeDate  : new Date(2025, 3, 3),
                // Select a few interesting dates initially
                selection   : [
                    '2025-04-01',
                    '2025-04-02',
                    '2025-04-04',
                    '2025-04-07',
                    '2025-04-08'
                ],
                tbar : {
                    // Hide the next/prev year buttons for a bit cleaner UI
                    items : {
                        prevYear  : null,
                        nextYear  : null,
                        prevMonth : {
                            weight : 350
                        }
                    }
                }
            },
            resourceFilter : {
                title            : 'Technicians',
                useResourceColor : false,
                minHeight        : '22em',
                // initially select two team members
                selected         : [2, 3]
            }
        }
    },

    // Render some extra summary content in the area below each resource header.
    renderResourceAppointmentSummary(resource, { resourceDayEvents, key }) {
        const
            [dayValue, dayTravelTime] = resourceDayEvents.reduce((v, eventRecord) => {
                v[0] += eventRecord.value || 0;
                v[1] += DateHelper.as('m', Duration.from(eventRecord.preamble || 0));
                return v;
            }, [0, 0]);

        return `
            <div class="header">Appointments</div>
            <div class="value appointments">${resourceDayEvents.length}</div>
            <div class="header">Route Value</div>
            <div class="value dayValue">$${dayValue}</div>
            <div class="header">Travel Time</div>
            <div class="value travelTime">${DateHelper.format(new Date(2024, 0, 1, 0, dayTravelTime), 'H:mm') || ''}</div>
        `;
    },

    driveTimeRenderer({ eventRecord, preambleConfig }) {
        if (eventRecord.preamble) {
            // Parse a "30min"/"2 hour"/"3600 sec" string into a Duration which can be evaluated as minutes
            const minutes = DateHelper.as('m', Duration.from(eventRecord.preamble));

            preambleConfig.tooltip = `${minutes} min drive time`;
            preambleConfig.text = `${minutes} min`;
            preambleConfig.icon = 'b-fa b-fa-car';
        }
    },

    renderEventWithAddress({ view, eventRecord, renderData }) {
        if (view.isDayView) {
            if (eventRecord.address) {
                return [
                    {
                        class : 'b-event-name',
                        text  : eventRecord.name
                    },
                    eventRecord.address ? {
                        class    : 'b-address-ct',
                        children : [
                            {
                                tag       : 'i',
                                className : 'b-fa b-fa-location-dot'
                            },
                            eventRecord.address
                        ]
                    } : undefined
                ];
            }
        }
    },

    onDayResourceWidthChanged({ value }) {
        if (this.mode === 'dayresource') {
            this.activeView.minResourceWidth = `${value}px`;
        }
    },

    // This callback is called every time after the calendar mode changes (day, week, month etc.)
    onActiveItemChange() {
        this.eventSummaryPopup.hide();
    }
});

// Create a custom Summary popup shown when clicking one or multiple events (see code in ./lib/EventSummaryPopup.js)
calendar.eventSummaryPopup = new EventSummaryPopup({ calendar });
