import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/FrFr.js';

const locale = {

    localeName : 'FrFr',
    localeDesc : 'Français (France)',
    localeCode : 'fr-FR',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Démonstration de localisation'
    },

    Button : {
        'Add column'          : 'Ajouter une colonne',
        'Display hints'       : 'Afficher les indices',
        'Remove column'       : 'Supprimer une colonne',
        'Show all day events' : 'Afficher les événements de toute la journée',
        'My button'           : data => `Mon bouton ${data}`,
        Apply                 : 'Appliquer',
        Learn                 : 'Apprendre',
        DownloadTrial         : "Télécharger l'essai"
    },

    Column : {
        Company : 'Entreprise',
        Name    : 'Nom'
    },

    Checkbox : {
        'Auto apply'  : 'Application automatique',
        Automatically : 'Automatiquement',
        runHints      : "Exécuter le flux d'indices au démarrage"
    },

    CodeEditor : {
        'Code editor'   : 'Éditeur de code',
        'Download code' : 'Télécharger le code'
    },

    Combo : {
        Theme    : 'Thème',
        Language : 'Langue',
        Size     : 'Taille'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Réunion',
        Phone   : 'Téléphone',
        Lunch   : 'Déjeuner',
        Workout : 'Entraînement'
    },

    Shared : {
        'Full size'      : 'Taille complète',
        'Locale changed' : 'Paramètres régionaux modifiés',
        'Phone size'     : 'Taille téléphone'
    },

    Tooltip : {
        infoButton       : 'Cliquez pour afficher les infos et changer le thème ou la langue',
        codeButton       : "Cliquez pour afficher l'éditeur de code intégré",
        hintCheck        : "Cochez pour afficher automatiquement les indices lors du chargement de l'exemple",
        fullscreenButton : 'Plein écran',
        openInCodePen    : 'Ouvrir dans CodePen'
    },

    Popup : {
        UsedClasses : 'Classes utilisées dans cette démo'
    },

    TextField : {
        Filter : 'Filtrer'
    }
};

export default LocaleHelper.publishLocale(locale);
