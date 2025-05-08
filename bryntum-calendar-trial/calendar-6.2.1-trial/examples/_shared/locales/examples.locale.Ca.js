import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ca.js';
import './shared.locale.Ca.js';

const locale = {

    localeName : 'Ca',
    localeDesc : 'Català',
    localeCode : 'ca-ES',
    localeRtl  : false,

    Column : {
        Completed          : 'Completat',
        Duration           : 'Durada',
        'In progress'      : 'En curs',
        Name               : 'Nom',
        'Not started'      : 'No començat',
        'Staff/Resource'   : 'Personal/Recurs',
        'Unassigned tasks' : 'Tasques no assignades'
    },

    Button : {
        Actions              : 'Accions',
        Agenda               : 'Agenda',
        Apr                  : 'Abr',
        April                : 'Abril',
        Aug                  : 'Ago',
        Cancel               : 'Cancel·lar',
        Create               : 'Crear',
        Day                  : 'Dia',
        'Day Agenda'         : 'Agenda del dia',
        'Day resources'      : 'Recursos del dia',
        Dec                  : 'Des',
        Delete               : 'Eliminar',
        Dualdayview          : 'Vista dual del dia',
        'Export to Excel'    : 'Exportar a Excel',
        Feb                  : 'Feb',
        February             : 'Febrer',
        'Grouped by day'     : 'Agrupat per dia',
        'Grouped by station' : 'Agrupat per estació',
        Jan                  : 'Gen',
        January              : 'Gener',
        Jul                  : 'Jul',
        July                 : 'Juliol',
        Jun                  : 'Jun',
        June                 : 'Juny',
        List                 : 'Llista',
        Mar                  : 'Mar',
        March                : 'Març',
        May                  : 'Mai',
        Month                : 'Mes',
        'Multi Days'         : 'Múltiples dies',
        Nov                  : 'Nov',
        Oct                  : 'Oct',
        October              : 'Octubre',
        Print                : 'Imprimir',
        Reload               : 'Recarregar',
        'Reset database'     : 'Restablir base de dades',
        'Reset to default'   : 'Restablir per defecte',
        Resourceview         : 'Vista de recursos',
        Save                 : 'Desar',
        Sep                  : 'Set',
        September            : 'Setembre',
        Timeline             : 'Cronologia',
        Today                : 'Avui',
        'Two weeks'          : 'Dues setmanes',
        Week                 : 'Setmana',
        'Week Agenda'        : 'Agenda de la setmana',
        Weekends             : 'Caps de setmana',
        Year                 : 'Any',
        'Zoom to events'     : 'Zoom als esdeveniments'
    },

    Checkbox : {
        'Custom styles'                   : 'Estils personalitzats',
        'Fit events'                      : 'Ajusta esdeveniments',
        'Fit timeline to available space' : "Ajusta la línia de temps a l'espai disponible",
        'Full width'                      : 'Amplada completa',
        'Hide borders'                    : 'Amaga les vores',
        'Hide empty hours'                : 'Amaga hores buides',
        'Hide time axes'                  : 'Amaga els eixos de temps',
        'Hide unscheduled resources'      : 'Amaga recursos no programats',
        'Hide weekends'                   : 'Amaga els caps de setmana',
        'On top'                          : 'A sobre',
        'Show avatar'                     : 'Mostra avatar',
        'Show core hours in day'          : 'Mostra hores centrals del dia',
        'Show time'                       : 'Mostrar hora',
        'Stack events vertically'         : 'Apila esdeveniments verticalment',
        'Sync hour heights'               : "Sincronitza alçades d'hores"
    },

    Slider : {
        'Hour height'    : "Alçada de l'hora",
        'Resource width' : 'Amplada del recurs',
        Scale            : 'Escala'
    },

    Combo : {
        'Choose show' : 'Tria espectacle',
        Equipment     : 'Equipament',
        'Timezone:'   : 'Fus horari:'
    },

    Label : {
        Days             : 'Dies',
        Months           : 'Mesos',
        'Resource width' : 'Amplada del recurs'
    },

    NumberField : {
        Every                      : 'Cada',
        'Max events per cell'      : "Màxim d'esdeveniments per cel·la",
        'Scroll to hour'           : "Desplaça't a l'hora",
        'Snap increment (minutes)' : 'Increment de captura (minuts)'
    },

    TextField : {
        'Filter resources'  : 'Filtra recursos',
        Name                : 'Nom',
        'Type to filter...' : 'Escriu per filtrar...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : "Els esdeveniments s'ajustaran en navegar quan estigui marcat",
        'Fit events within scroll range'                                      : 'Ajusta els esdeveniments dins del rang de desplaçament',
        Friday                                                                : 'Divendres',
        Monday                                                                : 'Dilluns',
        'Print the currently active view'                                     : 'Imprimeix la vista actualment activa',
        Saturday                                                              : 'Dissabte',
        'Select admin mode to allow editing and rescheduling of performances' : "Selecciona el mode d'administrador per permetre l'edició i reprogramació de les actuacions",
        Settings                                                              : 'Configuració',
        'Show the weekends'                                                   : 'Mostra els caps de setmana',
        Sunday                                                                : 'Diumenge',
        Thursday                                                              : 'Dijous',
        Tuesday                                                               : 'Dimarts',
        Wednesday                                                             : 'Dimecres'
    },

    SlideToggle : {
        'Hide completed' : 'Amaga completats'
    }
};

export default LocaleHelper.publishLocale(locale);
