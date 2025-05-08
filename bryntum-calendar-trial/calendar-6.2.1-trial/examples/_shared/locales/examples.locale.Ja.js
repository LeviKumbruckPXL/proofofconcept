import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ja.js';
import './shared.locale.Ja.js';
const locale = {

    localeName : 'Ja',
    localeDesc : '日本語',
    localeCode : 'ja',
    localeRtl  : false,

    Column : {
        Completed          : '完了',
        Duration           : '期間',
        'In progress'      : '進行中',
        Name               : '名前',
        'Not started'      : '未開始',
        'Staff/Resource'   : 'スタッフ/リソース',
        'Unassigned tasks' : '未割り当てのタスク'
    },

    Button : {
        Actions              : 'アクション',
        Agenda               : 'アジェンダ',
        Apr                  : '4月',
        April                : '4月',
        Aug                  : '8月',
        Cancel               : 'キャンセル',
        Create               : '作成',
        Day                  : '日',
        'Day Agenda'         : '日次アジェンダ',
        'Day resources'      : '日次リソース',
        Dec                  : '12月',
        Delete               : '削除',
        Dualdayview          : 'デュアルデイビュー',
        'Export to Excel'    : 'Excelにエクスポート',
        Feb                  : '2月',
        February             : '2月',
        'Grouped by day'     : '日別グループ化',
        'Grouped by station' : 'ステーション別グループ化',
        Jan                  : '1月',
        January              : '1月',
        Jul                  : '7月',
        July                 : '7月',
        Jun                  : '6月',
        June                 : '6月',
        List                 : 'リスト',
        Mar                  : '3月',
        March                : '3月',
        May                  : '5月',
        Month                : '月',
        'Multi Days'         : '複数日',
        Nov                  : '11月',
        Oct                  : '10月',
        October              : '10月',
        Print                : '印刷',
        Reload               : '再読み込み',
        'Reset database'     : 'データベースをリセット',
        'Reset to default'   : 'デフォルトにリセット',
        Resourceview         : 'リソースビュー',
        Save                 : '保存',
        Sep                  : '9月',
        September            : '9月',
        Timeline             : 'タイムライン',
        Today                : '今日',
        'Two weeks'          : '2週間',
        Week                 : '週',
        'Week Agenda'        : '週次アジェンダ',
        Weekends             : '週末',
        Year                 : '年',
        'Zoom to events'     : 'イベントにズーム'
    },

    Checkbox : {
        'Custom styles'                   : 'カスタムスタイル',
        'Fit events'                      : 'イベントを合わせる',
        'Fit timeline to available space' : '利用可能なスペースにタイムラインを合わせる',
        'Full width'                      : '全幅',
        'Hide borders'                    : '境界線を隠す',
        'Hide empty hours'                : '空の時間を隠す',
        'Hide time axes'                  : '時間軸を隠す',
        'Hide unscheduled resources'      : '未スケジュールのリソースを隠す',
        'Hide weekends'                   : '週末を隠す',
        'On top'                          : '上に',
        'Show avatar'                     : 'アバターを表示',
        'Show core hours in day'          : '1日のコア時間を表示',
        'Show time'                       : '時間を表示',
        'Stack events vertically'         : 'イベントを縦に積み重ねる',
        'Sync hour heights'               : '時間の高さを同期'
    },

    Slider : {
        'Hour height'    : '時間の高さ',
        'Resource width' : 'リソースの幅',
        Scale            : 'スケール'
    },

    Combo : {
        'Choose show' : 'ショーを選択',
        Equipment     : '機器',
        'Timezone:'   : 'タイムゾーン:'
    },

    Label : {
        Days             : '日',
        Months           : '月',
        'Resource width' : 'リソースの幅'
    },

    NumberField : {
        Every                      : 'すべて',
        'Max events per cell'      : 'セルごとの最大イベント数',
        'Scroll to hour'           : '時間までスクロール',
        'Snap increment (minutes)' : 'スナップ増分（分）'
    },

    TextField : {
        'Filter resources'  : 'リソースをフィルタ',
        Name                : '名前',
        'Type to filter...' : 'フィルターするには入力してください...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'ナビゲーション時にチェックされるとイベントが調整されます',
        'Fit events within scroll range'                                      : 'スクロール範囲内にイベントを収める',
        Friday                                                                : '金曜日',
        Monday                                                                : '月曜日',
        'Print the currently active view'                                     : '現在のアクティブビューを印刷',
        Saturday                                                              : '土曜日',
        'Select admin mode to allow editing and rescheduling of performances' : 'パフォーマンスの編集と再スケジュールを許可するには管理者モードを選択',
        Settings                                                              : '設定',
        'Show the weekends'                                                   : '週末を表示',
        Sunday                                                                : '日曜日',
        Thursday                                                              : '木曜日',
        Tuesday                                                               : '火曜日',
        Wednesday                                                             : '水曜日'
    },

    SlideToggle : {
        'Hide completed' : '完了を非表示'
    }
};

export default LocaleHelper.publishLocale(locale);
