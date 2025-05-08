import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Id.js';
import './shared.locale.Id.js';

const locale = {

    localeName : 'Id',
    localeDesc : 'Bahasa Indonesia',
    localeCode : 'id',
    localeRtl  : false,

    Column : {
        Completed          : 'Selesai',
        Duration           : 'Durasi',
        'In progress'      : 'Sedang berlangsung',
        Name               : 'Nama',
        'Not started'      : 'Belum dimulai',
        'Staff/Resource'   : 'Staf/Sumber Daya',
        'Unassigned tasks' : 'Tugas yang belum ditugaskan'
    },

    Button : {
        Actions              : 'Aksi',
        Agenda               : 'Agenda',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Agu',
        Cancel               : 'Batal',
        Create               : 'Buat',
        Day                  : 'Hari',
        'Day Agenda'         : 'Agenda Hari',
        'Day resources'      : 'Sumber Daya Hari',
        Dec                  : 'Des',
        Delete               : 'Hapus',
        Dualdayview          : 'Tampilan Dua Hari',
        'Export to Excel'    : 'Ekspor ke Excel',
        Feb                  : 'Feb',
        February             : 'Februari',
        'Grouped by day'     : 'Dikelompokkan berdasarkan hari',
        'Grouped by station' : 'Dikelompokkan berdasarkan stasiun',
        Jan                  : 'Jan',
        January              : 'Januari',
        Jul                  : 'Jul',
        July                 : 'Juli',
        Jun                  : 'Jun',
        June                 : 'Juni',
        List                 : 'Daftar',
        Mar                  : 'Mar',
        March                : 'Maret',
        May                  : 'Mei',
        Month                : 'Bulan',
        'Multi Days'         : 'Beberapa Hari',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktober',
        Print                : 'Cetak',
        Reload               : 'Muat Ulang',
        'Reset database'     : 'Reset basis data',
        'Reset to default'   : 'Reset ke default',
        Resourceview         : 'Tampilan Sumber Daya',
        Save                 : 'Simpan',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Linimasa',
        Today                : 'Hari Ini',
        'Two weeks'          : 'Dua minggu',
        Week                 : 'Minggu',
        'Week Agenda'        : 'Agenda Minggu',
        Weekends             : 'Akhir Pekan',
        Year                 : 'Tahun',
        'Zoom to events'     : 'Perbesar ke acara'
    },

    Checkbox : {
        'Custom styles'                   : 'Gaya kustom',
        'Fit events'                      : 'Sesuaikan acara',
        'Fit timeline to available space' : 'Sesuaikan garis waktu dengan ruang yang tersedia',
        'Full width'                      : 'Lebar penuh',
        'Hide borders'                    : 'Sembunyikan batas',
        'Hide empty hours'                : 'Sembunyikan jam kosong',
        'Hide time axes'                  : 'Sembunyikan sumbu waktu',
        'Hide unscheduled resources'      : 'Sembunyikan sumber daya yang tidak terjadwal',
        'Hide weekends'                   : 'Sembunyikan akhir pekan',
        'On top'                          : 'Di atas',
        'Show avatar'                     : 'Tampilkan avatar',
        'Show core hours in day'          : 'Tampilkan jam inti dalam sehari',
        'Show time'                       : 'Tampilkan waktu',
        'Stack events vertically'         : 'Tumpuk acara secara vertikal',
        'Sync hour heights'               : 'Sinkronkan tinggi jam'
    },

    Slider : {
        'Hour height'    : 'Tinggi jam',
        'Resource width' : 'Lebar Sumber Daya',
        Scale            : 'Skala'
    },

    Combo : {
        'Choose show' : 'Pilih acara',
        Equipment     : 'Peralatan',
        'Timezone:'   : 'Zona waktu:'
    },

    Label : {
        Days             : 'Hari',
        Months           : 'Bulan',
        'Resource width' : 'Lebar sumber daya'
    },

    NumberField : {
        Every                      : 'Setiap',
        'Max events per cell'      : 'Maksimal acara per sel',
        'Scroll to hour'           : 'Gulir ke jam',
        'Snap increment (minutes)' : 'Peningkatan jepret (menit)'
    },

    TextField : {
        'Filter resources'  : 'Saring sumber daya',
        Name                : 'Nama',
        'Type to filter...' : 'Ketik untuk memfilter...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Acara akan disesuaikan saat navigasi ketika dicentang',
        'Fit events within scroll range'                                      : 'Sesuaikan acara dalam jangkauan gulir',
        Friday                                                                : 'Jumat',
        Monday                                                                : 'Senin',
        'Print the currently active view'                                     : 'Cetak tampilan yang sedang aktif',
        Saturday                                                              : 'Sabtu',
        'Select admin mode to allow editing and rescheduling of performances' : 'Pilih mode admin untuk memungkinkan pengeditan dan penjadwalan ulang pertunjukan',
        Settings                                                              : 'Pengaturan',
        'Show the weekends'                                                   : 'Tampilkan akhir pekan',
        Sunday                                                                : 'Minggu',
        Thursday                                                              : 'Kamis',
        Tuesday                                                               : 'Selasa',
        Wednesday                                                             : 'Rabu'
    },

    SlideToggle : {
        'Hide completed' : 'Sembunyikan yang selesai'
    }
};

export default LocaleHelper.publishLocale(locale);
