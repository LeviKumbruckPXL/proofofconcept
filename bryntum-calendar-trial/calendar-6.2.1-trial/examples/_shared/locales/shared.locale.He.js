import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'He',
    localeDesc : 'עִברִית',
    localeCode : 'he',
    localeRtl  : true,

    Button : {
        'Display hints' : 'הצג רמזים',
        Apply           : 'החל',
        Learn           : 'למד',
        DownloadTrial   : 'הורד גרסת ניסיון'
    },

    Checkbox : {
        Automatically : 'אוטומטית',
        runHints      : 'הפעל זרימת רמזים בעת ההפעלה'
    },

    Combo : {
        Theme    : 'ערכת נושא',
        Language : 'שפה',
        Size     : 'גודל'
    },

    Popup : {
        UsedClasses : 'מחלקות בשימוש בהדגמה זו'
    },

    Shared : {
        'Locale changed' : 'השפה שונתה'
    },

    TextField : {
        Filter : 'סינון'
    },

    Tooltip : {
        infoButton       : 'לחץ כדי להציג מידע ולהחליף ערכת נושא או שפה',
        codeButton       : 'לחץ כדי להציג את עורך הקוד המובנה',
        hintCheck        : 'סמן כדי להציג רמזים אוטומטית בעת טעינת הדוגמה',
        fullscreenButton : 'מסך מלא',
        openInCodePen    : 'פתח ב-CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
