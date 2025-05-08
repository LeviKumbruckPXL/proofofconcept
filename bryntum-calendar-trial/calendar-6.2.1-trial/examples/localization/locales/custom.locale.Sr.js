import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Sr.js';

const locale = {

    localeName : 'Sr',
    localeDesc : 'Srpski',
    localeCode : 'sr',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Демонстрација локализације'
    },

    Button : {
        'Add column'          : 'Додај колону',
        'Display hints'       : 'Prikaži savete',
        'Remove column'       : 'Уклони колону',
        'Show all day events' : 'Prikaži celodnevne događaje',
        'My button'           : data => `Moje dugme ${data}`,
        Apply                 : 'Primeni',
        Learn                 : 'Nauči',
        DownloadTrial         : 'Preuzmi probnu verziju'
    },

    Column : {
        Company : 'Kompanija',
        Name    : 'Име'
    },

    Checkbox : {
        'Auto apply'  : 'Аутоматска примена',
        Automatically : 'Automatski',
        runHints      : 'Pokreni tok saveta pri pokretanju'
    },

    CodeEditor : {
        'Code editor'   : 'Уређивач кода',
        'Download code' : 'Преузми код'
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
        'Locale changed' : 'Lokalizacija promenjena',
        'Phone size'     : 'Veličina telefona'
    },

    Tooltip : {
        infoButton       : 'Kliknite da prikažete informacije i promenite temu ili lokalizaciju',
        codeButton       : 'Kliknite da prikažete ugrađeni uređivač koda',
        hintCheck        : 'Označite da automatski prikažete savete prilikom učitavanja primera',
        fullscreenButton : 'Ceo ekran',
        openInCodePen    : 'Otvori u CodePen-u'
    },

    Popup : {
        UsedClasses : 'Klase korišćene u ovom demou'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
