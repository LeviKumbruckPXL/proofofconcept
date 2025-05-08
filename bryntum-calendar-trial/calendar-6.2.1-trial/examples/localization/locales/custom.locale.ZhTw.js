import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/ZhTw.js';

const locale = {

    localeName : 'ZhTw',
    localeDesc : '繁體中文 (台灣)',
    localeCode : 'zh-TW',
    localeRtl  : false,

    App : {
        'Localization demo' : '本地化示範'
    },

    Button : {
        'Add column'          : '新增欄位',
        'Display hints'       : '顯示提示',
        'Remove column'       : '移除欄位',
        'Show all day events' : '顯示全天事件',
        'My button'           : data => `我的按鈕 ${data}`,
        Apply                 : '套用',
        Learn                 : '學習',
        DownloadTrial         : '下載試用版'
    },

    Column : {
        Company : '公司',
        Name    : '名稱'
    },

    Checkbox : {
        'Auto apply'  : '自動套用',
        Automatically : '自動',
        runHints      : '啟動時執行提示流程'
    },

    CodeEditor : {
        'Code editor'   : '程式碼編輯器',
        'Download code' : '下載程式碼'
    },

    Combo : {
        Theme    : '主題',
        Language : '語言',
        Size     : '大小'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : '會議',
        Phone   : '電話',
        Lunch   : '午餐',
        Workout : '運動'
    },

    Shared : {
        'Full size'      : '完整尺寸',
        'Locale changed' : '語系已更改',
        'Phone size'     : '手機尺寸'
    },

    Tooltip : {
        infoButton       : '點擊以顯示資訊並切換主題或語系',
        codeButton       : '點擊以顯示內建的程式碼編輯器',
        hintCheck        : '勾選以在載入範例時自動顯示提示',
        fullscreenButton : '全螢幕',
        openInCodePen    : '在 CodePen 中開啟'
    },

    Popup : {
        UsedClasses : '此示範中使用的類別'
    },

    TextField : {
        Filter : '篩選'
    }
};

export default LocaleHelper.publishLocale(locale);
