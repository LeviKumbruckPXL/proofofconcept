import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Sk',
    localeDesc : 'Slovenský',
    localeCode : 'sk',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Zobraziť tipy',
        Apply           : 'Použiť',
        Learn           : 'Uč sa',
        DownloadTrial   : 'Stiahnuť skúšobnú verziu'
    },

    Checkbox : {
        Automatically : 'Automaticky',
        runHints      : 'Spustiť tok nápovedy pri spustení'
    },

    Combo : {
        Theme    : 'Téma',
        Language : 'Jazyk',
        Size     : 'Veľkosť'
    },

    Popup : {
        UsedClasses : 'Triedy použité v tejto ukážke'
    },

    Shared : {
        'Locale changed' : 'Jazykové nastavenie zmenené'
    },

    TextField : {
        Filter : 'Filter'
    },

    Tooltip : {
        infoButton       : 'Kliknite pre zobrazenie informácií a zmenu témy alebo jazyka',
        codeButton       : 'Kliknite pre zobrazenie vstavaného editora kódu',
        hintCheck        : 'Zaškrtnite pre automatické zobrazenie tipov pri načítaní príkladu',
        fullscreenButton : 'Celá obrazovka',
        openInCodePen    : 'Otvoriť v CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
