import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Lv.js';
import './shared.locale.Lv.js';

const locale = {

    localeName : 'Lv',
    localeDesc : 'Latviešu',
    localeCode : 'lv-LV',
    localeRtl  : false,

    Column : {
        Completed          : 'Pabeigts',
        Duration           : 'Ilgums',
        'In progress'      : 'Procesā',
        Name               : 'Nosaukums',
        'Not started'      : 'Nav sākts',
        'Staff/Resource'   : 'Personāls/Resurss',
        'Unassigned tasks' : 'Nepiešķirtie uzdevumi'
    },

    Button : {
        Actions              : 'Darbības',
        Agenda               : 'Dienas kārtība',
        Apr                  : 'Apr',
        April                : 'Aprīlis',
        Aug                  : 'Aug',
        Cancel               : 'Atcelt',
        Create               : 'Izveidot',
        Day                  : 'Diena',
        'Day Agenda'         : 'Dienas kārtība',
        'Day resources'      : 'Dienas resursi',
        Dec                  : 'Dec',
        Delete               : 'Dzēst',
        Dualdayview          : 'Divu dienu skats',
        'Export to Excel'    : 'Eksportēt uz Excel',
        Feb                  : 'Feb',
        February             : 'Februāris',
        'Grouped by day'     : 'Grupēts pēc dienas',
        'Grouped by station' : 'Grupēts pēc stacijas',
        Jan                  : 'Jan',
        January              : 'Janvāris',
        Jul                  : 'Jul',
        July                 : 'Jūlijs',
        Jun                  : 'Jun',
        June                 : 'Jūnijs',
        List                 : 'Saraksts',
        Mar                  : 'Mar',
        March                : 'Marts',
        May                  : 'May',
        Month                : 'Mēnesis',
        'Multi Days'         : 'Vairākas dienas',
        Nov                  : 'Nov',
        Oct                  : 'Oct',
        October              : 'Oktobris',
        Print                : 'Drukāt',
        Reload               : 'Pārlādēt',
        'Reset database'     : 'Atiestatīt datubāzi',
        'Reset to default'   : 'Atiestatīt uz noklusējumu',
        Resourceview         : 'Resursu skats',
        Save                 : 'Saglabāt',
        Sep                  : 'Sep',
        September            : 'Septembris',
        Timeline             : 'Laika skala',
        Today                : 'Šodien',
        'Two weeks'          : 'Divas nedēļas',
        Week                 : 'Nedēļa',
        'Week Agenda'        : 'Nedēļas kārtība',
        Weekends             : 'Nedēļas nogales',
        Year                 : 'Gads',
        'Zoom to events'     : 'Pietuvināt notikumiem'
    },

    Checkbox : {
        'Custom styles'                   : 'Pielāgoti stili',
        'Fit events'                      : 'Pielāgot notikumus',
        'Fit timeline to available space' : 'Pielāgot laika skalu pieejamai vietai',
        'Full width'                      : 'Pilns platums',
        'Hide borders'                    : 'Slēpt robežas',
        'Hide empty hours'                : 'Slēpt tukšās stundas',
        'Hide time axes'                  : 'Slēpt laika asis',
        'Hide unscheduled resources'      : 'Slēpt neplānotos resursus',
        'Hide weekends'                   : 'Slēpt nedēļas nogales',
        'On top'                          : 'Augšpusē',
        'Show avatar'                     : 'Rādīt avatāru',
        'Show core hours in day'          : 'Rādīt galvenās stundas dienā',
        'Show time'                       : 'Rādīt laiku',
        'Stack events vertically'         : 'Sakraut notikumus vertikāli',
        'Sync hour heights'               : 'Sinhronizēt stundu augstumus'
    },

    Slider : {
        'Hour height'    : 'Stundas augstums',
        'Resource width' : 'Resursu platums',
        Scale            : 'Mērogs'
    },

    Combo : {
        'Choose show' : 'Izvēlieties izrādi',
        Equipment     : 'Aprīkojums',
        'Timezone:'   : 'Laika zona:'
    },

    Label : {
        Days             : 'Dienas',
        Months           : 'Mēneši',
        'Resource width' : 'Resursu platums'
    },

    NumberField : {
        Every                      : 'Katru',
        'Max events per cell'      : 'Maksimālais notikumu skaits šūnā',
        'Scroll to hour'           : 'Ritināt līdz stundai',
        'Snap increment (minutes)' : 'Pielāgot pieaugumu (minūtes)'
    },

    TextField : {
        'Filter resources'  : 'Filtrēt resursus',
        Name                : 'Nosaukums',
        'Type to filter...' : 'Rakstiet, lai filtrētu...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Notikumi tiks pielāgoti navigācijas laikā, kad atzīmēts',
        'Fit events within scroll range'                                      : 'Pielāgot notikumus ritināšanas diapazonā',
        Friday                                                                : 'Piektdiena',
        Monday                                                                : 'Pirmdiena',
        'Print the currently active view'                                     : 'Izdrukāt pašlaik aktīvo skatu',
        Saturday                                                              : 'Sestdiena',
        'Select admin mode to allow editing and rescheduling of performances' : 'Izvēlieties administratora režīmu, lai atļautu rediģēšanu un izrāžu pārplānošanu',
        Settings                                                              : 'Iestatījumi',
        'Show the weekends'                                                   : 'Rādīt nedēļas nogales',
        Sunday                                                                : 'Svētdiena',
        Thursday                                                              : 'Ceturtdiena',
        Tuesday                                                               : 'Otrdiena',
        Wednesday                                                             : 'Trešdiena'
    },

    SlideToggle : {
        'Hide completed' : 'Slēpt pabeigtos'
    }
};

export default LocaleHelper.publishLocale(locale);
