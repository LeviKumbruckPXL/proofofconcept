import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Et.js';
import './shared.locale.Et.js';

const locale = {

    localeName : 'Et',
    localeDesc : 'Eesti keel',
    localeCode : 'et',
    localeRtl  : false,

    Column : {
        Completed          : 'Lõpetatud',
        Duration           : 'Kestus',
        'In progress'      : 'Käimas',
        Name               : 'Nimi',
        'Not started'      : 'Pole alustatud',
        'Staff/Resource'   : 'Töötajad/Ressurss',
        'Unassigned tasks' : 'Määramata ülesanded'
    },

    Button : {
        Actions              : 'Tegevused',
        Agenda               : 'Päevakord',
        Apr                  : 'Apr',
        April                : 'Aprill',
        Aug                  : 'Aug',
        Cancel               : 'Tühista',
        Create               : 'Loo',
        Day                  : 'Päev',
        'Day Agenda'         : 'Päeva päevakord',
        'Day resources'      : 'Päeva ressursid',
        Dec                  : 'Dets',
        Delete               : 'Kustuta',
        Dualdayview          : 'Kahepäevavaade',
        'Export to Excel'    : 'Ekspordi Excelisse',
        Feb                  : 'Veebr',
        February             : 'Veebruar',
        'Grouped by day'     : 'Rühmitatud päeva järgi',
        'Grouped by station' : 'Rühmitatud jaama järgi',
        Jan                  : 'Jaan',
        January              : 'Jaanuar',
        Jul                  : 'Juuli',
        July                 : 'Juuli',
        Jun                  : 'Juuni',
        June                 : 'Juuni',
        List                 : 'Nimekiri',
        Mar                  : 'Märts',
        March                : 'Märts',
        May                  : 'Mai',
        Month                : 'Kuu',
        'Multi Days'         : 'Mitu päeva',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktoober',
        Print                : 'Prindi',
        Reload               : 'Laadi uuesti',
        'Reset database'     : 'Lähtesta andmebaas',
        'Reset to default'   : 'Lähtesta vaikeseadetele',
        Resourceview         : 'Ressursivaade',
        Save                 : 'Salvesta',
        Sep                  : 'Sept',
        September            : 'September',
        Timeline             : 'Ajaskaala',
        Today                : 'Täna',
        'Two weeks'          : 'Kaks nädalat',
        Week                 : 'Nädal',
        'Week Agenda'        : 'Nädala päevakord',
        Weekends             : 'Nädalavahetused',
        Year                 : 'Aasta',
        'Zoom to events'     : 'Suumi sündmustele'
    },

    Checkbox : {
        'Custom styles'                   : 'Kohandatud stiilid',
        'Fit events'                      : 'Sobi sündmused',
        'Fit timeline to available space' : 'Sobi ajajoon saadaval olevasse ruumi',
        'Full width'                      : 'Täislaius',
        'Hide borders'                    : 'Peida piirid',
        'Hide empty hours'                : 'Peida tühjad tunnid',
        'Hide time axes'                  : 'Peida ajateljed',
        'Hide unscheduled resources'      : 'Peida ajastamata ressursid',
        'Hide weekends'                   : 'Peida nädalavahetused',
        'On top'                          : 'Peal',
        'Show avatar'                     : 'Näita avatari',
        'Show core hours in day'          : 'Näita põhitunde päevas',
        'Show time'                       : 'Näita aega',
        'Stack events vertically'         : 'Virnita sündmused vertikaalselt',
        'Sync hour heights'               : 'Sünkroniseeri tundide kõrgused'
    },

    Slider : {
        'Hour height'    : 'Tunni kõrgus',
        'Resource width' : 'Ressursi laius',
        Scale            : 'Skaala'
    },

    Combo : {
        'Choose show' : 'Vali saade',
        Equipment     : 'Varustus',
        'Timezone:'   : 'Ajavöönd:'
    },

    Label : {
        Days             : 'Päevad',
        Months           : 'Kuud',
        'Resource width' : 'Ressursi laius'
    },

    NumberField : {
        Every                      : 'Iga',
        'Max events per cell'      : 'Maksimaalsed sündmused lahtri kohta',
        'Scroll to hour'           : 'Keri tunnini',
        'Snap increment (minutes)' : 'Sammude suurendamine (minutites)'
    },

    TextField : {
        'Filter resources'  : 'Filtreeri ressursse',
        Name                : 'Nimi',
        'Type to filter...' : 'Sisesta filtreerimiseks...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Sündmused kohandatakse navigeerimisel, kui see on märgitud',
        'Fit events within scroll range'                                      : 'Kohanda sündmused kerimisvahemikku',
        Friday                                                                : 'Reede',
        Monday                                                                : 'Esmaspäev',
        'Print the currently active view'                                     : 'Prindi praegu aktiivne vaade',
        Saturday                                                              : 'Laupäev',
        'Select admin mode to allow editing and rescheduling of performances' : 'Vali administreerimisrežiim, et lubada etenduste redigeerimist ja ümberplaneerimist',
        Settings                                                              : 'Seaded',
        'Show the weekends'                                                   : 'Näita nädalavahetusi',
        Sunday                                                                : 'Pühapäev',
        Thursday                                                              : 'Neljapäev',
        Tuesday                                                               : 'Teisipäev',
        Wednesday                                                             : 'Kolmapäev'
    },

    SlideToggle : {
        'Hide completed' : 'Peida lõpetatud'
    }
};

export default LocaleHelper.publishLocale(locale);
