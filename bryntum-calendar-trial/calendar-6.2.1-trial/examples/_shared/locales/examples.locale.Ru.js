import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ru.js';
import './shared.locale.Ru.js';

const locale = {

    localeName : 'Ru',
    localeDesc : 'Русский',
    localeCode : 'ru',
    localeRtl  : false,

    Column : {
        Completed          : 'Завершено',
        Duration           : 'Продолжительность',
        'In progress'      : 'В процессе',
        Name               : 'Имя',
        'Not started'      : 'Не начато',
        'Staff/Resource'   : 'Персонал/Ресурс',
        'Unassigned tasks' : 'Неназначенные задачи'
    },

    Button : {
        Actions              : 'Действия',
        Agenda               : 'Повестка дня',
        Apr                  : 'Апр',
        April                : 'Апрель',
        Aug                  : 'Авг',
        Cancel               : 'Отмена',
        Create               : 'Создать',
        Day                  : 'День',
        'Day Agenda'         : 'Повестка дня на день',
        'Day resources'      : 'Ресурсы дня',
        Dec                  : 'Дек',
        Delete               : 'Удалить',
        Dualdayview          : 'Двухдневный просмотр',
        'Export to Excel'    : 'Экспорт в Excel',
        Feb                  : 'Фев',
        February             : 'Февраль',
        'Grouped by day'     : 'Группировка по дням',
        'Grouped by station' : 'Группировка по станциям',
        Jan                  : 'Янв',
        January              : 'Январь',
        Jul                  : 'Июл',
        July                 : 'Июль',
        Jun                  : 'Июн',
        June                 : 'Июнь',
        List                 : 'Список',
        Mar                  : 'Мар',
        March                : 'Март',
        May                  : 'Май',
        Month                : 'Месяц',
        'Multi Days'         : 'Несколько дней',
        Nov                  : 'Ноя',
        Oct                  : 'Окт',
        October              : 'Октябрь',
        Print                : 'Печать',
        Reload               : 'Перезагрузить',
        'Reset database'     : 'Сбросить базу данных',
        'Reset to default'   : 'Сбросить по умолчанию',
        Resourceview         : 'Просмотр ресурсов',
        Save                 : 'Сохранить',
        Sep                  : 'Сен',
        September            : 'Сентябрь',
        Timeline             : 'Лента времени',
        Today                : 'Сегодня',
        'Two weeks'          : 'Две недели',
        Week                 : 'Неделя',
        'Week Agenda'        : 'Повестка дня на неделю',
        Weekends             : 'Выходные',
        Year                 : 'Год',
        'Zoom to events'     : 'Увеличить до событий'
    },

    Checkbox : {
        'Custom styles'                   : 'Пользовательские стили',
        'Fit events'                      : 'Подогнать события',
        'Fit timeline to available space' : 'Подогнать временную шкалу под доступное пространство',
        'Full width'                      : 'Полная ширина',
        'Hide borders'                    : 'Скрыть границы',
        'Hide empty hours'                : 'Скрыть пустые часы',
        'Hide time axes'                  : 'Скрыть временные оси',
        'Hide unscheduled resources'      : 'Скрыть незапланированные ресурсы',
        'Hide weekends'                   : 'Скрыть выходные',
        'On top'                          : 'Сверху',
        'Show avatar'                     : 'Показать аватар',
        'Show core hours in day'          : 'Показать основные часы в день',
        'Show time'                       : 'Показать время',
        'Stack events vertically'         : 'Расположить события вертикально',
        'Sync hour heights'               : 'Синхронизировать высоту часов'
    },

    Slider : {
        'Hour height'    : 'Высота часа',
        'Resource width' : 'Ширина ресурса',
        Scale            : 'Масштаб'
    },

    Combo : {
        'Choose show' : 'Выберите шоу',
        Equipment     : 'Оборудование',
        'Timezone:'   : 'Часовой пояс:'
    },

    Label : {
        Days             : 'Дни',
        Months           : 'Месяцы',
        'Resource width' : 'Ширина ресурса'
    },

    NumberField : {
        Every                      : 'Каждый',
        'Max events per cell'      : 'Максимум событий на ячейку',
        'Scroll to hour'           : 'Прокрутить до часа',
        'Snap increment (minutes)' : 'Шаг привязки (минуты)'
    },

    TextField : {
        'Filter resources'  : 'Фильтр ресурсов',
        Name                : 'Имя',
        'Type to filter...' : 'Введите для фильтрации...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'События будут подогнаны при навигации, если отмечено',
        'Fit events within scroll range'                                      : 'Подогнать события в пределах диапазона прокрутки',
        Friday                                                                : 'Пятница',
        Monday                                                                : 'Понедельник',
        'Print the currently active view'                                     : 'Распечатать текущий активный вид',
        Saturday                                                              : 'Суббота',
        'Select admin mode to allow editing and rescheduling of performances' : 'Выберите режим администратора, чтобы разрешить редактирование и переназначение выступлений',
        Settings                                                              : 'Настройки',
        'Show the weekends'                                                   : 'Показать выходные',
        Sunday                                                                : 'Воскресенье',
        Thursday                                                              : 'Четверг',
        Tuesday                                                               : 'Вторник',
        Wednesday                                                             : 'Среда'
    },

    SlideToggle : {
        'Hide completed' : 'Скрыть завершенные'
    }
};

export default LocaleHelper.publishLocale(locale);
