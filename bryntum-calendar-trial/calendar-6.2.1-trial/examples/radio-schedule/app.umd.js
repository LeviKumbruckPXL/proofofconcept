var {
    Calendar,
    DateHelper
} = bryntum.calendar;
const startDate = '2024-03-03',
    endDate = '2024-03-09',
    calendar = new Calendar({
    // Start life looking at this date
        date : startDate,
        // The Calendar's top toolbar.
        // We can alter its items configuration.
        // In this case, we add some new UI items.
        tbar : {
            items : {
                // A slider controlling hourHeight for all the views.
                // This also responds to hour height changes caused by CTRL+mousewheel zooming.
                hourHeight : {
                    type        : 'slider',
                    label       : 'Time zoom',
                    weight      : 610,
                    min         : 42,
                    max         : 400,
                    value       : 42,
                    width       : 200,
                    showValue   : false,
                    showTooltip : true,
                    onInput     : 'up.onHeightSliderChange'
                },
                // A slider controlling the width of day columns for the views
                // In the dayResourceView, this will be minResourceWidth, in the
                // resourceView, it will be minDayWidth
                dayColumnWidth : {
                    type        : 'slider',
                    label       : 'Day width zoom',
                    weight      : 620,
                    min         : 50,
                    max         : 250,
                    value       : 120,
                    width       : 200,
                    showValue   : false,
                    showTooltip : true,
                    onInput     : 'up.onWidthSliderChange'
                }
            }
        },
        sidebar : {
            items : {
                // A container which encapsulates the start and end input fields
                rangeDisplay : {
                    type     : 'container',
                    weight   : 0,
                    defaults : {
                        editable      : false,
                        format        : 'MMM DD',
                        picker        : null,
                        step          : '1d',
                        labelPosition : 'above',
                        flex          : 1,
                        triggers      : {
                            expand : null
                        },
                        listeners : {
                            change : 'up.onRangeFieldChanged'
                        }
                    },
                    items : {
                        startDate : {
                            label : 'Start',
                            type  : 'datefield',
                            value : startDate
                        },
                        endDate : {
                            label : 'End',
                            type  : 'datefield',
                            value : endDate
                        }
                    }
                },
                datePicker : {
                    type        : 'datepicker',
                    // In this mode, the 'selection' is applied to all modes
                    multiSelect : 'range',
                    selection   : [startDate, endDate],
                    listeners   : {
                        selectionChange : 'up.onDatePickerRangeSelected'
                    }
                },
                resourceFilter : {
                    title     : 'Stations',
                    minHeight : null
                }
            }
        },
        modeDefaults : {
            date             : startDate,
            range            : '1 week',
            dayStartTime     : 5,
            dayEndTime       : 22,
            fitHours         : true,
            // Throttle up the zoom response rate
            zoomOnMouseWheel : 5,
            // Show true calculated height even if it means 1px.
            // User may zoom in to see short events.
            minEventHeight   : 0,
            // No whitespace clickable gutter on right of day columns
            eventLayout      : {
                gutterWidth : 0
            },
            // Date range of the views is independent of the Calendar and is controlled
            // by the special UI we have created in the Sidebar
            syncViewDate               : false,
            // DayResourceView acts on this. When resource column is too narrow, ths text hides
            // and the avatar remains visible.
            hideResourceNameWhenNarrow : true,
            // If it's a ResourceView, defaults for subviews
            view                       : {
                dayStartTime     : 5,
                dayEndTime       : 22,
                zoomOnMouseWheel : 5,
                minEventHeight   : 0,
                fitHours         : true,
                interDayResize   : false,
                interDayDrag     : false,
                listeners        : {
                    layoutUpdate : 'up.onViewLayout'
                }
            },
            listeners : {
                layoutUpdate : 'up.onViewLayout',
                show         : 'up.onViewShow'
            }
        },
        modes : {
            day      : null,
            week     : null,
            month    : null,
            year     : null,
            agenda   : null,
            resource : {
                title : 'Grouped by station',
                view  : {
                    type         : 'dayview',
                    flex         : '1 0 auto',
                    minDayWidth  : 120,
                    allDayEvents : {
                        fullWeek : false
                    },
                    // Drag snap unit. We need one minute accuracy
                    increment      : '1 min',
                    minEventHeight : 10
                }
            },
            dayresource : {
                title            : 'Grouped by day',
                minResourceWidth : 220,
                increment        : '1 min',
                minEventHeight   : 10
            }
        },
        // CrudManager arranges loading and syncing of data in JSON form from/to a web service
        crudManager : {
            loadUrl  : 'data/data.json',
            autoLoad : true
        },
        appendTo : 'container',
        features : {
            // Knock the "all day" option out of the event editor.
            // It's not relevant in this app.
            eventEdit : {
                items : {
                    allDay : null
                }
            }
        },
        onHeightSliderChange({
            value
        }) {
            // All views must be synced with the requested leaf column width.
            // In dayresource, the leaf columns are resources, in resource
            // we use DayView, so leaf columns are days
            this.eachView(v => {
                v.isVisible && v.zoomTo(value);
            });
        },
        onWidthSliderChange({
            value
        }) {
            // All views must be synced with the requested leaf column width.
            // In dayresource, the leaf columns are resources, in resource
            // we use DayView, so leaf columns are days
            calendar.eachView(v => {
                if (v.type === 'dayresource') {
                    v.minResourceWidth = value;
                }
                else {
                    v.view.minDayWidth = value;
                }
            });
        },
        onViewShow({
            source
        }) {
            // Each view maintains its own hourHeight, so keep tbar's slider synced
            this.widgetMap.hourHeight.value = source.hourHeight;
        },
        // DayView and its subclasses fire this. Keep tbar's height slider in sync.
        onViewLayout({
            source
        }) {
            if (source.isVisible) {
                this.widgetMap.hourHeight.value = source.hourHeight;
            }
        },
        // Respond to either of the two DateFields being changed, sync view ranges
        onRangeFieldChanged() {
            const {
                widgetMap
            } = this;

            // Update DatePicker's range.
            // Calendar's Sidebar handles muleiselection change
            widgetMap.datePicker.selection = [widgetMap.startDate.value, widgetMap.endDate.value];
        },
        // When the date picker selects a range, sync view ranges
        onDatePickerRangeSelected({
            selection: [startDate, endDate]
        }) {
            const {
                startDate: startDateField,
                endDate: endDateField
            } = this.widgetMap;

            // Sync field values, but don't fire circular change events
            startDateField.suspendEvents();
            endDateField.suspendEvents();
            startDateField.value = startDate;
            endDateField.value = endDate;
            endDateField.resumeEvents();
            startDateField.resumeEvents();
        }
    });
