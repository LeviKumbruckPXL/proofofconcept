import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/En.js';
import './shared.locale.En.js';

const locale = {

    localeName : 'En',
    localeDesc : 'English (US)',
    localeCode : 'en-US',
    localeRtl  : false,

    Column : {
        Completed          : 'Completed',
        Duration           : 'Duration',
        'In progress'      : 'In progress',
        Name               : 'Name',
        'Not started'      : 'Not started',
        'Staff/Resource'   : 'Staff/Resource',
        'Unassigned tasks' : 'Unassigned tasks'
    },

    Button : {
        Actions              : 'Actions',
        Agenda               : 'Agenda',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Aug',
        Cancel               : 'Cancel',
        Create               : 'Create',
        Day                  : 'Day',
        'Day Agenda'         : 'Day Agenda',
        'Day resources'      : 'Day resources',
        Dec                  : 'Dec',
        Delete               : 'Delete',
        Dualdayview          : 'Dualdayview',
        'Export to Excel'    : 'Export to Excel',
        Feb                  : 'Feb',
        February             : 'February',
        'Grouped by day'     : 'Grouped by day',
        'Grouped by station' : 'Grouped by station',
        Jan                  : 'Jan',
        January              : 'January',
        Jul                  : 'Jul',
        July                 : 'July',
        Jun                  : 'Jun',
        June                 : 'June',
        List                 : 'List',
        Mar                  : 'Mar',
        March                : 'March',
        May                  : 'May',
        Month                : 'Month',
        'Multi Days'         : 'Multi Days',
        Nov                  : 'Nov',
        Oct                  : 'Oct',
        October              : 'October',
        Print                : 'Print',
        Reload               : 'Reload',
        'Reset database'     : 'Reset database',
        'Reset to default'   : 'Reset to default',
        Resourceview         : 'Resourceview',
        Save                 : 'Save',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Timeline',
        Today                : 'Today',
        'Two weeks'          : 'Two weeks',
        Week                 : 'Week',
        'Week Agenda'        : 'Week Agenda',
        Weekends             : 'Weekends',
        Year                 : 'Year',
        'Zoom to events'     : 'Zoom to events'
    },

    Checkbox : {
        'Custom styles'                   : 'Custom styles',
        'Fit events'                      : 'Fit events',
        'Fit timeline to available space' : 'Fit timeline to available space',
        'Full width'                      : 'Full width',
        'Hide borders'                    : 'Hide borders',
        'Hide empty hours'                : 'Hide empty hours',
        'Hide time axes'                  : 'Hide time axes',
        'Hide unscheduled resources'      : 'Hide unscheduled resources',
        'Hide weekends'                   : 'Hide weekends',
        'On top'                          : 'On top',
        'Show avatar'                     : 'Show avatar',
        'Show core hours in day'          : 'Show core hours in day',
        'Show time'                       : 'Show time',
        'Stack events vertically'         : 'Stack events vertically',
        'Sync hour heights'               : 'Sync hour heights'
    },

    Slider : {
        'Hour height'    : 'Hour height',
        'Resource width' : 'Resource width',
        Scale            : 'Scale'
    },

    Combo : {
        'Choose show' : 'Choose show',
        Equipment     : 'Equipment',
        'Timezone:'   : 'Timezone:'
    },

    Label : {
        Days             : 'Days',
        Months           : 'Months',
        'Resource width' : 'Resource width'
    },

    NumberField : {
        Every                      : 'Every',
        'Max events per cell'      : 'Max events per cell',
        'Scroll to hour'           : 'Scroll to hour',
        'Snap increment (minutes)' : 'Snap increment (minutes)'
    },

    TextField : {
        'Filter resources'  : 'Filter resources',
        Name                : 'Name',
        'Type to filter...' : 'Type to filter...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Events will be fitted upon navigation when checked',
        'Fit events within scroll range'                                      : 'Fit events within scroll range',
        Friday                                                                : 'Friday',
        Monday                                                                : 'Monday',
        'Print the currently active view'                                     : 'Print the currently active view',
        Saturday                                                              : 'Saturday',
        'Select admin mode to allow editing and rescheduling of performances' : 'Select admin mode to allow editing and rescheduling of performances',
        Settings                                                              : 'Settings',
        'Show the weekends'                                                   : 'Show the weekends',
        Sunday                                                                : 'Sunday',
        Thursday                                                              : 'Thursday',
        Tuesday                                                               : 'Tuesday',
        Wednesday                                                             : 'Wednesday'
    },

    SlideToggle : {
        'Hide completed' : 'Hide completed'
    }
};

export default LocaleHelper.publishLocale(locale);
