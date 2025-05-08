import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Ro',
    localeDesc : 'Română',
    localeCode : 'ro',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Afișează sugestii',
        Apply           : 'Aplică',
        Learn           : 'Învățați',
        DownloadTrial   : 'Descarcă versiunea de încercare'
    },

    Checkbox : {
        Automatically : 'Automat',
        runHints      : 'Rulați fluxul de sugestii la pornire'
    },

    Combo : {
        Theme    : 'Temă',
        Language : 'Limbă',
        Size     : 'Dimensiune'
    },

    Popup : {
        UsedClasses : 'Clase utilizate în această demonstrație'
    },

    Shared : {
        'Locale changed' : 'Limba a fost schimbată'
    },

    TextField : {
        Filter : 'Filtru'
    },

    Tooltip : {
        infoButton       : 'Click pentru a afișa informații și a schimba tema sau limba',
        codeButton       : 'Click pentru a afișa editorul de cod încorporat',
        hintCheck        : 'Bifați pentru a afișa automat sugestiile la încărcarea exemplului',
        fullscreenButton : 'Ecran complet',
        openInCodePen    : 'Deschide în CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
