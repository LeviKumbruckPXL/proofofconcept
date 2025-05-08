import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Es',
    localeDesc : 'Español',
    localeCode : 'es',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Mostrar sugerencias',
        Apply           : 'Aplicar',
        Learn           : 'Aprender',
        DownloadTrial   : 'Descargar prueba'
    },

    Checkbox : {
        Automatically : 'Automáticamente',
        runHints      : 'Ejecutar el flujo de sugerencias al iniciar'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Idioma',
        Size     : 'Tamaño'
    },

    Popup : {
        UsedClasses : 'Clases utilizadas en esta demostración'
    },

    Shared : {
        'Locale changed' : 'Configuración regional cambiada'
    },

    TextField : {
        Filter : 'Filtrar'
    },

    Tooltip : {
        infoButton       : 'Haga clic para mostrar información y cambiar el tema o la configuración regional',
        codeButton       : 'Haga clic para mostrar el editor de código integrado',
        hintCheck        : 'Marque para mostrar automáticamente sugerencias al cargar el ejemplo',
        fullscreenButton : 'Pantalla completa',
        openInCodePen    : 'Abrir en CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
