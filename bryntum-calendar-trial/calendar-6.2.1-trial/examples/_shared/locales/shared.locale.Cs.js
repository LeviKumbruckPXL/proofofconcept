import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Cs',
    localeDesc : 'Česky',
    localeCode : 'cs',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Zobrazit nápovědy',
        Apply           : 'Použít',
        Learn           : 'Učit se',
        DownloadTrial   : 'Stáhnout zkušební verzi'
    },

    Checkbox : {
        Automatically : 'Automaticky',
        runHints      : 'Spustit tok nápovědy při spuštění'
    },

    Combo : {
        Theme    : 'Téma',
        Language : 'Jazyk',
        Size     : 'Velikost'
    },

    Popup : {
        UsedClasses : 'Třídy použité v této ukázce'
    },

    Shared : {
        'Locale changed' : 'Jazyková verze změněna'
    },

    TextField : {
        Filter : 'Filtr'
    },

    Tooltip : {
        infoButton       : 'Klikněte pro zobrazení informací a změnu tématu nebo jazyka',
        codeButton       : 'Klikněte pro zobrazení vestavěného editoru kódu',
        hintCheck        : 'Zaškrtněte pro automatické zobrazení nápověd při načítání příkladu',
        fullscreenButton : 'Celá obrazovka',
        openInCodePen    : 'Otevřít v CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
