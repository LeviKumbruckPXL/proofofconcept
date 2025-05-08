import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/No.js';
import './shared.locale.No.js';

const locale = {

    localeName : 'No',
    localeDesc : 'Norsk',
    localeCode : 'no',
    localeRtl  : false,

    Column : {
        Completed          : 'Fullført',
        Duration           : 'Varighet',
        'In progress'      : 'Pågår',
        Name               : 'Navn',
        'Not started'      : 'Ikke startet',
        'Staff/Resource'   : 'Ansatt/Ressurs',
        'Unassigned tasks' : 'Ufordelte oppgaver'
    },

    Button : {
        Actions              : 'Handlinger',
        Agenda               : 'Agenda',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Aug',
        Cancel               : 'Avbryt',
        Create               : 'Opprett',
        Day                  : 'Dag',
        'Day Agenda'         : 'Dagsorden',
        'Day resources'      : 'Dagsressurser',
        Dec                  : 'Des',
        Delete               : 'Slett',
        Dualdayview          : 'Dobbeldagsvisning',
        'Export to Excel'    : 'Eksporter til Excel',
        Feb                  : 'Feb',
        February             : 'Februar',
        'Grouped by day'     : 'Gruppert etter dag',
        'Grouped by station' : 'Gruppert etter stasjon',
        Jan                  : 'Jan',
        January              : 'Januar',
        Jul                  : 'Jul',
        July                 : 'Juli',
        Jun                  : 'Jun',
        June                 : 'Juni',
        List                 : 'Liste',
        Mar                  : 'Mar',
        March                : 'Mars',
        May                  : 'Mai',
        Month                : 'Måned',
        'Multi Days'         : 'Flere dager',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktober',
        Print                : 'Skriv ut',
        Reload               : 'Last inn på nytt',
        'Reset database'     : 'Tilbakestill database',
        'Reset to default'   : 'Tilbakestill til standard',
        Resourceview         : 'Ressursvisning',
        Save                 : 'Lagre',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Tidslinje',
        Today                : 'I dag',
        'Two weeks'          : 'To uker',
        Week                 : 'Uke',
        'Week Agenda'        : 'Ukens agenda',
        Weekends             : 'Helger',
        Year                 : 'År',
        'Zoom to events'     : 'Zoom til hendelser'
    },

    Checkbox : {
        'Custom styles'                   : 'Egendefinerte stiler',
        'Fit events'                      : 'Tilpass hendelser',
        'Fit timeline to available space' : 'Tilpass tidslinje til tilgjengelig plass',
        'Full width'                      : 'Full bredde',
        'Hide borders'                    : 'Skjul grenser',
        'Hide empty hours'                : 'Skjul tomme timer',
        'Hide time axes'                  : 'Skjul tidsakser',
        'Hide unscheduled resources'      : 'Skjul ikke-planlagte ressurser',
        'Hide weekends'                   : 'Skjul helger',
        'On top'                          : 'På toppen',
        'Show avatar'                     : 'Vis avatar',
        'Show core hours in day'          : 'Vis kjernetimer i dag',
        'Show time'                       : 'Vis tid',
        'Stack events vertically'         : 'Stable hendelser vertikalt',
        'Sync hour heights'               : 'Synkroniser timehøyder'
    },

    Slider : {
        'Hour height'    : 'Timehøyde',
        'Resource width' : 'Ressursbredde',
        Scale            : 'Skala'
    },

    Combo : {
        'Choose show' : 'Velg show',
        Equipment     : 'Utstyr',
        'Timezone:'   : 'Tidssone:'
    },

    Label : {
        Days             : 'Dager',
        Months           : 'Måneder',
        'Resource width' : 'Ressursbredde'
    },

    NumberField : {
        Every                      : 'Hver',
        'Max events per cell'      : 'Maksimalt antall hendelser per celle',
        'Scroll to hour'           : 'Rull til time',
        'Snap increment (minutes)' : 'Snapp økning (minutter)'
    },

    TextField : {
        'Filter resources'  : 'Filtrer ressurser',
        Name                : 'Navn',
        'Type to filter...' : 'Skriv for å filtrere...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Hendelser vil bli tilpasset ved navigering når valgt',
        'Fit events within scroll range'                                      : 'Tilpass hendelser innenfor rulleområdet',
        Friday                                                                : 'Fredag',
        Monday                                                                : 'Mandag',
        'Print the currently active view'                                     : 'Skriv ut den nåværende aktive visningen',
        Saturday                                                              : 'Lørdag',
        'Select admin mode to allow editing and rescheduling of performances' : 'Velg admin-modus for å tillate redigering og omplanlegging av forestillinger',
        Settings                                                              : 'Innstillinger',
        'Show the weekends'                                                   : 'Vis helgene',
        Sunday                                                                : 'Søndag',
        Thursday                                                              : 'Torsdag',
        Tuesday                                                               : 'Tirsdag',
        Wednesday                                                             : 'Onsdag'
    },

    SlideToggle : {
        'Hide completed' : 'Skjul fullført'
    }
};

export default LocaleHelper.publishLocale(locale);
