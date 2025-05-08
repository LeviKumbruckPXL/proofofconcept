import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'FrFr',
    localeDesc : 'Français (France)',
    localeCode : 'fr-FR',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Afficher les indices',
        Apply           : 'Appliquer',
        Learn           : 'Apprendre',
        DownloadTrial   : "Télécharger l'essai"
    },

    Checkbox : {
        Automatically : 'Automatiquement',
        runHints      : "Exécuter le flux d'indices au démarrage"
    },

    Combo : {
        Theme    : 'Thème',
        Language : 'Langue',
        Size     : 'Taille'
    },

    Popup : {
        UsedClasses : 'Classes utilisées dans cette démo'
    },

    Shared : {
        'Locale changed' : 'Paramètres régionaux modifiés'
    },

    TextField : {
        Filter : 'Filtrer'
    },

    Tooltip : {
        infoButton       : 'Cliquez pour afficher les infos et changer le thème ou la langue',
        codeButton       : "Cliquez pour afficher l'éditeur de code intégré",
        hintCheck        : "Cochez pour afficher automatiquement les indices lors du chargement de l'exemple",
        fullscreenButton : 'Plein écran',
        openInCodePen    : 'Ouvrir dans CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
