import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/ZhCn.js';
import './shared.locale.ZhCn.js';

const locale = {

    localeName : 'ZhCn',
    localeDesc : '中文（中国）',
    localeCode : 'zh-CN',
    localeRtl  : false,

    Column : {
        Completed          : '已完成',
        Duration           : '持续时间',
        'In progress'      : '进行中',
        Name               : '名称',
        'Not started'      : '未开始',
        'Staff/Resource'   : '员工/资源',
        'Unassigned tasks' : '未分配的任务'
    },

    Button : {
        Actions              : '操作',
        Agenda               : '议程',
        Apr                  : '4月',
        April                : '四月',
        Aug                  : '8月',
        Cancel               : '取消',
        Create               : '创建',
        Day                  : '日',
        'Day Agenda'         : '日程议程',
        'Day resources'      : '日资源',
        Dec                  : '12月',
        Delete               : '删除',
        Dualdayview          : '双日视图',
        'Export to Excel'    : '导出到Excel',
        Feb                  : '2月',
        February             : '二月',
        'Grouped by day'     : '按天分组',
        'Grouped by station' : '按站分组',
        Jan                  : '1月',
        January              : '一月',
        Jul                  : '7月',
        July                 : '七月',
        Jun                  : '6月',
        June                 : '六月',
        List                 : '列表',
        Mar                  : '3月',
        March                : '三月',
        May                  : '5月',
        Month                : '月',
        'Multi Days'         : '多天',
        Nov                  : '11月',
        Oct                  : '10月',
        October              : '十月',
        Print                : '打印',
        Reload               : '重新加载',
        'Reset database'     : '重置数据库',
        'Reset to default'   : '重置为默认',
        Resourceview         : '资源视图',
        Save                 : '保存',
        Sep                  : '9月',
        September            : '九月',
        Timeline             : '时间线',
        Today                : '今天',
        'Two weeks'          : '两周',
        Week                 : '周',
        'Week Agenda'        : '周议程',
        Weekends             : '周末',
        Year                 : '年',
        'Zoom to events'     : '缩放到事件'
    },

    Checkbox : {
        'Custom styles'                   : '自定义样式',
        'Fit events'                      : '适配事件',
        'Fit timeline to available space' : '将时间轴适配到可用空间',
        'Full width'                      : '全宽',
        'Hide borders'                    : '隐藏边框',
        'Hide empty hours'                : '隐藏空白时间',
        'Hide time axes'                  : '隐藏时间轴',
        'Hide unscheduled resources'      : '隐藏未计划的资源',
        'Hide weekends'                   : '隐藏周末',
        'On top'                          : '在顶部',
        'Show avatar'                     : '显示头像',
        'Show core hours in day'          : '显示一天中的核心时间',
        'Show time'                       : '显示时间',
        'Stack events vertically'         : '垂直堆叠事件',
        'Sync hour heights'               : '同步小时高度'
    },

    Slider : {
        'Hour height'    : '小时高度',
        'Resource width' : '资源宽度',
        Scale            : '比例'
    },

    Combo : {
        'Choose show' : '选择节目',
        Equipment     : '设备',
        'Timezone:'   : '时区：'
    },

    Label : {
        Days             : '天',
        Months           : '月',
        'Resource width' : '资源宽度'
    },

    NumberField : {
        Every                      : '每',
        'Max events per cell'      : '每个单元格的最大事件数',
        'Scroll to hour'           : '滚动到小时',
        'Snap increment (minutes)' : '捕捉增量（分钟）'
    },

    TextField : {
        'Filter resources'  : '过滤资源',
        Name                : '名称',
        'Type to filter...' : '输入以筛选...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : '选中后将在导航时调整事件',
        'Fit events within scroll range'                                      : '在滚动范围内调整事件',
        Friday                                                                : '星期五',
        Monday                                                                : '星期一',
        'Print the currently active view'                                     : '打印当前活动视图',
        Saturday                                                              : '星期六',
        'Select admin mode to allow editing and rescheduling of performances' : '选择管理员模式以允许编辑和重新安排演出',
        Settings                                                              : '设置',
        'Show the weekends'                                                   : '显示周末',
        Sunday                                                                : '星期日',
        Thursday                                                              : '星期四',
        Tuesday                                                               : '星期二',
        Wednesday                                                             : '星期三'
    },

    SlideToggle : {
        'Hide completed' : '隐藏已完成'
    }
};

export default LocaleHelper.publishLocale(locale);
