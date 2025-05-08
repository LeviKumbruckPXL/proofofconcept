CSSHelper.insertRule('.user-panel header  { height:6em; }');
CSSHelper.insertRule('.user-panel header, .user-panel .b-header-title { overflow:visible; }');
CSSHelper.insertRule('.user-panel .b-panel-content { padding-top:0; }');
CSSHelper.insertRule('.user-panel .b-has-label .b-label { font-weight:600; }');
CSSHelper.insertRule(`.verified-badge { 
    position:         absolute;
    top:              7.5em;
    inset-inline-end: .25em;
    color:            rgb(255, 255, 255);
    background:       rgb(34, 150, 243);
    border-radius:    50%;
    display:          flex;
    align-items:      center;
    justify-content:  center;
    width:            1.25em;
    height:           1.25em;
}`);
CSSHelper.insertRule(`.avatar { 
   margin-inline-start: 1em;
   border-radius: 50%;
   width: 6em;
   outline: 3px solid #fff;
   position: relative;
   top: 3em
}`);

const userPanel = new Panel({
    appendTo : targetElement,
    // Panel CSS class applied to the panel element
    cls      : 'user-panel',
    // Optional: set a width or layout if needed
    width    : 600,
    layout   : 'vbox',

    header : {
        height : '5em',
        title  : `<div style="display: inline-flex; position: relative;">
                     <img src="data/Grid/images/users/emilia.jpg" alt="Emilia" class="avatar"/>
                     <span data-btip="Verified user" class="verified-badge">✓</span>
                  </div>`
    },
    // A top toolbar with quick actions (Copy link, View profile)
    tbar : [
        '->',
        {
            type     : 'button',
            text     : 'Copy link',
            cls      : 'b-transparent',
            icon     : 'b-fa b-fa-link',
            onAction : () => {
                // Handler for copying the user’s profile link to clipboard
                Toast.show('Copy link clicked');
            }
        },
        {
            type     : 'button',
            text     : 'View profile',
            cls      : 'b-transparent',
            icon     : 'b-fa b-fa-user',
            onAction : () => {
                // Handler for viewing user profile
                Toast.show('View profile clicked');
            }
        }
    ],

    items : [
        // Container for the form fields (name, email, username)
        {
            type   : 'container',
            layout : {
                type : 'vbox',
                pack : 'start'
            },
            cls   : 'user-form-container',
            items : [
                {
                    type  : 'widget',
                    style : 'flex-direction: column',
                    html  : `
                        <h2 style="margin:0;">Emilia Baker</h2>
                        <div style="color: #777;font-size:.9em">Regional Sales</div>
                    `
                },
                {
                    type   : 'container',
                    layout : 'hbox',
                    style  : 'margin-top: 3em;',
                    items  : [
                        {
                            type  : 'text',
                            label : 'First name',
                            name  : 'firstName',
                            value : 'Emilia',
                            flex  : 1,
                            style : 'margin-right: 10px;'
                        },
                        {
                            type  : 'text',
                            label : 'Last name',
                            name  : 'lastName',
                            value : 'Baker',
                            flex  : 1
                        }
                    ]
                },
                {
                    type  : 'text',
                    label : 'Email address',
                    name  : 'email',
                    value : 'emilia@bigcorp.com'
                },
                {
                    type  : 'text',
                    label : 'Username',
                    name  : 'username',
                    value : 'emilia.baker',
                    flex  : 1
                }
            ]
        }
    ],

    // Bottom toolbar with Delete, Cancel, and Save
    bbar : [
        {
            type  : 'button',
            text  : 'Delete user',
            cls   : 'delete-user-btn',
            style : 'margin-inline-end: auto;', // push to the left
            onAction() {
                // Handler for deleting the user
                Toast.show('Delete user clicked');
            }
        },
        {
            type : 'button',
            text : 'Cancel',
            onAction() {
                // Cancel changes
                Toast.show('Cancel clicked');
            }
        },
        {
            type : 'button',
            cls  : 'b-raised b-blue', // or any styling for primary action
            text : 'Save changes',
            onAction() {
                // Save form changes
                const htmlFormatted = Object.entries(userPanel.values)
                    .map(([key, value]) => `<b>${key}:</b> ${value}<br>`)
                    .join('');
                Toast.show(`Save changes clicked<br>${htmlFormatted}`);
            }
        }
    ]
});
