import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Kk.js';

const locale = {

    localeName : 'Kk',
    localeDesc : 'Қазақ тілі (KZ)',
    localeCode : 'kk-KZ',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Локализация демосы'
    },

    Button : {
        'Add column'          : 'Баған қосу',
        'Display hints'       : 'Кеңестерді көрсету',
        'Remove column'       : 'Бағанды жою',
        'Show all day events' : 'Күні бойы оқиғаларды көрсету',
        'My button'           : data => `Менің түймем ${data}`,
        Apply                 : 'Қолдану',
        Learn                 : 'Үйрену',
        DownloadTrial         : 'Сынақ нұсқасын жүктеу'
    },

    Column : {
        Company : 'Компания',
        Name    : 'Аты'
    },

    Checkbox : {
        'Auto apply'  : 'Автоматты қолдану',
        Automatically : 'Автоматты түрде',
        runHints      : 'Жұмыс кеңестерін іске қосу'
    },

    CodeEditor : {
        'Code editor'   : 'Код редакторы',
        'Download code' : 'Кодты жүктеу'
    },

    Combo : {
        Theme    : 'Тақырып',
        Language : 'Тіл',
        Size     : 'Өлшем'
    },

    EventColor : {
        Meeting : 'жасыл',
        Phone   : 'қызыл',
        Lunch   : 'көк',
        Workout : 'қызғылт сары'
    },

    EventType : {
        Meeting : 'Кездесу',
        Phone   : 'Телефон',
        Lunch   : 'Түскі ас',
        Workout : 'Жаттығу'
    },

    Shared : {
        'Full size'      : 'Толық өлшем',
        'Locale changed' : 'Локаль өзгертілді',
        'Phone size'     : 'Телефон өлшемі'
    },

    Tooltip : {
        infoButton       : 'Ақпаратты көрсету және тақырыпты немесе локальді ауыстыру үшін басыңыз',
        codeButton       : 'Кірістірілген код редакторын көрсету үшін басыңыз',
        hintCheck        : 'Мысалды жүктегенде кеңестерді автоматты түрде көрсету үшін белгілеңіз',
        fullscreenButton : 'Толық экран',
        openInCodePen    : 'CodePen-де ашу'
    },

    Popup : {
        UsedClasses : 'Бұл демода қолданылған сыныптар'
    },

    TextField : {
        Filter : 'Сүзгі'
    }
};

export default LocaleHelper.publishLocale(locale);
