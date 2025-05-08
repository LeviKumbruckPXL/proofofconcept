import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Nl',
    localeDesc : 'Nederlands',
    localeCode : 'nl',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Hints weergeven',
        Apply           : 'Еoepassen',
        Learn           : 'Leren',
        DownloadTrial   : 'Proefversie downloaden'
    },

    Checkbox : {
        Automatically : 'Automatisch',
        runHints      : 'Voer hintstroom uit bij opstarten'
    },

    Combo : {
        Theme    : 'Selecteer thema',
        Language : 'Selecteer landinstelling',
        Size     : 'Selecteer grootte'
    },

    Popup : {
        UsedClasses : 'Klassen gebruikt in deze demo'
    },

    Shared : {
        'Locale changed' : 'Taal is veranderd'
    },

    TextField : {
        Filter : 'Filter'
    },

    Tooltip : {
        infoButton       : 'Klik om informatie weer te geven en van thema of land te wisselen',
        codeButton       : 'Klik om de ingebouwde code-editor te tonen',
        hintCheck        : 'Vink deze optie aan om automatisch hints weer te geven bij het laden van het voorbeeld',
        fullscreenButton : 'Volledig scherm',
        openInCodePen    : 'Åpne i CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
