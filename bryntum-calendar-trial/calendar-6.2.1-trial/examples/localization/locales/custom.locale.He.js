import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/He.js';

const locale = {

    localeName : 'He',
    localeDesc : 'עִברִית',
    localeCode : 'he',
    localeRtl  : true,

    App : {
        'Localization demo' : 'הדגמת לוקליזציה'
    },

    Button : {
        'Add column'          : 'הוסף עמודה',
        'Display hints'       : 'הצג רמזים',
        'Remove column'       : 'הסר עמודה',
        'Show all day events' : 'הצג אירועים לכל היום',
        'My button'           : data => `הכפתור שלי ${data}`,
        Apply                 : 'החל',
        Learn                 : 'למד',
        DownloadTrial         : 'הורד גרסת ניסיון'
    },

    Column : {
        Company : 'חברה',
        Name    : 'שם'
    },

    Checkbox : {
        'Auto apply'  : 'החל אוטומטית',
        Automatically : 'אוטומטית',
        runHints      : 'הפעל זרימת רמזים בעת ההפעלה'
    },

    CodeEditor : {
        'Code editor'   : 'עורך קוד',
        'Download code' : 'הורד קוד'
    },

    Combo : {
        Theme    : 'ערכת נושא',
        Language : 'שפה',
        Size     : 'גודל'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'פגישה',
        Phone   : 'שיחה',
        Lunch   : 'ארוחת צהריים',
        Workout : 'אימון'
    },

    Shared : {
        'Full size'      : 'גודל מלא',
        'Locale changed' : 'השפה שונתה',
        'Phone size'     : 'גודל טלפון'
    },

    Tooltip : {
        infoButton       : 'לחץ כדי להציג מידע ולהחליף ערכת נושא או שפה',
        codeButton       : 'לחץ כדי להציג את עורך הקוד המובנה',
        hintCheck        : 'סמן כדי להציג רמזים אוטומטית בעת טעינת הדוגמה',
        fullscreenButton : 'מסך מלא',
        openInCodePen    : 'פתח ב-CodePen'
    },

    Popup : {
        UsedClasses : 'מחלקות בשימוש בהדגמה זו'
    },

    TextField : {
        Filter : 'סינון'
    }
};

export default LocaleHelper.publishLocale(locale);
