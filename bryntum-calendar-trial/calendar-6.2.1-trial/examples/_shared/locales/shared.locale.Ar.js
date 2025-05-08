import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Ar',
    localeDesc : 'اللغة العربية',
    localeCode : 'ar',
    localeRtl  : true,

    Button : {
        'Display hints' : 'عرض التلميحات',
        Apply           : 'تطبيق',
        Learn           : 'تعلم',
        DownloadTrial   : 'تحميل النسخة التجريبية'
    },

    Checkbox : {
        Automatically : 'تلقائيًا',
        runHints      : 'تشغيل تدفق التلميحات عند بدء التشغيل'
    },

    Combo : {
        Theme    : 'السمة',
        Language : 'اللغة',
        Size     : 'الحجم'
    },

    Popup : {
        UsedClasses : 'الفئات المستخدمة في هذا العرض'
    },

    Shared : {
        'Locale changed' : 'تم تغيير اللغة'
    },

    TextField : {
        Filter : 'تصفية'
    },

    Tooltip : {
        infoButton       : 'انقر لعرض المعلومات وتغيير السمة أو اللغة',
        codeButton       : 'انقر لعرض محرر الشيفرة المدمج',
        hintCheck        : 'حدد لعرض التلميحات تلقائيًا عند تحميل المثال',
        fullscreenButton : 'شاشة كاملة',
        openInCodePen    : 'افتح في CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
