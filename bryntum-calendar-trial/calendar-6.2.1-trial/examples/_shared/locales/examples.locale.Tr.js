import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Tr.js';
import './shared.locale.Tr.js';

const locale = {

    localeName : 'Tr',
    localeDesc : 'Türkçe',
    localeCode : 'tr',
    localeRtl  : false,

    Column : {
        Completed          : 'Tamamlandı',
        Duration           : 'Süre',
        'In progress'      : 'Devam ediyor',
        Name               : 'Ad',
        'Not started'      : 'Başlamadı',
        'Staff/Resource'   : 'Personel/Kaynak',
        'Unassigned tasks' : 'Atanmamış görevler'
    },

    Button : {
        Actions              : 'Eylemler',
        Agenda               : 'Gündem',
        Apr                  : 'Nis',
        April                : 'Nisan',
        Aug                  : 'Ağu',
        Cancel               : 'İptal',
        Create               : 'Oluştur',
        Day                  : 'Gün',
        'Day Agenda'         : 'Gün Gündemi',
        'Day resources'      : 'Gün kaynakları',
        Dec                  : 'Ara',
        Delete               : 'Sil',
        Dualdayview          : 'Çift gün görünümü',
        'Export to Excel'    : "Excel'e Aktar",
        Feb                  : 'Şub',
        February             : 'Şubat',
        'Grouped by day'     : 'Güne göre gruplandırılmış',
        'Grouped by station' : 'İstasyona göre gruplandırılmış',
        Jan                  : 'Oca',
        January              : 'Ocak',
        Jul                  : 'Tem',
        July                 : 'Temmuz',
        Jun                  : 'Haz',
        June                 : 'Haziran',
        List                 : 'Liste',
        Mar                  : 'Mar',
        March                : 'Mart',
        May                  : 'May',
        Month                : 'Ay',
        'Multi Days'         : 'Çoklu Günler',
        Nov                  : 'Kas',
        Oct                  : 'Eki',
        October              : 'Ekim',
        Print                : 'Yazdır',
        Reload               : 'Yeniden Yükle',
        'Reset database'     : 'Veritabanını sıfırla',
        'Reset to default'   : 'Varsayılana sıfırla',
        Resourceview         : 'Kaynak görünümü',
        Save                 : 'Kaydet',
        Sep                  : 'Eyl',
        September            : 'Eylül',
        Timeline             : 'Zaman Çizelgesi',
        Today                : 'Bugün',
        'Two weeks'          : 'İki hafta',
        Week                 : 'Hafta',
        'Week Agenda'        : 'Hafta Gündemi',
        Weekends             : 'Hafta Sonları',
        Year                 : 'Yıl',
        'Zoom to events'     : 'Etkinliklere Yakınlaştır'
    },

    Checkbox : {
        'Custom styles'                   : 'Özel stiller',
        'Fit events'                      : 'Etkinlikleri sığdır',
        'Fit timeline to available space' : 'Zaman çizelgesini mevcut alana sığdır',
        'Full width'                      : 'Tam genişlik',
        'Hide borders'                    : 'Kenarlıkları gizle',
        'Hide empty hours'                : 'Boş saatleri gizle',
        'Hide time axes'                  : 'Zaman eksenlerini gizle',
        'Hide unscheduled resources'      : 'Planlanmamış kaynakları gizle',
        'Hide weekends'                   : 'Hafta sonlarını gizle',
        'On top'                          : 'Üstte',
        'Show avatar'                     : 'Avatarı göster',
        'Show core hours in day'          : 'Günün çekirdek saatlerini göster',
        'Show time'                       : 'Zamanı göster',
        'Stack events vertically'         : 'Etkinlikleri dikey olarak yığınla',
        'Sync hour heights'               : 'Saat yüksekliklerini senkronize et'
    },

    Slider : {
        'Hour height'    : 'Saat yüksekliği',
        'Resource width' : 'Kaynak genişliği',
        Scale            : 'Ölçek'
    },

    Combo : {
        'Choose show' : 'Gösteri seç',
        Equipment     : 'Ekipman',
        'Timezone:'   : 'Saat dilimi:'
    },

    Label : {
        Days             : 'Günler',
        Months           : 'Aylar',
        'Resource width' : 'Kaynak genişliği'
    },

    NumberField : {
        Every                      : 'Her',
        'Max events per cell'      : 'Hücre başına maksimum etkinlik',
        'Scroll to hour'           : 'Saate kaydır',
        'Snap increment (minutes)' : 'Artış aralığı (dakika)'
    },

    TextField : {
        'Filter resources'  : 'Kaynakları filtrele',
        Name                : 'Ad',
        'Type to filter...' : 'Filtrelemek için yazın...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Etkinlikler, işaretlendiğinde gezinme sırasında sığdırılacak',
        'Fit events within scroll range'                                      : 'Etkinlikleri kaydırma aralığına sığdır',
        Friday                                                                : 'Cuma',
        Monday                                                                : 'Pazartesi',
        'Print the currently active view'                                     : 'Şu anda aktif olan görünümü yazdır',
        Saturday                                                              : 'Cumartesi',
        'Select admin mode to allow editing and rescheduling of performances' : 'Performansların düzenlenmesine ve yeniden planlanmasına izin vermek için yönetici modunu seçin',
        Settings                                                              : 'Ayarlar',
        'Show the weekends'                                                   : 'Hafta sonlarını göster',
        Sunday                                                                : 'Pazar',
        Thursday                                                              : 'Perşembe',
        Tuesday                                                               : 'Salı',
        Wednesday                                                             : 'Çarşamba'
    },

    SlideToggle : {
        'Hide completed' : 'Tamamlananları gizle'
    }
};

export default LocaleHelper.publishLocale(locale);
