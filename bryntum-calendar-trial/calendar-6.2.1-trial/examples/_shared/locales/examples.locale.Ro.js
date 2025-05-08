import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ro.js';
import './shared.locale.Ro.js';

const locale = {

    localeName : 'Ro',
    localeDesc : 'Română',
    localeCode : 'ro',
    localeRtl  : false,

    Column : {
        Completed          : 'Finalizat',
        Duration           : 'Durată',
        'In progress'      : 'În desfășurare',
        Name               : 'Nume',
        'Not started'      : 'Neînceput',
        'Staff/Resource'   : 'Personal/Resursă',
        'Unassigned tasks' : 'Sarcini nealocate'
    },

    Button : {
        Actions              : 'Acțiuni',
        Agenda               : 'Agendă',
        Apr                  : 'Apr',
        April                : 'Aprilie',
        Aug                  : 'Aug',
        Cancel               : 'Anulează',
        Create               : 'Creează',
        Day                  : 'Zi',
        'Day Agenda'         : 'Agendă zilnică',
        'Day resources'      : 'Resurse zilnice',
        Dec                  : 'Dec',
        Delete               : 'Șterge',
        Dualdayview          : 'Vizualizare dublă zi',
        'Export to Excel'    : 'Exportă în Excel',
        Feb                  : 'Feb',
        February             : 'Februarie',
        'Grouped by day'     : 'Grupat pe zi',
        'Grouped by station' : 'Grupat pe stație',
        Jan                  : 'Ian',
        January              : 'Ianuarie',
        Jul                  : 'Iul',
        July                 : 'Iulie',
        Jun                  : 'Iun',
        June                 : 'Iunie',
        List                 : 'Listă',
        Mar                  : 'Mar',
        March                : 'Martie',
        May                  : 'Mai',
        Month                : 'Lună',
        'Multi Days'         : 'Zile multiple',
        Nov                  : 'Nov',
        Oct                  : 'Oct',
        October              : 'Octombrie',
        Print                : 'Printează',
        Reload               : 'Reîncarcă',
        'Reset database'     : 'Resetează baza de date',
        'Reset to default'   : 'Resetează la implicit',
        Resourceview         : 'Vizualizare resurse',
        Save                 : 'Salvează',
        Sep                  : 'Sep',
        September            : 'Septembrie',
        Timeline             : 'Cronologie',
        Today                : 'Astăzi',
        'Two weeks'          : 'Două săptămâni',
        Week                 : 'Săptămână',
        'Week Agenda'        : 'Agendă săptămânală',
        Weekends             : 'Weekenduri',
        Year                 : 'An',
        'Zoom to events'     : 'Zoom la evenimente'
    },

    Checkbox : {
        'Custom styles'                   : 'Stiluri personalizate',
        'Fit events'                      : 'Potrivește evenimentele',
        'Fit timeline to available space' : 'Potrivește cronologia la spațiul disponibil',
        'Full width'                      : 'Lățime completă',
        'Hide borders'                    : 'Ascunde granițele',
        'Hide empty hours'                : 'Ascunde orele goale',
        'Hide time axes'                  : 'Ascunde axele de timp',
        'Hide unscheduled resources'      : 'Ascunde resursele neschedulate',
        'Hide weekends'                   : 'Ascunde weekendurile',
        'On top'                          : 'Deasupra',
        'Show avatar'                     : 'Afișează avatarul',
        'Show core hours in day'          : 'Afișează orele de bază în zi',
        'Show time'                       : 'Afișează ora',
        'Stack events vertically'         : 'Stivuiește evenimentele vertical',
        'Sync hour heights'               : 'Sincronizează înălțimile orelor'
    },

    Slider : {
        'Hour height'    : 'Înălțimea orei',
        'Resource width' : 'Lățime resurse',
        Scale            : 'Scară'
    },

    Combo : {
        'Choose show' : 'Alege spectacol',
        Equipment     : 'Echipament',
        'Timezone:'   : 'Fus orar:'
    },

    Label : {
        Days             : 'Zile',
        Months           : 'Luni',
        'Resource width' : 'Lățimea resursei'
    },

    NumberField : {
        Every                      : 'Fiecare',
        'Max events per cell'      : 'Maxim evenimente per celulă',
        'Scroll to hour'           : 'Derulează la oră',
        'Snap increment (minutes)' : 'Incrementare rapidă (minute)'
    },

    TextField : {
        'Filter resources'  : 'Filtrează resursele',
        Name                : 'Nume',
        'Type to filter...' : 'Tastați pentru a filtra...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Evenimentele vor fi ajustate la navigare când este bifat',
        'Fit events within scroll range'                                      : 'Ajustează evenimentele în intervalul de derulare',
        Friday                                                                : 'Vineri',
        Monday                                                                : 'Luni',
        'Print the currently active view'                                     : 'Printează vizualizarea activă curentă',
        Saturday                                                              : 'Sâmbătă',
        'Select admin mode to allow editing and rescheduling of performances' : 'Selectați modul de administrator pentru a permite editarea și reprogramarea spectacolelor',
        Settings                                                              : 'Setări',
        'Show the weekends'                                                   : 'Afișează weekendurile',
        Sunday                                                                : 'Duminică',
        Thursday                                                              : 'Joi',
        Tuesday                                                               : 'Marți',
        Wednesday                                                             : 'Miercuri'
    },

    SlideToggle : {
        'Hide completed' : 'Ascunde finalizate'
    }
};

export default LocaleHelper.publishLocale(locale);
