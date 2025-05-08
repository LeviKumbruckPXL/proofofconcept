import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ro.js';

const locale = {

    localeName : 'Ro',
    localeDesc : 'Română',
    localeCode : 'ro',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demonstrație de localizare'
    },

    Button : {
        'Add column'          : 'Adaugă coloană',
        'Display hints'       : 'Afișează sugestii',
        'Remove column'       : 'Elimină coloană',
        'Show all day events' : 'Afișează evenimentele de toată ziua',
        'My button'           : data => `Butonul meu ${data}`,
        Apply                 : 'Aplică',
        Learn                 : 'Învățați',
        DownloadTrial         : 'Descarcă versiunea de încercare'
    },

    Column : {
        Company : 'Companie',
        Name    : 'Nume'
    },

    Checkbox : {
        'Auto apply'  : 'Aplicare automată',
        Automatically : 'Automat',
        runHints      : 'Rulați fluxul de sugestii la pornire'
    },

    CodeEditor : {
        'Code editor'   : 'Editor de cod',
        'Download code' : 'Descarcă cod'
    },

    Combo : {
        Theme    : 'Temă',
        Language : 'Limbă',
        Size     : 'Dimensiune'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Întâlnire',
        Phone   : 'Telefon',
        Lunch   : 'Prânz',
        Workout : 'Antrenament'
    },

    Shared : {
        'Full size'      : 'Dimensiune completă',
        'Locale changed' : 'Limba a fost schimbată',
        'Phone size'     : 'Dimensiune telefon'
    },

    Tooltip : {
        infoButton       : 'Click pentru a afișa informații și a schimba tema sau limba',
        codeButton       : 'Click pentru a afișa editorul de cod încorporat',
        hintCheck        : 'Bifați pentru a afișa automat sugestiile la încărcarea exemplului',
        fullscreenButton : 'Ecran complet',
        openInCodePen    : 'Deschide în CodePen'
    },

    Popup : {
        UsedClasses : 'Clase utilizate în această demonstrație'
    },

    TextField : {
        Filter : 'Filtru'
    }
};

export default LocaleHelper.publishLocale(locale);
