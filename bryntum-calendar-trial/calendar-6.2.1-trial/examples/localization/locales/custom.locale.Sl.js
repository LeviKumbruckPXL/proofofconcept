import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Sl.js';

const locale = {

    localeName : 'Sl',
    localeDesc : 'Slovensko',
    localeCode : 'sl',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokalizacijska predstavitev'
    },

    Button : {
        'Add column'          : 'Dodaj stolpec',
        'Display hints'       : 'Prikaži namige',
        'Remove column'       : 'Odstrani stolpec',
        'Show all day events' : 'Prikaži celodnevne dogodke',
        'My button'           : data => `Moj gumb ${data}`,
        Apply                 : 'Uporabi',
        Learn                 : 'Nauči se',
        DownloadTrial         : 'Prenesi preizkusno različico'
    },

    Column : {
        Company : 'Podjetje',
        Name    : 'Ime'
    },

    Checkbox : {
        'Auto apply'  : 'Samodejna uporaba',
        Automatically : 'Samodejno',
        runHints      : 'Zaženi tok namigov ob zagonu'
    },

    CodeEditor : {
        'Code editor'   : 'Urejevalnik kode',
        'Download code' : 'Prenesi kodo'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Jezik',
        Size     : 'Velikost'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Sestanek',
        Phone   : 'Telefon',
        Lunch   : 'Kosilo',
        Workout : 'Vadba'
    },

    Shared : {
        'Full size'      : 'Polna velikost',
        'Locale changed' : 'Lokalizacija spremenjena',
        'Phone size'     : 'Velikost telefona'
    },

    Tooltip : {
        infoButton       : 'Kliknite za prikaz informacij in preklop teme ali lokalizacije',
        codeButton       : 'Kliknite za prikaz vgrajenega urejevalnika kode',
        hintCheck        : 'Označite za samodejni prikaz namigov ob nalaganju primera',
        fullscreenButton : 'Celoten zaslon',
        openInCodePen    : 'Odpri v CodePen'
    },

    Popup : {
        UsedClasses : 'Razredi uporabljeni v tej predstavitvi'
    },

    TextField : {
        Filter : 'Filter'
    }
};

export default LocaleHelper.publishLocale(locale);
