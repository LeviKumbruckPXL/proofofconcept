import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Hu.js';
import './shared.locale.Hu.js';

const locale = {

    localeName : 'Hu',
    localeDesc : 'Magyar',
    localeCode : 'hu',
    localeRtl  : false,

    Column : {
        Completed          : 'Befejezve',
        Duration           : 'Időtartam',
        'In progress'      : 'Folyamatban',
        Name               : 'Név',
        'Not started'      : 'Nem kezdődött el',
        'Staff/Resource'   : 'Személyzet/Erőforrás',
        'Unassigned tasks' : 'Hozzá nem rendelt feladatok'
    },

    Button : {
        Actions              : 'Műveletek',
        Agenda               : 'Napirend',
        Apr                  : 'Ápr',
        April                : 'Április',
        Aug                  : 'Aug',
        Cancel               : 'Mégse',
        Create               : 'Létrehozás',
        Day                  : 'Nap',
        'Day Agenda'         : 'Napi napirend',
        'Day resources'      : 'Napi erőforrások',
        Dec                  : 'Dec',
        Delete               : 'Törlés',
        Dualdayview          : 'Kétnapos nézet',
        'Export to Excel'    : 'Exportálás Excelbe',
        Feb                  : 'Febr',
        February             : 'Február',
        'Grouped by day'     : 'Csoportosítva nap szerint',
        'Grouped by station' : 'Csoportosítva állomás szerint',
        Jan                  : 'Jan',
        January              : 'Január',
        Jul                  : 'Júl',
        July                 : 'Július',
        Jun                  : 'Jún',
        June                 : 'Június',
        List                 : 'Lista',
        Mar                  : 'Márc',
        March                : 'Március',
        May                  : 'Máj',
        Month                : 'Hónap',
        'Multi Days'         : 'Több nap',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Október',
        Print                : 'Nyomtatás',
        Reload               : 'Újratöltés',
        'Reset database'     : 'Adatbázis visszaállítása',
        'Reset to default'   : 'Alapértelmezettre állítás',
        Resourceview         : 'Erőforrás nézet',
        Save                 : 'Mentés',
        Sep                  : 'Szept',
        September            : 'Szeptember',
        Timeline             : 'Idővonal',
        Today                : 'Ma',
        'Two weeks'          : 'Két hét',
        Week                 : 'Hét',
        'Week Agenda'        : 'Heti napirend',
        Weekends             : 'Hétvégék',
        Year                 : 'Év',
        'Zoom to events'     : 'Nagyítás eseményekre'
    },

    Checkbox : {
        'Custom styles'                   : 'Egyéni stílusok',
        'Fit events'                      : 'Események igazítása',
        'Fit timeline to available space' : 'Idővonal igazítása a rendelkezésre álló helyhez',
        'Full width'                      : 'Teljes szélesség',
        'Hide borders'                    : 'Határok elrejtése',
        'Hide empty hours'                : 'Üres órák elrejtése',
        'Hide time axes'                  : 'Időtengelyek elrejtése',
        'Hide unscheduled resources'      : 'Ütemezetlen erőforrások elrejtése',
        'Hide weekends'                   : 'Hétvégék elrejtése',
        'On top'                          : 'Felül',
        'Show avatar'                     : 'Avatar megjelenítése',
        'Show core hours in day'          : 'Alapórák megjelenítése a napban',
        'Show time'                       : 'Idő megjelenítése',
        'Stack events vertically'         : 'Események függőleges elrendezése',
        'Sync hour heights'               : 'Óramagasságok szinkronizálása'
    },

    Slider : {
        'Hour height'    : 'Óra magasság',
        'Resource width' : 'Erőforrás szélesség',
        Scale            : 'Skála'
    },

    Combo : {
        'Choose show' : 'Válasszon műsort',
        Equipment     : 'Felszerelés',
        'Timezone:'   : 'Időzóna:'
    },

    Label : {
        Days             : 'Napok',
        Months           : 'Hónapok',
        'Resource width' : 'Erőforrás szélessége'
    },

    NumberField : {
        Every                      : 'Minden',
        'Max events per cell'      : 'Maximális események cellánként',
        'Scroll to hour'           : 'Görgetés órához',
        'Snap increment (minutes)' : 'Rögzítés növelése (percek)'
    },

    TextField : {
        'Filter resources'  : 'Erőforrások szűrése',
        Name                : 'Név',
        'Type to filter...' : 'Írjon a szűréshez...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Az események illesztve lesznek navigáláskor, ha be van jelölve',
        'Fit events within scroll range'                                      : 'Illessze az eseményeket a görgetési tartományba',
        Friday                                                                : 'Péntek',
        Monday                                                                : 'Hétfő',
        'Print the currently active view'                                     : 'Nyomtassa ki az aktuálisan aktív nézetet',
        Saturday                                                              : 'Szombat',
        'Select admin mode to allow editing and rescheduling of performances' : 'Válassza az adminisztrátori módot az előadások szerkesztésének és újratervezésének engedélyezéséhez',
        Settings                                                              : 'Beállítások',
        'Show the weekends'                                                   : 'Mutassa a hétvégéket',
        Sunday                                                                : 'Vasárnap',
        Thursday                                                              : 'Csütörtök',
        Tuesday                                                               : 'Kedd',
        Wednesday                                                             : 'Szerda'
    },

    SlideToggle : {
        'Hide completed' : 'Befejezettek elrejtése'
    }
};

export default LocaleHelper.publishLocale(locale);
