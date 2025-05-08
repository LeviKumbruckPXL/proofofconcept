import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Uk.js';

const locale = {

    localeName : 'Uk',
    localeDesc : 'Українська',
    localeCode : 'uk-UA',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Демонстрація локалізації'
    },

    Button : {
        'Add column'          : 'Додати стовпець',
        'Display hints'       : 'Показати підказки',
        'Remove column'       : 'Видалити стовпець',
        'Show all day events' : 'Показати події на весь день',
        'My button'           : data => `Моя кнопка ${data}`,
        Apply                 : 'Застосувати',
        Learn                 : 'Вивчити',
        DownloadTrial         : 'Завантажити пробну версію'
    },

    Column : {
        Company : 'Компанія',
        Name    : "Ім'я"
    },

    Checkbox : {
        'Auto apply'  : 'Автоматичне застосування',
        Automatically : 'Автоматично',
        runHints      : 'Запустити підказки при запуску'
    },

    CodeEditor : {
        'Code editor'   : 'Редактор коду',
        'Download code' : 'Завантажити код'
    },

    Combo : {
        Theme    : 'Тема',
        Language : 'Мова',
        Size     : 'Розмір'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Зустріч',
        Phone   : 'Телефон',
        Lunch   : 'Обід',
        Workout : 'Тренування'
    },

    Shared : {
        'Full size'      : 'Повний розмір',
        'Locale changed' : 'Локаль змінено',
        'Phone size'     : 'Розмір телефону'
    },

    Tooltip : {
        infoButton       : 'Натисніть, щоб показати інформацію та змінити тему або локаль',
        codeButton       : 'Натисніть, щоб показати вбудований редактор коду',
        hintCheck        : 'Позначте, щоб автоматично показувати підказки при завантаженні прикладу',
        fullscreenButton : 'На весь екран',
        openInCodePen    : 'Відкрити в CodePen'
    },

    Popup : {
        UsedClasses : 'Класи, використані в цій демонстрації'
    },

    TextField : {
        Filter : 'Фільтр'
    }
};

export default LocaleHelper.publishLocale(locale);
