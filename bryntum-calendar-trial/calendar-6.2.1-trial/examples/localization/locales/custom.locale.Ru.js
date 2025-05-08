import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ru.js';

const locale = {

    localeName : 'Ru',
    localeDesc : 'Русский',
    localeCode : 'ru',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Демо локализации'
    },

    Button : {
        'Add column'          : 'Добавить колонку',
        'Display hints'       : 'Показать подсказки',
        'Remove column'       : 'Удалить колонку',
        'Show all day events' : 'Показывать события на весь день',
        'My button'           : data => `Моя кнопка ${data}`,
        Apply                 : 'Применить',
        Learn                 : 'Изучить',
        DownloadTrial         : 'Скачать пробную версию'
    },

    Column : {
        Company : 'Компания',
        Name    : 'Имя'
    },

    Checkbox : {
        'Auto apply'  : 'Применять сразу',
        Automatically : 'Автоматически',
        runHints      : 'Запустить подсказку при запуске'
    },

    CodeEditor : {
        'Code editor'   : 'Редактор кода',
        'Download code' : 'Скачать код'
    },

    Combo : {
        Theme    : 'Выбрать тему',
        Language : 'Выбрать язык',
        Size     : 'Выбрать размер'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Встреча',
        Phone   : 'Звонок',
        Lunch   : 'Обед',
        Workout : 'Тренировка'
    },

    Shared : {
        'Full size'      : 'Полный размер',
        'Locale changed' : 'Язык изменен',
        'Phone size'     : 'Экран смартфона'
    },

    Tooltip : {
        infoButton       : 'Показать редактор кода',
        codeButton       : 'Показать информацию, переключить тему или язык',
        hintCheck        : 'Автоматически показывать подсказки при загрузке примера',
        fullscreenButton : 'На весь экран',
        openInCodePen    : 'Открыть в CodePen'
    },

    Popup : {
        UsedClasses : 'Классы, используемые в этом демо'
    },

    TextField : {
        Filter : 'Фильтр'
    }
};

export default LocaleHelper.publishLocale(locale);
