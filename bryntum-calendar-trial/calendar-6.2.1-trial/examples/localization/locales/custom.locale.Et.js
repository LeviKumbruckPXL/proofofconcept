import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Et.js';

const locale = {

    localeName : 'Et',
    localeDesc : 'Eesti keel',
    localeCode : 'et',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokaliseerimise demo'
    },

    Button : {
        'Add column'          : 'Lisa veerg',
        'Display hints'       : 'Kuva vihjed',
        'Remove column'       : 'Eemalda veerg',
        'Show all day events' : 'Näita kogu päeva sündmusi',
        'My button'           : data => `Minu nupp ${data}`,
        Apply                 : 'Rakenda',
        Learn                 : 'Õpi',
        DownloadTrial         : 'Laadi alla prooviversioon'
    },

    Column : {
        Company : 'Ettevõte',
        Name    : 'Nimi'
    },

    Checkbox : {
        'Auto apply'  : 'Automaatne rakendamine',
        Automatically : 'Automaatselt',
        runHints      : 'Käivita vihjete voog käivitamisel'
    },

    CodeEditor : {
        'Code editor'   : 'Koodiredaktor',
        'Download code' : 'Laadi kood alla'
    },

    Combo : {
        Theme    : 'Teema',
        Language : 'Keel',
        Size     : 'Suurus'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Koosolek',
        Phone   : 'Telefon',
        Lunch   : 'Lõuna',
        Workout : 'Treening'
    },

    Shared : {
        'Full size'      : 'Täissuurus',
        'Locale changed' : 'Keel muutus',
        'Phone size'     : 'Telefoni suurus'
    },

    Tooltip : {
        infoButton       : 'Klõpsake, et näidata infot ja vahetada teemat või keelt',
        codeButton       : 'Klõpsake, et näidata sisseehitatud koodiredaktorit',
        hintCheck        : 'Märkige, et automaatselt kuvada vihjeid näite laadimisel',
        fullscreenButton : 'Täisekraan',
        openInCodePen    : 'Ava CodePenis'
    },

    Popup : {
        UsedClasses : 'Selles demos kasutatud klassid'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
