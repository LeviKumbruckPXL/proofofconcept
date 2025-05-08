import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ja.js';

const locale = {

    localeName : 'Ja',
    localeDesc : '日本語',
    localeCode : 'ja',
    localeRtl  : false,

    App : {
        'Localization demo' : 'ローカリゼーションデモ'
    },

    Button : {
        'Add column'          : '列を追加',
        'Display hints'       : 'ヒントを表示',
        'Remove column'       : '列を削除',
        'Show all day events' : '終日イベントを表示',
        'My button'           : data => `私のボタン ${data}`,
        Apply                 : '適用',
        Learn                 : '学ぶ',
        DownloadTrial         : 'トライアルをダウンロード'
    },

    Column : {
        Company : '会社',
        Name    : '名前'
    },

    Checkbox : {
        'Auto apply'  : '自動適用',
        Automatically : '自動的に',
        runHints      : '起動時にヒントフローを実行'
    },

    CodeEditor : {
        'Code editor'   : 'コードエディタ',
        'Download code' : 'コードをダウンロード'
    },

    Combo : {
        Theme    : 'テーマ',
        Language : '言語',
        Size     : 'サイズ'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : '会議',
        Phone   : '電話',
        Lunch   : '昼食',
        Workout : '運動'
    },

    Shared : {
        'Full size'      : 'フルサイズ',
        'Locale changed' : 'ロケールが変更されました',
        'Phone size'     : '電話サイズ'
    },

    Tooltip : {
        infoButton       : '情報を表示し、テーマまたはロケールを切り替えるにはクリック',
        codeButton       : '組み込みコードエディタを表示するにはクリック',
        hintCheck        : '例を読み込むときにヒントを自動的に表示するにはチェック',
        fullscreenButton : '全画面',
        openInCodePen    : 'CodePenで開く'
    },

    Popup : {
        UsedClasses : 'このデモで使用されるクラス'
    },

    TextField : {
        Filter : 'フィルター'
    }
};

export default LocaleHelper.publishLocale(locale);
