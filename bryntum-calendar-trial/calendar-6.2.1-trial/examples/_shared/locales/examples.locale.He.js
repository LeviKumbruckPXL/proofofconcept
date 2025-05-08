import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/He.js';
import './shared.locale.He.js';

const locale = {

    localeName : 'He',
    localeDesc : 'עִברִית',
    localeCode : 'he',
    localeRtl  : true,

    Column : {
        Completed          : 'הושלם',
        Duration           : 'משך זמן',
        'In progress'      : 'בתהליך',
        Name               : 'שם',
        'Not started'      : 'לא התחיל',
        'Staff/Resource'   : 'צוות/משאב',
        'Unassigned tasks' : 'משימות לא מוקצות'
    },

    Button : {
        Actions              : 'פעולות',
        Agenda               : 'סדר יום',
        Apr                  : 'אפר',
        April                : 'אפריל',
        Aug                  : 'אוג',
        Cancel               : 'ביטול',
        Create               : 'צור',
        Day                  : 'יום',
        'Day Agenda'         : 'סדר יום יומי',
        'Day resources'      : 'משאבי יום',
        Dec                  : 'דצמ',
        Delete               : 'מחק',
        Dualdayview          : 'תצוגת יום כפול',
        'Export to Excel'    : 'ייצוא ל-Excel',
        Feb                  : 'פבר',
        February             : 'פברואר',
        'Grouped by day'     : 'מקובץ לפי יום',
        'Grouped by station' : 'מקובץ לפי תחנה',
        Jan                  : 'ינו',
        January              : 'ינואר',
        Jul                  : 'יול',
        July                 : 'יולי',
        Jun                  : 'יונ',
        June                 : 'יוני',
        List                 : 'רשימה',
        Mar                  : 'מרץ',
        March                : 'מרץ',
        May                  : 'מאי',
        Month                : 'חודש',
        'Multi Days'         : 'מספר ימים',
        Nov                  : 'נוב',
        Oct                  : 'אוק',
        October              : 'אוקטובר',
        Print                : 'הדפס',
        Reload               : 'טען מחדש',
        'Reset database'     : 'איפוס מסד נתונים',
        'Reset to default'   : 'איפוס לברירת מחדל',
        Resourceview         : 'תצוגת משאבים',
        Save                 : 'שמור',
        Sep                  : 'ספט',
        September            : 'ספטמבר',
        Timeline             : 'ציר זמן',
        Today                : 'היום',
        'Two weeks'          : 'שבועיים',
        Week                 : 'שבוע',
        'Week Agenda'        : 'סדר יום שבועי',
        Weekends             : 'סופי שבוע',
        Year                 : 'שנה',
        'Zoom to events'     : 'התמקד באירועים'
    },

    Checkbox : {
        'Custom styles'                   : 'סגנונות מותאמים אישית',
        'Fit events'                      : 'התאם אירועים',
        'Fit timeline to available space' : 'התאם ציר זמן למרחב הזמין',
        'Full width'                      : 'רוחב מלא',
        'Hide borders'                    : 'הסתר גבולות',
        'Hide empty hours'                : 'הסתר שעות ריקות',
        'Hide time axes'                  : 'הסתר צירי זמן',
        'Hide unscheduled resources'      : 'הסתר משאבים לא מתוזמנים',
        'Hide weekends'                   : 'הסתר סופי שבוע',
        'On top'                          : 'למעלה',
        'Show avatar'                     : 'הצג אווטאר',
        'Show core hours in day'          : 'הצג שעות ליבה ביום',
        'Show time'                       : 'הצג זמן',
        'Stack events vertically'         : 'ערום אירועים אנכית',
        'Sync hour heights'               : 'סנכרן גבהי שעות'
    },

    Slider : {
        'Hour height'    : 'גובה שעה',
        'Resource width' : 'רוחב משאב',
        Scale            : 'קנה מידה'
    },

    Combo : {
        'Choose show' : 'בחר מופע',
        Equipment     : 'ציוד',
        'Timezone:'   : 'אזור זמן:'
    },

    Label : {
        Days             : 'ימים',
        Months           : 'חודשים',
        'Resource width' : 'רוחב המשאב'
    },

    NumberField : {
        Every                      : 'כל',
        'Max events per cell'      : 'מקסימום אירועים לכל תא',
        'Scroll to hour'           : 'גלול לשעה',
        'Snap increment (minutes)' : 'הגדלת הצמדה (דקות)'
    },

    TextField : {
        'Filter resources'  : 'סינון משאבים',
        Name                : 'שם',
        'Type to filter...' : 'הקלד לסינון...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'אירועים יתאימו בעת ניווט כאשר מסומן',
        'Fit events within scroll range'                                      : 'התאם אירועים בטווח הגלילה',
        Friday                                                                : 'שישי',
        Monday                                                                : 'שני',
        'Print the currently active view'                                     : 'הדפס את התצוגה הפעילה כעת',
        Saturday                                                              : 'שבת',
        'Select admin mode to allow editing and rescheduling of performances' : 'בחר במצב מנהל כדי לאפשר עריכה ותזמון מחדש של הופעות',
        Settings                                                              : 'הגדרות',
        'Show the weekends'                                                   : 'הצג את סופי השבוע',
        Sunday                                                                : 'ראשון',
        Thursday                                                              : 'חמישי',
        Tuesday                                                               : 'שלישי',
        Wednesday                                                             : 'רביעי'
    },

    SlideToggle : {
        'Hide completed' : 'הסתר הושלמים'
    }
};

export default LocaleHelper.publishLocale(locale);
