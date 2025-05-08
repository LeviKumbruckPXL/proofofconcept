import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Eu.js';
import './shared.locale.Eu.js';

const locale = {

    localeName : 'Eu',
    localeDesc : 'Euskara',
    localeCode : 'eu-ES',
    localeRtl  : false,

    Column : {
        Completed          : 'Osatuta',
        Duration           : 'Iraupena',
        'In progress'      : 'Prozesuan',
        Name               : 'Izena',
        'Not started'      : 'Hasi gabe',
        'Staff/Resource'   : 'Langile/Baliabide',
        'Unassigned tasks' : 'Esleitu gabeko zereginak'
    },

    Button : {
        Actions              : 'Ekintzak',
        Agenda               : 'Agenda',
        Apr                  : 'Api',
        April                : 'Apirila',
        Aug                  : 'Abu',
        Cancel               : 'Utzi',
        Create               : 'Sortu',
        Day                  : 'Eguna',
        'Day Agenda'         : 'Eguneko Agenda',
        'Day resources'      : 'Eguneko baliabideak',
        Dec                  : 'Abe',
        Delete               : 'Ezabatu',
        Dualdayview          : 'Bieguneko ikuspegia',
        'Export to Excel'    : 'Esportatu Excel-era',
        Feb                  : 'Ots',
        February             : 'Otsaila',
        'Grouped by day'     : 'Egunaren arabera taldekatuta',
        'Grouped by station' : 'Estazioaren arabera taldekatuta',
        Jan                  : 'Urt',
        January              : 'Urtarrila',
        Jul                  : 'Uzt',
        July                 : 'Uztaila',
        Jun                  : 'Eka',
        June                 : 'Ekaina',
        List                 : 'Zerrenda',
        Mar                  : 'Mar',
        March                : 'Martxoa',
        May                  : 'Mai',
        Month                : 'Hilabetea',
        'Multi Days'         : 'Egun anitz',
        Nov                  : 'Aza',
        Oct                  : 'Urr',
        October              : 'Urria',
        Print                : 'Inprimatu',
        Reload               : 'Birkargatu',
        'Reset database'     : 'Datu-basea berrezarri',
        'Reset to default'   : 'Lehenespenetara berrezarri',
        Resourceview         : 'Baliabideen ikuspegia',
        Save                 : 'Gorde',
        Sep                  : 'Ira',
        September            : 'Iraila',
        Timeline             : 'Kronograma',
        Today                : 'Gaur',
        'Two weeks'          : 'Bi aste',
        Week                 : 'Astea',
        'Week Agenda'        : 'Asteko Agenda',
        Weekends             : 'Asteburuak',
        Year                 : 'Urtea',
        'Zoom to events'     : 'Gertaeretara hurbildu'
    },

    Checkbox : {
        'Custom styles'                   : 'Estilo pertsonalizatuak',
        'Fit events'                      : 'Egokitu gertaerak',
        'Fit timeline to available space' : 'Egokitu denbora-lerroa eskuragarri dagoen espaziora',
        'Full width'                      : 'Zabalera osoa',
        'Hide borders'                    : 'Ezkutatu mugak',
        'Hide empty hours'                : 'Ezkutatu ordu hutsak',
        'Hide time axes'                  : 'Ezkutatu denbora-ardatzak',
        'Hide unscheduled resources'      : 'Ezkutatu programatu gabeko baliabideak',
        'Hide weekends'                   : 'Ezkutatu asteburuak',
        'On top'                          : 'Goian',
        'Show avatar'                     : 'Erakutsi avatarra',
        'Show core hours in day'          : 'Erakutsi eguneko ordu nagusiak',
        'Show time'                       : 'Erakutsi ordua',
        'Stack events vertically'         : 'Pilatu gertaerak bertikalki',
        'Sync hour heights'               : 'Sinkronizatu orduen altuerak'
    },

    Slider : {
        'Hour height'    : 'Orduaren altuera',
        'Resource width' : 'Baliabidearen zabalera',
        Scale            : 'Eskala'
    },

    Combo : {
        'Choose show' : 'Aukeratu ikuskizuna',
        Equipment     : 'Ekipamendua',
        'Timezone:'   : 'Ordu-eremua:'
    },

    Label : {
        Days             : 'Egunak',
        Months           : 'Hilabeteak',
        'Resource width' : 'Baliabidearen zabalera'
    },

    NumberField : {
        Every                      : 'Bakoitz',
        'Max events per cell'      : 'Gehienezko gertaerak zelula bakoitzeko',
        'Scroll to hour'           : 'Orduara joan',
        'Snap increment (minutes)' : 'Igoera handitu (minutuak)'
    },

    TextField : {
        'Filter resources'  : 'Iragazi baliabideak',
        Name                : 'Izena',
        'Type to filter...' : 'Idatzi iragazteko...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Gertaerak egokituko dira nabigatzean markatuta dagoenean',
        'Fit events within scroll range'                                      : 'Egokitu gertaerak korritze-barrutiaren barruan',
        Friday                                                                : 'Ostirala',
        Monday                                                                : 'Astelehena',
        'Print the currently active view'                                     : 'Inprimatu unean aktibo dagoen ikuspegia',
        Saturday                                                              : 'Larunbata',
        'Select admin mode to allow editing and rescheduling of performances' : 'Hautatu administratzaile modua emanaldiak editatu eta berrantolatzeko',
        Settings                                                              : 'Ezarpenak',
        'Show the weekends'                                                   : 'Erakutsi asteburuak',
        Sunday                                                                : 'Igandea',
        Thursday                                                              : 'Osteguna',
        Tuesday                                                               : 'Asteartea',
        Wednesday                                                             : 'Asteazkena'
    },

    SlideToggle : {
        'Hide completed' : 'Ezkutatu osatuak'
    }
};

export default LocaleHelper.publishLocale(locale);
