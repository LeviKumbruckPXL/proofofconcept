// grid with CellMenu feature
const grid = new Grid({
    appendTo : targetElement,

    // makes grid as high as it needs to be to fit rows
    autoHeight : true,

    features : {
        // this feature is enabled by default,
        // so no need for this unless you have changed defaults
        cellMenu : true
    },

    data : DataGenerator.generateData(2),

    columns : [
        { field : 'name', text : 'Name (right click)', flex : 1 },
        { field : 'score', text : 'Score', flex : 1 }
    ]
});
