import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Uk.js';
import './shared.locale.Uk.js';

const locale = {

    localeName : 'Uk',
    localeDesc : 'Українська',
    localeCode : 'uk-UA',
    localeRtl  : false,

    Column : {
        Completed          : 'Завершено',
        Duration           : 'Тривалість',
        'In progress'      : 'В процесі',
        Name               : "Ім'я",
        'Not started'      : 'Не розпочато',
        'Staff/Resource'   : 'Персонал/Ресурс',
        'Unassigned tasks' : 'Непризначені завдання'
    },

    Button : {
        Actions              : 'Дії',
        Agenda               : 'Порядок денний',
        Apr                  : 'Кві',
        April                : 'Квітень',
        Aug                  : 'Сер',
        Cancel               : 'Скасувати',
        Create               : 'Створити',
        Day                  : 'День',
        'Day Agenda'         : 'Порядок денний на день',
        'Day resources'      : 'Ресурси дня',
        Dec                  : 'Гру',
        Delete               : 'Видалити',
        Dualdayview          : 'Подвійний перегляд дня',
        'Export to Excel'    : 'Експорт в Excel',
        Feb                  : 'Лют',
        February             : 'Лютий',
        'Grouped by day'     : 'Групувати за днями',
        'Grouped by station' : 'Групувати за станціями',
        Jan                  : 'Січ',
        January              : 'Січень',
        Jul                  : 'Лип',
        July                 : 'Липень',
        Jun                  : 'Чер',
        June                 : 'Червень',
        List                 : 'Список',
        Mar                  : 'Бер',
        March                : 'Березень',
        May                  : 'Тра',
        Month                : 'Місяць',
        'Multi Days'         : 'Кілька днів',
        Nov                  : 'Лис',
        Oct                  : 'Жов',
        October              : 'Жовтень',
        Print                : 'Друк',
        Reload               : 'Перезавантажити',
        'Reset database'     : 'Скинути базу даних',
        'Reset to default'   : 'Скинути до стандартних',
        Resourceview         : 'Перегляд ресурсів',
        Save                 : 'Зберегти',
        Sep                  : 'Вер',
        September            : 'Вересень',
        Timeline             : 'Хронологія',
        Today                : 'Сьогодні',
        'Two weeks'          : 'Два тижні',
        Week                 : 'Тиждень',
        'Week Agenda'        : 'Порядок денний на тиждень',
        Weekends             : 'Вихідні',
        Year                 : 'Рік',
        'Zoom to events'     : 'Збільшити до подій'
    },

    Checkbox : {
        'Custom styles'                   : 'Користувацькі стилі',
        'Fit events'                      : 'Підігнати події',
        'Fit timeline to available space' : 'Підігнати шкалу часу до доступного простору',
        'Full width'                      : 'На всю ширину',
        'Hide borders'                    : 'Приховати межі',
        'Hide empty hours'                : 'Приховати порожні години',
        'Hide time axes'                  : 'Приховати часові осі',
        'Hide unscheduled resources'      : 'Приховати нерозплановані ресурси',
        'Hide weekends'                   : 'Приховати вихідні',
        'On top'                          : 'Зверху',
        'Show avatar'                     : 'Показати аватар',
        'Show core hours in day'          : 'Показати основні години в день',
        'Show time'                       : 'Показати час',
        'Stack events vertically'         : 'Розташувати події вертикально',
        'Sync hour heights'               : 'Синхронізувати висоти годин'
    },

    Slider : {
        'Hour height'    : 'Висота години',
        'Resource width' : 'Ширина ресурсу',
        Scale            : 'Масштаб'
    },

    Combo : {
        'Choose show' : 'Виберіть шоу',
        Equipment     : 'Обладнання',
        'Timezone:'   : 'Часовий пояс:'
    },

    Label : {
        Days             : 'Дні',
        Months           : 'Місяці',
        'Resource width' : 'Ширина ресурсу'
    },

    NumberField : {
        Every                      : 'Кожен',
        'Max events per cell'      : 'Максимум подій на комірку',
        'Scroll to hour'           : 'Прокрутити до години',
        'Snap increment (minutes)' : "Крок прив'язки (хвилини)"
    },

    TextField : {
        'Filter resources'  : 'Фільтрувати ресурси',
        Name                : "Ім'я",
        'Type to filter...' : 'Введіть для фільтрації...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Події будуть підлаштовані при навігації, якщо вибрано',
        'Fit events within scroll range'                                      : 'Підлаштувати події в межах прокрутки',
        Friday                                                                : "П'ятниця",
        Monday                                                                : 'Понеділок',
        'Print the currently active view'                                     : 'Друкувати поточний активний вигляд',
        Saturday                                                              : 'Субота',
        'Select admin mode to allow editing and rescheduling of performances' : 'Виберіть режим адміністратора, щоб дозволити редагування та перенесення виступів',
        Settings                                                              : 'Налаштування',
        'Show the weekends'                                                   : 'Показати вихідні',
        Sunday                                                                : 'Неділя',
        Thursday                                                              : 'Четвер',
        Tuesday                                                               : 'Вівторок',
        Wednesday                                                             : 'Середа'
    },

    SlideToggle : {
        'Hide completed' : 'Приховати завершені'
    }
};

export default LocaleHelper.publishLocale(locale);
