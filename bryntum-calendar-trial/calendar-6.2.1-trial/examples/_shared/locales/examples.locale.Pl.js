import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Pl.js';
import './shared.locale.Pl.js';

const locale = {

    localeName : 'Pl',
    localeDesc : 'Polski',
    localeCode : 'pl',
    localeRtl  : false,

    Column : {
        Completed          : 'Zakończone',
        Duration           : 'Czas trwania',
        'In progress'      : 'W toku',
        Name               : 'Nazwa',
        'Not started'      : 'Nie rozpoczęte',
        'Staff/Resource'   : 'Personel/Zasób',
        'Unassigned tasks' : 'Nieprzypisane zadania'
    },

    Button : {
        Actions              : 'Akcje',
        Agenda               : 'Agenda',
        Apr                  : 'Kwi',
        April                : 'Kwiecień',
        Aug                  : 'Sie',
        Cancel               : 'Anuluj',
        Create               : 'Utwórz',
        Day                  : 'Dzień',
        'Day Agenda'         : 'Agenda dnia',
        'Day resources'      : 'Zasoby dnia',
        Dec                  : 'Gru',
        Delete               : 'Usuń',
        Dualdayview          : 'Widok podwójny dnia',
        'Export to Excel'    : 'Eksportuj do Excela',
        Feb                  : 'Lut',
        February             : 'Luty',
        'Grouped by day'     : 'Grupowane według dnia',
        'Grouped by station' : 'Grupowane według stacji',
        Jan                  : 'Sty',
        January              : 'Styczeń',
        Jul                  : 'Lip',
        July                 : 'Lipiec',
        Jun                  : 'Cze',
        June                 : 'Czerwiec',
        List                 : 'Lista',
        Mar                  : 'Mar',
        March                : 'Marzec',
        May                  : 'Maj',
        Month                : 'Miesiąc',
        'Multi Days'         : 'Wiele dni',
        Nov                  : 'Lis',
        Oct                  : 'Paź',
        October              : 'Październik',
        Print                : 'Drukuj',
        Reload               : 'Przeładuj',
        'Reset database'     : 'Zresetuj bazę danych',
        'Reset to default'   : 'Przywróć domyślne',
        Resourceview         : 'Widok zasobów',
        Save                 : 'Zapisz',
        Sep                  : 'Wrz',
        September            : 'Wrzesień',
        Timeline             : 'Oś czasu',
        Today                : 'Dzisiaj',
        'Two weeks'          : 'Dwa tygodnie',
        Week                 : 'Tydzień',
        'Week Agenda'        : 'Agenda tygodnia',
        Weekends             : 'Weekend',
        Year                 : 'Rok',
        'Zoom to events'     : 'Powiększ do wydarzeń'
    },

    Checkbox : {
        'Custom styles'                   : 'Niestandardowe style',
        'Fit events'                      : 'Dopasuj wydarzenia',
        'Fit timeline to available space' : 'Dopasuj oś czasu do dostępnej przestrzeni',
        'Full width'                      : 'Pełna szerokość',
        'Hide borders'                    : 'Ukryj granice',
        'Hide empty hours'                : 'Ukryj puste godziny',
        'Hide time axes'                  : 'Ukryj osie czasu',
        'Hide unscheduled resources'      : 'Ukryj niezaplanowane zasoby',
        'Hide weekends'                   : 'Ukryj weekendy',
        'On top'                          : 'Na górze',
        'Show avatar'                     : 'Pokaż awatar',
        'Show core hours in day'          : 'Pokaż główne godziny w ciągu dnia',
        'Show time'                       : 'Pokaż czas',
        'Stack events vertically'         : 'Układaj wydarzenia pionowo',
        'Sync hour heights'               : 'Synchronizuj wysokości godzin'
    },

    Slider : {
        'Hour height'    : 'Wysokość godziny',
        'Resource width' : 'Szerokość zasobu',
        Scale            : 'Skala'
    },

    Combo : {
        'Choose show' : 'Wybierz pokaz',
        Equipment     : 'Sprzęt',
        'Timezone:'   : 'Strefa czasowa:'
    },

    Label : {
        Days             : 'Dni',
        Months           : 'Miesiące',
        'Resource width' : 'Szerokość zasobu'
    },

    NumberField : {
        Every                      : 'Każdy',
        'Max events per cell'      : 'Maksymalna liczba zdarzeń na komórkę',
        'Scroll to hour'           : 'Przewiń do godziny',
        'Snap increment (minutes)' : 'Przyrost przeskoku (minuty)'
    },

    TextField : {
        'Filter resources'  : 'Filtruj zasoby',
        Name                : 'Nazwa',
        'Type to filter...' : 'Wpisz, aby filtrować...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Wydarzenia zostaną dopasowane po nawigacji, gdy zaznaczone',
        'Fit events within scroll range'                                      : 'Dopasuj wydarzenia w zakresie przewijania',
        Friday                                                                : 'Piątek',
        Monday                                                                : 'Poniedziałek',
        'Print the currently active view'                                     : 'Drukuj aktualnie aktywny widok',
        Saturday                                                              : 'Sobota',
        'Select admin mode to allow editing and rescheduling of performances' : 'Wybierz tryb administratora, aby umożliwić edycję i zmianę harmonogramu występów',
        Settings                                                              : 'Ustawienia',
        'Show the weekends'                                                   : 'Pokaż weekendy',
        Sunday                                                                : 'Niedziela',
        Thursday                                                              : 'Czwartek',
        Tuesday                                                               : 'Wtorek',
        Wednesday                                                             : 'Środa'
    },

    SlideToggle : {
        'Hide completed' : 'Ukryj zakończone'
    }
};

export default LocaleHelper.publishLocale(locale);
