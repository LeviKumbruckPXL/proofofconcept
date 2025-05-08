import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Id.js';

const locale = {

    localeName : 'Id',
    localeDesc : 'Bahasa Indonesia',
    localeCode : 'id',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demo Lokalisasi'
    },

    Button : {
        'Add column'          : 'Tambahkan kolom',
        'Display hints'       : 'Tampilkan petunjuk',
        'Remove column'       : 'Hapus kolom',
        'Show all day events' : 'Tampilkan acara sepanjang hari',
        'My button'           : data => `Tombol saya ${data}`,
        Apply                 : 'Terapkan',
        Learn                 : 'Belajar',
        DownloadTrial         : 'Unduh Uji Coba'
    },

    Column : {
        Company : 'Perusahaan',
        Name    : 'Nama'
    },

    Checkbox : {
        'Auto apply'  : 'Terapkan otomatis',
        Automatically : 'Otomatis',
        runHints      : 'Jalankan alur petunjuk saat memulai'
    },

    CodeEditor : {
        'Code editor'   : 'Editor kode',
        'Download code' : 'Unduh kode'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Bahasa',
        Size     : 'Ukuran'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Rapat',
        Phone   : 'Telepon',
        Lunch   : 'Makan siang',
        Workout : 'Latihan'
    },

    Shared : {
        'Full size'      : 'Ukuran penuh',
        'Locale changed' : 'Bahasa diubah',
        'Phone size'     : 'Ukuran telepon'
    },

    Tooltip : {
        infoButton       : 'Klik untuk menampilkan info dan mengganti tema atau bahasa',
        codeButton       : 'Klik untuk menampilkan editor kode bawaan',
        hintCheck        : 'Centang untuk menampilkan petunjuk secara otomatis saat memuat contoh',
        fullscreenButton : 'Layar penuh',
        openInCodePen    : 'Buka di CodePen'
    },

    Popup : {
        UsedClasses : 'Kelas yang digunakan dalam demo ini'
    },

    TextField : {
        Filter : 'Saring'
    }
};

export default LocaleHelper.publishLocale(locale);
