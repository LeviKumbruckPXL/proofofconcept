import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/De.js';
import './shared.locale.De.js';

const locale = {

    localeName : 'De',
    localeDesc : 'Deutsch',
    localeCode : 'de-DE',
    localeRtl  : false,

    Column : {
        Completed          : 'Abgeschlossen',
        Duration           : 'Dauer',
        'In progress'      : 'In Bearbeitung',
        Name               : 'Name',
        'Not started'      : 'Nicht begonnen',
        'Staff/Resource'   : 'Mitarbeiter/Ressource',
        'Unassigned tasks' : 'Nicht zugewiesene Aufgaben'
    },

    Button : {
        Actions              : 'Aktionen',
        Agenda               : 'Agenda',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Aug',
        Cancel               : 'Abbrechen',
        Create               : 'Erstellen',
        Day                  : 'Tag',
        'Day Agenda'         : 'Tagesordnung',
        'Day resources'      : 'Tagesressourcen',
        Dec                  : 'Dez',
        Delete               : 'Löschen',
        Dualdayview          : 'Doppeltagesansicht',
        'Export to Excel'    : 'Export nach Excel',
        Feb                  : 'Feb',
        February             : 'Februar',
        'Grouped by day'     : 'Nach Tag gruppiert',
        'Grouped by station' : 'Nach Station gruppiert',
        Jan                  : 'Jan',
        January              : 'Januar',
        Jul                  : 'Jul',
        July                 : 'Juli',
        Jun                  : 'Jun',
        June                 : 'Juni',
        List                 : 'Liste',
        Mar                  : 'Mär',
        March                : 'März',
        May                  : 'Mai',
        Month                : 'Monat',
        'Multi Days'         : 'Mehrere Tage',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktober',
        Print                : 'Drucken',
        Reload               : 'Neu laden',
        'Reset database'     : 'Datenbank zurücksetzen',
        'Reset to default'   : 'Auf Standard zurücksetzen',
        Resourceview         : 'Ressourcenansicht',
        Save                 : 'Speichern',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Zeitleiste',
        Today                : 'Heute',
        'Two weeks'          : 'Zwei Wochen',
        Week                 : 'Woche',
        'Week Agenda'        : 'Wochenagenda',
        Weekends             : 'Wochenenden',
        Year                 : 'Jahr',
        'Zoom to events'     : 'Auf Ereignisse zoomen'
    },

    Checkbox : {
        'Custom styles'                   : 'Benutzerdefinierte Stile',
        'Fit events'                      : 'Ereignisse anpassen',
        'Fit timeline to available space' : 'Zeitachse an verfügbaren Platz anpassen',
        'Full width'                      : 'Volle Breite',
        'Hide borders'                    : 'Ränder ausblenden',
        'Hide empty hours'                : 'Leere Stunden ausblenden',
        'Hide time axes'                  : 'Zeitachsen ausblenden',
        'Hide unscheduled resources'      : 'Nicht geplante Ressourcen ausblenden',
        'Hide weekends'                   : 'Wochenenden ausblenden',
        'On top'                          : 'Oben',
        'Show avatar'                     : 'Avatar anzeigen',
        'Show core hours in day'          : 'Kernzeiten am Tag anzeigen',
        'Show time'                       : 'Zeit anzeigen',
        'Stack events vertically'         : 'Ereignisse vertikal stapeln',
        'Sync hour heights'               : 'Stundenhöhen synchronisieren'
    },

    Slider : {
        'Hour height'    : 'Stundenhöhe',
        'Resource width' : 'Ressourcenbreite',
        Scale            : 'Skalierung'
    },

    Combo : {
        'Choose show' : 'Show auswählen',
        Equipment     : 'Ausrüstung',
        'Timezone:'   : 'Zeitzone:'
    },

    Label : {
        Days             : 'Tage',
        Months           : 'Monate',
        'Resource width' : 'Ressourcenbreite'
    },

    NumberField : {
        Every                      : 'Jede',
        'Max events per cell'      : 'Maximale Ereignisse pro Zelle',
        'Scroll to hour'           : 'Zur Stunde scrollen',
        'Snap increment (minutes)' : 'Schnappschritt (Minuten)'
    },

    TextField : {
        'Filter resources'  : 'Ressourcen filtern',
        Name                : 'Name',
        'Type to filter...' : 'Zum Filtern eingeben...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Ereignisse werden bei der Navigation angepasst, wenn aktiviert',
        'Fit events within scroll range'                                      : 'Ereignisse innerhalb des Scrollbereichs anpassen',
        Friday                                                                : 'Freitag',
        Monday                                                                : 'Montag',
        'Print the currently active view'                                     : 'Die aktuell aktive Ansicht drucken',
        Saturday                                                              : 'Samstag',
        'Select admin mode to allow editing and rescheduling of performances' : 'Admin-Modus auswählen, um Bearbeitung und Neuterminierung von Aufführungen zu ermöglichen',
        Settings                                                              : 'Einstellungen',
        'Show the weekends'                                                   : 'Wochenenden anzeigen',
        Sunday                                                                : 'Sonntag',
        Thursday                                                              : 'Donnerstag',
        Tuesday                                                               : 'Dienstag',
        Wednesday                                                             : 'Mittwoch'
    },

    SlideToggle : {
        'Hide completed' : 'Abgeschlossen ausblenden'
    }
};

export default LocaleHelper.publishLocale(locale);
