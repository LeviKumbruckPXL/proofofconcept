import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'SrRs',
    localeDesc : 'Српски (ћирилица)',
    localeCode : 'sr-RS',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Прикажи савете',
        Apply           : 'Примени',
        Learn           : 'Учи',
        DownloadTrial   : 'Преузми пробну верзију'
    },

    Checkbox : {
        Automatically : 'Аутоматски',
        runHints      : 'Покрени ток савета при покретању'
    },

    Combo : {
        Theme    : 'Тема',
        Language : 'Језик',
        Size     : 'Величина'
    },

    Popup : {
        UsedClasses : 'Класе коришћене у овом демо-у'
    },

    Shared : {
        'Locale changed' : 'Локал је промењен'
    },

    TextField : {
        Filter : 'Филтер'
    },

    Tooltip : {
        infoButton       : 'Кликни да прикажеш информације и промениш тему или локал',
        codeButton       : 'Кликни да прикажеш уграђени уређивач кода',
        hintCheck        : 'Означи да аутоматски прикажеш савете при учитавању примера',
        fullscreenButton : 'Цео екран',
        openInCodePen    : 'Отвори у CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
