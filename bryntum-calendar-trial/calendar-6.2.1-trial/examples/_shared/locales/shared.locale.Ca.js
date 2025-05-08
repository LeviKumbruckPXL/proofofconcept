import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Ca',
    localeDesc : 'Català',
    localeCode : 'ca-ES',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Mostra suggeriments',
        Apply           : 'Aplica',
        Learn           : 'Aprendre',
        DownloadTrial   : 'Descarregar prova'
    },

    Checkbox : {
        Automatically : 'Automàticament',
        runHints      : 'Executa el flux de suggeriments en iniciar'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Idioma',
        Size     : 'Mida'
    },

    Popup : {
        UsedClasses : 'Classes utilitzades en aquesta demostració'
    },

    Shared : {
        'Locale changed' : 'Idioma canviat'
    },

    TextField : {
        Filter : 'Filtre'
    },

    Tooltip : {
        infoButton       : "Fes clic per mostrar informació i canviar el tema o l'idioma",
        codeButton       : "Fes clic per mostrar l'editor de codi integrat",
        hintCheck        : "Marca per mostrar automàticament els suggeriments en carregar l'exemple",
        fullscreenButton : 'Pantalla completa',
        openInCodePen    : 'Obre a CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
