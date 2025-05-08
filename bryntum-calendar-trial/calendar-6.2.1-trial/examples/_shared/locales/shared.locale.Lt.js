import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'LT',
    localeDesc : 'Lietuvių',
    localeCode : 'lt-LT',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Rodyti užuominas',
        Apply           : 'Taikyti',
        Learn           : 'Sužinoti',
        DownloadTrial   : 'Atsisiųsti bandomąją versiją'
    },

    Checkbox : {
        Automatically : 'Automatiškai',
        runHints      : 'Paleisti užuominų srautą paleidžiant'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Kalba',
        Size     : 'Dydis'
    },

    Popup : {
        UsedClasses : 'Klasės, naudojamos šiame demonstraciniame'
    },

    Shared : {
        'Locale changed' : 'Kalba pakeista'
    },

    TextField : {
        Filter : 'Filtruoti'
    },

    Tooltip : {
        infoButton       : 'Spustelėkite, kad parodytumėte informaciją ir pakeistumėte temą arba kalbą',
        codeButton       : 'Spustelėkite, kad parodytumėte įmontuotą kodo redaktorių',
        hintCheck        : 'Pažymėkite, kad automatiškai rodytumėte užuominas įkeliant pavyzdį',
        fullscreenButton : 'Visas ekranas',
        openInCodePen    : 'Atidaryti CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
