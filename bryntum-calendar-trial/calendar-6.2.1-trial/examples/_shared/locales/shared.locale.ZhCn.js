import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'ZhCn',
    localeDesc : '中文（中国）',
    localeCode : 'zh-CN',
    localeRtl  : false,

    Button : {
        'Display hints' : '显示提示',
        Apply           : '应用',
        Learn           : '学习',
        DownloadTrial   : '下载试用'
    },

    Checkbox : {
        Automatically : '自动',
        runHints      : '启动时运行提示流程'
    },

    Combo : {
        Theme    : '主题',
        Language : '语言',
        Size     : '大小'
    },

    Popup : {
        UsedClasses : '此演示中使用的类'
    },

    Shared : {
        'Locale changed' : '语言环境已更改'
    },

    TextField : {
        Filter : '过滤'
    },

    Tooltip : {
        infoButton       : '点击以显示信息并切换主题或语言环境',
        codeButton       : '点击以显示内置代码编辑器',
        hintCheck        : '选中以在加载示例时自动显示提示',
        fullscreenButton : '全屏',
        openInCodePen    : '在 CodePen 中打开'
    }
};

export default LocaleHelper.publishLocale(locale);
