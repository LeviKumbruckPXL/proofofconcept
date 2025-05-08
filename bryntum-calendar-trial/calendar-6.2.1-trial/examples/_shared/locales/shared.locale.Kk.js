import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Kk',
    localeDesc : 'Қазақ тілі (KZ)',
    localeCode : 'kk-KZ',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Кеңестерді көрсету',
        Apply           : 'Қолдану',
        Learn           : 'Үйрену',
        DownloadTrial   : 'Сынақ нұсқасын жүктеу'
    },

    Checkbox : {
        Automatically : 'Автоматты түрде',
        runHints      : 'Жұмыс кеңестерін іске қосу'
    },

    Combo : {
        Theme    : 'Тақырып',
        Language : 'Тіл',
        Size     : 'Өлшем'
    },

    Popup : {
        UsedClasses : 'Бұл демода қолданылған сыныптар'
    },

    Shared : {
        'Locale changed' : 'Локаль өзгертілді'
    },

    TextField : {
        Filter : 'Сүзгі'
    },

    Tooltip : {
        infoButton       : 'Ақпаратты көрсету және тақырыпты немесе локальді ауыстыру үшін басыңыз',
        codeButton       : 'Кірістірілген код редакторын көрсету үшін басыңыз',
        hintCheck        : 'Мысалды жүктегенде кеңестерді автоматты түрде көрсету үшін белгілеңіз',
        fullscreenButton : 'Толық экран',
        openInCodePen    : 'CodePen-де ашу'
    }
};

export default LocaleHelper.publishLocale(locale);
