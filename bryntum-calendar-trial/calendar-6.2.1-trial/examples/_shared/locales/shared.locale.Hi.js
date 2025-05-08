import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Hi',
    localeDesc : 'हिन्दी',
    localeCode : 'hi',
    localeRtl  : false,

    Button : {
        'Display hints' : 'संकेत दिखाएं',
        Apply           : 'लागू करें',
        Learn           : 'सीखें',
        DownloadTrial   : 'ट्रायल डाउनलोड करें'
    },

    Checkbox : {
        Automatically : 'स्वचालित रूप से',
        runHints      : 'स्टार्टअप पर संकेत प्रवाह चलाएं'
    },

    Combo : {
        Theme    : 'थीम',
        Language : 'भाषा',
        Size     : 'आकार'
    },

    Popup : {
        UsedClasses : 'इस डेमो में उपयोग की गई कक्षाएं'
    },

    Shared : {
        'Locale changed' : 'स्थान बदला गया'
    },

    TextField : {
        Filter : 'फ़िल्टर'
    },

    Tooltip : {
        infoButton       : 'जानकारी दिखाने और थीम या स्थान बदलने के लिए क्लिक करें',
        codeButton       : 'बिल्ट-इन कोड संपादक दिखाने के लिए क्लिक करें',
        hintCheck        : 'उदाहरण लोड करते समय संकेत स्वचालित रूप से दिखाने के लिए चेक करें',
        fullscreenButton : 'पूर्ण स्क्रीन',
        openInCodePen    : 'CodePen में खोलें'
    }
};

export default LocaleHelper.publishLocale(locale);
