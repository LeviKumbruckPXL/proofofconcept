import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Nl.js';
import './shared.locale.Nl.js';

const locale = {

    localeName : 'Nl',
    localeDesc : 'Nederlands',
    localeCode : 'nl',
    localeRtl  : false,

    Column : {
        Completed          : 'Voltooid',
        Duration           : 'Duur',
        'In progress'      : 'Bezig',
        Name               : 'Naam',
        'Not started'      : 'Niet gestart',
        'Staff/Resource'   : 'Personeel/Middel',
        'Unassigned tasks' : 'Niet-toegewezen taken'
    },

    Button : {
        Actions              : 'Acties',
        Agenda               : 'Agenda',
        Apr                  : 'Apr',
        April                : 'April',
        Aug                  : 'Aug',
        Cancel               : 'Annuleren',
        Create               : 'Aanmaken',
        Day                  : 'Dag',
        'Day Agenda'         : 'Dagagenda',
        'Day resources'      : 'Dagbronnen',
        Dec                  : 'Dec',
        Delete               : 'Verwijderen',
        Dualdayview          : 'Dubbele dagweergave',
        'Export to Excel'    : 'Exporteren naar Excel',
        Feb                  : 'Feb',
        February             : 'Februari',
        'Grouped by day'     : 'Gegroepeerd per dag',
        'Grouped by station' : 'Gegroepeerd per station',
        Jan                  : 'Jan',
        January              : 'Januari',
        Jul                  : 'Jul',
        July                 : 'Juli',
        Jun                  : 'Jun',
        June                 : 'Juni',
        List                 : 'Lijst',
        Mar                  : 'Mrt',
        March                : 'Maart',
        May                  : 'Mei',
        Month                : 'Maand',
        'Multi Days'         : 'Meerdere dagen',
        Nov                  : 'Nov',
        Oct                  : 'Okt',
        October              : 'Oktober',
        Print                : 'Afdrukken',
        Reload               : 'Herladen',
        'Reset database'     : 'Database resetten',
        'Reset to default'   : 'Herstellen naar standaard',
        Resourceview         : 'Bronweergave',
        Save                 : 'Opslaan',
        Sep                  : 'Sep',
        September            : 'September',
        Timeline             : 'Tijdlijn',
        Today                : 'Vandaag',
        'Two weeks'          : 'Twee weken',
        Week                 : 'Week',
        'Week Agenda'        : 'Weekagenda',
        Weekends             : 'Weekenden',
        Year                 : 'Jaar',
        'Zoom to events'     : 'Inzoomen op evenementen'
    },

    Checkbox : {
        'Custom styles'                   : 'Aangepaste stijlen',
        'Fit events'                      : 'Evenementen aanpassen',
        'Fit timeline to available space' : 'Tijdlijn aanpassen aan beschikbare ruimte',
        'Full width'                      : 'Volledige breedte',
        'Hide borders'                    : 'Randen verbergen',
        'Hide empty hours'                : 'Lege uren verbergen',
        'Hide time axes'                  : 'Tijdassen verbergen',
        'Hide unscheduled resources'      : 'Niet-geplande middelen verbergen',
        'Hide weekends'                   : 'Weekenden verbergen',
        'On top'                          : 'Bovenaan',
        'Show avatar'                     : 'Avatar tonen',
        'Show core hours in day'          : 'Kernuren in dag tonen',
        'Show time'                       : 'Toon tijd',
        'Stack events vertically'         : 'Evenementen verticaal stapelen',
        'Sync hour heights'               : 'Uurhoogtes synchroniseren'
    },

    Slider : {
        'Hour height'    : 'Uurhoogte',
        'Resource width' : 'Bronbreedte',
        Scale            : 'Schaal'
    },

    Combo : {
        'Choose show' : 'Kies show',
        Equipment     : 'Apparatuur',
        'Timezone:'   : 'Tijdzone:'
    },

    Label : {
        Days             : 'Dagen',
        Months           : 'Maanden',
        'Resource width' : 'Bronbreedte'
    },

    NumberField : {
        Every                      : 'Elke',
        'Max events per cell'      : 'Maximaal aantal evenementen per cel',
        'Scroll to hour'           : 'Scroll naar uur',
        'Snap increment (minutes)' : 'Schaalvergroting (minuten)'
    },

    TextField : {
        'Filter resources'  : 'Filter bronnen',
        Name                : 'Naam',
        'Type to filter...' : 'Typ om te filteren...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Evenementen worden aangepast bij navigatie wanneer aangevinkt',
        'Fit events within scroll range'                                      : 'Pas evenementen aan binnen scrollbereik',
        Friday                                                                : 'Vrijdag',
        Monday                                                                : 'Maandag',
        'Print the currently active view'                                     : 'Print de momenteel actieve weergave',
        Saturday                                                              : 'Zaterdag',
        'Select admin mode to allow editing and rescheduling of performances' : 'Selecteer de beheerdersmodus om bewerkingen en herschikkingen van uitvoeringen toe te staan',
        Settings                                                              : 'Instellingen',
        'Show the weekends'                                                   : 'Toon de weekenden',
        Sunday                                                                : 'Zondag',
        Thursday                                                              : 'Donderdag',
        Tuesday                                                               : 'Dinsdag',
        Wednesday                                                             : 'Woensdag'
    },

    SlideToggle : {
        'Hide completed' : 'Verberg voltooid'
    }
};

export default LocaleHelper.publishLocale(locale);
