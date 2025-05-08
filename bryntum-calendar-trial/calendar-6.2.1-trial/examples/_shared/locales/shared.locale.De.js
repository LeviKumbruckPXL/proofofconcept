import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'De',
    localeDesc : 'Deutsch',
    localeCode : 'de-DE',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Hinweise anzeigen',
        Apply           : 'Anwenden',
        Learn           : 'Lernen',
        DownloadTrial   : 'Testversion herunterladen'
    },

    Checkbox : {
        Automatically : 'Automatisch',
        runHints      : 'Hinweisfluss beim Start ausführen'
    },

    Combo : {
        Theme    : 'Thema',
        Language : 'Sprache',
        Size     : 'Größe'
    },

    Popup : {
        UsedClasses : 'In diesem Demo verwendete Klassen'
    },

    Shared : {
        'Locale changed' : 'Gebietsschema geändert'
    },

    TextField : {
        Filter : 'Filter'
    },

    Tooltip : {
        infoButton       : 'Klicken, um Informationen anzuzeigen und das Thema oder Gebietsschema zu wechseln',
        codeButton       : 'Klicken, um den integrierten Code-Editor anzuzeigen',
        hintCheck        : 'Aktivieren, um beim Laden des Beispiels automatisch Hinweise anzuzeigen',
        fullscreenButton : 'Vollbild',
        openInCodePen    : 'In CodePen öffnen'
    }
};

export default LocaleHelper.publishLocale(locale);
