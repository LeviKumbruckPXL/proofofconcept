import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/SrRs.js';
import './shared.locale.SrRs.js';

const locale = {

    localeName : 'SrRs',
    localeDesc : 'Српски (ћирилица)',
    localeCode : 'sr-RS',
    localeRtl  : false,

    Column : {
        Completed          : 'Завршено',
        Duration           : 'Трајање',
        'In progress'      : 'У току',
        Name               : 'Име',
        'Not started'      : 'Није започето',
        'Staff/Resource'   : 'Особље/Ресурс',
        'Unassigned tasks' : 'Нераспоређени задаци'
    },

    Button : {
        Actions              : 'Акције',
        Agenda               : 'Агенда',
        Apr                  : 'Апр',
        April                : 'Април',
        Aug                  : 'Авг',
        Cancel               : 'Откажи',
        Create               : 'Креирај',
        Day                  : 'Дан',
        'Day Agenda'         : 'Дневна агенда',
        'Day resources'      : 'Дневни ресурси',
        Dec                  : 'Дец',
        Delete               : 'Обриши',
        Dualdayview          : 'Двоструки приказ дана',
        'Export to Excel'    : 'Извези у Excel',
        Feb                  : 'Феб',
        February             : 'Фебруар',
        'Grouped by day'     : 'Груписано по дану',
        'Grouped by station' : 'Груписано по станици',
        Jan                  : 'Јан',
        January              : 'Јануар',
        Jul                  : 'Јул',
        July                 : 'Јул',
        Jun                  : 'Јун',
        June                 : 'Јун',
        List                 : 'Листа',
        Mar                  : 'Мар',
        March                : 'Март',
        May                  : 'Мај',
        Month                : 'Месец',
        'Multi Days'         : 'Више дана',
        Nov                  : 'Нов',
        Oct                  : 'Окт',
        October              : 'Октобар',
        Print                : 'Штампај',
        Reload               : 'Поново учитај',
        'Reset database'     : 'Ресетуј базу података',
        'Reset to default'   : 'Ресетуј на подразумевано',
        Resourceview         : 'Приказ ресурса',
        Save                 : 'Сачувај',
        Sep                  : 'Сеп',
        September            : 'Септембар',
        Timeline             : 'Временска линија',
        Today                : 'Данас',
        'Two weeks'          : 'Две недеље',
        Week                 : 'Недеља',
        'Week Agenda'        : 'Недељна агенда',
        Weekends             : 'Викенди',
        Year                 : 'Година',
        'Zoom to events'     : 'Зумирај на догађаје'
    },

    Checkbox : {
        'Custom styles'                   : 'Прилагођени стилови',
        'Fit events'                      : 'Прилагоди догађаје',
        'Fit timeline to available space' : 'Прилагоди временску линију доступном простору',
        'Full width'                      : 'Пуна ширина',
        'Hide borders'                    : 'Сакриј границе',
        'Hide empty hours'                : 'Сакриј празне сате',
        'Hide time axes'                  : 'Сакриј временске осе',
        'Hide unscheduled resources'      : 'Сакриј нераспоређене ресурсе',
        'Hide weekends'                   : 'Сакриј викенде',
        'On top'                          : 'На врху',
        'Show avatar'                     : 'Прикажи аватар',
        'Show core hours in day'          : 'Прикажи основне сате у дану',
        'Show time'                       : 'Прикажи време',
        'Stack events vertically'         : 'Сложи догађаје вертикално',
        'Sync hour heights'               : 'Синхронизуј висине сати'
    },

    Slider : {
        'Hour height'    : 'Висина сата',
        'Resource width' : 'Ширина ресурса',
        Scale            : 'Скала'
    },

    Combo : {
        'Choose show' : 'Изаберите емисију',
        Equipment     : 'Опрема',
        'Timezone:'   : 'Временска зона:'
    },

    Label : {
        Days             : 'Дани',
        Months           : 'Месеци',
        'Resource width' : 'Ширина ресурса'
    },

    NumberField : {
        Every                      : 'Сваки',
        'Max events per cell'      : 'Максимум догађаја по ћелији',
        'Scroll to hour'           : 'Помери на сат',
        'Snap increment (minutes)' : 'Повећање у корацима (минути)'
    },

    TextField : {
        'Filter resources'  : 'Филтрирај ресурсе',
        Name                : 'Име',
        'Type to filter...' : 'Унесите за филтрирање...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Догађаји ће бити прилагођени приликом навигације када је означено',
        'Fit events within scroll range'                                      : 'Прилагоди догађаје у оквиру опсега скроловања',
        Friday                                                                : 'Петак',
        Monday                                                                : 'Понедељак',
        'Print the currently active view'                                     : 'Штампај тренутно активан приказ',
        Saturday                                                              : 'Субота',
        'Select admin mode to allow editing and rescheduling of performances' : 'Изаберите администраторски режим да бисте омогућили уређивање и прераспоређивање извођења',
        Settings                                                              : 'Подешавања',
        'Show the weekends'                                                   : 'Прикажи викенде',
        Sunday                                                                : 'Недеља',
        Thursday                                                              : 'Четвртак',
        Tuesday                                                               : 'Уторак',
        Wednesday                                                             : 'Среда'
    },

    SlideToggle : {
        'Hide completed' : 'Сакриј завршено'
    }
};

export default LocaleHelper.publishLocale(locale);
