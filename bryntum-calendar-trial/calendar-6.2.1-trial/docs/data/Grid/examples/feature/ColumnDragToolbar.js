targetElement.innerHTML = '<p>Drag a column header down to show the ColumnDragToolbar</p>';
const grid = new Grid({
    appendTo : targetElement,

    // makes grid as high as it needs to be to fit rows
    autoHeight : true,

    features : {
        // this feature is enabled by default,
        // so no need for this unless you have changed defaults
        columnDragToolbar : true,

        // disabling sort to limit amount of buttons in the toolbar,
        // since this demo has limited space
        sort : false
    },

    data : DataGenerator.generateData(5),

    columns : [
        { field : 'name', text : 'Name', flex : 1 },
        { field : 'city', text : 'City', flex : 1 }
    ]
});
