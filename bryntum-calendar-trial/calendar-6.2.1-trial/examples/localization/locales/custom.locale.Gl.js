import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Gl.js';

const locale = {

    localeName : 'Gl',
    localeDesc : 'Galego',
    localeCode : 'gl-ES',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demostración de localización'
    },

    Button : {
        'Add column'          : 'Engadir columna',
        'Display hints'       : 'Mostrar suxestións',
        'Remove column'       : 'Eliminar columna',
        'Show all day events' : 'Mostrar eventos de todo o día',
        'My button'           : data => `O meu botón ${data}`,
        Apply                 : 'Aplicar',
        Learn                 : 'Aprender',
        DownloadTrial         : 'Descargar proba'
    },

    Column : {
        Company : 'Empresa',
        Name    : 'Nome'
    },

    Checkbox : {
        'Auto apply'  : 'Aplicar automaticamente',
        Automatically : 'Automáticamente',
        runHints      : 'Executar o fluxo de suxestión ao iniciar'
    },

    CodeEditor : {
        'Code editor'   : 'Editor de código',
        'Download code' : 'Descargar código'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Idioma',
        Size     : 'Tamaño'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Reunión',
        Phone   : 'Teléfono',
        Lunch   : 'Xantar',
        Workout : 'Adestramento'
    },

    Shared : {
        'Full size'      : 'Tamaño completo',
        'Locale changed' : 'Idioma cambiado',
        'Phone size'     : 'Tamaño do teléfono'
    },

    Tooltip : {
        infoButton       : 'Fai clic para mostrar información e cambiar o tema ou o idioma',
        codeButton       : 'Fai clic para mostrar o editor de código integrado',
        hintCheck        : 'Marcar para mostrar automaticamente as suxestións ao cargar o exemplo',
        fullscreenButton : 'Pantalla completa',
        openInCodePen    : 'Abrir en CodePen'
    },

    Popup : {
        UsedClasses : 'Clases usadas nesta demostración'
    },

    TextField : {
        Filter : 'Filtro'
    }
};

export default LocaleHelper.publishLocale(locale);
