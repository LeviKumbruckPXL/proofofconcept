import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Es.js';

const locale = {

    localeName : 'Es',
    localeDesc : 'Español',
    localeCode : 'es',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demostración de localización'
    },

    Button : {
        'Add column'          : 'Agregar columna',
        'Display hints'       : 'Mostrar sugerencias',
        'Remove column'       : 'Eliminar columna',
        'Show all day events' : 'Mostrar eventos de todo el día',
        'My button'           : data => `Mi botón ${data}`,
        Apply                 : 'Aplicar',
        Learn                 : 'Aprender',
        DownloadTrial         : 'Descargar prueba'
    },

    Column : {
        Company : 'Empresa',
        Name    : 'Nombre'
    },

    Checkbox : {
        'Auto apply'  : 'Aplicar automáticamente',
        Automatically : 'Automáticamente',
        runHints      : 'Ejecutar el flujo de sugerencias al iniciar'
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
        Lunch   : 'Almuerzo',
        Workout : 'Entrenamiento'
    },

    Shared : {
        'Full size'      : 'Tamaño completo',
        'Locale changed' : 'Configuración regional cambiada',
        'Phone size'     : 'Tamaño de teléfono'
    },

    Tooltip : {
        infoButton       : 'Haga clic para mostrar información y cambiar el tema o la configuración regional',
        codeButton       : 'Haga clic para mostrar el editor de código integrado',
        hintCheck        : 'Marque para mostrar automáticamente sugerencias al cargar el ejemplo',
        fullscreenButton : 'Pantalla completa',
        openInCodePen    : 'Abrir en CodePen'
    },

    Popup : {
        UsedClasses : 'Clases utilizadas en esta demostración'
    },

    TextField : {
        Filter : 'Filtrar'
    }
};

export default LocaleHelper.publishLocale(locale);
