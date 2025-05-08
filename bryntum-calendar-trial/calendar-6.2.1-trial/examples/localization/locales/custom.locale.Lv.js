import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Lv.js';

const locale = {

    localeName : 'Lv',
    localeDesc : 'Latviešu',
    localeCode : 'lv-LV',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Lokalizācijas demonstrācija'
    },

    Button : {
        'Add column'          : 'Pievienot kolonnu',
        'Display hints'       : 'Parādīt norādes',
        'Remove column'       : 'Noņemt kolonnu',
        'Show all day events' : 'Rādīt visas dienas notikumus',
        'My button'           : data => `Mana poga ${data}`,
        Apply                 : 'Piemērot',
        Learn                 : 'Mācīties',
        DownloadTrial         : 'Lejupielādēt izmēģinājuma versiju'
    },

    Column : {
        Company : 'Uzņēmums',
        Name    : 'Vārds'
    },

    Checkbox : {
        'Auto apply'  : 'Automātiska piemērošana',
        Automatically : 'Automātiski',
        runHints      : 'Palaist norāžu plūsmu startēšanas laikā'
    },

    CodeEditor : {
        'Code editor'   : 'Koda redaktors',
        'Download code' : 'Lejupielādēt kodu'
    },

    Combo : {
        Theme    : 'Tēma',
        Language : 'Valoda',
        Size     : 'Izmērs'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Sanāksme',
        Phone   : 'Telefons',
        Lunch   : 'Pusdienas',
        Workout : 'Treniņš'
    },

    Shared : {
        'Full size'      : 'Pilns izmērs',
        'Locale changed' : 'Valoda mainīta',
        'Phone size'     : 'Telefona izmērs'
    },

    Tooltip : {
        infoButton       : 'Noklikšķiniet, lai parādītu informāciju un pārslēgtu tēmu vai valodu',
        codeButton       : 'Noklikšķiniet, lai parādītu iebūvēto koda redaktoru',
        hintCheck        : 'Atzīmējiet, lai automātiski parādītu norādes, ielādējot piemēru',
        fullscreenButton : 'Pilnekrāna režīms',
        openInCodePen    : 'Atvērt CodePen'
    },

    Popup : {
        UsedClasses : 'Šajā demonstrācijā izmantotās klases'
    },

    TextField : {
        Filter : 'Filtrs'
    }
};

export default LocaleHelper.publishLocale(locale);
