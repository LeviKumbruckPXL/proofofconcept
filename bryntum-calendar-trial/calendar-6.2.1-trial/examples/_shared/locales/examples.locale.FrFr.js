import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/FrFr.js';
import './shared.locale.FrFr.js';

const locale = {

    localeName : 'FrFr',
    localeDesc : 'Français (France)',
    localeCode : 'fr-FR',
    localeRtl  : false,

    Column : {
        Completed          : 'Terminé',
        Duration           : 'Durée',
        'In progress'      : 'En cours',
        Name               : 'Nom',
        'Not started'      : 'Pas commencé',
        'Staff/Resource'   : 'Personnel/Ressource',
        'Unassigned tasks' : 'Tâches non assignées'
    },

    Button : {
        Actions              : 'Actions',
        Agenda               : 'Agenda',
        Apr                  : 'Avr',
        April                : 'Avril',
        Aug                  : 'Aoû',
        Cancel               : 'Annuler',
        Create               : 'Créer',
        Day                  : 'Jour',
        'Day Agenda'         : 'Agenda du jour',
        'Day resources'      : 'Ressources du jour',
        Dec                  : 'Déc',
        Delete               : 'Supprimer',
        Dualdayview          : 'Vue double jour',
        'Export to Excel'    : 'Exporter vers Excel',
        Feb                  : 'Fév',
        February             : 'Février',
        'Grouped by day'     : 'Groupé par jour',
        'Grouped by station' : 'Groupé par station',
        Jan                  : 'Jan',
        January              : 'Janvier',
        Jul                  : 'Juil',
        July                 : 'Juillet',
        Jun                  : 'Juin',
        June                 : 'Juin',
        List                 : 'Liste',
        Mar                  : 'Mars',
        March                : 'Mars',
        May                  : 'Mai',
        Month                : 'Mois',
        'Multi Days'         : 'Jours multiples',
        Nov                  : 'Nov',
        Oct                  : 'Oct',
        October              : 'Octobre',
        Print                : 'Imprimer',
        Reload               : 'Recharger',
        'Reset database'     : 'Réinitialiser la base de données',
        'Reset to default'   : 'Réinitialiser par défaut',
        Resourceview         : 'Vue des ressources',
        Save                 : 'Enregistrer',
        Sep                  : 'Sept',
        September            : 'Septembre',
        Timeline             : 'Chronologie',
        Today                : "Aujourd'hui",
        'Two weeks'          : 'Deux semaines',
        Week                 : 'Semaine',
        'Week Agenda'        : 'Agenda de la semaine',
        Weekends             : 'Week-ends',
        Year                 : 'Année',
        'Zoom to events'     : 'Zoom sur les événements'
    },

    Checkbox : {
        'Custom styles'                   : 'Styles personnalisés',
        'Fit events'                      : 'Ajuster les événements',
        'Fit timeline to available space' : "Ajuster la chronologie à l'espace disponible",
        'Full width'                      : 'Pleine largeur',
        'Hide borders'                    : 'Masquer les bordures',
        'Hide empty hours'                : 'Masquer les heures vides',
        'Hide time axes'                  : 'Masquer les axes temporels',
        'Hide unscheduled resources'      : 'Masquer les ressources non planifiées',
        'Hide weekends'                   : 'Masquer les week-ends',
        'On top'                          : 'En haut',
        'Show avatar'                     : "Afficher l'avatar",
        'Show core hours in day'          : 'Afficher les heures principales de la journée',
        'Show time'                       : "Afficher l'heure",
        'Stack events vertically'         : 'Empiler les événements verticalement',
        'Sync hour heights'               : "Synchroniser les hauteurs d'heure"
    },

    Slider : {
        'Hour height'    : "Hauteur de l'heure",
        'Resource width' : 'Largeur de la ressource',
        Scale            : 'Échelle'
    },

    Combo : {
        'Choose show' : 'Choisir le spectacle',
        Equipment     : 'Équipement',
        'Timezone:'   : 'Fuseau horaire :'
    },

    Label : {
        Days             : 'Jours',
        Months           : 'Mois',
        'Resource width' : 'Largeur de la ressource'
    },

    NumberField : {
        Every                      : 'Chaque',
        'Max events per cell'      : 'Événements max par cellule',
        'Scroll to hour'           : "Faire défiler jusqu'à l'heure",
        'Snap increment (minutes)' : 'Incrément de capture (minutes)'
    },

    TextField : {
        'Filter resources'  : 'Filtrer les ressources',
        Name                : 'Nom',
        'Type to filter...' : 'Tapez pour filtrer...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : "Les événements seront ajustés lors de la navigation lorsqu'ils sont cochés",
        'Fit events within scroll range'                                      : 'Ajuster les événements dans la plage de défilement',
        Friday                                                                : 'Vendredi',
        Monday                                                                : 'Lundi',
        'Print the currently active view'                                     : 'Imprimer la vue actuellement active',
        Saturday                                                              : 'Samedi',
        'Select admin mode to allow editing and rescheduling of performances' : 'Sélectionnez le mode administrateur pour permettre la modification et le reprogrammation des performances',
        Settings                                                              : 'Paramètres',
        'Show the weekends'                                                   : 'Afficher les week-ends',
        Sunday                                                                : 'Dimanche',
        Thursday                                                              : 'Jeudi',
        Tuesday                                                               : 'Mardi',
        Wednesday                                                             : 'Mercredi'
    },

    SlideToggle : {
        'Hide completed' : 'Masquer terminé'
    }
};

export default LocaleHelper.publishLocale(locale);
