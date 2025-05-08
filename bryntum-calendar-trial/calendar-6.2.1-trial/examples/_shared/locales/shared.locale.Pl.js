import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Pl',
    localeDesc : 'Polski',
    localeCode : 'pl',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Wyświetl wskazówki',
        Apply           : 'Zastosuj',
        Learn           : 'Ucz się',
        DownloadTrial   : 'Pobierz wersję próbną'
    },

    Checkbox : {
        Automatically : 'Automatycznie',
        runHints      : 'Uruchom przepływ wskazówek przy starcie'
    },

    Combo : {
        Theme    : 'Motyw',
        Language : 'Język',
        Size     : 'Rozmiar'
    },

    Popup : {
        UsedClasses : 'Klasy używane w tym demo'
    },

    Shared : {
        'Locale changed' : 'Zmieniono ustawienia regionalne'
    },

    TextField : {
        Filter : 'Filtr'
    },

    Tooltip : {
        infoButton       : 'Kliknij, aby wyświetlić informacje i zmienić motyw lub ustawienia regionalne',
        codeButton       : 'Kliknij, aby wyświetlić wbudowany edytor kodu',
        hintCheck        : 'Zaznacz, aby automatycznie wyświetlać wskazówki podczas ładowania przykładu',
        fullscreenButton : 'Pełny ekran',
        openInCodePen    : 'Otwórz w CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
