import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Sk.js';
import './shared.locale.Sk.js';

const locale = {

    localeName : 'Sk',
    localeDesc : 'Slovenský',
    localeCode : 'sk',
    localeRtl  : false,

    Column : {
        Completed          : 'Dokončené',
        Duration           : 'Trvanie',
        'In progress'      : 'Prebieha',
        Name               : 'Názov',
        'Not started'      : 'Nezačaté',
        'Staff/Resource'   : 'Personál/Zdroj',
        'Unassigned tasks' : 'Nepriradené úlohy'
    },

    Button : {
        Actions              : 'Akcie',
        Agenda               : 'Program',
        Apr                  : 'Apr',
        April                : 'Apríl',
        Aug                  : 'Aug',
        Cancel               : 'Zrušiť',
        Create               : 'Vytvoriť',
        Day                  : 'Deň',
        'Day Agenda'         : 'Denný program',
        'Day resources'      : 'Denné zdroje',
        Dec                  : 'Dec',
        Delete               : 'Vymazať',
        Dualdayview          : 'Dvojdenný pohľad',
        'Export to Excel'    : 'Exportovať do Excelu',
        Feb                  : 'Feb',
        February             : 'Február',
        'Grouped by day'     : 'Zoskupené podľa dňa',
        'Grouped by station' : 'Zoskupené podľa stanice',
        Jan                  : 'Jan',
        January              : 'Január',
        Jul                  : 'Jul',
        July                 : 'Júl',
        Jun                  : 'Jun',
        June                 : 'Jún',
        List                 : 'Zoznam',
        Mar                  : 'Mar',
        March                : 'Marec',
        May                  : 'Máj',
        Month                : 'Mesiac',
        'Multi Days'         : 'Viac dní',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Október',
        Print                : 'Tlačiť',
        Reload               : 'Obnoviť',
        'Reset database'     : 'Resetovať databázu',
        'Reset to default'   : 'Obnoviť na predvolené',
        Resourceview         : 'Pohľad na zdroje',
        Save                 : 'Uložiť',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Časová os',
        Today                : 'Dnes',
        'Two weeks'          : 'Dva týždne',
        Week                 : 'Týždeň',
        'Week Agenda'        : 'Týždenný program',
        Weekends             : 'Víkendy',
        Year                 : 'Rok',
        'Zoom to events'     : 'Priblížiť na udalosti'
    },

    Checkbox : {
        'Custom styles'                   : 'Vlastné štýly',
        'Fit events'                      : 'Prispôsobiť udalosti',
        'Fit timeline to available space' : 'Prispôsobiť časovú os dostupnému priestoru',
        'Full width'                      : 'Celá šírka',
        'Hide borders'                    : 'Skryť okraje',
        'Hide empty hours'                : 'Skryť prázdne hodiny',
        'Hide time axes'                  : 'Skryť časové osi',
        'Hide unscheduled resources'      : 'Skryť neplánované zdroje',
        'Hide weekends'                   : 'Skryť víkendy',
        'On top'                          : 'Navrchu',
        'Show avatar'                     : 'Zobraziť avatar',
        'Show core hours in day'          : 'Zobraziť hlavné hodiny v dni',
        'Show time'                       : 'Zobraziť čas',
        'Stack events vertically'         : 'Usporiadať udalosti vertikálne',
        'Sync hour heights'               : 'Synchronizovať výšky hodín'
    },

    Slider : {
        'Hour height'    : 'Výška hodiny',
        'Resource width' : 'Šírka zdroja',
        Scale            : 'Mierka'
    },

    Combo : {
        'Choose show' : 'Vyberte predstavenie',
        Equipment     : 'Vybavenie',
        'Timezone:'   : 'Časové pásmo:'
    },

    Label : {
        Days             : 'Dni',
        Months           : 'Mesiace',
        'Resource width' : 'Šírka zdroja'
    },

    NumberField : {
        Every                      : 'Každý',
        'Max events per cell'      : 'Maximálny počet udalostí na bunku',
        'Scroll to hour'           : 'Posunúť na hodinu',
        'Snap increment (minutes)' : 'Prírastok posunu (minúty)'
    },

    TextField : {
        'Filter resources'  : 'Filtrovať zdroje',
        Name                : 'Meno',
        'Type to filter...' : 'Píšte na filtrovanie...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Udalosti budú prispôsobené pri navigácii, keď je zaškrtnuté',
        'Fit events within scroll range'                                      : 'Prispôsobiť udalosti v rozsahu posúvania',
        Friday                                                                : 'Piatok',
        Monday                                                                : 'Pondelok',
        'Print the currently active view'                                     : 'Vytlačiť aktuálne aktívny pohľad',
        Saturday                                                              : 'Sobota',
        'Select admin mode to allow editing and rescheduling of performances' : 'Vyberte režim správcu, aby ste mohli upravovať a preplánovať predstavenia',
        Settings                                                              : 'Nastavenia',
        'Show the weekends'                                                   : 'Zobraziť víkendy',
        Sunday                                                                : 'Nedeľa',
        Thursday                                                              : 'Štvrtok',
        Tuesday                                                               : 'Utorok',
        Wednesday                                                             : 'Streda'
    },

    SlideToggle : {
        'Hide completed' : 'Skryť dokončené'
    }
};

export default LocaleHelper.publishLocale(locale);
