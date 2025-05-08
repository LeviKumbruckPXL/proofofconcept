import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Cs.js';
import './shared.locale.Cs.js';

const locale = {

    localeName : 'Cs',
    localeDesc : 'Česky',
    localeCode : 'cs',
    localeRtl  : false,

    Column : {
        Completed          : 'Dokončeno',
        Duration           : 'Doba trvání',
        'In progress'      : 'Probíhá',
        Name               : 'Název',
        'Not started'      : 'Nezahájeno',
        'Staff/Resource'   : 'Personál/Zdroj',
        'Unassigned tasks' : 'Nepřiřazené úkoly'
    },

    Button : {
        Actions              : 'Akce',
        Agenda               : 'Program',
        Apr                  : 'Dub',
        April                : 'Duben',
        Aug                  : 'Srp',
        Cancel               : 'Zrušit',
        Create               : 'Vytvořit',
        Day                  : 'Den',
        'Day Agenda'         : 'Denní program',
        'Day resources'      : 'Denní zdroje',
        Dec                  : 'Pro',
        Delete               : 'Smazat',
        Dualdayview          : 'Dvojitý denní pohled',
        'Export to Excel'    : 'Exportovat do Excelu',
        Feb                  : 'Úno',
        February             : 'Únor',
        'Grouped by day'     : 'Seskupeno podle dne',
        'Grouped by station' : 'Seskupeno podle stanice',
        Jan                  : 'Led',
        January              : 'Leden',
        Jul                  : 'Čvc',
        July                 : 'Červenec',
        Jun                  : 'Čvn',
        June                 : 'Červen',
        List                 : 'Seznam',
        Mar                  : 'Bře',
        March                : 'Březen',
        May                  : 'Kvě',
        Month                : 'Měsíc',
        'Multi Days'         : 'Více dnů',
        Nov                  : 'Lis',
        Oct                  : 'Říj',
        October              : 'Říjen',
        Print                : 'Tisk',
        Reload               : 'Načíst znovu',
        'Reset database'     : 'Resetovat databázi',
        'Reset to default'   : 'Obnovit výchozí',
        Resourceview         : 'Pohled na zdroje',
        Save                 : 'Uložit',
        Sep                  : 'Zář',
        September            : 'Září',
        Timeline             : 'Časová osa',
        Today                : 'Dnes',
        'Two weeks'          : 'Dva týdny',
        Week                 : 'Týden',
        'Week Agenda'        : 'Týdenní program',
        Weekends             : 'Víkendy',
        Year                 : 'Rok',
        'Zoom to events'     : 'Přiblížit na události'
    },

    Checkbox : {
        'Custom styles'                   : 'Vlastní styly',
        'Fit events'                      : 'Přizpůsobit události',
        'Fit timeline to available space' : 'Přizpůsobit časovou osu dostupnému prostoru',
        'Full width'                      : 'Plná šířka',
        'Hide borders'                    : 'Skrýt okraje',
        'Hide empty hours'                : 'Skrýt prázdné hodiny',
        'Hide time axes'                  : 'Skrýt časové osy',
        'Hide unscheduled resources'      : 'Skrýt neplánované zdroje',
        'Hide weekends'                   : 'Skrýt víkendy',
        'On top'                          : 'Nahoře',
        'Show avatar'                     : 'Zobrazit avatar',
        'Show core hours in day'          : 'Zobrazit hlavní hodiny dne',
        'Show time'                       : 'Zobrazit čas',
        'Stack events vertically'         : 'Skládat události vertikálně',
        'Sync hour heights'               : 'Synchronizovat výšky hodin'
    },

    Slider : {
        'Hour height'    : 'Výška hodiny',
        'Resource width' : 'Šířka zdroje',
        Scale            : 'Měřítko'
    },

    Combo : {
        'Choose show' : 'Vyberte pořad',
        Equipment     : 'Vybavení',
        'Timezone:'   : 'Časové pásmo:'
    },

    Label : {
        Days             : 'Dny',
        Months           : 'Měsíce',
        'Resource width' : 'Šířka zdroje'
    },

    NumberField : {
        Every                      : 'Každý',
        'Max events per cell'      : 'Maximální počet událostí na buňku',
        'Scroll to hour'           : 'Přejít na hodinu',
        'Snap increment (minutes)' : 'Přírůstek přichycení (minuty)'
    },

    TextField : {
        'Filter resources'  : 'Filtrovat zdroje',
        Name                : 'Název',
        'Type to filter...' : 'Pište pro filtrování...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Události budou přizpůsobeny při navigaci, když je zaškrtnuto',
        'Fit events within scroll range'                                      : 'Přizpůsobit události v rozsahu posouvání',
        Friday                                                                : 'Pátek',
        Monday                                                                : 'Pondělí',
        'Print the currently active view'                                     : 'Tisknout aktuálně aktivní zobrazení',
        Saturday                                                              : 'Sobota',
        'Select admin mode to allow editing and rescheduling of performances' : 'Vyberte režim správce pro povolení úprav a přeplánování představení',
        Settings                                                              : 'Nastavení',
        'Show the weekends'                                                   : 'Zobrazit víkendy',
        Sunday                                                                : 'Neděle',
        Thursday                                                              : 'Čtvrtek',
        Tuesday                                                               : 'Úterý',
        Wednesday                                                             : 'Středa'
    },

    SlideToggle : {
        'Hide completed' : 'Skrýt dokončené'
    }
};

export default LocaleHelper.publishLocale(locale);
