import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Hr.js';
import './shared.locale.Hr.js';

const locale = {

    localeName : 'Hr',
    localeDesc : 'Hrvatski',
    localeCode : 'hr',
    localeRtl  : false,

    Column : {
        Completed          : 'Dovršeno',
        Duration           : 'Trajanje',
        'In progress'      : 'U tijeku',
        Name               : 'Ime',
        'Not started'      : 'Nije započeto',
        'Staff/Resource'   : 'Osoblje/Resurs',
        'Unassigned tasks' : 'Nepridijeljeni zadaci'
    },

    Button : {
        Actions              : 'Radnje',
        Agenda               : 'Dnevni red',
        Apr                  : 'Tra',
        April                : 'Travanj',
        Aug                  : 'Kol',
        Cancel               : 'Odustani',
        Create               : 'Kreiraj',
        Day                  : 'Dan',
        'Day Agenda'         : 'Dnevni red dana',
        'Day resources'      : 'Resursi dana',
        Dec                  : 'Pro',
        Delete               : 'Izbriši',
        Dualdayview          : 'Dvostruki prikaz dana',
        'Export to Excel'    : 'Izvoz u Excel',
        Feb                  : 'Velj',
        February             : 'Veljača',
        'Grouped by day'     : 'Grupirano po danu',
        'Grouped by station' : 'Grupirano po stanici',
        Jan                  : 'Sij',
        January              : 'Siječanj',
        Jul                  : 'Srpanj',
        July                 : 'Srpanj',
        Jun                  : 'Lip',
        June                 : 'Lipanj',
        List                 : 'Popis',
        Mar                  : 'Ožu',
        March                : 'Ožujak',
        May                  : 'Svi',
        Month                : 'Mjesec',
        'Multi Days'         : 'Više dana',
        Nov                  : 'Stu',
        Oct                  : 'Lis',
        October              : 'Listopad',
        Print                : 'Ispis',
        Reload               : 'Ponovno učitaj',
        'Reset database'     : 'Resetiraj bazu podataka',
        'Reset to default'   : 'Vrati na zadano',
        Resourceview         : 'Prikaz resursa',
        Save                 : 'Spremi',
        Sep                  : 'Ruj',
        September            : 'Rujan',
        Timeline             : 'Vremenska crta',
        Today                : 'Danas',
        'Two weeks'          : 'Dva tjedna',
        Week                 : 'Tjedan',
        'Week Agenda'        : 'Dnevni red tjedna',
        Weekends             : 'Vikendi',
        Year                 : 'Godina',
        'Zoom to events'     : 'Povećaj na događaje'
    },

    Checkbox : {
        'Custom styles'                   : 'Prilagođeni stilovi',
        'Fit events'                      : 'Prilagodi događaje',
        'Fit timeline to available space' : 'Prilagodi vremensku crtu dostupnom prostoru',
        'Full width'                      : 'Puna širina',
        'Hide borders'                    : 'Sakrij granice',
        'Hide empty hours'                : 'Sakrij prazne sate',
        'Hide time axes'                  : 'Sakrij vremenske osi',
        'Hide unscheduled resources'      : 'Sakrij neplanirane resurse',
        'Hide weekends'                   : 'Sakrij vikende',
        'On top'                          : 'Na vrhu',
        'Show avatar'                     : 'Prikaži avatar',
        'Show core hours in day'          : 'Prikaži osnovne sate u danu',
        'Show time'                       : 'Prikaži vrijeme',
        'Stack events vertically'         : 'Posloži događaje vertikalno',
        'Sync hour heights'               : 'Sinkroniziraj visine sati'
    },

    Slider : {
        'Hour height'    : 'Visina sata',
        'Resource width' : 'Širina resursa',
        Scale            : 'Razmjer'
    },

    Combo : {
        'Choose show' : 'Odaberi emisiju',
        Equipment     : 'Oprema',
        'Timezone:'   : 'Vremenska zona:'
    },

    Label : {
        Days             : 'Dani',
        Months           : 'Mjeseci',
        'Resource width' : 'Širina resursa'
    },

    NumberField : {
        Every                      : 'Svaki',
        'Max events per cell'      : 'Maksimalno događaja po ćeliji',
        'Scroll to hour'           : 'Pomakni na sat',
        'Snap increment (minutes)' : 'Povećanje skoka (minute)'
    },

    TextField : {
        'Filter resources'  : 'Filtriraj resurse',
        Name                : 'Ime',
        'Type to filter...' : 'Upišite za filtriranje...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Događaji će biti prilagođeni prilikom navigacije kada je označeno',
        'Fit events within scroll range'                                      : 'Prilagodi događaje unutar raspona pomicanja',
        Friday                                                                : 'Petak',
        Monday                                                                : 'Ponedjeljak',
        'Print the currently active view'                                     : 'Ispis trenutno aktivnog prikaza',
        Saturday                                                              : 'Subota',
        'Select admin mode to allow editing and rescheduling of performances' : 'Odaberite administratorski način rada za omogućavanje uređivanja i ponovnog zakazivanja izvedbi',
        Settings                                                              : 'Postavke',
        'Show the weekends'                                                   : 'Prikaži vikende',
        Sunday                                                                : 'Nedjelja',
        Thursday                                                              : 'Četvrtak',
        Tuesday                                                               : 'Utorak',
        Wednesday                                                             : 'Srijeda'
    },

    SlideToggle : {
        'Hide completed' : 'Sakrij dovršeno'
    }
};

export default LocaleHelper.publishLocale(locale);
