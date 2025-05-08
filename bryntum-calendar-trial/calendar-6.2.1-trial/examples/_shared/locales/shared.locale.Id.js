import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Id',
    localeDesc : 'Bahasa Indonesia',
    localeCode : 'id',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Tampilkan petunjuk',
        Apply           : 'Terapkan',
        Learn           : 'Belajar',
        DownloadTrial   : 'Unduh Uji Coba'
    },

    Checkbox : {
        Automatically : 'Otomatis',
        runHints      : 'Jalankan alur petunjuk saat memulai'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Bahasa',
        Size     : 'Ukuran'
    },

    Popup : {
        UsedClasses : 'Kelas yang digunakan dalam demo ini'
    },

    Shared : {
        'Locale changed' : 'Bahasa diubah'
    },

    TextField : {
        Filter : 'Saring'
    },

    Tooltip : {
        infoButton       : 'Klik untuk menampilkan info dan mengganti tema atau bahasa',
        codeButton       : 'Klik untuk menampilkan editor kode bawaan',
        hintCheck        : 'Centang untuk menampilkan petunjuk secara otomatis saat memuat contoh',
        fullscreenButton : 'Layar penuh',
        openInCodePen    : 'Buka di CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
