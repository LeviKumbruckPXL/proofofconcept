import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/El.js';

const locale = {

    localeName : 'El',
    localeDesc : 'Ελληνικά',
    localeCode : 'el',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Επίδειξη τοπικοποίησης'
    },

    Button : {
        'Add column'          : 'Προσθήκη στήλης',
        'Display hints'       : 'Εμφάνιση υποδείξεων',
        'Remove column'       : 'Αφαίρεση στήλης',
        'Show all day events' : 'Εμφάνιση ολοήμερων εκδηλώσεων',
        'My button'           : data => `Το κουμπί μου ${data}`,
        Apply                 : 'Εφαρμογή',
        Learn                 : 'Μάθετε',
        DownloadTrial         : 'Λήψη δοκιμής'
    },

    Column : {
        Company : 'Εταιρεία',
        Name    : 'Όνομα'
    },

    Checkbox : {
        'Auto apply'  : 'Αυτόματη εφαρμογή',
        Automatically : 'Αυτόματα',
        runHints      : 'Εκτέλεση ροής υποδείξεων κατά την εκκίνηση'
    },

    CodeEditor : {
        'Code editor'   : 'Επεξεργαστής κώδικα',
        'Download code' : 'Λήψη κώδικα'
    },

    Combo : {
        Theme    : 'Θέμα',
        Language : 'Γλώσσα',
        Size     : 'Μέγεθος'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Συνάντηση',
        Phone   : 'Τηλέφωνο',
        Lunch   : 'Γεύμα',
        Workout : 'Άσκηση'
    },

    Shared : {
        'Full size'      : 'Πλήρες μέγεθος',
        'Locale changed' : 'Η τοπική ρύθμιση άλλαξε',
        'Phone size'     : 'Μέγεθος τηλεφώνου'
    },

    Tooltip : {
        infoButton       : 'Κάντε κλικ για να εμφανίσετε πληροφορίες και να αλλάξετε θέμα ή τοπική ρύθμιση',
        codeButton       : 'Κάντε κλικ για να εμφανίσετε τον ενσωματωμένο επεξεργαστή κώδικα',
        hintCheck        : 'Επιλέξτε για να εμφανίζονται αυτόματα υποδείξεις κατά τη φόρτωση του παραδείγματος',
        fullscreenButton : 'Πλήρης οθόνη',
        openInCodePen    : 'Άνοιγμα στο CodePen'
    },

    Popup : {
        UsedClasses : 'Κλάσεις που χρησιμοποιούνται σε αυτή την επίδειξη'
    },

    TextField : {
        Filter : 'Φίλτρο'
    }
};

export default LocaleHelper.publishLocale(locale);
