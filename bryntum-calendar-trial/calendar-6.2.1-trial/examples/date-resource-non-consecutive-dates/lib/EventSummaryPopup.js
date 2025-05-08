import Popup from '../../../lib/Core/widget/Popup.js';
import DomSync from '../../../lib/Core/helper/DomSync.js';
import MessageDialog from '../../../lib/Core/widget/MessageDialog.js';

// A custom popup shown on event click, which includes a summary of the currently selected events and a button
// letting user perform actions on the selection
export default class EventSummaryPopup extends Popup {
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
