import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Bg',
    localeDesc : 'Български',
    localeCode : 'bg',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Показване на подсказки',
        Apply           : 'Приложи',
        Learn           : 'Научи',
        DownloadTrial   : 'Изтегли пробна версия'
    },

    Checkbox : {
        Automatically : 'Автоматично',
        runHints      : 'Стартиране на потока с подсказки при стартиране'
    },

    Combo : {
        Theme    : 'Тема',
        Language : 'Език',
        Size     : 'Размер'
    },

    Popup : {
        UsedClasses : 'Класове, използвани в тази демонстрация'
    },

    Shared : {
        'Locale changed' : 'Локалът е променен'
    },

    TextField : {
        Filter : 'Филтър'
    },

    Tooltip : {
        infoButton       : 'Кликнете, за да покажете информация и да смените темата или локала',
        codeButton       : 'Кликнете, за да покажете вградения редактор на код',
        hintCheck        : 'Отметнете, за да показвате автоматично подсказки при зареждане на примера',
        fullscreenButton : 'Цял екран',
        openInCodePen    : 'Отвори в CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
