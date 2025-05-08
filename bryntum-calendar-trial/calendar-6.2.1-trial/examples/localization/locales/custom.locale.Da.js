import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Da.js';

const locale = {

    localeName : 'Da',
    localeDesc : 'Dansk',
    localeCode : 'da',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokaliseringsdemo'
    },

    Button : {
        'Add column'          : 'Tilføj kolonne',
        'Display hints'       : 'Vis hints',
        'Remove column'       : 'Fjern kolonne',
        'Show all day events' : 'Vis heldagsbegivenheder',
        'My button'           : data => `Min knap ${data}`,
        Apply                 : 'Anvend',
        Learn                 : 'Lær',
        DownloadTrial         : 'Download prøveversion'
    },

    Column : {
        Company : 'Firma',
        Name    : 'Navn'
    },

    Checkbox : {
        'Auto apply'  : 'Automatisk anvend',
        Automatically : 'Automatisk',
        runHints      : 'Kør hintflow ved opstart'
    },

    CodeEditor : {
        'Code editor'   : 'Kodeeditor',
        'Download code' : 'Download kode'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Sprog',
        Size     : 'Størrelse'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Møde',
        Phone   : 'Telefon',
        Lunch   : 'Frokost',
        Workout : 'Træning'
    },

    Shared : {
        'Full size'      : 'Fuld størrelse',
        'Locale changed' : 'Lokalitet ændret',
        'Phone size'     : 'Telefonstørrelse'
    },

    Tooltip : {
        infoButton       : 'Klik for at vise info og skifte tema eller lokalitet',
        codeButton       : 'Klik for at vise den indbyggede kodeeditor',
        hintCheck        : 'Marker for automatisk at vise hints ved indlæsning af eksemplet',
        fullscreenButton : 'Fuld skærm',
        openInCodePen    : 'Åbn i CodePen'
    },

    Popup : {
        UsedClasses : 'Klasser brugt i denne demo'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
