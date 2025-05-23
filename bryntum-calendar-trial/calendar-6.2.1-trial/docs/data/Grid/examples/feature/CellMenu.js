// grid with ContextMenu feature
const grid = new Grid({
    appendTo : targetElement,

    // makes grid as high as it needs to be to fit rows
    autoHeight : true,

    features : {
        // this feature is enabled by default,
        // so no need for this unless you have changed defaults
        cellMenu : true
    },

    data : DataGenerator.generateData(5),

    columns : [
        { field : 'name', text : 'Name', flex : 1 },
        { field : 'score', text : 'Score', flex : 1 },
        {
            type    : 'action',
            actions : [
                {
                    cls : 'b-icon b-fa-ellipsis-h',
                    onClick({ record, target, column, grid }) {
                        grid.features.cellMenu.showMenuFor({ record, column }, { targetElement : target });
                    }
                }
            ]
        }
    ]
});
