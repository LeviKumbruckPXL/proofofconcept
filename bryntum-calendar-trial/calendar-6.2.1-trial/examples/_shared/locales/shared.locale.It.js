import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'It',
    localeDesc : 'Italiano',
    localeCode : 'it',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Mostra suggerimenti',
        Apply           : 'Applica',
        Learn           : 'Impara',
        DownloadTrial   : 'Scarica la versione di prova'
    },

    Checkbox : {
        Automatically : 'Automaticamente',
        runHints      : "Esegui il flusso di suggerimenti all'avvio"
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Lingua',
        Size     : 'Dimensione'
    },

    Popup : {
        UsedClasses : 'Classi utilizzate in questa demo'
    },

    Shared : {
        'Locale changed' : 'Lingua cambiata'
    },

    TextField : {
        Filter : 'Filtro'
    },

    Tooltip : {
        infoButton       : 'Clicca per mostrare informazioni e cambiare tema o lingua',
        codeButton       : "Clicca per mostrare l'editor di codice integrato",
        hintCheck        : "Seleziona per mostrare automaticamente i suggerimenti quando si carica l'esempio",
        fullscreenButton : 'Schermo intero',
        openInCodePen    : 'Apri in CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
