import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Sr.js';
import './shared.locale.Sr.js';

const locale = {

    localeName : 'Sr',
    localeDesc : 'Srpski',
    localeCode : 'sr',
    localeRtl  : false,

    Column : {
        Completed          : 'Završeno',
        Duration           : 'Trajanje',
        'In progress'      : 'U toku',
        Name               : 'Ime',
        'Not started'      : 'Nije započeto',
        'Staff/Resource'   : 'Osoblje/Resurs',
        'Unassigned tasks' : 'Nepridruženi zadaci'
    },

    Button : {
        Actions              : 'Akcije',
        Agenda               : 'Dnevni red',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Avg',
        Cancel               : 'Otkaži',
        Create               : 'Kreiraj',
        Day                  : 'Dan',
        'Day Agenda'         : 'Dnevni red dana',
        'Day resources'      : 'Resursi dana',
        Dec                  : 'Dec',
        Delete               : 'Obriši',
        Dualdayview          : 'Dvodnevni prikaz',
        'Export to Excel'    : 'Izvezi u Excel',
        Feb                  : 'Feb',
        February             : 'Februar',
        'Grouped by day'     : 'Grupisano po danu',
        'Grouped by station' : 'Grupisano po stanici',
        Jan                  : 'Jan',
        January              : 'Januar',
        Jul                  : 'Jul',
        July                 : 'Jul',
        Jun                  : 'Jun',
        June                 : 'Jun',
        List                 : 'Lista',
        Mar                  : 'Mart',
        March                : 'Mart',
        May                  : 'Maj',
        Month                : 'Mesec',
        'Multi Days'         : 'Više dana',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktobar',
        Print                : 'Štampaj',
        Reload               : 'Ponovo učitaj',
        'Reset database'     : 'Resetuj bazu podataka',
        'Reset to default'   : 'Vrati na podrazumevano',
        Resourceview         : 'Prikaz resursa',
        Save                 : 'Sačuvaj',
        Sep                  : 'Sep',
        September            : 'Septembar',
        Timeline             : 'Vremenska linija',
        Today                : 'Danas',
        'Two weeks'          : 'Dve nedelje',
        Week                 : 'Nedelja',
        'Week Agenda'        : 'Nedeljni red',
        Weekends             : 'Vikendi',
        Year                 : 'Godina',
        'Zoom to events'     : 'Zumiraj na događaje'
    },

    Checkbox : {
        'Custom styles'                   : 'Prilagođeni stilovi',
        'Fit events'                      : 'Prilagodi događaje',
        'Fit timeline to available space' : 'Prilagodi vremensku liniju dostupnom prostoru',
        'Full width'                      : 'Puna širina',
        'Hide borders'                    : 'Sakrij granice',
        'Hide empty hours'                : 'Sakrij prazne sate',
        'Hide time axes'                  : 'Sakrij vremenske ose',
        'Hide unscheduled resources'      : 'Sakrij neplanirane resurse',
        'Hide weekends'                   : 'Sakrij vikende',
        'On top'                          : 'Na vrhu',
        'Show avatar'                     : 'Prikaži avatar',
        'Show core hours in day'          : 'Prikaži osnovne sate u danu',
        'Show time'                       : 'Prikaži vreme',
        'Stack events vertically'         : 'Poređaj događaje vertikalno',
        'Sync hour heights'               : 'Sinhronizuj visine sati'
    },

    Slider : {
        'Hour height'    : 'Visina sata',
        'Resource width' : 'Širina resursa',
        Scale            : 'Razmera'
    },

    Combo : {
        'Choose show' : 'Izaberi emisiju',
        Equipment     : 'Oprema',
        'Timezone:'   : 'Vremenska zona:'
    },

    Label : {
        Days             : 'Dani',
        Months           : 'Meseci',
        'Resource width' : 'Širina resursa'
    },

    NumberField : {
        Every                      : 'Svaki',
        'Max events per cell'      : 'Maksimalno događaja po ćeliji',
        'Scroll to hour'           : 'Skroluj do sata',
        'Snap increment (minutes)' : 'Povećanje skoka (minuti)'
    },

    TextField : {
        'Filter resources'  : 'Filtriraj resurse',
        Name                : 'Ime',
        'Type to filter...' : 'Ukucajte za filtriranje...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Događaji će biti prilagođeni prilikom navigacije kada je označeno',
        'Fit events within scroll range'                                      : 'Prilagodi događaje unutar opsega skrolovanja',
        Friday                                                                : 'Petak',
        Monday                                                                : 'Ponedeljak',
        'Print the currently active view'                                     : 'Štampaj trenutno aktivni prikaz',
        Saturday                                                              : 'Subota',
        'Select admin mode to allow editing and rescheduling of performances' : 'Izaberite administratorski režim da omogućite uređivanje i ponovno zakazivanje nastupa',
        Settings                                                              : 'Podešavanja',
        'Show the weekends'                                                   : 'Prikaži vikende',
        Sunday                                                                : 'Nedelja',
        Thursday                                                              : 'Četvrtak',
        Tuesday                                                               : 'Utorak',
        Wednesday                                                             : 'Sreda'
    },

    SlideToggle : {
        'Hide completed' : 'Sakrij završeno'
    }
};

export default LocaleHelper.publishLocale(locale);
