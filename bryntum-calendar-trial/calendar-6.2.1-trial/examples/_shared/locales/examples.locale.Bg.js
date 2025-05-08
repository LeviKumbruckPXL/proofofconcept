import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Bg.js';
import './shared.locale.Bg.js';

const locale = {

    localeName : 'Bg',
    localeDesc : 'Български',
    localeCode : 'bg',
    localeRtl  : false,

    Column : {
        Completed          : 'Завършено',
        Duration           : 'Продължителност',
        'In progress'      : 'В процес на изпълнение',
        Name               : 'Име',
        'Not started'      : 'Не е започнато',
        'Staff/Resource'   : 'Персонал/Ресурс',
        'Unassigned tasks' : 'Неназначени задачи'
    },

    Button : {
        Actions              : 'Действия',
        Agenda               : 'Дневен ред',
        Apr                  : 'Апр',
        April                : 'Април',
        Aug                  : 'Авг',
        Cancel               : 'Отказ',
        Create               : 'Създай',
        Day                  : 'Ден',
        'Day Agenda'         : 'Дневен ред за деня',
        'Day resources'      : 'Ресурси за деня',
        Dec                  : 'Дек',
        Delete               : 'Изтрий',
        Dualdayview          : 'Двудневен изглед',
        'Export to Excel'    : 'Експортиране в Excel',
        Feb                  : 'Фев',
        February             : 'Февруари',
        'Grouped by day'     : 'Групирано по дни',
        'Grouped by station' : 'Групирано по станции',
        Jan                  : 'Ян',
        January              : 'Януари',
        Jul                  : 'Юли',
        July                 : 'Юли',
        Jun                  : 'Юни',
        June                 : 'Юни',
        List                 : 'Списък',
        Mar                  : 'Март',
        March                : 'Март',
        May                  : 'Май',
        Month                : 'Месец',
        'Multi Days'         : 'Много дни',
        Nov                  : 'Ное',
        Oct                  : 'Окт',
        October              : 'Октомври',
        Print                : 'Печат',
        Reload               : 'Презареди',
        'Reset database'     : 'Нулиране на базата данни',
        'Reset to default'   : 'Възстановяване на настройките по подразбиране',
        Resourceview         : 'Изглед на ресурси',
        Save                 : 'Запази',
        Sep                  : 'Септ',
        September            : 'Септември',
        Timeline             : 'Времева линия',
        Today                : 'Днес',
        'Two weeks'          : 'Две седмици',
        Week                 : 'Седмица',
        'Week Agenda'        : 'Седмичен дневен ред',
        Weekends             : 'Уикенди',
        Year                 : 'Година',
        'Zoom to events'     : 'Увеличи до събития'
    },

    Checkbox : {
        'Custom styles'                   : 'Персонализирани стилове',
        'Fit events'                      : 'Напасни събития',
        'Fit timeline to available space' : 'Напасни времевата линия към наличното пространство',
        'Full width'                      : 'Пълна ширина',
        'Hide borders'                    : 'Скрий границите',
        'Hide empty hours'                : 'Скрий празните часове',
        'Hide time axes'                  : 'Скрий времевите оси',
        'Hide unscheduled resources'      : 'Скрий нерегламентираните ресурси',
        'Hide weekends'                   : 'Скрий уикендите',
        'On top'                          : 'Отгоре',
        'Show avatar'                     : 'Покажи аватар',
        'Show core hours in day'          : 'Покажи основните часове през деня',
        'Show time'                       : 'Показване на времето',
        'Stack events vertically'         : 'Подреди събитията вертикално',
        'Sync hour heights'               : 'Синхронизирай височините на часовете'
    },

    Slider : {
        'Hour height'    : 'Часова височина',
        'Resource width' : 'Ширина на ресурс',
        Scale            : 'Мащаб'
    },

    Combo : {
        'Choose show' : 'Изберете шоу',
        Equipment     : 'Оборудване',
        'Timezone:'   : 'Часова зона:'
    },

    Label : {
        Days             : 'Дни',
        Months           : 'Месеци',
        'Resource width' : 'Ширина на ресурса'
    },

    NumberField : {
        Every                      : 'Всеки',
        'Max events per cell'      : 'Максимум събития на клетка',
        'Scroll to hour'           : 'Превъртете до час',
        'Snap increment (minutes)' : 'Стъпка на увеличение (минути)'
    },

    TextField : {
        'Filter resources'  : 'Филтриране на ресурси',
        Name                : 'Име',
        'Type to filter...' : 'Въведете за филтриране...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Събитията ще бъдат пригодени при навигация, когато е отметнато',
        'Fit events within scroll range'                                      : 'Пригодете събитията в обхвата на превъртане',
        Friday                                                                : 'Петък',
        Monday                                                                : 'Понеделник',
        'Print the currently active view'                                     : 'Отпечатайте текущо активния изглед',
        Saturday                                                              : 'Събота',
        'Select admin mode to allow editing and rescheduling of performances' : 'Изберете администраторски режим, за да позволите редактиране и пренасрочване на изпълненията',
        Settings                                                              : 'Настройки',
        'Show the weekends'                                                   : 'Показване на уикендите',
        Sunday                                                                : 'Неделя',
        Thursday                                                              : 'Четвъртък',
        Tuesday                                                               : 'Вторник',
        Wednesday                                                             : 'Сряда'
    },

    SlideToggle : {
        'Hide completed' : 'Скрий завършените'
    }
};

export default LocaleHelper.publishLocale(locale);
