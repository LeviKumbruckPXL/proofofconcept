import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Fi.js';

const locale = {

    localeName : 'Fi',
    localeDesc : 'Suomi',
    localeCode : 'fi',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokalisointiesittely'
    },

    Button : {
        'Add column'          : 'Lisää sarake',
        'Display hints'       : 'Näytä vihjeet',
        'Remove column'       : 'Poista sarake',
        'Show all day events' : 'Näytä koko päivän tapahtumat',
        'My button'           : data => `Oma painike ${data}`,
        Apply                 : 'Käytä',
        Learn                 : 'Opi',
        DownloadTrial         : 'Lataa kokeiluversio'
    },

    Column : {
        Company : 'Yritys',
        Name    : 'Nimi'
    },

    Checkbox : {
        'Auto apply'  : 'Automaattinen sovellus',
        Automatically : 'Automaattisesti',
        runHints      : 'Suorita vihjevirta käynnistyksen yhteydessä'
    },

    CodeEditor : {
        'Code editor'   : 'Koodieditori',
        'Download code' : 'Lataa koodi'
    },

    Combo : {
        Theme    : 'Teema',
        Language : 'Kieli',
        Size     : 'Koko'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Kokous',
        Phone   : 'Puhelu',
        Lunch   : 'Lounas',
        Workout : 'Harjoitus'
    },

    Shared : {
        'Full size'      : 'Täysi koko',
        'Locale changed' : 'Kieli muuttui',
        'Phone size'     : 'Puhelimen koko'
    },

    Tooltip : {
        infoButton       : 'Napsauta näyttääksesi tiedot ja vaihtaaksesi teeman tai kielen',
        codeButton       : 'Napsauta näyttääksesi sisäänrakennetun koodieditorin',
        hintCheck        : 'Valitse näyttääksesi vihjeet automaattisesti esimerkkiä ladattaessa',
        fullscreenButton : 'Koko näyttö',
        openInCodePen    : 'Avaa CodePenissä'
    },

    Popup : {
        UsedClasses : 'Tässä demossa käytetyt luokat'
    },

    TextField : {
        Filter : 'Suodata'
    }
};

export default LocaleHelper.publishLocale(locale);
