import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Hu',
    localeDesc : 'Magyar',
    localeCode : 'hu',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Tippek megjelenítése',
        Apply           : 'Alkalmaz',
        Learn           : 'Tanul',
        DownloadTrial   : 'Próbaverzió letöltése'
    },

    Checkbox : {
        Automatically : 'Automatikusan',
        runHints      : 'Futtassa a tippfolyamatot indításkor'
    },

    Combo : {
        Theme    : 'Téma',
        Language : 'Nyelv',
        Size     : 'Méret'
    },

    Popup : {
        UsedClasses : 'Az ebben a demóban használt osztályok'
    },

    Shared : {
        'Locale changed' : 'Helyi beállítás megváltozott'
    },

    TextField : {
        Filter : 'Szűrő'
    },

    Tooltip : {
        infoButton       : 'Kattintson az információ megjelenítéséhez és a téma vagy a helyi beállítás váltásához',
        codeButton       : 'Kattintson a beépített kódszerkesztő megjelenítéséhez',
        hintCheck        : 'Jelölje be, hogy automatikusan megjelenjenek a tippek a példa betöltésekor',
        fullscreenButton : 'Teljes képernyő',
        openInCodePen    : 'Megnyitás a CodePenben'
    }
};

export default LocaleHelper.publishLocale(locale);
