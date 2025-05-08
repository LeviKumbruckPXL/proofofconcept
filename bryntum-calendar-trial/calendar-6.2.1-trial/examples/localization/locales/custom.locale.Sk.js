import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Sk.js';

const locale = {

    localeName : 'Sk',
    localeDesc : 'Slovenský',
    localeCode : 'sk',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demonštrácia lokalizácie'
    },

    Button : {
        'Add column'          : 'Pridať stĺpec',
        'Display hints'       : 'Zobraziť tipy',
        'Remove column'       : 'Odstrániť stĺpec',
        'Show all day events' : 'Zobraziť celodenné udalosti',
        'My button'           : data => `Moje tlačidlo ${data}`,
        Apply                 : 'Použiť',
        Learn                 : 'Uč sa',
        DownloadTrial         : 'Stiahnuť skúšobnú verziu'
    },

    Column : {
        Company : 'Spoločnosť',
        Name    : 'Meno'
    },

    Checkbox : {
        'Auto apply'  : 'Automaticky použiť',
        Automatically : 'Automaticky',
        runHints      : 'Spustiť tok nápovedy pri spustení'
    },

    CodeEditor : {
        'Code editor'   : 'Editor kódu',
        'Download code' : 'Stiahnuť kód'
    },

    Combo : {
        Theme    : 'Téma',
        Language : 'Jazyk',
        Size     : 'Veľkosť'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Stretnutie',
        Phone   : 'Telefonát',
        Lunch   : 'Obed',
        Workout : 'Cvičenie'
    },

    Shared : {
        'Full size'      : 'Plná veľkosť',
        'Locale changed' : 'Jazykové nastavenie zmenené',
        'Phone size'     : 'Veľkosť telefónu'
    },

    Tooltip : {
        infoButton       : 'Kliknite pre zobrazenie informácií a zmenu témy alebo jazyka',
        codeButton       : 'Kliknite pre zobrazenie vstavaného editora kódu',
        hintCheck        : 'Zaškrtnite pre automatické zobrazenie tipov pri načítaní príkladu',
        fullscreenButton : 'Celá obrazovka',
        openInCodePen    : 'Otvoriť v CodePen'
    },

    Popup : {
        UsedClasses : 'Triedy použité v tejto ukážke'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
