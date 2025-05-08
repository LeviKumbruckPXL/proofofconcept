import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Hi.js';

const locale = {

    localeName : 'Hi',
    localeDesc : 'हिन्दी',
    localeCode : 'hi',
    localeRtl  : false,

    App : {
        'Localization demo' : 'स्थानीयकरण डेमो'
    },

    Button : {
        'Add column'          : 'स्तंभ जोड़ें',
        'Display hints'       : 'संकेत दिखाएं',
        'Remove column'       : 'स्तंभ हटाएँ',
        'Show all day events' : 'सभी दिन की घटनाएँ दिखाएँ',
        'My button'           : data => `मेरा बटन ${data}`,
        Apply                 : 'लागू करें',
        Learn                 : 'सीखें',
        DownloadTrial         : 'ट्रायल डाउनलोड करें'
    },

    Column : {
        Company : 'कंपनी',
        Name    : 'नाम'
    },

    Checkbox : {
        'Auto apply'  : 'स्वचालित लागू करें',
        Automatically : 'स्वचालित रूप से',
        runHints      : 'स्टार्टअप पर संकेत प्रवाह चलाएं'
    },

    CodeEditor : {
        'Code editor'   : 'कोड संपादक',
        'Download code' : 'कोड डाउनलोड करें'
    },

    Combo : {
        Theme    : 'थीम',
        Language : 'भाषा',
        Size     : 'आकार'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'बैठक',
        Phone   : 'फ़ोन',
        Lunch   : 'दोपहर का भोजन',
        Workout : 'व्यायाम'
    },

    Shared : {
        'Full size'      : 'पूर्ण आकार',
        'Locale changed' : 'स्थान बदला गया',
        'Phone size'     : 'फ़ोन आकार'
    },

    Tooltip : {
        infoButton       : 'जानकारी दिखाने और थीम या स्थान बदलने के लिए क्लिक करें',
        codeButton       : 'बिल्ट-इन कोड संपादक दिखाने के लिए क्लिक करें',
        hintCheck        : 'उदाहरण लोड करते समय संकेत स्वचालित रूप से दिखाने के लिए चेक करें',
        fullscreenButton : 'पूर्ण स्क्रीन',
        openInCodePen    : 'CodePen में खोलें'
    },

    Popup : {
        UsedClasses : 'इस डेमो में उपयोग की गई कक्षाएं'
    },

    TextField : {
        Filter : 'फ़िल्टर'
    }
};

export default LocaleHelper.publishLocale(locale);
