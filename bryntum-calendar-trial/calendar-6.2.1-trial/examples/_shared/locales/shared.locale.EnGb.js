import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'EnGb',
    localeDesc : 'English (GB)',
    localeCode : 'en-GB',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Display hints',
        Apply           : 'Apply',
        Learn           : 'Learn',
        DownloadTrial   : 'Download Trial'
    },

    Checkbox : {
        Automatically : 'Automatically',
        runHints      : 'Run hint flow on start-up'
    },

    Combo : {
        Theme    : 'Theme',
        Language : 'Language',
        Size     : 'Size'
    },

    Popup : {
        UsedClasses : 'Classes used in this demo'
    },

    Shared : {
        'Locale changed' : 'Locale changed'
    },

    TextField : {
        Filter : 'Filter'
    },

    Tooltip : {
        infoButton       : 'Click to show info and switch theme or locale',
        codeButton       : 'Click to show the built-in code editor',
        hintCheck        : 'Check to automatically display hints when loading the example',
        fullscreenButton : 'Full screen',
        openInCodePen    : 'Open in CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
