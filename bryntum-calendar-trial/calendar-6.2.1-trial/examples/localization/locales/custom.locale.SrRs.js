import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/SrRs.js';

const locale = {

    localeName : 'SrRs',
    localeDesc : 'Српски (ћирилица)',
    localeCode : 'sr-RS',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Демонстрација локализације'
    },

    Button : {
        'Add column'          : 'Додај колону',
        'Display hints'       : 'Прикажи савете',
        'Remove column'       : 'Уклони колону',
        'Show all day events' : 'Прикажи целодневне догађаје',
        'My button'           : data => `Моје дугме ${data}`,
        Apply                 : 'Примени',
        Learn                 : 'Учи',
        DownloadTrial         : 'Преузми пробну верзију'
    },

    Column : {
        Company : 'Компанија',
        Name    : 'Име'
    },

    Checkbox : {
        'Auto apply'  : 'Аутоматска примена',
        Automatically : 'Аутоматски',
        runHints      : 'Покрени ток савета при покретању'
    },

    CodeEditor : {
        'Code editor'   : 'Уређивач кода',
        'Download code' : 'Преузми код'
    },

    Combo : {
        Theme    : 'Тема',
        Language : 'Језик',
        Size     : 'Величина'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Састанак',
        Phone   : 'Телефон',
        Lunch   : 'Ручак',
        Workout : 'Вежбање'
    },

    Shared : {
        'Full size'      : 'Пуна величина',
        'Locale changed' : 'Локал је промењен',
        'Phone size'     : 'Величина телефона'
    },

    Tooltip : {
        infoButton       : 'Кликни да прикажеш информације и промениш тему или локал',
        codeButton       : 'Кликни да прикажеш уграђени уређивач кода',
        hintCheck        : 'Означи да аутоматски прикажеш савете при учитавању примера',
        fullscreenButton : 'Цео екран',
        openInCodePen    : 'Отвори у CodePen'
    },

    Popup : {
        UsedClasses : 'Класе коришћене у овом демо-у'
    },

    TextField : {
        Filter : 'Филтер'
    }
};

export default LocaleHelper.publishLocale(locale);
