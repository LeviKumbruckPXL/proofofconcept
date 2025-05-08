import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Pl.js';

const locale = {

    localeName : 'Pl',
    localeDesc : 'Polski',
    localeCode : 'pl',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demo lokalizacji'
    },

    Button : {
        'Add column'          : 'Dodaj kolumnę',
        'Display hints'       : 'Wyświetl wskazówki',
        'Remove column'       : 'Usuń kolumnę',
        'Show all day events' : 'Pokaż wydarzenia całodniowe',
        'My button'           : data => `Mój przycisk ${data}`,
        Apply                 : 'Zastosuj',
        Learn                 : 'Ucz się',
        DownloadTrial         : 'Pobierz wersję próbną'
    },

    Column : {
        Company : 'Firma',
        Name    : 'Imię'
    },

    Checkbox : {
        'Auto apply'  : 'Automatyczne zastosowanie',
        Automatically : 'Automatycznie',
        runHints      : 'Uruchom przepływ wskazówek przy starcie'
    },

    CodeEditor : {
        'Code editor'   : 'Edytor kodu',
        'Download code' : 'Pobierz kod'
    },

    Combo : {
        Theme    : 'Motyw',
        Language : 'Język',
        Size     : 'Rozmiar'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Spotkanie',
        Phone   : 'Telefon',
        Lunch   : 'Lunch',
        Workout : 'Trening'
    },

    Shared : {
        'Full size'      : 'Pełny rozmiar',
        'Locale changed' : 'Zmieniono ustawienia regionalne',
        'Phone size'     : 'Rozmiar telefonu'
    },

    Tooltip : {
        infoButton       : 'Kliknij, aby wyświetlić informacje i zmienić motyw lub ustawienia regionalne',
        codeButton       : 'Kliknij, aby wyświetlić wbudowany edytor kodu',
        hintCheck        : 'Zaznacz, aby automatycznie wyświetlać wskazówki podczas ładowania przykładu',
        fullscreenButton : 'Pełny ekran',
        openInCodePen    : 'Otwórz w CodePen'
    },

    Popup : {
        UsedClasses : 'Klasy używane w tym demo'
    },

    TextField : {
        Filter : 'Filtr'
    }
};

export default LocaleHelper.publishLocale(locale);
