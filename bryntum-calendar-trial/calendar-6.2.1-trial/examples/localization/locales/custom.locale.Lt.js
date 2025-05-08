import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Lt.js';

const locale = {

    localeName : 'LT',
    localeDesc : 'Lietuvių',
    localeCode : 'lt-LT',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokalizacijos demonstracija'
    },

    Button : {
        'Add column'          : 'Pridėti stulpelį',
        'Display hints'       : 'Rodyti užuominas',
        'Remove column'       : 'Pašalinti stulpelį',
        'Show all day events' : 'Rodyti visos dienos įvykius',
        'My button'           : data => `Mano mygtukas ${data}`,
        Apply                 : 'Taikyti',
        Learn                 : 'Sužinoti',
        DownloadTrial         : 'Atsisiųsti bandomąją versiją'
    },

    Column : {
        Company : 'Įmonė',
        Name    : 'Vardas'
    },

    Checkbox : {
        'Auto apply'  : 'Automatinis taikymas',
        Automatically : 'Automatiškai',
        runHints      : 'Paleisti užuominų srautą paleidžiant'
    },

    CodeEditor : {
        'Code editor'   : 'Kodo redaktorius',
        'Download code' : 'Atsisiųsti kodą'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Kalba',
        Size     : 'Dydis'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Susitikimas',
        Phone   : 'Telefonas',
        Lunch   : 'Pietūs',
        Workout : 'Treniruotė'
    },

    Shared : {
        'Full size'      : 'Visas dydis',
        'Locale changed' : 'Kalba pakeista',
        'Phone size'     : 'Telefono dydis'
    },

    Tooltip : {
        infoButton       : 'Spustelėkite, kad parodytumėte informaciją ir pakeistumėte temą arba kalbą',
        codeButton       : 'Spustelėkite, kad parodytumėte įmontuotą kodo redaktorių',
        hintCheck        : 'Pažymėkite, kad automatiškai rodytumėte užuominas įkeliant pavyzdį',
        fullscreenButton : 'Visas ekranas',
        openInCodePen    : 'Atidaryti CodePen'
    },

    Popup : {
        UsedClasses : 'Klasės, naudojamos šiame demonstraciniame'
    },

    TextField : {
        Filter : 'Filtruoti'
    }
};

export default LocaleHelper.publishLocale(locale);
