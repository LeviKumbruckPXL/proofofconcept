import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Nl.js';

const locale = {

    localeName : 'Nl',
    localeDesc : 'Nederlands',
    localeCode : 'nl',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokalisatiedemo'
    },

    Button : {
        'Add column'          : 'Kolom toevoegen',
        'Display hints'       : 'Hints weergeven',
        'Remove column'       : 'Kolom verwijderen',
        'Show all day events' : 'Vis begivenheder hele dagen',
        'My button'           : data => `Min knap ${data}`,
        Apply                 : 'Еoepassen',
        Learn                 : 'Leren',
        DownloadTrial         : 'Proefversie downloaden'
    },

    Column : {
        Company : 'Bedrijf',
        Name    : 'Naam'
    },

    Checkbox : {
        'Auto apply'  : 'Automatisch toepassen',
        Automatically : 'Automatisch',
        runHints      : 'Voer hintstroom uit bij opstarten'
    },

    CodeEditor : {
        'Code editor'   : 'Code editor',
        'Download code' : 'Download code'
    },

    Combo : {
        Theme    : 'Selecteer thema',
        Language : 'Selecteer landinstelling',
        Size     : 'Selecteer grootte'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Bijeenkomst',
        Phone   : 'Telefoon',
        Lunch   : 'Twaalfuurtje',
        Workout : 'Training'
    },

    Shared : {
        'Full size'      : 'Volledige grootte',
        'Locale changed' : 'Taal is veranderd',
        'Phone size'     : 'Grootte telefoon'
    },

    Tooltip : {
        infoButton       : 'Klik om informatie weer te geven en van thema of land te wisselen',
        codeButton       : 'Klik om de ingebouwde code-editor te tonen',
        hintCheck        : 'Vink deze optie aan om automatisch hints weer te geven bij het laden van het voorbeeld',
        fullscreenButton : 'Volledig scherm',
        openInCodePen    : 'Åpne i CodePen'
    },

    Popup : {
        UsedClasses : 'Klassen gebruikt in deze demo'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
