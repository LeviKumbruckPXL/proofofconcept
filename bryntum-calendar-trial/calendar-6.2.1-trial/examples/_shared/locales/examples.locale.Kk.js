import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Kk.js';
import './shared.locale.Kk.js';

const locale = {

    localeName : 'Kk',
    localeDesc : 'Қазақ тілі (KZ)',
    localeCode : 'kk-KZ',
    localeRtl  : false,

    Column : {
        Completed          : 'Аяқталды',
        Duration           : 'Ұзақтығы',
        'In progress'      : 'Үрдісте',
        Name               : 'Аты',
        'Not started'      : 'Басталмады',
        'Staff/Resource'   : 'Қызметкерлер/Ресурстар',
        'Unassigned tasks' : 'Тағайындалмаған тапсырмалар'
    },

    Button : {
        Actions              : 'Әрекеттер',
        Agenda               : 'Күн тәртібі',
        Apr                  : 'Сәу',
        April                : 'Сәуір',
        Aug                  : 'Там',
        Cancel               : 'Бас тарту',
        Create               : 'Құру',
        Day                  : 'Күн',
        'Day Agenda'         : 'Күн тәртібі',
        'Day resources'      : 'Күн ресурстары',
        Dec                  : 'Жел',
        Delete               : 'Жою',
        Dualdayview          : 'Қос күн көрінісі',
        'Export to Excel'    : 'Excel-ге экспорттау',
        Feb                  : 'Ақп',
        February             : 'Ақпан',
        'Grouped by day'     : 'Күн бойынша топталған',
        'Grouped by station' : 'Станция бойынша топталған',
        Jan                  : 'Қаң',
        January              : 'Қаңтар',
        Jul                  : 'Шіл',
        July                 : 'Шілде',
        Jun                  : 'Мау',
        June                 : 'Маусым',
        List                 : 'Тізім',
        Mar                  : 'Нау',
        March                : 'Наурыз',
        May                  : 'Мам',
        Month                : 'Ай',
        'Multi Days'         : 'Көп күндер',
        Nov                  : 'Қар',
        Oct                  : 'Қаз',
        October              : 'Қазан',
        Print                : 'Басып шығару',
        Reload               : 'Қайта жүктеу',
        'Reset database'     : 'Дерекқорды қалпына келтіру',
        'Reset to default'   : 'Әдепкіге қалпына келтіру',
        Resourceview         : 'Ресурс көрінісі',
        Save                 : 'Сақтау',
        Sep                  : 'Қыр',
        September            : 'Қыркүйек',
        Timeline             : 'Уақыт шкаласы',
        Today                : 'Бүгін',
        'Two weeks'          : 'Екі апта',
        Week                 : 'Апта',
        'Week Agenda'        : 'Апталық күн тәртібі',
        Weekends             : 'Демалыс күндері',
        Year                 : 'Жыл',
        'Zoom to events'     : 'Оқиғаларға үлкейту'
    },

    Checkbox : {
        'Custom styles'                   : 'Арнайы стильдер',
        'Fit events'                      : 'Оқиғаларды сәйкестендіру',
        'Fit timeline to available space' : 'Уақыт сызығын қолжетімді орынға сәйкестендіру',
        'Full width'                      : 'Толық ені',
        'Hide borders'                    : 'Шекараларды жасыру',
        'Hide empty hours'                : 'Бос сағаттарды жасыру',
        'Hide time axes'                  : 'Уақыт осьтерін жасыру',
        'Hide unscheduled resources'      : 'Жоспарланбаған ресурстарды жасыру',
        'Hide weekends'                   : 'Демалыс күндерін жасыру',
        'On top'                          : 'Үстінде',
        'Show avatar'                     : 'Аватарды көрсету',
        'Show core hours in day'          : 'Күннің негізгі сағаттарын көрсету',
        'Show time'                       : 'Уақытты көрсету',
        'Stack events vertically'         : 'Оқиғаларды тік орналастыру',
        'Sync hour heights'               : 'Сағат биіктіктерін синхрондау'
    },

    Slider : {
        'Hour height'    : 'Сағат биіктігі',
        'Resource width' : 'Ресурс ені',
        Scale            : 'Шкала'
    },

    Combo : {
        'Choose show' : 'Шоуды таңдаңыз',
        Equipment     : 'Жабдық',
        'Timezone:'   : 'Уақыт белдеуі:'
    },

    Label : {
        Days             : 'Күндер',
        Months           : 'Айлар',
        'Resource width' : 'Ресурстың ені'
    },

    NumberField : {
        Every                      : 'Әрбір',
        'Max events per cell'      : 'Әр ұяшықтағы максималды оқиғалар саны',
        'Scroll to hour'           : 'Сағатқа айналдыру',
        'Snap increment (minutes)' : 'Қадамдық арттыру (минуттар)'
    },

    TextField : {
        'Filter resources'  : 'Ресурстарды сүзу',
        Name                : 'Аты',
        'Type to filter...' : 'Сүзу үшін теріңіз...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Іс-шаралар тексерілген кезде навигация кезінде сәйкес келеді',
        'Fit events within scroll range'                                      : 'Іс-шараларды айналдыру ауқымына сәйкес келтіріңіз',
        Friday                                                                : 'Жұма',
        Monday                                                                : 'Дүйсенбі',
        'Print the currently active view'                                     : 'Қазіргі белсенді көріністі басып шығарыңыз',
        Saturday                                                              : 'Сенбі',
        'Select admin mode to allow editing and rescheduling of performances' : 'Өңдеу және қойылымдарды қайта жоспарлауға рұқсат беру үшін әкімші режимін таңдаңыз',
        Settings                                                              : 'Параметрлер',
        'Show the weekends'                                                   : 'Демалыс күндерін көрсету',
        Sunday                                                                : 'Жексенбі',
        Thursday                                                              : 'Бейсенбі',
        Tuesday                                                               : 'Сейсенбі',
        Wednesday                                                             : 'Сәрсенбі'
    },

    SlideToggle : {
        'Hide completed' : 'Аяқталғандарды жасыру'
    }
};

export default LocaleHelper.publishLocale(locale);
