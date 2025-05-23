const grid = new Grid({
    appendTo : targetElement,

    autoHeight : true,

    columns : [
        { field : 'name', text : 'Name', flex : 1 },
        { field : 'city', text : 'City', flex : 1 },
        {
            type       : 'number',
            field      : 'age',
            text       : 'Age',
            flex       : 1,
            htmlEncode : false,
            renderer   : ({ value }) => {
                if (value > 30) {
                    return `<span style="color: red; font-weight: bold">${value}</span>`;
                }
                return value;
            }
        }
    ],

    data : [
        { id : 1, name : 'Dan Stevenson', city : 'Los Angeles', age : 24 },
        { id : 2, name : 'Talisha Babin', city : 'Paris', age : 27 },
        { id : 3, name : 'Maxim Gagarin', city : 'Montreal', age : 34 },
        { id : 4, name : 'Linda Johansson', city : 'Stockholm', age : 29 }
    ],

    // Declarative listener
    listeners : {
        cellClick({ record, column }) {
            Toast.show(`Clicked ${record[column.field]}`);
        }
    }
});

// Programmatic listener
grid.on('beforeColumnDragStart', ({ column }) => {
    Toast.show(`Dragging ${column.text}`);
});
