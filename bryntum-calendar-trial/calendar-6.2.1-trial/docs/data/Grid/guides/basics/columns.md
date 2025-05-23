# Grid columns
This guide describes the basics on how to configure and manipulate grid columns.

## Setting up columns
To configure which columns to use in a Grid you use the grid configurations `columns` property:

```javascript
const grid = new Grid({
    columns : [
        { text : 'Name', field : 'name', flex : 1 },
        { text : 'City', field : 'city', width : 100 }
    ]
});
```

The snippet above shows a grid with two columns using minimal configuration:

* `text`  - Text to display in the column header
* `field` - Data field from which column contents are fetched
* `flex`  - Proportional width, the width remaining after any fixed width columns is shared between flex columns
* `width` - Fixed width, in pixels if nothing else is specified

Result:

<div class="external-example" data-file="Grid/guides/columns/SettingUp1.js"></div>

### Column types
Grid supports different column types. These types affect how data in the column is formatted and edited. You specify
which type a column has in its configuration object:


```javascript
{ type : 'columntype', text : 'Header', ... } 
```

This snippet has one column per type:

```javascript
const grid = new Grid({
    columns : [
        { type : 'rownumber' },
        { type : 'check', text : 'CheckColumn', field : 'done', flex : 1 },
        { type : 'date', text : 'DateColumn', field : 'start', flex : 1 },
        { type : 'number', text : 'NumberColumn', field : 'rank', flex : 1 },
        { type : 'percent', text : 'PercentColumn', field : 'percent', flex : 1 },
        { type : 'rating', text : 'RatingColumn', field : 'rating', flex : 1 },
        { type : 'template', text : 'TemplateColumn', field : 'city', flex : 1, template : ({value}) => `Lives in ${value}`},
        { type : 'widget', text : 'Widget', field : 'color', flex : 1, widgets : [ { type: 'button', cls: 'b-raised b-orange', text : 'Click' }] }
    ]
});
```

Result:

<div class="external-example" data-file="Grid/guides/columns/SettingUp2.js"></div>

To learn more about each column type, please read the API docs for them found under Grid/columns.

### Column settings
Different column types support different settings, but there is a common base for all of them inherited from the class
Column. This list contains some of most common settings that apply to all columns:

| Settings                                                 | Explanation                                                                                                                             |
|----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| [`renderer`](#Grid/column/Column#config-renderer)        | A function that can affect styling and contents of a cell, more information below                                                       |
| [`afterRenderCell`](#Grid/column/Column#config-afterRenderCell) | A function called after a cell has been rendered, use it to style the row, cell or contents |
| [`editor`](#Grid/column/Column#config-editor)            | Type of editor to use when editing cell contents                                                                                        |
| [`align`](#Grid/column/Column#config-align)              | Text align: left, center or right                                                                                                       |
| [`hidden`](#Grid/column/Column#config-hidden)            | Set to true to hide the column initially, can be shown using the column picker                                                          |
| [`locked`](#Grid/column/Column#config-locked)            | Set to true to lock/freeze the column                                                                                                   |
| [`htmlEncode`](#Grid/column/Column#config-htmlEncode)    | Set to false to treat html in the cell content as html and not text                                                                     |
| [`cls`](#Grid/column/Column#config-cls)                  | CSS class to add to this columns header                                                                                                 |
| [`cellCls`](#Grid/column/Column#config-cellCls)          | CSS class to add to each cell in this column                                                                                            |

This snippet shows some of the settings:

```javascript
const grid = new Grid({
    columns : [
        { field : 'firstName', text: 'First name' },
        { field : 'surName', text: 'Surname', hidden: true },
        { field : 'age', text: 'Age', align: 'right' },
        { field : 'city', text: 'City', editor: false }
    ]
});
```
 
Result:
 
<div class="external-example" data-file="Grid/guides/columns/Config.js"></div>

For a complete list of Column configuration settings, see [Column in API docs](#Grid/column/Column).

### Using renderers
Renderers are functions used to determine what is shown in a column. You can define a renderer in your column config:

```javascript
const grid = new Grid({
    columns : [
        { text : 'Name', field : 'name', flex : 1, renderer: ({value}) => value }
    ]
});
```

The renderer defined above only returns the value which it is given (name). Usually you use the renderer to apply some 
formatting or CSS. Because of how the grid is rendered, renderers is the only place where it can be considered safe to
programmatically add styling. A renderer is called with a single parameter having the following properties:

| Parameter     | Explanation                                                                            |
|---------------|----------------------------------------------------------------------------------------|
| `cellElement` | Gives direct access to the cells DOM element, for adding styles or setting CSS classes |
| `value`       | The value which would be displayed in the cell if no renderer was used                 |
| `record`      | The data record for the current row.                                                   |
| `size`        | An object used to control row height, set `size.height` to specify                     |
| `grid`        | Grid instance                                                                          |
| `column`      | Column instance for the current cell                                                   |
| `row`         | Row instance for the current cell. Use the Row's API to manipulate CSS classes         |

This snippet defines a couple of more complex renderers:

```javascript
const grid = new Grid({
    columns : [
        {
            field : 'name',
            text  : 'Name',
            flex  : 1,
            renderer({ cellElement, record, row }) {
                // Add/remove classNames on the row
                row.assignCls({
                    private    : record.access === 'private',
                    deprecated : record.deprecated
                });
                cellElement.style.backgroundColor = record.color;
                cellElement.style.color = '#fff';
                return record.name;
            }
        },
        {
            field      : 'color',
            text       : 'Color',
            flex       : 1,
            htmlEncode : false,
            renderer({ value }) {
                return `
                    <div style="
                        width: 1em;
                        height: 1em;
                        border-radius: 3px;
                        background-color: ${value};
                        margin-right: .5em"></div>
                    ${value}
                `;
            }
        }
    ]
});
```

Result:

<div class="external-example" data-file="Grid/guides/columns/Renderer.js"></div>

If you want to customize the display of predefined columns (such as DateColumn, NumberColumn) but do not want to
affect the output, you can use the `afterRenderCell` method to assign CSS classes to the cell / row.

```javascript
const grid = new Grid({
    columns: [
        {
            text  : 'Date', // Can be any column to style rows
            type  : 'date',
            field : 'date',
            width : 100,
            afterRenderCell({ row, record, cellElement, value }) {
                // Add "past" CSS class to dates in the past
                cellElement.classList.toggle('past', value < Date.now());
            }
        }
    ]
});
```


For more formatting options, check the <a href="../examples/renderers/" target="_blank">renderers demo</a>.

## Manipulating columns
Grid stores it columns as records in a store, allowing for easy reactive manipulation. The store 
(a [ColumnStore](#Grid/data/ColumnStore)) can be accessed using the `grid.columns` property:

```javascript
// The ColumnStore
grid.columns;

// Get first column
const first = grid.columns.first;

// Get column by field
const age = grid.columns.get('age');

// If you are using multiple columns for the same field, it is safer to access them using id
const name = grid.columns.getById('idOfNameColumn');
```

The column records/instances can be used to manipulate the columns. For example:

```javascript
// Change width
grid.columns.first.width = 100;

// Hide a column
ageColumn.hidden = true;
```

For available properties, see [Column in API docs](#Grid/column/Column#properties).


<p class="last-modified">Last modified on 2025-04-23 10:28:41</p>