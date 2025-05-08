import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/It.js';
import './shared.locale.It.js';

const locale = {

    localeName : 'It',
    localeDesc : 'Italiano',
    localeCode : 'it',
    localeRtl  : false,

    Column : {
        Completed          : 'Completato',
        Duration           : 'Durata',
        'In progress'      : 'In corso',
        Name               : 'Nome',
        'Not started'      : 'Non iniziato',
        'Staff/Resource'   : 'Personale/Risorsa',
        'Unassigned tasks' : 'Compiti non assegnati'
    },

    Button : {
        Actions              : 'Azioni',
        Agenda               : 'Agenda',
        Apr                  : 'Apr',
        April                : 'Aprile',
        Aug                  : 'Ago',
        Cancel               : 'Annulla',
        Create               : 'Crea',
        Day                  : 'Giorno',
        'Day Agenda'         : 'Agenda Giornaliera',
        'Day resources'      : 'Risorse Giorno',
        Dec                  : 'Dic',
        Delete               : 'Elimina',
        Dualdayview          : 'Vista Giorno Doppio',
        'Export to Excel'    : 'Esporta in Excel',
        Feb                  : 'Feb',
        February             : 'Febbraio',
        'Grouped by day'     : 'Raggruppato per giorno',
        'Grouped by station' : 'Raggruppato per stazione',
        Jan                  : 'Gen',
        January              : 'Gennaio',
        Jul                  : 'Lug',
        July                 : 'Luglio',
        Jun                  : 'Giu',
        June                 : 'Giugno',
        List                 : 'Lista',
        Mar                  : 'Mar',
        March                : 'Marzo',
        May                  : 'Mag',
        Month                : 'Mese',
        'Multi Days'         : 'Giorni Multipli',
        Nov                  : 'Nov',
        Oct                  : 'Ott',
        October              : 'Ottobre',
        Print                : 'Stampa',
        Reload               : 'Ricarica',
        'Reset database'     : 'Reimposta database',
        'Reset to default'   : 'Reimposta a predefinito',
        Resourceview         : 'Vista Risorse',
        Save                 : 'Salva',
        Sep                  : 'Set',
        September            : 'Settembre',
        Timeline             : 'Cronologia',
        Today                : 'Oggi',
        'Two weeks'          : 'Due settimane',
        Week                 : 'Settimana',
        'Week Agenda'        : 'Agenda Settimanale',
        Weekends             : 'Fine settimana',
        Year                 : 'Anno',
        'Zoom to events'     : 'Zoom agli eventi'
    },

    Checkbox : {
        'Custom styles'                   : 'Stili personalizzati',
        'Fit events'                      : 'Adatta eventi',
        'Fit timeline to available space' : 'Adatta la timeline allo spazio disponibile',
        'Full width'                      : 'Larghezza completa',
        'Hide borders'                    : 'Nascondi bordi',
        'Hide empty hours'                : 'Nascondi ore vuote',
        'Hide time axes'                  : 'Nascondi assi temporali',
        'Hide unscheduled resources'      : 'Nascondi risorse non programmate',
        'Hide weekends'                   : 'Nascondi fine settimana',
        'On top'                          : 'In cima',
        'Show avatar'                     : 'Mostra avatar',
        'Show core hours in day'          : 'Mostra ore principali nel giorno',
        'Show time'                       : 'Mostra ora',
        'Stack events vertically'         : 'Impila eventi verticalmente',
        'Sync hour heights'               : 'Sincronizza altezze ore'
    },

    Slider : {
        'Hour height'    : 'Altezza ora',
        'Resource width' : 'Larghezza risorsa',
        Scale            : 'Scala'
    },

    Combo : {
        'Choose show' : 'Scegli spettacolo',
        Equipment     : 'Attrezzatura',
        'Timezone:'   : 'Fuso orario:'
    },

    Label : {
        Days             : 'Giorni',
        Months           : 'Mesi',
        'Resource width' : 'Larghezza risorsa'
    },

    NumberField : {
        Every                      : 'Ogni',
        'Max events per cell'      : 'Eventi massimi per cella',
        'Scroll to hour'           : "Scorri all'ora",
        'Snap increment (minutes)' : 'Incremento scatto (minuti)'
    },

    TextField : {
        'Filter resources'  : 'Filtra risorse',
        Name                : 'Nome',
        'Type to filter...' : 'Digita per filtrare...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Gli eventi verranno adattati alla navigazione quando selezionato',
        'Fit events within scroll range'                                      : "Adatta gli eventi all'interno dell'intervallo di scorrimento",
        Friday                                                                : 'Venerdì',
        Monday                                                                : 'Lunedì',
        'Print the currently active view'                                     : 'Stampa la vista attualmente attiva',
        Saturday                                                              : 'Sabato',
        'Select admin mode to allow editing and rescheduling of performances' : 'Seleziona la modalità amministratore per consentire la modifica e la riprogrammazione delle esibizioni',
        Settings                                                              : 'Impostazioni',
        'Show the weekends'                                                   : 'Mostra i fine settimana',
        Sunday                                                                : 'Domenica',
        Thursday                                                              : 'Giovedì',
        Tuesday                                                               : 'Martedì',
        Wednesday                                                             : 'Mercoledì'
    },

    SlideToggle : {
        'Hide completed' : 'Nascondi completato'
    }
};

export default LocaleHelper.publishLocale(locale);
