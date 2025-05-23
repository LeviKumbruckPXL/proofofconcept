const panel = new Panel({
    appendTo : targetElement,
    height   : '20em',
    width    : '40em',
    header   : {
        title   : 'Panel header',
        iconCls : 'b-fa b-fa-users'
    },
    tools : {
        destroy : {
            cls : 'b-fa b-fa-times',

            // 'up.' means look in owning widgets.
            // Implemented on the Panel
            handler : 'up.onPanelCloseClick',
            tooltip : 'Close this Panel'
        }
    },
    tbar : {
        items : {
            save : {
                icon    : 'b-fa-save',
                tooltip : 'Save content'
            },
            remove : {
                icon    : 'b-fa-trash',
                tooltip : 'Delete content'
            },
            change : {
                icon    : 'b-fa-arrow-left',
                tooltip : 'Move toolbar',
                onClick : 'up.onChangeButtonClick'
            }
        }
    },
    bbar : {
        items : {
            myButtonRef : {
                text : 'Button in bottom toolbar'
            }
        }
    },
    html : `Bacon ipsum dolor amet flank ribeye ham hock rump, 
        alcatra pork belly pancetta leberkas bacon shoulder 
        meatloaf ball tip pig. Tongue jerky meatloaf pancetta 
        pork sirloin. Hamburger corned beef ball tip cupim 
        sirloin frankfurter tri-tip. Swine kevin ham hock, 
        drumstick flank pig shoulder shankle. Tri-tip pork 
        chop fatback turducken pork salami. Tongue boudin 
        salami flank bacon sirloin`,

    // Close Tool's handler resolved here
    onPanelCloseClick(e, panel) {
        panel.destroy();
    },

    // Change button's onClick handler resolved here
    onChangeButtonClick({ source : button }) {
        const dock = { t : 'left', r : 'top', b : 'right', l : 'bottom' }[this.tbar.dock[0]];

        this.tbar.dock = dock;
        button.icon = `b-fa-arrow-${dock === 'bottom' ? 'right' : 'left'}`;
    }
});
