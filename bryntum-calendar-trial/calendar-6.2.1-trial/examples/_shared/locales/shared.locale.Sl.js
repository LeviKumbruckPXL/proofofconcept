import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Sl',
    localeDesc : 'Slovensko',
    localeCode : 'sl',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Prikaži namige',
        Apply           : 'Uporabi',
        Learn           : 'Nauči se',
        DownloadTrial   : 'Prenesi preizkusno različico'
    },

    Checkbox : {
        Automatically : 'Samodejno',
        runHints      : 'Zaženi tok namigov ob zagonu'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Jezik',
        Size     : 'Velikost'
    },

    Popup : {
        UsedClasses : 'Razredi uporabljeni v tej predstavitvi'
    },

    Shared : {
        'Locale changed' : 'Lokalizacija spremenjena'
    },

    TextField : {
        Filter : 'Filter'
    },

    Tooltip : {
        infoButton       : 'Kliknite za prikaz informacij in preklop teme ali lokalizacije',
        codeButton       : 'Kliknite za prikaz vgrajenega urejevalnika kode',
        hintCheck        : 'Označite za samodejni prikaz namigov ob nalaganju primera',
        fullscreenButton : 'Celoten zaslon',
        openInCodePen    : 'Odpri v CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
