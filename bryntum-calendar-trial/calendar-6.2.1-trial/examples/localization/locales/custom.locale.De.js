import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/De.js';

const locale = {

    localeName : 'De',
    localeDesc : 'Deutsch',
    localeCode : 'de-DE',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokalisierungsdemo'
    },

    Button : {
        'Add column'          : 'Spalte hinzufügen',
        'Display hints'       : 'Hinweise anzeigen',
        'Remove column'       : 'Spalte entfernen',
        'Show all day events' : 'Zeige alle tagesereignisse',
        'My button'           : data => `Mein knopf ${data}`,
        Apply                 : 'Anwenden',
        Learn                 : 'Lernen',
        DownloadTrial         : 'Testversion herunterladen'
    },

    Column : {
        Company : 'Firma',
        Name    : 'Name'
    },

    Checkbox : {
        'Auto apply'  : 'Automatisch anwenden',
        Automatically : 'Automatisch',
        runHints      : 'Hinweisfluss beim Start ausführen'
    },

    CodeEditor : {
        'Code editor'   : 'Code-Editor',
        'Download code' : 'Code herunterladen'
    },

    Combo : {
        Theme    : 'Thema',
        Language : 'Sprache',
        Size     : 'Größe'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Session',
        Phone   : 'Telefon',
        Lunch   : 'Mittagessen',
        Workout : 'Trainieren'
    },

    Shared : {
        'Full size'      : 'Volle Größe',
        'Locale changed' : 'Gebietsschema geändert',
        'Phone size'     : 'Telefongröße'
    },

    Tooltip : {
        infoButton       : 'Klicken, um Informationen anzuzeigen und das Thema oder Gebietsschema zu wechseln',
        codeButton       : 'Klicken, um den integrierten Code-Editor anzuzeigen',
        hintCheck        : 'Aktivieren, um beim Laden des Beispiels automatisch Hinweise anzuzeigen',
        fullscreenButton : 'Vollbild',
        openInCodePen    : 'In CodePen öffnen'
    },

    Popup : {
        UsedClasses : 'In diesem Demo verwendete Klassen'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
