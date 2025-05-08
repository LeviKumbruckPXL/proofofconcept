import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ca.js';

const locale = {

    localeName : 'Ca',
    localeDesc : 'Català',
    localeCode : 'ca-ES',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demostració de localització'
    },

    Button : {
        'Add column'          : 'Afegeix columna',
        'Display hints'       : 'Mostra suggeriments',
        'Remove column'       : 'Elimina columna',
        'Show all day events' : 'Mostra esdeveniments de tot el dia',
        'My button'           : data => `El meu botó ${data}`,
        Apply                 : 'Aplica',
        Learn                 : 'Aprendre',
        DownloadTrial         : 'Descarregar prova'
    },

    Column : {
        Company : 'Empresa',
        Name    : 'Nom'
    },

    Checkbox : {
        'Auto apply'  : 'Aplica automàticament',
        Automatically : 'Automàticament',
        runHints      : 'Executa el flux de suggeriments en iniciar'
    },

    CodeEditor : {
        'Code editor'   : 'Editor de codi',
        'Download code' : 'Descarrega codi'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Idioma',
        Size     : 'Mida'
    },

    EventColor : {
        Meeting : 'verd',
        Phone   : 'vermell',
        Lunch   : 'blau',
        Workout : 'taronja'
    },

    EventType : {
        Meeting : 'Reunió',
        Phone   : 'Telèfon',
        Lunch   : 'Dinar',
        Workout : 'Entrenament'
    },

    Shared : {
        'Full size'      : 'Mida completa',
        'Locale changed' : 'Idioma canviat',
        'Phone size'     : 'Mida del telèfon'
    },

    Tooltip : {
        infoButton       : "Fes clic per mostrar informació i canviar el tema o l'idioma",
        codeButton       : "Fes clic per mostrar l'editor de codi integrat",
        hintCheck        : "Marca per mostrar automàticament els suggeriments en carregar l'exemple",
        fullscreenButton : 'Pantalla completa',
        openInCodePen    : 'Obre a CodePen'
    },

    Popup : {
        UsedClasses : 'Classes utilitzades en aquesta demostració'
    },

    TextField : {
        Filter : 'Filtre'
    }
};

export default LocaleHelper.publishLocale(locale);
