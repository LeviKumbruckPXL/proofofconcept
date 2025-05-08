import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/ZhTw.js';
import './shared.locale.ZhTw.js';

const locale = {

    localeName : 'ZhTw',
    localeDesc : '繁體中文 (台灣)',
    localeCode : 'zh-TW',
    localeRtl  : false,

    Column : {
        Completed          : '已完成',
        Duration           : '持續時間',
        'In progress'      : '進行中',
        Name               : '名稱',
        'Not started'      : '未開始',
        'Staff/Resource'   : '人員/資源',
        'Unassigned tasks' : '未分配的任務'
    },

    Button : {
        Actions              : '操作',
        Agenda               : '議程',
        Apr                  : '4月',
        April                : '四月',
        Aug                  : '8月',
        Cancel               : '取消',
        Create               : '建立',
        Day                  : '日',
        'Day Agenda'         : '日議程',
        'Day resources'      : '日資源',
        Dec                  : '12月',
        Delete               : '刪除',
        Dualdayview          : '雙日視圖',
        'Export to Excel'    : '匯出到 Excel',
        Feb                  : '2月',
        February             : '二月',
        'Grouped by day'     : '按日分組',
        'Grouped by station' : '按站分組',
        Jan                  : '1月',
        January              : '一月',
        Jul                  : '7月',
        July                 : '七月',
        Jun                  : '6月',
        June                 : '六月',
        List                 : '清單',
        Mar                  : '3月',
        March                : '三月',
        May                  : '5月',
        Month                : '月',
        'Multi Days'         : '多日',
        Nov                  : '11月',
        Oct                  : '10月',
        October              : '十月',
        Print                : '列印',
        Reload               : '重新載入',
        'Reset database'     : '重置資料庫',
        'Reset to default'   : '重置為預設',
        Resourceview         : '資源視圖',
        Save                 : '儲存',
        Sep                  : '9月',
        September            : '九月',
        Timeline             : '時間軸',
        Today                : '今天',
        'Two weeks'          : '兩週',
        Week                 : '週',
        'Week Agenda'        : '週議程',
        Weekends             : '週末',
        Year                 : '年',
        'Zoom to events'     : '縮放到事件'
    },

    Checkbox : {
        'Custom styles'                   : '自訂樣式',
        'Fit events'                      : '適合事件',
        'Fit timeline to available space' : '將時間軸適合可用空間',
        'Full width'                      : '全寬',
        'Hide borders'                    : '隱藏邊框',
        'Hide empty hours'                : '隱藏空白小時',
        'Hide time axes'                  : '隱藏時間軸',
        'Hide unscheduled resources'      : '隱藏未排程的資源',
        'Hide weekends'                   : '隱藏週末',
        'On top'                          : '置頂',
        'Show avatar'                     : '顯示頭像',
        'Show core hours in day'          : '顯示一天的核心時間',
        'Show time'                       : '顯示時間',
        'Stack events vertically'         : '垂直堆疊事件',
        'Sync hour heights'               : '同步小時高度'
    },

    Slider : {
        'Hour height'    : '小時高度',
        'Resource width' : '資源寬度',
        Scale            : '比例'
    },

    Combo : {
        'Choose show' : '選擇節目',
        Equipment     : '設備',
        'Timezone:'   : '時區：'
    },

    Label : {
        Days             : '天',
        Months           : '月',
        'Resource width' : '資源寬度'
    },

    NumberField : {
        Every                      : '每',
        'Max events per cell'      : '每個單元格的最大事件數',
        'Scroll to hour'           : '滾動到小時',
        'Snap increment (minutes)' : '捕捉增量（分鐘）'
    },

    TextField : {
        'Filter resources'  : '篩選資源',
        Name                : '名稱',
        'Type to filter...' : '輸入以篩選...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : '勾選後，事件將在導航時調整',
        'Fit events within scroll range'                                      : '在滾動範圍內調整事件',
        Friday                                                                : '星期五',
        Monday                                                                : '星期一',
        'Print the currently active view'                                     : '列印當前活動視圖',
        Saturday                                                              : '星期六',
        'Select admin mode to allow editing and rescheduling of performances' : '選擇管理模式以允許編輯和重新安排演出',
        Settings                                                              : '設定',
        'Show the weekends'                                                   : '顯示週末',
        Sunday                                                                : '星期日',
        Thursday                                                              : '星期四',
        Tuesday                                                               : '星期二',
        Wednesday                                                             : '星期三'
    },

    SlideToggle : {
        'Hide completed' : '隱藏已完成'
    }
};

export default LocaleHelper.publishLocale(locale);
