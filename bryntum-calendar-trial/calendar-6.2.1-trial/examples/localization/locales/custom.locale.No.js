import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/No.js';

const locale = {

    localeName : 'No',
    localeDesc : 'Norsk',
    localeCode : 'no',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokaliseringsdemo'
    },

    Button : {
        'Add column'          : 'Legg til kolonne',
        'Display hints'       : 'Vis hint',
        'Remove column'       : 'Fjern kolonne',
        'Show all day events' : 'Vis heldagseventer',
        'My button'           : data => `Min knapp ${data}`,
        Apply                 : 'Bruk',
        Learn                 : 'Lær',
        DownloadTrial         : 'Last ned prøveversjon'
    },

    Column : {
        Company : 'Firma',
        Name    : 'Navn'
    },

    Checkbox : {
        'Auto apply'  : 'Automatisk bruk',
        Automatically : 'Automatisk',
        runHints      : 'Kjør hintflyt ved oppstart'
    },

    CodeEditor : {
        'Code editor'   : 'Kodeeditor',
        'Download code' : 'Last ned kode'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Språk',
        Size     : 'Størrelse'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Møte',
        Phone   : 'Telefon',
        Lunch   : 'Lunsj',
        Workout : 'Trening'
    },

    Shared : {
        'Full size'      : 'Full størrelse',
        'Locale changed' : 'Språk endret',
        'Phone size'     : 'Telefonstørrelse'
    },

    Tooltip : {
        infoButton       : 'Klikk for å vise info og bytte tema eller språk',
        codeButton       : 'Klikk for å vise den innebygde kodeeditoren',
        hintCheck        : 'Merk for å automatisk vise hint når eksempelet lastes',
        fullscreenButton : 'Fullskjerm',
        openInCodePen    : 'Åpne i CodePen'
    },

    Popup : {
        UsedClasses : 'Klasser brukt i denne demoen'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
