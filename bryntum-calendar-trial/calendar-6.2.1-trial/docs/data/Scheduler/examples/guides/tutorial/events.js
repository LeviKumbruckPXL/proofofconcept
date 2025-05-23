const scheduler = new Scheduler({
    // Where to render to, accepts an element or an element id
    appendTo : targetElement,

    // Normally sizing would be handled by CSS, but for simplicity
    // we use fixed with and height for the tutorial
    // (commented out since docs browser handle sizing)
    // width : 800,
    height : 250,

    // Dates that the time axis will span
    startDate : '2023-04-16',
    endDate   : '2023-05-15',

    // Configure Scheduler features
    features : {
        // Turn on the Strip feature, to stripe even rows
        stripe : true
    },

    // Columns in the grid part
    columns : [
        {
            field : 'name',
            text  : 'Name'
        }, {
            field : 'role',
            text  : 'Role'
        }
    ],

    // CrudManager handles data loading (and syncing, but not in this example)
    crudManager : {
        loadUrl   : 'data/Scheduler/examples/guides/tutorial/data.json',
        autoLoad  : true,
        listeners : {
            // Listener for the `hasChanges` event, triggered when any store handled
            // by the crud manager has changes
            hasChanges() {
                console.dir(scheduler.crudManager.changes);
            }
        }
    },

    // Declarative listener
    listeners : {
        eventClick({ eventRecord }) {
            Toast.show(`Clicked ${eventRecord.name}`);
        }
    }
});

// Programmatic listener
scheduler.on('beforeEventEdit', ({ eventRecord }) => {
    Toast.show(`Editing ${eventRecord.name}`);
});
