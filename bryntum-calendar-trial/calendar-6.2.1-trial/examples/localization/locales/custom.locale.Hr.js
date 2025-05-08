import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Hr.js';

const locale = {

    localeName : 'Hr',
    localeDesc : 'Hrvatski',
    localeCode : 'hr',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demonstracija lokalizacije'
    },

    Button : {
        'Add column'          : 'Dodaj stupac',
        'Display hints'       : 'Prikaži savjete',
        'Remove column'       : 'Ukloni stupac',
        'Show all day events' : 'Prikaži cjelodnevne događaje',
        'My button'           : data => `Moj gumb ${data}`,
        Apply                 : 'Primijeni',
        Learn                 : 'Uči',
        DownloadTrial         : 'Preuzmi probnu verziju'
    },

    Column : {
        Company : 'Tvrtka',
        Name    : 'Ime'
    },

    Checkbox : {
        'Auto apply'  : 'Automatski primijeni',
        Automatically : 'Automatski',
        runHints      : 'Pokreni tijek savjeta pri pokretanju'
    },

    CodeEditor : {
        'Code editor'   : 'Uređivač koda',
        'Download code' : 'Preuzmi kod'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Jezik',
        Size     : 'Veličina'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Sastanak',
        Phone   : 'Telefon',
        Lunch   : 'Ručak',
        Workout : 'Trening'
    },

    Shared : {
        'Full size'      : 'Puna veličina',
        'Locale changed' : 'Lokalitet promijenjen',
        'Phone size'     : 'Veličina telefona'
    },

    Tooltip : {
        infoButton       : 'Kliknite za prikaz informacija i promjenu teme ili lokaliteta',
        codeButton       : 'Kliknite za prikaz ugrađenog uređivača koda',
        hintCheck        : 'Označite za automatski prikaz savjeta prilikom učitavanja primjera',
        fullscreenButton : 'Cijeli ekran',
        openInCodePen    : 'Otvori u CodePen-u'
    },

    Popup : {
        UsedClasses : 'Klase korištene u ovom demou'
    },

    TextField : {
        Filter : 'Filtriraj'
    }
};

export default LocaleHelper.publishLocale(locale);
