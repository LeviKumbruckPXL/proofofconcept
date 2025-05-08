import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Hu.js';

const locale = {

    localeName : 'Hu',
    localeDesc : 'Magyar',
    localeCode : 'hu',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokalizációs bemutató'
    },

    Button : {
        'Add column'          : 'Oszlop hozzáadása',
        'Display hints'       : 'Tippek megjelenítése',
        'Remove column'       : 'Oszlop eltávolítása',
        'Show all day events' : 'Egész napos események megjelenítése',
        'My button'           : data => `Az én gombom ${data}`,
        Apply                 : 'Alkalmaz',
        Learn                 : 'Tanul',
        DownloadTrial         : 'Próbaverzió letöltése'
    },

    Column : {
        Company : 'Cég',
        Name    : 'Név'
    },

    Checkbox : {
        'Auto apply'  : 'Automatikus alkalmazás',
        Automatically : 'Automatikusan',
        runHints      : 'Futtassa a tippfolyamatot indításkor'
    },

    CodeEditor : {
        'Code editor'   : 'Kódszerkesztő',
        'Download code' : 'Kód letöltése'
    },

    Combo : {
        Theme    : 'Téma',
        Language : 'Nyelv',
        Size     : 'Méret'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Találkozó',
        Phone   : 'Telefon',
        Lunch   : 'Ebéd',
        Workout : 'Edzés'
    },

    Shared : {
        'Full size'      : 'Teljes méret',
        'Locale changed' : 'Helyi beállítás megváltozott',
        'Phone size'     : 'Telefon méret'
    },

    Tooltip : {
        infoButton       : 'Kattintson az információ megjelenítéséhez és a téma vagy a helyi beállítás váltásához',
        codeButton       : 'Kattintson a beépített kódszerkesztő megjelenítéséhez',
        hintCheck        : 'Jelölje be, hogy automatikusan megjelenjenek a tippek a példa betöltésekor',
        fullscreenButton : 'Teljes képernyő',
        openInCodePen    : 'Megnyitás a CodePenben'
    },

    Popup : {
        UsedClasses : 'Az ebben a demóban használt osztályok'
    },

    TextField : {
        Filter : 'Szűrő'
    }
};

export default LocaleHelper.publishLocale(locale);
