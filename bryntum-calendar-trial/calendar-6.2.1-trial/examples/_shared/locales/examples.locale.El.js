import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/El.js';
import './shared.locale.El.js';

const locale = {

    localeName : 'El',
    localeDesc : 'Ελληνικά',
    localeCode : 'el',
    localeRtl  : false,

    Column : {
        Completed          : 'Ολοκληρωμένο',
        Duration           : 'Διάρκεια',
        'In progress'      : 'Σε εξέλιξη',
        Name               : 'Όνομα',
        'Not started'      : 'Δεν ξεκίνησε',
        'Staff/Resource'   : 'Προσωπικό/Πόρος',
        'Unassigned tasks' : 'Αναθέσεις χωρίς ανάθεση'
    },

    Button : {
        Actions              : 'Ενέργειες',
        Agenda               : 'Ατζέντα',
        Apr                  : 'Απρ',
        April                : 'Απρίλιος',
        Aug                  : 'Αυγ',
        Cancel               : 'Ακύρωση',
        Create               : 'Δημιουργία',
        Day                  : 'Ημέρα',
        'Day Agenda'         : 'Ημερήσια Ατζέντα',
        'Day resources'      : 'Πόροι Ημέρας',
        Dec                  : 'Δεκ',
        Delete               : 'Διαγραφή',
        Dualdayview          : 'Διπλή προβολή ημέρας',
        'Export to Excel'    : 'Εξαγωγή σε Excel',
        Feb                  : 'Φεβ',
        February             : 'Φεβρουάριος',
        'Grouped by day'     : 'Ομαδοποιημένα ανά ημέρα',
        'Grouped by station' : 'Ομαδοποιημένα ανά σταθμό',
        Jan                  : 'Ιαν',
        January              : 'Ιανουάριος',
        Jul                  : 'Ιουλ',
        July                 : 'Ιούλιος',
        Jun                  : 'Ιουν',
        June                 : 'Ιούνιος',
        List                 : 'Λίστα',
        Mar                  : 'Μαρ',
        March                : 'Μάρτιος',
        May                  : 'Μάι',
        Month                : 'Μήνας',
        'Multi Days'         : 'Πολλές Ημέρες',
        Nov                  : 'Νοε',
        Oct                  : 'Οκτ',
        October              : 'Οκτώβριος',
        Print                : 'Εκτύπωση',
        Reload               : 'Επαναφόρτωση',
        'Reset database'     : 'Επαναφορά βάσης δεδομένων',
        'Reset to default'   : 'Επαναφορά στις προεπιλογές',
        Resourceview         : 'Προβολή πόρων',
        Save                 : 'Αποθήκευση',
        Sep                  : 'Σεπ',
        September            : 'Σεπτέμβριος',
        Timeline             : 'Χρονοδιάγραμμα',
        Today                : 'Σήμερα',
        'Two weeks'          : 'Δύο εβδομάδες',
        Week                 : 'Εβδομάδα',
        'Week Agenda'        : 'Εβδομαδιαία Ατζέντα',
        Weekends             : 'Σαββατοκύριακα',
        Year                 : 'Έτος',
        'Zoom to events'     : 'Εστίαση στα γεγονότα'
    },

    Checkbox : {
        'Custom styles'                   : 'Προσαρμοσμένα στυλ',
        'Fit events'                      : 'Προσαρμογή εκδηλώσεων',
        'Fit timeline to available space' : 'Προσαρμογή χρονοδιαγράμματος στον διαθέσιμο χώρο',
        'Full width'                      : 'Πλήρες πλάτος',
        'Hide borders'                    : 'Απόκρυψη περιθωρίων',
        'Hide empty hours'                : 'Απόκρυψη κενών ωρών',
        'Hide time axes'                  : 'Απόκρυψη αξόνων χρόνου',
        'Hide unscheduled resources'      : 'Απόκρυψη μη προγραμματισμένων πόρων',
        'Hide weekends'                   : 'Απόκρυψη Σαββατοκύριακων',
        'On top'                          : 'Στην κορυφή',
        'Show avatar'                     : 'Εμφάνιση avatar',
        'Show core hours in day'          : 'Εμφάνιση βασικών ωρών της ημέρας',
        'Show time'                       : 'Εμφάνιση ώρας',
        'Stack events vertically'         : 'Στοίχιση εκδηλώσεων κάθετα',
        'Sync hour heights'               : 'Συγχρονισμός υψών ωρών'
    },

    Slider : {
        'Hour height'    : 'Ύψος ώρας',
        'Resource width' : 'Πλάτος πόρου',
        Scale            : 'Κλίμακα'
    },

    Combo : {
        'Choose show' : 'Επιλέξτε παράσταση',
        Equipment     : 'Εξοπλισμός',
        'Timezone:'   : 'Ζώνη ώρας:'
    },

    Label : {
        Days             : 'Ημέρες',
        Months           : 'Μήνες',
        'Resource width' : 'Πλάτος πόρου'
    },

    NumberField : {
        Every                      : 'Κάθε',
        'Max events per cell'      : 'Μέγιστες εκδηλώσεις ανά κελί',
        'Scroll to hour'           : 'Κύλιση στην ώρα',
        'Snap increment (minutes)' : 'Αύξηση βήματος (λεπτά)'
    },

    TextField : {
        'Filter resources'  : 'Φιλτράρισμα πόρων',
        Name                : 'Όνομα',
        'Type to filter...' : 'Πληκτρολογήστε για φιλτράρισμα...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Τα γεγονότα θα προσαρμοστούν κατά την πλοήγηση όταν είναι επιλεγμένο',
        'Fit events within scroll range'                                      : 'Προσαρμόστε τα γεγονότα εντός του εύρους κύλισης',
        Friday                                                                : 'Παρασκευή',
        Monday                                                                : 'Δευτέρα',
        'Print the currently active view'                                     : 'Εκτύπωση της τρέχουσας ενεργής προβολής',
        Saturday                                                              : 'Σάββατο',
        'Select admin mode to allow editing and rescheduling of performances' : 'Επιλέξτε τη λειτουργία διαχειριστή για να επιτρέψετε την επεξεργασία και τον επαναπρογραμματισμό των παραστάσεων',
        Settings                                                              : 'Ρυθμίσεις',
        'Show the weekends'                                                   : 'Εμφάνιση των Σαββατοκύριακων',
        Sunday                                                                : 'Κυριακή',
        Thursday                                                              : 'Πέμπτη',
        Tuesday                                                               : 'Τρίτη',
        Wednesday                                                             : 'Τετάρτη'
    },

    SlideToggle : {
        'Hide completed' : 'Απόκρυψη ολοκληρωμένων'
    }
};

export default LocaleHelper.publishLocale(locale);
