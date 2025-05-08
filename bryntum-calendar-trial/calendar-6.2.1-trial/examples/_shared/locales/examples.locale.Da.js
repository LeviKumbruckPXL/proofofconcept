import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Da.js';
import './shared.locale.Da.js';

const locale = {

    localeName : 'Da',
    localeDesc : 'Dansk',
    localeCode : 'da',
    localeRtl  : false,

    Column : {
        Completed          : 'Afsluttet',
        Duration           : 'Varighed',
        'In progress'      : 'I gang',
        Name               : 'Navn',
        'Not started'      : 'Ikke startet',
        'Staff/Resource'   : 'Personale/Ressource',
        'Unassigned tasks' : 'Ufordelte opgaver'
    },

    Button : {
        Actions              : 'Handlinger',
        Agenda               : 'Dagsorden',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Aug',
        Cancel               : 'Annuller',
        Create               : 'Opret',
        Day                  : 'Dag',
        'Day Agenda'         : 'Dagsorden for dagen',
        'Day resources'      : 'Dagsressourcer',
        Dec                  : 'Dec',
        Delete               : 'Slet',
        Dualdayview          : 'Dobbelt dagsvisning',
        'Export to Excel'    : 'Eksporter til Excel',
        Feb                  : 'Feb',
        February             : 'Februar',
        'Grouped by day'     : 'Grupperet efter dag',
        'Grouped by station' : 'Grupperet efter station',
        Jan                  : 'Jan',
        January              : 'Januar',
        Jul                  : 'Jul',
        July                 : 'Juli',
        Jun                  : 'Jun',
        June                 : 'Juni',
        List                 : 'Liste',
        Mar                  : 'Mar',
        March                : 'Marts',
        May                  : 'Maj',
        Month                : 'Måned',
        'Multi Days'         : 'Flere dage',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktober',
        Print                : 'Udskriv',
        Reload               : 'Genindlæs',
        'Reset database'     : 'Nulstil database',
        'Reset to default'   : 'Nulstil til standard',
        Resourceview         : 'Ressourcevisning',
        Save                 : 'Gem',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Tidslinje',
        Today                : 'I dag',
        'Two weeks'          : 'To uger',
        Week                 : 'Uge',
        'Week Agenda'        : 'Ugens dagsorden',
        Weekends             : 'Weekender',
        Year                 : 'År',
        'Zoom to events'     : 'Zoom til begivenheder'
    },

    Checkbox : {
        'Custom styles'                   : 'Brugerdefinerede stilarter',
        'Fit events'                      : 'Tilpas begivenheder',
        'Fit timeline to available space' : 'Tilpas tidslinje til tilgængelig plads',
        'Full width'                      : 'Fuld bredde',
        'Hide borders'                    : 'Skjul kanter',
        'Hide empty hours'                : 'Skjul tomme timer',
        'Hide time axes'                  : 'Skjul tidsakser',
        'Hide unscheduled resources'      : 'Skjul ikke-planlagte ressourcer',
        'Hide weekends'                   : 'Skjul weekender',
        'On top'                          : 'Øverst',
        'Show avatar'                     : 'Vis avatar',
        'Show core hours in day'          : 'Vis kernearbejdstimer i dag',
        'Show time'                       : 'Vis tid',
        'Stack events vertically'         : 'Stable begivenheder lodret',
        'Sync hour heights'               : 'Synkroniser timehøjder'
    },

    Slider : {
        'Hour height'    : 'Timehøjde',
        'Resource width' : 'Ressourcebredde',
        Scale            : 'Skala'
    },

    Combo : {
        'Choose show' : 'Vælg show',
        Equipment     : 'Udstyr',
        'Timezone:'   : 'Tidszone:'
    },

    Label : {
        Days             : 'Dage',
        Months           : 'Måneder',
        'Resource width' : 'Ressourcebredde'
    },

    NumberField : {
        Every                      : 'Hver',
        'Max events per cell'      : 'Maksimale begivenheder pr. celle',
        'Scroll to hour'           : 'Rul til time',
        'Snap increment (minutes)' : 'Snap-interval (minutter)'
    },

    TextField : {
        'Filter resources'  : 'Filtrer ressourcer',
        Name                : 'Navn',
        'Type to filter...' : 'Skriv for at filtrere...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Begivenheder vil blive tilpasset ved navigation, når markeret',
        'Fit events within scroll range'                                      : 'Tilpas begivenheder inden for rulleområdet',
        Friday                                                                : 'Fredag',
        Monday                                                                : 'Mandag',
        'Print the currently active view'                                     : 'Udskriv den aktuelt aktive visning',
        Saturday                                                              : 'Lørdag',
        'Select admin mode to allow editing and rescheduling of performances' : 'Vælg admin-tilstand for at tillade redigering og omlægning af forestillinger',
        Settings                                                              : 'Indstillinger',
        'Show the weekends'                                                   : 'Vis weekenderne',
        Sunday                                                                : 'Søndag',
        Thursday                                                              : 'Torsdag',
        Tuesday                                                               : 'Tirsdag',
        Wednesday                                                             : 'Onsdag'
    },

    SlideToggle : {
        'Hide completed' : 'Skjul afsluttede'
    }
};

export default LocaleHelper.publishLocale(locale);
