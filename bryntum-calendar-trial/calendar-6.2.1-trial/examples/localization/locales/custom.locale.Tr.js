import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Tr.js';

const locale = {

    localeName : 'Tr',
    localeDesc : 'Türkçe',
    localeCode : 'tr',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Yerelleştirme demosu'
    },

    Button : {
        'Add column'          : 'Sütun ekle',
        'Display hints'       : 'İpuçlarını göster',
        'Remove column'       : 'Sütun kaldır',
        'Show all day events' : 'Tüm gün etkinliklerini göster',
        'My button'           : data => `Benim düğmem ${data}`,
        Apply                 : 'Uygula',
        Learn                 : 'Öğren',
        DownloadTrial         : 'Deneme Sürümünü İndir'
    },

    Column : {
        Company : 'Şirket',
        Name    : 'İsim'
    },

    Checkbox : {
        'Auto apply'  : 'Otomatik uygula',
        Automatically : 'Otomatik olarak',
        runHints      : 'Başlangıçta ipucu akışını çalıştır'
    },

    CodeEditor : {
        'Code editor'   : 'Kod düzenleyici',
        'Download code' : 'Kodu indir'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Dil',
        Size     : 'Boyut'
    },

    EventColor : {
        Meeting : 'yeşil',
        Phone   : 'kırmızı',
        Lunch   : 'mavi',
        Workout : 'turuncu'
    },

    EventType : {
        Meeting : 'Toplantı',
        Phone   : 'Telefon',
        Lunch   : 'Öğle yemeği',
        Workout : 'Egzersiz'
    },

    Shared : {
        'Full size'      : 'Tam boyut',
        'Locale changed' : 'Yerel ayar değiştirildi',
        'Phone size'     : 'Telefon boyutu'
    },

    Tooltip : {
        infoButton       : 'Bilgiyi göstermek ve temayı veya yerel ayarı değiştirmek için tıklayın',
        codeButton       : 'Yerleşik kod düzenleyiciyi göstermek için tıklayın',
        hintCheck        : 'Örneği yüklerken ipuçlarını otomatik olarak göstermek için işaretleyin',
        fullscreenButton : 'Tam ekran',
        openInCodePen    : "CodePen'de Aç"
    },

    Popup : {
        UsedClasses : 'Bu demoda kullanılan sınıflar'
    },

    TextField : {
        Filter : 'Filtre'
    }
};

export default LocaleHelper.publishLocale(locale);
