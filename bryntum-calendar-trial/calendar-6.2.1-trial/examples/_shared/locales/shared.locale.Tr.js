import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Tr',
    localeDesc : 'Türkçe',
    localeCode : 'tr',
    localeRtl  : false,

    Button : {
        'Display hints' : 'İpuçlarını göster',
        Apply           : 'Uygula',
        Learn           : 'Öğren',
        DownloadTrial   : 'Deneme Sürümünü İndir'
    },

    Checkbox : {
        Automatically : 'Otomatik olarak',
        runHints      : 'Başlangıçta ipucu akışını çalıştır'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Dil',
        Size     : 'Boyut'
    },

    Popup : {
        UsedClasses : 'Bu demoda kullanılan sınıflar'
    },

    Shared : {
        'Locale changed' : 'Yerel ayar değiştirildi'
    },

    TextField : {
        Filter : 'Filtre'
    },

    Tooltip : {
        infoButton       : 'Bilgiyi göstermek ve temayı veya yerel ayarı değiştirmek için tıklayın',
        codeButton       : 'Yerleşik kod düzenleyiciyi göstermek için tıklayın',
        hintCheck        : 'Örneği yüklerken ipuçlarını otomatik olarak göstermek için işaretleyin',
        fullscreenButton : 'Tam ekran',
        openInCodePen    : "CodePen'de Aç"
    }
};

export default LocaleHelper.publishLocale(locale);
