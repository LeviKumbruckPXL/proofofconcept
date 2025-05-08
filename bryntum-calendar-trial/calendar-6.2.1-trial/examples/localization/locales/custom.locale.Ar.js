import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ar.js';

const locale = {

    localeName : 'Ar',
    localeDesc : 'اللغة العربية',
    localeCode : 'ar',
    localeRtl  : true,

    App : {
        'Localization demo' : 'عرض التوطين'
    },

    Button : {
        'Add column'          : 'إضافة عمود',
        'Display hints'       : 'عرض التلميحات',
        'Remove column'       : 'إزالة عمود',
        'Show all day events' : 'عرض الأحداث طوال اليوم',
        'My button'           : data => `زرّي ${data}`,
        Apply                 : 'تطبيق',
        Learn                 : 'تعلم',
        DownloadTrial         : 'تحميل النسخة التجريبية'
    },

    Column : {
        Company : 'الشركة',
        Name    : 'الاسم'
    },

    Checkbox : {
        'Auto apply'  : 'تطبيق تلقائي',
        Automatically : 'تلقائيًا',
        runHints      : 'تشغيل تدفق التلميحات عند بدء التشغيل'
    },

    CodeEditor : {
        'Code editor'   : 'محرر الشيفرة',
        'Download code' : 'تنزيل الشيفرة'
    },

    Combo : {
        Theme    : 'السمة',
        Language : 'اللغة',
        Size     : 'الحجم'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'اجتماع',
        Phone   : 'هاتف',
        Lunch   : 'غداء',
        Workout : 'تمرين'
    },

    Shared : {
        'Full size'      : 'الحجم الكامل',
        'Locale changed' : 'تم تغيير اللغة',
        'Phone size'     : 'حجم الهاتف'
    },

    Tooltip : {
        infoButton       : 'انقر لعرض المعلومات وتغيير السمة أو اللغة',
        codeButton       : 'انقر لعرض محرر الشيفرة المدمج',
        hintCheck        : 'حدد لعرض التلميحات تلقائيًا عند تحميل المثال',
        fullscreenButton : 'شاشة كاملة',
        openInCodePen    : 'افتح في CodePen'
    },

    Popup : {
        UsedClasses : 'الفئات المستخدمة في هذا العرض'
    },

    TextField : {
        Filter : 'تصفية'
    }
};

export default LocaleHelper.publishLocale(locale);
