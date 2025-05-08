import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Uk',
    localeDesc : 'Українська',
    localeCode : 'uk-UA',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Показати підказки',
        Apply           : 'Застосувати',
        Learn           : 'Вивчити',
        DownloadTrial   : 'Завантажити пробну версію'
    },

    Checkbox : {
        Automatically : 'Автоматично',
        runHints      : 'Запустити підказки при запуску'
    },

    Combo : {
        Theme    : 'Тема',
        Language : 'Мова',
        Size     : 'Розмір'
    },

    Popup : {
        UsedClasses : 'Класи, використані в цій демонстрації'
    },

    Shared : {
        'Locale changed' : 'Локаль змінено'
    },

    TextField : {
        Filter : 'Фільтр'
    },

    Tooltip : {
        infoButton       : 'Натисніть, щоб показати інформацію та змінити тему або локаль',
        codeButton       : 'Натисніть, щоб показати вбудований редактор коду',
        hintCheck        : 'Позначте, щоб автоматично показувати підказки при завантаженні прикладу',
        fullscreenButton : 'На весь екран',
        openInCodePen    : 'Відкрити в CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
