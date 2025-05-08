import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/It.js';

const locale = {

    localeName : 'It',
    localeDesc : 'Italiano',
    localeCode : 'it',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Dimostrazione di localizzazione'
    },

    Button : {
        'Add column'          : 'Aggiungi colonna',
        'Display hints'       : 'Mostra suggerimenti',
        'Remove column'       : 'Rimuovi colonna',
        'Show all day events' : 'Mostra eventi per tutto il giorno',
        'My button'           : data => `Il mio pulsante ${data}`,
        Apply                 : 'Applica',
        Learn                 : 'Impara',
        DownloadTrial         : 'Scarica la versione di prova'
    },

    Column : {
        Company : 'Azienda',
        Name    : 'Nome'
    },

    Checkbox : {
        'Auto apply'  : 'Applica automaticamente',
        Automatically : 'Automaticamente',
        runHints      : "Esegui il flusso di suggerimenti all'avvio"
    },

    CodeEditor : {
        'Code editor'   : 'Editor di codice',
        'Download code' : 'Scarica codice'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Lingua',
        Size     : 'Dimensione'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Riunione',
        Phone   : 'Telefono',
        Lunch   : 'Pranzo',
        Workout : 'Allenamento'
    },

    Shared : {
        'Full size'      : 'Dimensione intera',
        'Locale changed' : 'Lingua cambiata',
        'Phone size'     : 'Dimensione telefono'
    },

    Tooltip : {
        infoButton       : 'Clicca per mostrare informazioni e cambiare tema o lingua',
        codeButton       : "Clicca per mostrare l'editor di codice integrato",
        hintCheck        : "Seleziona per mostrare automaticamente i suggerimenti quando si carica l'esempio",
        fullscreenButton : 'Schermo intero',
        openInCodePen    : 'Apri in CodePen'
    },

    Popup : {
        UsedClasses : 'Classi utilizzate in questa demo'
    },

    TextField : {
        Filter : 'Filtro'
    }
};

export default LocaleHelper.publishLocale(locale);
