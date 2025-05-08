import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/SvSE.js';
import './shared.locale.SvSE.js';

const locale = {

    localeName : 'SvSE',
    localeDesc : 'Svenska',
    localeCode : 'sv-SE',
    localeRtl  : false,

    Column : {
        Completed          : 'Avslutad',
        Duration           : 'Varaktighet',
        'In progress'      : 'Pågår',
        Name               : 'Namn',
        'Not started'      : 'Inte startad',
        'Staff/Resource'   : 'Personal/Resurs',
        'Unassigned tasks' : 'Oallokerade uppgifter'
    },

    Button : {
        Actions              : 'Åtgärder',
        Agenda               : 'Agenda',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Aug',
        Cancel               : 'Avbryt',
        Create               : 'Skapa',
        Day                  : 'Dag',
        'Day Agenda'         : 'Dagsagenda',
        'Day resources'      : 'Dagsresurser',
        Dec                  : 'Dec',
        Delete               : 'Radera',
        Dualdayview          : 'Dubbel dagsvy',
        'Export to Excel'    : 'Exportera till Excel',
        Feb                  : 'Feb',
        February             : 'Februari',
        'Grouped by day'     : 'Grupperad per dag',
        'Grouped by station' : 'Grupperad per station',
        Jan                  : 'Jan',
        January              : 'Januari',
        Jul                  : 'Jul',
        July                 : 'Juli',
        Jun                  : 'Jun',
        June                 : 'Juni',
        List                 : 'Lista',
        Mar                  : 'Mar',
        March                : 'Mars',
        May                  : 'Maj',
        Month                : 'Månad',
        'Multi Days'         : 'Flera dagar',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktober',
        Print                : 'Skriv ut',
        Reload               : 'Ladda om',
        'Reset database'     : 'Återställ databas',
        'Reset to default'   : 'Återställ till standard',
        Resourceview         : 'Resursvy',
        Save                 : 'Spara',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Tidslinje',
        Today                : 'Idag',
        'Two weeks'          : 'Två veckor',
        Week                 : 'Vecka',
        'Week Agenda'        : 'Veckoagenda',
        Weekends             : 'Helger',
        Year                 : 'År',
        'Zoom to events'     : 'Zooma till händelser'
    },

    Checkbox : {
        'Custom styles'                   : 'Anpassade stilar',
        'Fit events'                      : 'Anpassa händelser',
        'Fit timeline to available space' : 'Anpassa tidslinje till tillgängligt utrymme',
        'Full width'                      : 'Full bredd',
        'Hide borders'                    : 'Dölj gränser',
        'Hide empty hours'                : 'Dölj tomma timmar',
        'Hide time axes'                  : 'Dölj tidsaxlar',
        'Hide unscheduled resources'      : 'Dölj oschemalagda resurser',
        'Hide weekends'                   : 'Dölj helger',
        'On top'                          : 'Överst',
        'Show avatar'                     : 'Visa avatar',
        'Show core hours in day'          : 'Visa kärntimmar på dagen',
        'Show time'                       : 'Visa tid',
        'Stack events vertically'         : 'Stapla händelser vertikalt',
        'Sync hour heights'               : 'Synkronisera timhöjder'
    },

    Slider : {
        'Hour height'    : 'Timhöjd',
        'Resource width' : 'Resursbredd',
        Scale            : 'Skala'
    },

    Combo : {
        'Choose show' : 'Välj show',
        Equipment     : 'Utrustning',
        'Timezone:'   : 'Tidszon:'
    },

    Label : {
        Days             : 'Dagar',
        Months           : 'Månader',
        'Resource width' : 'Resursbredd'
    },

    NumberField : {
        Every                      : 'Varje',
        'Max events per cell'      : 'Max händelser per cell',
        'Scroll to hour'           : 'Rulla till timme',
        'Snap increment (minutes)' : 'Snäppökning (minuter)'
    },

    TextField : {
        'Filter resources'  : 'Filtrera resurser',
        Name                : 'Namn',
        'Type to filter...' : 'Skriv för att filtrera...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Händelser kommer att anpassas vid navigering när den är markerad',
        'Fit events within scroll range'                                      : 'Anpassa händelser inom rullningsområdet',
        Friday                                                                : 'Fredag',
        Monday                                                                : 'Måndag',
        'Print the currently active view'                                     : 'Skriv ut den för närvarande aktiva vyn',
        Saturday                                                              : 'Lördag',
        'Select admin mode to allow editing and rescheduling of performances' : 'Välj administratörsläge för att tillåta redigering och omplanering av föreställningar',
        Settings                                                              : 'Inställningar',
        'Show the weekends'                                                   : 'Visa helgerna',
        Sunday                                                                : 'Söndag',
        Thursday                                                              : 'Torsdag',
        Tuesday                                                               : 'Tisdag',
        Wednesday                                                             : 'Onsdag'
    },

    SlideToggle : {
        'Hide completed' : 'Dölj avslutad'
    }
};

export default LocaleHelper.publishLocale(locale);
