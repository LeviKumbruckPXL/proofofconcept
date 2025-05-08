new Sidebar({
    appendTo : targetElement,
    height   : 500,
    width    : 400,
    items    : {
        // You can add new widgets to the side bar easily (as well as hide or customize built-in ones)
        project : {
            type   : 'combo',
            label  : 'Project',
            weight : 197,
            items  : [
                'Horizon Estates',
                'Harbor View Condos',
                'Apex Avenue'
            ]
        }
    },
    bbar : [
        {
            text : 'Custom button',
            onClick() {
                Toast.show('You clicked the button');
            }
        }
    ]
});
