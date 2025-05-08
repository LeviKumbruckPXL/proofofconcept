import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Ru',
    localeDesc : 'Русский',
    localeCode : 'ru',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Показать подсказки',
        Apply           : 'Применить',
        Learn           : 'Изучить',
        DownloadTrial   : 'Скачать пробную версию'
    },

    Checkbox : {
        Automatically : 'Автоматически',
        runHints      : 'Запустить подсказку при запуске'
    },

    Combo : {
        Theme    : 'Выбрать тему',
        Language : 'Выбрать язык',
        Size     : 'Выбрать размер'
    },

    Popup : {
        UsedClasses : 'Классы, используемые в этом демо'
    },

    Shared : {
        'Locale changed' : 'Язык изменен'
    },

    TextField : {
        Filter : 'Фильтр'
    },

    Tooltip : {
        infoButton       : 'Показать редактор кода',
        codeButton       : 'Показать информацию, переключить тему или язык',
        hintCheck        : 'Автоматически показывать подсказки при загрузке примера',
        fullscreenButton : 'На весь экран',
        openInCodePen    : 'Открыть в CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
