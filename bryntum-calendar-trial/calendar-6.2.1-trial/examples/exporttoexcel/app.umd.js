var {
    WriteExcelFileProvider,
    Calendar
} = bryntum.calendar;
const calendar = new Calendar({
    appendTo    : 'container',
    // Start life looking at this date
    date        : new Date(2024, 3, 1),
    // Set the initial mode ("day", "week", "month", "year" etc)
    mode        : 'week',
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad : true,
        loadUrl  : 'data/data.json'
    },
    tbar : {
        items : {
            export : {
                type     : 'button',
                weight   : 100,
                text     : 'Export to Excel',
                icon     : 'b-fa-file-excel',
                onAction : () => calendar.features.excelExporter.export({
                    filename       : 'Calendar-events',
                    exporterConfig : {
                        // Choose the Resource fields to include in the exported file
                        resourceColumns : [{
                            text  : 'Staff',
                            field : 'name'
                        }],
                        // Choose the Event fields to include in the exported file
                        eventColumns : [{
                            text  : 'Task',
                            field : 'name',
                            width : 200
                        }, {
                            text  : 'Starts',
                            field : 'startDate',
                            width : 200
                        }, {
                            text  : 'Ends',
                            field : 'endDate',
                            width : 200
                        }]
                    }
                })
            }
        }
    },
    features : {
        excelExporter : {
            // Choose the date format for date fields
            dateFormat  : null,
            xlsProvider : WriteExcelFileProvider
        }
    }
});
