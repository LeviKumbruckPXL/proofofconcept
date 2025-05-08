import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Fi',
    localeDesc : 'Suomi',
    localeCode : 'fi',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Näytä vihjeet',
        Apply           : 'Käytä',
        Learn           : 'Opi',
        DownloadTrial   : 'Lataa kokeiluversio'
    },

    Checkbox : {
        Automatically : 'Automaattisesti',
        runHints      : 'Suorita vihjevirta käynnistyksen yhteydessä'
    },

    Combo : {
        Theme    : 'Teema',
        Language : 'Kieli',
        Size     : 'Koko'
    },

    Popup : {
        UsedClasses : 'Tässä demossa käytetyt luokat'
    },

    Shared : {
        'Locale changed' : 'Kieli muuttui'
    },

    TextField : {
        Filter : 'Suodata'
    },

    Tooltip : {
        infoButton       : 'Napsauta näyttääksesi tiedot ja vaihtaaksesi teeman tai kielen',
        codeButton       : 'Napsauta näyttääksesi sisäänrakennetun koodieditorin',
        hintCheck        : 'Valitse näyttääksesi vihjeet automaattisesti esimerkkiä ladattaessa',
        fullscreenButton : 'Koko näyttö',
        openInCodePen    : 'Avaa CodePenissä'
    }
};

export default LocaleHelper.publishLocale(locale);
