import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Eu',
    localeDesc : 'Euskara',
    localeCode : 'eu-ES',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Aholkuak bistaratu',
        Apply           : 'Aplikatu',
        Learn           : 'Ikasi',
        DownloadTrial   : 'Deskargatu Proba'
    },

    Checkbox : {
        Automatically : 'Automatikoki',
        runHints      : 'Exekutatu pista-fluxua hasieran'
    },

    Combo : {
        Theme    : 'Gaia',
        Language : 'Hizkuntza',
        Size     : 'Tamaina'
    },

    Popup : {
        UsedClasses : 'Demo honetan erabilitako klaseak'
    },

    Shared : {
        'Locale changed' : 'Tokiko hizkuntza aldatu da'
    },

    TextField : {
        Filter : 'Iragazi'
    },

    Tooltip : {
        infoButton       : 'Klik egin informazioa erakusteko eta gaia edo tokiko hizkuntza aldatzeko',
        codeButton       : 'Klik egin barneko kode editorea erakusteko',
        hintCheck        : 'Markatu adibidea kargatzean aholkuak automatikoki bistaratzeko',
        fullscreenButton : 'Pantaila osoa',
        openInCodePen    : 'Ireki CodePen-en'
    }
};

export default LocaleHelper.publishLocale(locale);
