import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Hi.js';
import './shared.locale.Hi.js';

const locale = {

    localeName : 'Hi',
    localeDesc : 'हिन्दी',
    localeCode : 'hi',
    localeRtl  : false,

    Column : {
        Completed          : 'पूर्ण हुआ',
        Duration           : 'अवधि',
        'In progress'      : 'प्रगति पर है',
        Name               : 'नाम',
        'Not started'      : 'शुरू नहीं हुआ',
        'Staff/Resource'   : 'स्टाफ/संसाधन',
        'Unassigned tasks' : 'असाइन न की गई कार्य'
    },

    Button : {
        Actions              : 'क्रियाएँ',
        Agenda               : 'कार्यसूची',
        Apr                  : 'अप्रैल',
        April                : 'अप्रैल',
        Aug                  : 'अगस्त',
        Cancel               : 'रद्द करें',
        Create               : 'बनाएँ',
        Day                  : 'दिन',
        'Day Agenda'         : 'दैनिक कार्यसूची',
        'Day resources'      : 'दैनिक संसाधन',
        Dec                  : 'दिसंबर',
        Delete               : 'हटाएँ',
        Dualdayview          : 'द्विदिन दृश्य',
        'Export to Excel'    : 'एक्सेल में निर्यात करें',
        Feb                  : 'फरवरी',
        February             : 'फरवरी',
        'Grouped by day'     : 'दिन के अनुसार समूहित',
        'Grouped by station' : 'स्टेशन के अनुसार समूहित',
        Jan                  : 'जनवरी',
        January              : 'जनवरी',
        Jul                  : 'जुलाई',
        July                 : 'जुलाई',
        Jun                  : 'जून',
        June                 : 'जून',
        List                 : 'सूची',
        Mar                  : 'मार्च',
        March                : 'मार्च',
        May                  : 'मई',
        Month                : 'महीना',
        'Multi Days'         : 'बहु-दिन',
        Nov                  : 'नवंबर',
        Oct                  : 'अक्टूबर',
        October              : 'अक्टूबर',
        Print                : 'प्रिंट करें',
        Reload               : 'पुनः लोड करें',
        'Reset database'     : 'डेटाबेस रीसेट करें',
        'Reset to default'   : 'डिफ़ॉल्ट पर रीसेट करें',
        Resourceview         : 'संसाधन दृश्य',
        Save                 : 'सहेजें',
        Sep                  : 'सितंबर',
        September            : 'सितंबर',
        Timeline             : 'समयरेखा',
        Today                : 'आज',
        'Two weeks'          : 'दो सप्ताह',
        Week                 : 'सप्ताह',
        'Week Agenda'        : 'साप्ताहिक कार्यसूची',
        Weekends             : 'सप्ताहांत',
        Year                 : 'वर्ष',
        'Zoom to events'     : 'घटनाओं पर ज़ूम करें'
    },

    Checkbox : {
        'Custom styles'                   : 'कस्टम शैलियाँ',
        'Fit events'                      : 'घटनाओं को फिट करें',
        'Fit timeline to available space' : 'उपलब्ध स्थान में समयरेखा फिट करें',
        'Full width'                      : 'पूर्ण चौड़ाई',
        'Hide borders'                    : 'सीमाएँ छुपाएँ',
        'Hide empty hours'                : 'खाली घंटे छुपाएँ',
        'Hide time axes'                  : 'समय अक्ष छुपाएँ',
        'Hide unscheduled resources'      : 'अनिर्धारित संसाधन छुपाएँ',
        'Hide weekends'                   : 'सप्ताहांत छुपाएँ',
        'On top'                          : 'ऊपर',
        'Show avatar'                     : 'अवतार दिखाएँ',
        'Show core hours in day'          : 'दिन में मुख्य घंटे दिखाएँ',
        'Show time'                       : 'समय दिखाएं',
        'Stack events vertically'         : 'घटनाओं को लंबवत स्टैक करें',
        'Sync hour heights'               : 'घंटे की ऊँचाई सिंक करें'
    },

    Slider : {
        'Hour height'    : 'घंटे की ऊँचाई',
        'Resource width' : 'संसाधन की चौड़ाई',
        Scale            : 'पैमाना'
    },

    Combo : {
        'Choose show' : 'शो चुनें',
        Equipment     : 'उपकरण',
        'Timezone:'   : 'समय क्षेत्र:'
    },

    Label : {
        Days             : 'दिन',
        Months           : 'महीने',
        'Resource width' : 'संसाधन चौड़ाई'
    },

    NumberField : {
        Every                      : 'हर',
        'Max events per cell'      : 'प्रति सेल अधिकतम घटनाएँ',
        'Scroll to hour'           : 'घंटे तक स्क्रॉल करें',
        'Snap increment (minutes)' : 'स्नैप वृद्धि (मिनट)'
    },

    TextField : {
        'Filter resources'  : 'संसाधनों को फ़िल्टर करें',
        Name                : 'नाम',
        'Type to filter...' : 'फ़िल्टर करने के लिए टाइप करें...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'चयनित होने पर नेविगेशन के दौरान घटनाएँ फिट की जाएंगी',
        'Fit events within scroll range'                                      : 'स्क्रॉल रेंज के भीतर घटनाओं को फिट करें',
        Friday                                                                : 'शुक्रवार',
        Monday                                                                : 'सोमवार',
        'Print the currently active view'                                     : 'वर्तमान सक्रिय दृश्य को प्रिंट करें',
        Saturday                                                              : 'शनिवार',
        'Select admin mode to allow editing and rescheduling of performances' : 'प्रदर्शनियों के संपादन और पुनर्निर्धारण की अनुमति देने के लिए एडमिन मोड चुनें',
        Settings                                                              : 'सेटिंग्स',
        'Show the weekends'                                                   : 'सप्ताहांत दिखाएं',
        Sunday                                                                : 'रविवार',
        Thursday                                                              : 'गुरुवार',
        Tuesday                                                               : 'मंगलवार',
        Wednesday                                                             : 'बुधवार'
    },

    SlideToggle : {
        'Hide completed' : 'पूर्ण हुआ छिपाएं'
    }
};

export default LocaleHelper.publishLocale(locale);
