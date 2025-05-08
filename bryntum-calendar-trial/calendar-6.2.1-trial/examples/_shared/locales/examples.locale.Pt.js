import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Pt.js';
import './shared.locale.Pt.js';

const locale = {

    localeName : 'Pt',
    localeDesc : 'Português',
    localeCode : 'pt',
    localeRtl  : false,

    Column : {
        Completed          : 'Concluído',
        Duration           : 'Duração',
        'In progress'      : 'Em andamento',
        Name               : 'Nome',
        'Not started'      : 'Não iniciado',
        'Staff/Resource'   : 'Equipe/Recurso',
        'Unassigned tasks' : 'Tarefas não atribuídas'
    },

    Button : {
        Actions              : 'Ações',
        Agenda               : 'Agenda',
        Apr                  : 'Abr',
        April                : 'Abril',
        Aug                  : 'Ago',
        Cancel               : 'Cancelar',
        Create               : 'Criar',
        Day                  : 'Dia',
        'Day Agenda'         : 'Agenda do Dia',
        'Day resources'      : 'Recursos do Dia',
        Dec                  : 'Dez',
        Delete               : 'Excluir',
        Dualdayview          : 'Visualização Dupla',
        'Export to Excel'    : 'Exportar para Excel',
        Feb                  : 'Fev',
        February             : 'Fevereiro',
        'Grouped by day'     : 'Agrupado por dia',
        'Grouped by station' : 'Agrupado por estação',
        Jan                  : 'Jan',
        January              : 'Janeiro',
        Jul                  : 'Jul',
        July                 : 'Julho',
        Jun                  : 'Jun',
        June                 : 'Junho',
        List                 : 'Lista',
        Mar                  : 'Mar',
        March                : 'Março',
        May                  : 'Mai',
        Month                : 'Mês',
        'Multi Days'         : 'Vários Dias',
        Nov                  : 'Nov',
        Oct                  : 'Out',
        October              : 'Outubro',
        Print                : 'Imprimir',
        Reload               : 'Recarregar',
        'Reset database'     : 'Redefinir banco de dados',
        'Reset to default'   : 'Redefinir para padrão',
        Resourceview         : 'Visualização de Recursos',
        Save                 : 'Salvar',
        Sep                  : 'Set',
        September            : 'Setembro',
        Timeline             : 'Linha do Tempo',
        Today                : 'Hoje',
        'Two weeks'          : 'Duas semanas',
        Week                 : 'Semana',
        'Week Agenda'        : 'Agenda da Semana',
        Weekends             : 'Fins de semana',
        Year                 : 'Ano',
        'Zoom to events'     : 'Zoom para eventos'
    },

    Checkbox : {
        'Custom styles'                   : 'Estilos personalizados',
        'Fit events'                      : 'Ajustar eventos',
        'Fit timeline to available space' : 'Ajustar linha do tempo ao espaço disponível',
        'Full width'                      : 'Largura total',
        'Hide borders'                    : 'Ocultar bordas',
        'Hide empty hours'                : 'Ocultar horas vazias',
        'Hide time axes'                  : 'Ocultar eixos de tempo',
        'Hide unscheduled resources'      : 'Ocultar recursos não agendados',
        'Hide weekends'                   : 'Ocultar fins de semana',
        'On top'                          : 'No topo',
        'Show avatar'                     : 'Mostrar avatar',
        'Show core hours in day'          : 'Mostrar horas principais no dia',
        'Show time'                       : 'Mostrar hora',
        'Stack events vertically'         : 'Empilhar eventos verticalmente',
        'Sync hour heights'               : 'Sincronizar alturas das horas'
    },

    Slider : {
        'Hour height'    : 'Altura da hora',
        'Resource width' : 'Largura do recurso',
        Scale            : 'Escala'
    },

    Combo : {
        'Choose show' : 'Escolher show',
        Equipment     : 'Equipamento',
        'Timezone:'   : 'Fuso horário:'
    },

    Label : {
        Days             : 'Dias',
        Months           : 'Meses',
        'Resource width' : 'Largura do recurso'
    },

    NumberField : {
        Every                      : 'Cada',
        'Max events per cell'      : 'Máximo de eventos por célula',
        'Scroll to hour'           : 'Rolar para a hora',
        'Snap increment (minutes)' : 'Incremento de ajuste (minutos)'
    },

    TextField : {
        'Filter resources'  : 'Filtrar recursos',
        Name                : 'Nome',
        'Type to filter...' : 'Digite para filtrar...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Os eventos serão ajustados na navegação quando marcado',
        'Fit events within scroll range'                                      : 'Ajustar eventos dentro do intervalo de rolagem',
        Friday                                                                : 'Sexta-feira',
        Monday                                                                : 'Segunda-feira',
        'Print the currently active view'                                     : 'Imprimir a visualização atualmente ativa',
        Saturday                                                              : 'Sábado',
        'Select admin mode to allow editing and rescheduling of performances' : 'Selecione o modo administrador para permitir a edição e o reescalonamento de apresentações',
        Settings                                                              : 'Configurações',
        'Show the weekends'                                                   : 'Mostrar os fins de semana',
        Sunday                                                                : 'Domingo',
        Thursday                                                              : 'Quinta-feira',
        Tuesday                                                               : 'Terça-feira',
        Wednesday                                                             : 'Quarta-feira'
    },

    SlideToggle : {
        'Hide completed' : 'Ocultar concluídos'
    }
};

export default LocaleHelper.publishLocale(locale);
