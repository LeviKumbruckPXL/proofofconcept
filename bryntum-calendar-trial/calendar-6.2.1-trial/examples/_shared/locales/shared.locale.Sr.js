import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Sr',
    localeDesc : 'Srpski',
    localeCode : 'sr',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Prikaži savete',
        Apply           : 'Primeni',
        Learn           : 'Nauči',
        DownloadTrial   : 'Preuzmi probnu verziju'
    },

    Checkbox : {
        Automatically : 'Automatski',
        runHints      : 'Pokreni tok saveta pri pokretanju'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Jezik',
        Size     : 'Veličina'
    },

    Popup : {
        UsedClasses : 'Klase korišćene u ovom demou'
    },

    Shared : {
        'Locale changed' : 'Lokalizacija promenjena'
    },

    TextField : {
        Filter : 'Filter'
    },

    Tooltip : {
        infoButton       : 'Kliknite da prikažete informacije i promenite temu ili lokalizaciju',
        codeButton       : 'Kliknite da prikažete ugrađeni uređivač koda',
        hintCheck        : 'Označite da automatski prikažete savete prilikom učitavanja primera',
        fullscreenButton : 'Ceo ekran',
        openInCodePen    : 'Otvori u CodePen-u'
    }
};

export default LocaleHelper.publishLocale(locale);
