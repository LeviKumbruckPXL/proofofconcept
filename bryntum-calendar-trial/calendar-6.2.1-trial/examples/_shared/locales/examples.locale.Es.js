import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Es.js';
import './shared.locale.Es.js';

const locale = {

    localeName : 'Es',
    localeDesc : 'Español',
    localeCode : 'es',
    localeRtl  : false,

    Column : {
        Completed          : 'Completado',
        Duration           : 'Duración',
        'In progress'      : 'En progreso',
        Name               : 'Nombre',
        'Not started'      : 'No iniciado',
        'Staff/Resource'   : 'Personal/Recurso',
        'Unassigned tasks' : 'Tareas no asignadas'
    },

    Button : {
        Actions              : 'Acciones',
        Agenda               : 'Agenda',
        Apr                  : 'Abr',
        April                : 'Abril',
        Aug                  : 'Ago',
        Cancel               : 'Cancelar',
        Create               : 'Crear',
        Day                  : 'Día',
        'Day Agenda'         : 'Agenda del día',
        'Day resources'      : 'Recursos del día',
        Dec                  : 'Dic',
        Delete               : 'Eliminar',
        Dualdayview          : 'Vista dual del día',
        'Export to Excel'    : 'Exportar a Excel',
        Feb                  : 'Feb',
        February             : 'Febrero',
        'Grouped by day'     : 'Agrupado por día',
        'Grouped by station' : 'Agrupado por estación',
        Jan                  : 'Ene',
        January              : 'Enero',
        Jul                  : 'Jul',
        July                 : 'Julio',
        Jun                  : 'Jun',
        June                 : 'Junio',
        List                 : 'Lista',
        Mar                  : 'Mar',
        March                : 'Marzo',
        May                  : 'May',
        Month                : 'Mes',
        'Multi Days'         : 'Varios días',
        Nov                  : 'Nov',
        Oct                  : 'Oct',
        October              : 'Octubre',
        Print                : 'Imprimir',
        Reload               : 'Recargar',
        'Reset database'     : 'Restablecer base de datos',
        'Reset to default'   : 'Restablecer a predeterminado',
        Resourceview         : 'Vista de recursos',
        Save                 : 'Guardar',
        Sep                  : 'Sep',
        September            : 'Septiembre',
        Timeline             : 'Cronología',
        Today                : 'Hoy',
        'Two weeks'          : 'Dos semanas',
        Week                 : 'Semana',
        'Week Agenda'        : 'Agenda de la semana',
        Weekends             : 'Fines de semana',
        Year                 : 'Año',
        'Zoom to events'     : 'Acercar a eventos'
    },

    Checkbox : {
        'Custom styles'                   : 'Estilos personalizados',
        'Fit events'                      : 'Ajustar eventos',
        'Fit timeline to available space' : 'Ajustar línea de tiempo al espacio disponible',
        'Full width'                      : 'Ancho completo',
        'Hide borders'                    : 'Ocultar bordes',
        'Hide empty hours'                : 'Ocultar horas vacías',
        'Hide time axes'                  : 'Ocultar ejes de tiempo',
        'Hide unscheduled resources'      : 'Ocultar recursos no programados',
        'Hide weekends'                   : 'Ocultar fines de semana',
        'On top'                          : 'En la parte superior',
        'Show avatar'                     : 'Mostrar avatar',
        'Show core hours in day'          : 'Mostrar horas centrales del día',
        'Show time'                       : 'Mostrar hora',
        'Stack events vertically'         : 'Apilar eventos verticalmente',
        'Sync hour heights'               : 'Sincronizar alturas de horas'
    },

    Slider : {
        'Hour height'    : 'Altura de la hora',
        'Resource width' : 'Ancho del recurso',
        Scale            : 'Escala'
    },

    Combo : {
        'Choose show' : 'Elegir espectáculo',
        Equipment     : 'Equipo',
        'Timezone:'   : 'Zona horaria:'
    },

    Label : {
        Days             : 'Días',
        Months           : 'Meses',
        'Resource width' : 'Ancho del recurso'
    },

    NumberField : {
        Every                      : 'Cada',
        'Max events per cell'      : 'Máx eventos por celda',
        'Scroll to hour'           : 'Desplazar a la hora',
        'Snap increment (minutes)' : 'Incremento de ajuste (minutos)'
    },

    TextField : {
        'Filter resources'  : 'Filtrar recursos',
        Name                : 'Nombre',
        'Type to filter...' : 'Escribe para filtrar...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Los eventos se ajustarán al navegar cuando esté marcado',
        'Fit events within scroll range'                                      : 'Ajustar eventos dentro del rango de desplazamiento',
        Friday                                                                : 'Viernes',
        Monday                                                                : 'Lunes',
        'Print the currently active view'                                     : 'Imprimir la vista actualmente activa',
        Saturday                                                              : 'Sábado',
        'Select admin mode to allow editing and rescheduling of performances' : 'Seleccione el modo administrador para permitir la edición y reprogramación de actuaciones',
        Settings                                                              : 'Configuraciones',
        'Show the weekends'                                                   : 'Mostrar los fines de semana',
        Sunday                                                                : 'Domingo',
        Thursday                                                              : 'Jueves',
        Tuesday                                                               : 'Martes',
        Wednesday                                                             : 'Miércoles'
    },

    SlideToggle : {
        'Hide completed' : 'Ocultar completado'
    }
};

export default LocaleHelper.publishLocale(locale);
