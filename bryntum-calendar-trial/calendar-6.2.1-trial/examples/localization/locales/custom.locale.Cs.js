import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Cs.js';

const locale = {

    localeName : 'Cs',
    localeDesc : 'Česky',
    localeCode : 'cs',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Ukázka lokalizace'
    },

    Button : {
        'Add column'          : 'Přidat sloupec',
        'Display hints'       : 'Zobrazit nápovědy',
        'Remove column'       : 'Odebrat sloupec',
        'Show all day events' : 'Zobrazit celodenní události',
        'My button'           : data => `Moje tlačítko ${data}`,
        Apply                 : 'Použít',
        Learn                 : 'Učit se',
        DownloadTrial         : 'Stáhnout zkušební verzi'
    },

    Column : {
        Company : 'Společnost',
        Name    : 'Jméno'
    },

    Checkbox : {
        'Auto apply'  : 'Automaticky použít',
        Automatically : 'Automaticky',
        runHints      : 'Spustit tok nápovědy při spuštění'
    },

    CodeEditor : {
        'Code editor'   : 'Editor kódu',
        'Download code' : 'Stáhnout kód'
    },

    Combo : {
        Theme    : 'Téma',
        Language : 'Jazyk',
        Size     : 'Velikost'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Schůzka',
        Phone   : 'Telefon',
        Lunch   : 'Oběd',
        Workout : 'Cvičení'
    },

    Shared : {
        'Full size'      : 'Plná velikost',
        'Locale changed' : 'Jazyková verze změněna',
        'Phone size'     : 'Velikost telefonu'
    },

    Tooltip : {
        infoButton       : 'Klikněte pro zobrazení informací a změnu tématu nebo jazyka',
        codeButton       : 'Klikněte pro zobrazení vestavěného editoru kódu',
        hintCheck        : 'Zaškrtněte pro automatické zobrazení nápověd při načítání příkladu',
        fullscreenButton : 'Celá obrazovka',
        openInCodePen    : 'Otevřít v CodePen'
    },

    Popup : {
        UsedClasses : 'Třídy použité v této ukázce'
    },

    TextField : {
        Filter : 'Filtr'
    }
};

export default LocaleHelper.publishLocale(locale);
