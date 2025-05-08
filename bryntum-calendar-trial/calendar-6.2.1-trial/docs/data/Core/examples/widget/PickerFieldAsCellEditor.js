class PriorityField extends PickerField {
    static $name = 'PriorityField';

    static alias = 'priority';

    static configurable = {
        picker : {
            type         : 'panel',
            scrollAction : 'realign',
            height       : '20em',
            width        : '20em',
            layout       : {
                type : 'vbox',
                gap  : 10
            },
            align : {
                align    : 't0-b0',
                axisLock : true
            },

            items : [
                {
                    type    : 'button',
                    text    : 'High',
                    onClick : 'up.onPickerClick',
                    cls     : 'b-raised b-red'
                },
                {
                    type    : 'button',
                    text    : 'Medium',
                    onClick : 'up.onPickerClick',
                    cls     : 'b-raised b-blue'
                },
                {
                    type    : 'button',
                    text    : 'Low',
                    onClick : 'up.onPickerClick',
                    cls     : 'b-raised b-gray'
                }
            ],

            bbar : [
                {
                    text    : 'Close',
                    cls     : 'b-raised b-blue',
                    onClick : 'up.onCloseClick'
                }
            ],
            html : '<strong> Select priority</strong>'
        },
        triggers : {
            expand : {
                cls     : 'b-fa b-fa-arrow-down',
                handler : 'onTriggerClick',
                weight  : 200
            }
        }
    };

    onPickerClick({ selection, source }) {
        this.value = source.text;
        this.picker.hide();
    }

    onCloseClick() {
        this.hidePicker();
    }
}

PriorityField.initClass();

// grid with basic configuration
const grid = new Grid({
    // makes grid as high as it needs to be to fit rows
    autoHeight : true,
    appendTo   : targetElement,
    columns    : [
        { text : 'Id', field : 'id', width : 40, editor : false },
        { text : 'Task', field : 'name', width : 150 },
        {
            text   : 'Priority',
            field  : 'prio',
            editor : 'priority'
        },
        { text : 'Notes', field : 'notes' }
    ],

    data : [
        { id : 1, name : 'Cook eggs', prio : 'High' },
        { id : 2, name : 'Fry bacon', prio : 'Medium' },
        { id : 3, name : 'Make salad', prio : 'Low' }
    ]
});
