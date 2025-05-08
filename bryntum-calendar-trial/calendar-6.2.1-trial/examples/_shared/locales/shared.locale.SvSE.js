import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'SvSE',
    localeDesc : 'Svenska',
    localeCode : 'sv-SE',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Visa tips',
        Apply           : 'Verkställ',
        Learn           : 'Lär',
        DownloadTrial   : 'Ladda ner testversion'
    },

    Checkbox : {
        Automatically : 'Automatiskt',
        runHints      : 'Kör tipsflöde vid start'
    },

    Combo : {
        Theme    : 'Välj tema',
        Language : 'Välj språk',
        Size     : 'Välj storlek'
    },

    Popup : {
        UsedClasses : 'Klasser som används i denna demo'
    },

    Shared : {
        'Locale changed' : 'Språk ändrat'
    },

    TextField : {
        Filter : 'Filter'
    },

    Tooltip : {
        infoButton       : 'Klicka för att visa information och byta tema eller språk',
        codeButton       : 'Klicka för att visa den inbyggda kodredigeraren',
        hintCheck        : 'Markera för att automatiskt visa tips när du laddar exemplet',
        fullscreenButton : 'Fullskärm',
        openInCodePen    : 'Öppna i CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
