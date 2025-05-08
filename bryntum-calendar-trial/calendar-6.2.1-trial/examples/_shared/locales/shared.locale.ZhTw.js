import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'ZhTw',
    localeDesc : '繁體中文 (台灣)',
    localeCode : 'zh-TW',
    localeRtl  : false,

    Button : {
        'Display hints' : '顯示提示',
        Apply           : '套用',
        Learn           : '學習',
        DownloadTrial   : '下載試用版'
    },

    Checkbox : {
        Automatically : '自動',
        runHints      : '啟動時執行提示流程'
    },

    Combo : {
        Theme    : '主題',
        Language : '語言',
        Size     : '大小'
    },

    Popup : {
        UsedClasses : '此示範中使用的類別'
    },

    Shared : {
        'Locale changed' : '語系已更改'
    },

    TextField : {
        Filter : '篩選'
    },

    Tooltip : {
        infoButton       : '點擊以顯示資訊並切換主題或語系',
        codeButton       : '點擊以顯示內建的程式碼編輯器',
        hintCheck        : '勾選以在載入範例時自動顯示提示',
        fullscreenButton : '全螢幕',
        openInCodePen    : '在 CodePen 中開啟'
    }
};

export default LocaleHelper.publishLocale(locale);
