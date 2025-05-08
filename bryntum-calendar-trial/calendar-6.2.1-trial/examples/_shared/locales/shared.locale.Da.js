import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Da',
    localeDesc : 'Dansk',
    localeCode : 'da',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Vis hints',
        Apply           : 'Anvend',
        Learn           : 'Lær',
        DownloadTrial   : 'Download prøveversion'
    },

    Checkbox : {
        Automatically : 'Automatisk',
        runHints      : 'Kør hintflow ved opstart'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Sprog',
        Size     : 'Størrelse'
    },

    Popup : {
        UsedClasses : 'Klasser brugt i denne demo'
    },

    Shared : {
        'Locale changed' : 'Lokalitet ændret'
    },

    TextField : {
        Filter : 'Filter'
    },

    Tooltip : {
        infoButton       : 'Klik for at vise info og skifte tema eller lokalitet',
        codeButton       : 'Klik for at vise den indbyggede kodeeditor',
        hintCheck        : 'Marker for automatisk at vise hints ved indlæsning af eksemplet',
        fullscreenButton : 'Fuld skærm',
        openInCodePen    : 'Åbn i CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
