import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ar.js';
import './shared.locale.Ar.js';

const locale = {

    localeName : 'Ar',
    localeDesc : 'اللغة العربية',
    localeCode : 'ar',
    localeRtl  : true,

    Column : {
        Completed          : 'مكتمل',
        Duration           : 'المدة',
        'In progress'      : 'قيد التنفيذ',
        Name               : 'الاسم',
        'Not started'      : 'لم يبدأ',
        'Staff/Resource'   : 'الموظفون/الموارد',
        'Unassigned tasks' : 'المهام غير المعينة'
    },

    Button : {
        Actions              : 'الإجراءات',
        Agenda               : 'جدول الأعمال',
        Apr                  : 'أبريل',
        April                : 'أبريل',
        Aug                  : 'أغسطس',
        Cancel               : 'إلغاء',
        Create               : 'إنشاء',
        Day                  : 'يوم',
        'Day Agenda'         : 'جدول أعمال اليوم',
        'Day resources'      : 'موارد اليوم',
        Dec                  : 'ديسمبر',
        Delete               : 'حذف',
        Dualdayview          : 'عرض اليوم المزدوج',
        'Export to Excel'    : 'تصدير إلى Excel',
        Feb                  : 'فبراير',
        February             : 'فبراير',
        'Grouped by day'     : 'مجموعة حسب اليوم',
        'Grouped by station' : 'مجموعة حسب المحطة',
        Jan                  : 'يناير',
        January              : 'يناير',
        Jul                  : 'يوليو',
        July                 : 'يوليو',
        Jun                  : 'يونيو',
        June                 : 'يونيو',
        List                 : 'قائمة',
        Mar                  : 'مارس',
        March                : 'مارس',
        May                  : 'مايو',
        Month                : 'شهر',
        'Multi Days'         : 'أيام متعددة',
        Nov                  : 'نوفمبر',
        Oct                  : 'أكتوبر',
        October              : 'أكتوبر',
        Print                : 'طباعة',
        Reload               : 'إعادة تحميل',
        'Reset database'     : 'إعادة تعيين قاعدة البيانات',
        'Reset to default'   : 'إعادة تعيين إلى الافتراضي',
        Resourceview         : 'عرض الموارد',
        Save                 : 'حفظ',
        Sep                  : 'سبتمبر',
        September            : 'سبتمبر',
        Timeline             : 'الجدول الزمني',
        Today                : 'اليوم',
        'Two weeks'          : 'أسبوعان',
        Week                 : 'أسبوع',
        'Week Agenda'        : 'جدول أعمال الأسبوع',
        Weekends             : 'عطلات نهاية الأسبوع',
        Year                 : 'سنة',
        'Zoom to events'     : 'تكبير إلى الأحداث'
    },

    Checkbox : {
        'Custom styles'                   : 'أنماط مخصصة',
        'Fit events'                      : 'تكييف الأحداث',
        'Fit timeline to available space' : 'تكييف الجدول الزمني مع المساحة المتاحة',
        'Full width'                      : 'العرض الكامل',
        'Hide borders'                    : 'إخفاء الحدود',
        'Hide empty hours'                : 'إخفاء الساعات الفارغة',
        'Hide time axes'                  : 'إخفاء محاور الوقت',
        'Hide unscheduled resources'      : 'إخفاء الموارد غير المجدولة',
        'Hide weekends'                   : 'إخفاء عطلات نهاية الأسبوع',
        'On top'                          : 'في الأعلى',
        'Show avatar'                     : 'إظهار الصورة الرمزية',
        'Show core hours in day'          : 'إظهار الساعات الأساسية في اليوم',
        'Show time'                       : 'عرض الوقت',
        'Stack events vertically'         : 'تكديس الأحداث عموديًا',
        'Sync hour heights'               : 'مزامنة ارتفاعات الساعات'
    },

    Slider : {
        'Hour height'    : 'ارتفاع الساعة',
        'Resource width' : 'عرض المورد',
        Scale            : 'مقياس'
    },

    Combo : {
        'Choose show' : 'اختر العرض',
        Equipment     : 'المعدات',
        'Timezone:'   : 'المنطقة الزمنية:'
    },

    Label : {
        Days             : 'أيام',
        Months           : 'أشهر',
        'Resource width' : 'عرض المورد'
    },

    NumberField : {
        Every                      : 'كل',
        'Max events per cell'      : 'الحد الأقصى للأحداث لكل خلية',
        'Scroll to hour'           : 'التمرير إلى الساعة',
        'Snap increment (minutes)' : 'زيادة اللقطة (بالدقائق)'
    },

    TextField : {
        'Filter resources'  : 'تصفية الموارد',
        Name                : 'الاسم',
        'Type to filter...' : 'اكتب للتصفية...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'سيتم ضبط الأحداث عند التنقل عند التحديد',
        'Fit events within scroll range'                                      : 'ضبط الأحداث ضمن نطاق التمرير',
        Friday                                                                : 'الجمعة',
        Monday                                                                : 'الإثنين',
        'Print the currently active view'                                     : 'طباعة العرض النشط حاليًا',
        Saturday                                                              : 'السبت',
        'Select admin mode to allow editing and rescheduling of performances' : 'اختر وضع المسؤول للسماح بتحرير وجدولة العروض',
        Settings                                                              : 'الإعدادات',
        'Show the weekends'                                                   : 'عرض عطلة نهاية الأسبوع',
        Sunday                                                                : 'الأحد',
        Thursday                                                              : 'الخميس',
        Tuesday                                                               : 'الثلاثاء',
        Wednesday                                                             : 'الأربعاء'
    },

    SlideToggle : {
        'Hide completed' : 'إخفاء المكتمل'
    }
};

export default LocaleHelper.publishLocale(locale);
