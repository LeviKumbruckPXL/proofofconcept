import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/SvSE.js';

const locale = {

    localeName : 'SvSE',
    localeDesc : 'Svenska',
    localeCode : 'sv-SE',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokaliseringsdemo'
    },

    Button : {
        'Add column'          : 'Lägg till kolumn',
        'Display hints'       : 'Visa tips',
        'Remove column'       : 'Ta bort kolumn',
        'Show all day events' : 'Visa heldagshändelser',
        'My button'           : data => `Min knapp ${data}`,
        Apply                 : 'Verkställ',
        Learn                 : 'Lär',
        DownloadTrial         : 'Ladda ner testversion'
    },

    Column : {
        Company : 'Företag',
        Name    : 'Namn'
    },

    Checkbox : {
        'Auto apply'  : 'Auto applicera',
        Automatically : 'Automatiskt',
        runHints      : 'Kör tipsflöde vid start'
    },

    CodeEditor : {
        'Code editor'   : 'Kodredigerare',
        'Download code' : 'Ladda ner kod'
    },

    Combo : {
        Theme    : 'Välj tema',
        Language : 'Välj språk',
        Size     : 'Välj storlek'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Möte',
        Phone   : 'Telefon',
        Lunch   : 'Fika',
        Workout : 'Träning'
    },

    Shared : {
        'Full size'      : 'Full storlek',
        'Locale changed' : 'Språk ändrat',
        'Phone size'     : 'Telefonstorlek'
    },

    Tooltip : {
        infoButton       : 'Klicka för att visa information och byta tema eller språk',
        codeButton       : 'Klicka för att visa den inbyggda kodredigeraren',
        hintCheck        : 'Markera för att automatiskt visa tips när du laddar exemplet',
        fullscreenButton : 'Fullskärm',
        openInCodePen    : 'Öppna i CodePen'
    },

    Popup : {
        UsedClasses : 'Klasser som används i denna demo'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
