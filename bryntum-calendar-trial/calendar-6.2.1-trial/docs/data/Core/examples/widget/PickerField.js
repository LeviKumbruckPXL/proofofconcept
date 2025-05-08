const field = new PickerField({
    appendTo : targetElement,
    picker   : {
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
    },

    onPickerClick({ selection, source }) {
        this.value = source.text;
        this.picker.hide();
    },

    onCloseClick() {
        this.hidePicker();
    }
});
