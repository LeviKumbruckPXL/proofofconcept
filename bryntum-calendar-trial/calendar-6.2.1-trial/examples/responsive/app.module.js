import { Calendar } from '../../build/calendar.module.js';
import shared from '../_shared/shared.module.js';

let calendar;

calendar = new Calendar({
    // Start life looking at this date
    date     : new Date(2023, 5, 12),
    appendTo : 'container',

    tbar : {
        items : {
            responsiveSizePicker : {
                weight     : 650,
                width      : '11ch',
                type       : 'combo',
                editable   : false,
                valueField : 'value',
                ariaLabel  : 'Responsive size',
                store      : {
                    data : [
                        { id : 0, value : 'small',  text : 'Small' },
                        { id : 1, value : 'medium', text : 'Medium' },
                        { id : 2, value : 'large',  text : 'Normal' }
                    ],
                    filters : {
                        filterBy : rec => {
                            if (calendar) {
                                const
                                    { responsive } = calendar,
                                    uiWidth        = calendar.element.parentElement.offsetWidth,
                                    state          = uiWidth <= responsive.small.when ? 0
                                        : uiWidth <= responsive.medium.when ? 1 : 2;
                                return rec.id <= state;
                            }
                            return true;
                        }
                    }
                },
                listeners : {
                    change : 'up.onResponsivePickerChange'
                }
            }
        }
    },

    listeners : {
        responsiveStateChange : 'onResponsiveStateChange'
    },

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },

    onResponsiveStateChange({ state }) {
        this.widgetMap.responsiveSizePicker.value = state;
    },

    onResponsivePickerChange({ userAction, value }) {
        if (userAction) {
            const newWidth = calendar.responsive[value].when;

            this.maxWidth = newWidth ? `${newWidth}px` : '100%';
        }
    }
});
