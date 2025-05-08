import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Gl.js';
import './shared.locale.Gl.js';

const locale = {

    localeName : 'Gl',
    localeDesc : 'Galego',
    localeCode : 'gl-ES',
    localeRtl  : false,

    Column : {
        Completed          : 'Completado',
        Duration           : 'Duración',
        'In progress'      : 'En progreso',
        Name               : 'Nome',
        'Not started'      : 'Non iniciado',
        'Staff/Resource'   : 'Persoal/Recurso',
        'Unassigned tasks' : 'Tarefas non asignadas'
    },

    Button : {
        Actions              : 'Accións',
        Agenda               : 'Axenda',
        Apr                  : 'Abr',
        April                : 'Abril',
        Aug                  : 'Ago',
        Cancel               : 'Cancelar',
        Create               : 'Crear',
        Day                  : 'Día',
        'Day Agenda'         : 'Axenda do día',
        'Day resources'      : 'Recursos do día',
        Dec                  : 'Dec',
        Delete               : 'Eliminar',
        Dualdayview          : 'Vista de dous días',
        'Export to Excel'    : 'Exportar a Excel',
        Feb                  : 'Feb',
        February             : 'Febreiro',
        'Grouped by day'     : 'Agrupado por día',
        'Grouped by station' : 'Agrupado por estación',
        Jan                  : 'Xan',
        January              : 'Xaneiro',
        Jul                  : 'Xul',
        July                 : 'Xullo',
        Jun                  : 'Xuñ',
        June                 : 'Xuño',
        List                 : 'Lista',
        Mar                  : 'Mar',
        March                : 'Marzo',
        May                  : 'Mai',
        Month                : 'Mes',
        'Multi Days'         : 'Varios días',
        Nov                  : 'Nov',
        Oct                  : 'Out',
        October              : 'Outubro',
        Print                : 'Imprimir',
        Reload               : 'Recargar',
        'Reset database'     : 'Restablecer base de datos',
        'Reset to default'   : 'Restablecer por defecto',
        Resourceview         : 'Vista de recursos',
        Save                 : 'Gardar',
        Sep                  : 'Set',
        September            : 'Setembro',
        Timeline             : 'Cronoloxía',
        Today                : 'Hoxe',
        'Two weeks'          : 'Dúas semanas',
        Week                 : 'Semana',
        'Week Agenda'        : 'Axenda da semana',
        Weekends             : 'Fins de semana',
        Year                 : 'Ano',
        'Zoom to events'     : 'Achegar aos eventos'
    },

    Checkbox : {
        'Custom styles'                   : 'Estilos personalizados',
        'Fit events'                      : 'Axustar eventos',
        'Fit timeline to available space' : 'Axustar a liña de tempo ao espazo dispoñible',
        'Full width'                      : 'Ancho completo',
        'Hide borders'                    : 'Ocultar bordos',
        'Hide empty hours'                : 'Ocultar horas baleiras',
        'Hide time axes'                  : 'Ocultar eixes de tempo',
        'Hide unscheduled resources'      : 'Ocultar recursos non programados',
        'Hide weekends'                   : 'Ocultar fins de semana',
        'On top'                          : 'Na parte superior',
        'Show avatar'                     : 'Mostrar avatar',
        'Show core hours in day'          : 'Mostrar horas principais do día',
        'Show time'                       : 'Mostrar hora',
        'Stack events vertically'         : 'Apilar eventos verticalmente',
        'Sync hour heights'               : 'Sincronizar alturas das horas'
    },

    Slider : {
        'Hour height'    : 'Altura da hora',
        'Resource width' : 'Ancho do recurso',
        Scale            : 'Escala'
    },

    Combo : {
        'Choose show' : 'Escoller espectáculo',
        Equipment     : 'Equipamento',
        'Timezone:'   : 'Fuso horario:'
    },

    Label : {
        Days             : 'Días',
        Months           : 'Meses',
        'Resource width' : 'Ancho do recurso'
    },

    NumberField : {
        Every                      : 'Cada',
        'Max events per cell'      : 'Eventos máximos por cela',
        'Scroll to hour'           : 'Desprazar á hora',
        'Snap increment (minutes)' : 'Incremento de axuste (minutos)'
    },

    TextField : {
        'Filter resources'  : 'Filtrar recursos',
        Name                : 'Nome',
        'Type to filter...' : 'Escribe para filtrar...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Os eventos axustaranse ao navegar cando estea marcado',
        'Fit events within scroll range'                                      : 'Axustar eventos dentro do rango de desprazamento',
        Friday                                                                : 'Venres',
        Monday                                                                : 'Luns',
        'Print the currently active view'                                     : 'Imprimir a vista actualmente activa',
        Saturday                                                              : 'Sábado',
        'Select admin mode to allow editing and rescheduling of performances' : 'Seleccionar modo administrador para permitir a edición e reprogramación de actuacións',
        Settings                                                              : 'Configuración',
        'Show the weekends'                                                   : 'Mostrar as fins de semana',
        Sunday                                                                : 'Domingo',
        Thursday                                                              : 'Xoves',
        Tuesday                                                               : 'Martes',
        Wednesday                                                             : 'Mércores'
    },

    SlideToggle : {
        'Hide completed' : 'Ocultar completados'
    }
};

export default LocaleHelper.publishLocale(locale);
