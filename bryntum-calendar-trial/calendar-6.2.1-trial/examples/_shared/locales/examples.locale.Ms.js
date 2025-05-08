import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ms.js';
import './shared.locale.Ms.js';

const locale = {

    localeName : 'Ms',
    localeDesc : 'Melayu',
    localeCode : 'ms',
    localeRtl  : false,

    Column : {
        Completed          : 'Selesai',
        Duration           : 'Tempoh',
        'In progress'      : 'Sedang berlangsung',
        Name               : 'Nama',
        'Not started'      : 'Belum bermula',
        'Staff/Resource'   : 'Staf/Sumber',
        'Unassigned tasks' : 'Tugas yang tidak ditugaskan'
    },

    Button : {
        Actions              : 'Tindakan',
        Agenda               : 'Agenda',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Ogos',
        Cancel               : 'Batal',
        Create               : 'Cipta',
        Day                  : 'Hari',
        'Day Agenda'         : 'Agenda Hari',
        'Day resources'      : 'Sumber Hari',
        Dec                  : 'Dis',
        Delete               : 'Padam',
        Dualdayview          : 'Paparan Dua Hari',
        'Export to Excel'    : 'Eksport ke Excel',
        Feb                  : 'Feb',
        February             : 'Februari',
        'Grouped by day'     : 'Dikumpul mengikut hari',
        'Grouped by station' : 'Dikumpul mengikut stesen',
        Jan                  : 'Jan',
        January              : 'Januari',
        Jul                  : 'Jul',
        July                 : 'Julai',
        Jun                  : 'Jun',
        June                 : 'Jun',
        List                 : 'Senarai',
        Mar                  : 'Mac',
        March                : 'Mac',
        May                  : 'Mei',
        Month                : 'Bulan',
        'Multi Days'         : 'Pelbagai Hari',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktober',
        Print                : 'Cetak',
        Reload               : 'Muat Semula',
        'Reset database'     : 'Tetapkan semula pangkalan data',
        'Reset to default'   : 'Tetapkan semula kepada asal',
        Resourceview         : 'Paparan Sumber',
        Save                 : 'Simpan',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Garis Masa',
        Today                : 'Hari Ini',
        'Two weeks'          : 'Dua minggu',
        Week                 : 'Minggu',
        'Week Agenda'        : 'Agenda Minggu',
        Weekends             : 'Hujung Minggu',
        Year                 : 'Tahun',
        'Zoom to events'     : 'Zum ke acara'
    },

    Checkbox : {
        'Custom styles'                   : 'Gaya tersuai',
        'Fit events'                      : 'Sesuaikan acara',
        'Fit timeline to available space' : 'Sesuaikan garis masa dengan ruang yang ada',
        'Full width'                      : 'Lebar penuh',
        'Hide borders'                    : 'Sembunyikan sempadan',
        'Hide empty hours'                : 'Sembunyikan jam kosong',
        'Hide time axes'                  : 'Sembunyikan paksi masa',
        'Hide unscheduled resources'      : 'Sembunyikan sumber yang tidak dijadualkan',
        'Hide weekends'                   : 'Sembunyikan hujung minggu',
        'On top'                          : 'Di atas',
        'Show avatar'                     : 'Tunjukkan avatar',
        'Show core hours in day'          : 'Tunjukkan jam teras dalam sehari',
        'Show time'                       : 'Tunjukkan masa',
        'Stack events vertically'         : 'Susun acara secara menegak',
        'Sync hour heights'               : 'Selaraskan ketinggian jam'
    },

    Slider : {
        'Hour height'    : 'Ketinggian jam',
        'Resource width' : 'Lebar Sumber',
        Scale            : 'Skala'
    },

    Combo : {
        'Choose show' : 'Pilih rancangan',
        Equipment     : 'Peralatan',
        'Timezone:'   : 'Zon waktu:'
    },

    Label : {
        Days             : 'Hari',
        Months           : 'Bulan',
        'Resource width' : 'Lebar sumber'
    },

    NumberField : {
        Every                      : 'Setiap',
        'Max events per cell'      : 'Maksimum acara setiap sel',
        'Scroll to hour'           : 'Tatal ke jam',
        'Snap increment (minutes)' : 'Peningkatan tangkapan (minit)'
    },

    TextField : {
        'Filter resources'  : 'Tapis sumber',
        Name                : 'Nama',
        'Type to filter...' : 'Taip untuk menapis...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Acara akan disesuaikan semasa navigasi apabila ditandakan',
        'Fit events within scroll range'                                      : 'Sesuaikan acara dalam julat tatal',
        Friday                                                                : 'Jumaat',
        Monday                                                                : 'Isnin',
        'Print the currently active view'                                     : 'Cetak pandangan aktif semasa',
        Saturday                                                              : 'Sabtu',
        'Select admin mode to allow editing and rescheduling of performances' : 'Pilih mod admin untuk membenarkan penyuntingan dan penjadualan semula persembahan',
        Settings                                                              : 'Tetapan',
        'Show the weekends'                                                   : 'Tunjukkan hujung minggu',
        Sunday                                                                : 'Ahad',
        Thursday                                                              : 'Khamis',
        Tuesday                                                               : 'Selasa',
        Wednesday                                                             : 'Rabu'
    },

    SlideToggle : {
        'Hide completed' : 'Sembunyikan selesai'
    }
};

export default LocaleHelper.publishLocale(locale);
