import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Gl',
    localeDesc : 'Galego',
    localeCode : 'gl-ES',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Mostrar suxestións',
        Apply           : 'Aplicar',
        Learn           : 'Aprender',
        DownloadTrial   : 'Descargar proba'
    },

    Checkbox : {
        Automatically : 'Automáticamente',
        runHints      : 'Executar o fluxo de suxestión ao iniciar'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Idioma',
        Size     : 'Tamaño'
    },

    Popup : {
        UsedClasses : 'Clases usadas nesta demostración'
    },

    Shared : {
        'Locale changed' : 'Idioma cambiado'
    },

    TextField : {
        Filter : 'Filtro'
    },

    Tooltip : {
        infoButton       : 'Fai clic para mostrar información e cambiar o tema ou o idioma',
        codeButton       : 'Fai clic para mostrar o editor de código integrado',
        hintCheck        : 'Marcar para mostrar automaticamente as suxestións ao cargar o exemplo',
        fullscreenButton : 'Pantalla completa',
        openInCodePen    : 'Abrir en CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
