import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Sl.js';
import './shared.locale.Sl.js';

const locale = {

    localeName : 'Sl',
    localeDesc : 'Slovensko',
    localeCode : 'sl',
    localeRtl  : false,

    Column : {
        Completed          : 'Dokončano',
        Duration           : 'Trajanje',
        'In progress'      : 'V teku',
        Name               : 'Ime',
        'Not started'      : 'Ni začeto',
        'Staff/Resource'   : 'Osebje/Vir',
        'Unassigned tasks' : 'Nedodeljene naloge'
    },

    Button : {
        Actions              : 'Dejanja',
        Agenda               : 'Dnevni red',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Avg',
        Cancel               : 'Prekliči',
        Create               : 'Ustvari',
        Day                  : 'Dan',
        'Day Agenda'         : 'Dnevni red dneva',
        'Day resources'      : 'Dnevni viri',
        Dec                  : 'Dec',
        Delete               : 'Izbriši',
        Dualdayview          : 'Dvojni dnevni pogled',
        'Export to Excel'    : 'Izvozi v Excel',
        Feb                  : 'Feb',
        February             : 'Februar',
        'Grouped by day'     : 'Združeno po dnevih',
        'Grouped by station' : 'Združeno po postajah',
        Jan                  : 'Jan',
        January              : 'Januar',
        Jul                  : 'Jul',
        July                 : 'Julij',
        Jun                  : 'Jun',
        June                 : 'Junij',
        List                 : 'Seznam',
        Mar                  : 'Mar',
        March                : 'Marec',
        May                  : 'Maj',
        Month                : 'Mesec',
        'Multi Days'         : 'Več dni',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktober',
        Print                : 'Natisni',
        Reload               : 'Osveži',
        'Reset database'     : 'Ponastavi bazo podatkov',
        'Reset to default'   : 'Ponastavi na privzeto',
        Resourceview         : 'Pogled virov',
        Save                 : 'Shrani',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Časovnica',
        Today                : 'Danes',
        'Two weeks'          : 'Dva tedna',
        Week                 : 'Teden',
        'Week Agenda'        : 'Tedenski red',
        Weekends             : 'Vikendi',
        Year                 : 'Leto',
        'Zoom to events'     : 'Povečaj na dogodke'
    },

    Checkbox : {
        'Custom styles'                   : 'Prilagojeni slogi',
        'Fit events'                      : 'Prilagodi dogodke',
        'Fit timeline to available space' : 'Prilagodi časovnico razpoložljivemu prostoru',
        'Full width'                      : 'Polna širina',
        'Hide borders'                    : 'Skrij obrobe',
        'Hide empty hours'                : 'Skrij prazne ure',
        'Hide time axes'                  : 'Skrij časovne osi',
        'Hide unscheduled resources'      : 'Skrij nenačrtovane vire',
        'Hide weekends'                   : 'Skrij vikende',
        'On top'                          : 'Na vrhu',
        'Show avatar'                     : 'Prikaži avatar',
        'Show core hours in day'          : 'Prikaži osnovne ure v dnevu',
        'Show time'                       : 'Prikaži čas',
        'Stack events vertically'         : 'Zloži dogodke navpično',
        'Sync hour heights'               : 'Sinhroniziraj višine ur'
    },

    Slider : {
        'Hour height'    : 'Višina ure',
        'Resource width' : 'Širina vira',
        Scale            : 'Lestvica'
    },

    Combo : {
        'Choose show' : 'Izberite predstavo',
        Equipment     : 'Oprema',
        'Timezone:'   : 'Časovni pas:'
    },

    Label : {
        Days             : 'Dnevi',
        Months           : 'Meseci',
        'Resource width' : 'Širina vira'
    },

    NumberField : {
        Every                      : 'Vsak',
        'Max events per cell'      : 'Največ dogodkov na celico',
        'Scroll to hour'           : 'Pomakni se na uro',
        'Snap increment (minutes)' : 'Prirastek skoka (minute)'
    },

    TextField : {
        'Filter resources'  : 'Filtriraj vire',
        Name                : 'Ime',
        'Type to filter...' : 'Vnesite za filtriranje...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Dogodki bodo prilagojeni ob navigaciji, ko je označeno',
        'Fit events within scroll range'                                      : 'Prilagodi dogodke v obsegu drsenja',
        Friday                                                                : 'Petek',
        Monday                                                                : 'Ponedeljek',
        'Print the currently active view'                                     : 'Natisni trenutno aktivni pogled',
        Saturday                                                              : 'Sobota',
        'Select admin mode to allow editing and rescheduling of performances' : 'Izberite način skrbnika za omogočanje urejanja in prestavljanja predstav',
        Settings                                                              : 'Nastavitve',
        'Show the weekends'                                                   : 'Prikaži vikende',
        Sunday                                                                : 'Nedelja',
        Thursday                                                              : 'Četrtek',
        Tuesday                                                               : 'Torek',
        Wednesday                                                             : 'Sreda'
    },

    SlideToggle : {
        'Hide completed' : 'Skrij dokončano'
    }
};

export default LocaleHelper.publishLocale(locale);
