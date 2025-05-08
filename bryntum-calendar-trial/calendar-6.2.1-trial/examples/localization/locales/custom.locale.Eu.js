import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Eu.js';

const locale = {

    localeName : 'Eu',
    localeDesc : 'Euskara',
    localeCode : 'eu-ES',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokalizazio demo'
    },

    Button : {
        'Add column'          : 'Gehitu zutabea',
        'Display hints'       : 'Aholkuak bistaratu',
        'Remove column'       : 'Kendu zutabea',
        'Show all day events' : 'Erakutsi egun osoko gertaerak',
        'My button'           : data => `Nire botoia ${data}`,
        Apply                 : 'Aplikatu',
        Learn                 : 'Ikasi',
        DownloadTrial         : 'Deskargatu Proba'
    },

    Column : {
        Company : 'Enpresa',
        Name    : 'Izena'
    },

    Checkbox : {
        'Auto apply'  : 'Aplikatu automatikoki',
        Automatically : 'Automatikoki',
        runHints      : 'Exekutatu pista-fluxua hasieran'
    },

    CodeEditor : {
        'Code editor'   : 'Kode editorea',
        'Download code' : 'Deskargatu kodea'
    },

    Combo : {
        Theme    : 'Gaia',
        Language : 'Hizkuntza',
        Size     : 'Tamaina'
    },

    EventColor : {
        Meeting : 'berdea',
        Phone   : 'gorria',
        Lunch   : 'urdina',
        Workout : 'laranja'
    },

    EventType : {
        Meeting : 'Bilera',
        Phone   : 'Telefonoa',
        Lunch   : 'Bazkaria',
        Workout : 'Entrenamendua'
    },

    Shared : {
        'Full size'      : 'Tamaina osoa',
        'Locale changed' : 'Tokiko hizkuntza aldatu da',
        'Phone size'     : 'Telefono tamaina'
    },

    Tooltip : {
        infoButton       : 'Klik egin informazioa erakusteko eta gaia edo tokiko hizkuntza aldatzeko',
        codeButton       : 'Klik egin barneko kode editorea erakusteko',
        hintCheck        : 'Markatu adibidea kargatzean aholkuak automatikoki bistaratzeko',
        fullscreenButton : 'Pantaila osoa',
        openInCodePen    : 'Ireki CodePen-en'
    },

    Popup : {
        UsedClasses : 'Demo honetan erabilitako klaseak'
    },

    TextField : {
        Filter : 'Iragazi'
    }
};

export default LocaleHelper.publishLocale(locale);
