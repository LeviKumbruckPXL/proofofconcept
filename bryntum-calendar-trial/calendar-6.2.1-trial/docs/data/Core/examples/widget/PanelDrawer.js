const button = new Button({
    appendTo : targetElement,
    text     : 'Show drawer',
    onClick() {
        const panel = new Panel({
            drawer : {
                side : 'end'
            },
            title       : 'Settings',
            rootElement : document.body,
            width       : 400,
            items       : [
                { type : 'text', label : 'Name' },
                { type : 'text', label : 'Email' },
                { type : 'text', label : 'Phone' },
                { type : 'text', label : 'Address' }
            ],
            bbar : {
                items : {
                    close : {
                        text    : 'Close',
                        icon    : 'b-fa b-fa-times',
                        onClick : () => {
                            panel.hide();
                        }
                    }
                }
            }
        });

        panel.show();
    }
});
