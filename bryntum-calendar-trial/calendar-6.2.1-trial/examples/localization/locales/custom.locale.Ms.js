import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ms.js';

const locale = {

    localeName : 'Ms',
    localeDesc : 'Melayu',
    localeCode : 'ms',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demo Penyetempatan'
    },

    Button : {
        'Add column'          : 'Tambah lajur',
        'Display hints'       : 'Papar petunjuk',
        'Remove column'       : 'Buang lajur',
        'Show all day events' : 'Tunjukkan acara sepanjang hari',
        'My button'           : data => `Butang saya ${data}`,
        Apply                 : 'Guna',
        Learn                 : 'Belajar',
        DownloadTrial         : 'Muat Turun Percubaan'
    },

    Column : {
        Company : 'Syarikat',
        Name    : 'Nama'
    },

    Checkbox : {
        'Auto apply'  : 'Guna automatik',
        Automatically : 'Secara automatik',
        runHints      : 'Jalankan aliran petunjuk semasa permulaan'
    },

    CodeEditor : {
        'Code editor'   : 'Penyunting kod',
        'Download code' : 'Muat turun kod'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Bahasa',
        Size     : 'Saiz'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Mesyuarat',
        Phone   : 'Telefon',
        Lunch   : 'Makan tengah hari',
        Workout : 'Senaman'
    },

    Shared : {
        'Full size'      : 'Saiz penuh',
        'Locale changed' : 'Lokasi ditukar',
        'Phone size'     : 'Saiz telefon'
    },

    Tooltip : {
        infoButton       : 'Klik untuk menunjukkan info dan menukar tema atau lokasi',
        codeButton       : 'Klik untuk menunjukkan editor kod terbina dalam',
        hintCheck        : 'Tandakan untuk memaparkan petunjuk secara automatik apabila memuatkan contoh',
        fullscreenButton : 'Skrin penuh',
        openInCodePen    : 'Buka di CodePen'
    },

    Popup : {
        UsedClasses : 'Kelas yang digunakan dalam demo ini'
    },

    TextField : {
        Filter : 'Tapis'
    }
};

export default LocaleHelper.publishLocale(locale);
