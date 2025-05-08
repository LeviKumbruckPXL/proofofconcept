import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Fi.js';
import './shared.locale.Fi.js';

const locale = {

    localeName : 'Fi',
    localeDesc : 'Suomi',
    localeCode : 'fi',
    localeRtl  : false,

    Column : {
        Completed          : 'Valmis',
        Duration           : 'Kesto',
        'In progress'      : 'Käynnissä',
        Name               : 'Nimi',
        'Not started'      : 'Ei aloitettu',
        'Staff/Resource'   : 'Henkilöstö/Resurssi',
        'Unassigned tasks' : 'Määrittämättömät tehtävät'
    },

    Button : {
        Actions              : 'Toiminnot',
        Agenda               : 'Agenda',
        Apr                  : 'Huhti',
        April                : 'Huhtikuu',
        Aug                  : 'Elo',
        Cancel               : 'Peruuta',
        Create               : 'Luo',
        Day                  : 'Päivä',
        'Day Agenda'         : 'Päiväagenda',
        'Day resources'      : 'Päivän resurssit',
        Dec                  : 'Joulu',
        Delete               : 'Poista',
        Dualdayview          : 'Kaksipäivänäkymä',
        'Export to Excel'    : 'Vie Exceliin',
        Feb                  : 'Helmi',
        February             : 'Helmikuu',
        'Grouped by day'     : 'Ryhmitelty päivän mukaan',
        'Grouped by station' : 'Ryhmitelty aseman mukaan',
        Jan                  : 'Tammi',
        January              : 'Tammikuu',
        Jul                  : 'Heinä',
        July                 : 'Heinäkuu',
        Jun                  : 'Kesä',
        June                 : 'Kesäkuu',
        List                 : 'Lista',
        Mar                  : 'Maalis',
        March                : 'Maaliskuu',
        May                  : 'Touko',
        Month                : 'Kuukausi',
        'Multi Days'         : 'Monipäiväinen',
        Nov                  : 'Marras',
        Oct                  : 'Loka',
        October              : 'Lokakuu',
        Print                : 'Tulosta',
        Reload               : 'Lataa uudelleen',
        'Reset database'     : 'Nollaa tietokanta',
        'Reset to default'   : 'Palauta oletusasetukset',
        Resourceview         : 'Resurssinäkymä',
        Save                 : 'Tallenna',
        Sep                  : 'Syys',
        September            : 'Syyskuu',
        Timeline             : 'Aikajana',
        Today                : 'Tänään',
        'Two weeks'          : 'Kaksi viikkoa',
        Week                 : 'Viikko',
        'Week Agenda'        : 'Viikkoagenda',
        Weekends             : 'Viikonloput',
        Year                 : 'Vuosi',
        'Zoom to events'     : 'Zoomaa tapahtumiin'
    },

    Checkbox : {
        'Custom styles'                   : 'Mukautetut tyylit',
        'Fit events'                      : 'Sovita tapahtumat',
        'Fit timeline to available space' : 'Sovita aikajana käytettävissä olevaan tilaan',
        'Full width'                      : 'Koko leveys',
        'Hide borders'                    : 'Piilota reunat',
        'Hide empty hours'                : 'Piilota tyhjät tunnit',
        'Hide time axes'                  : 'Piilota aikajanat',
        'Hide unscheduled resources'      : 'Piilota aikatauluttamattomat resurssit',
        'Hide weekends'                   : 'Piilota viikonloput',
        'On top'                          : 'Päällä',
        'Show avatar'                     : 'Näytä avatar',
        'Show core hours in day'          : 'Näytä ydintunnit päivässä',
        'Show time'                       : 'Näytä aika',
        'Stack events vertically'         : 'Pinoa tapahtumat pystysuunnassa',
        'Sync hour heights'               : 'Synkronoi tuntien korkeudet'
    },

    Slider : {
        'Hour height'    : 'Tunnin korkeus',
        'Resource width' : 'Resurssin leveys',
        Scale            : 'Skaala'
    },

    Combo : {
        'Choose show' : 'Valitse esitys',
        Equipment     : 'Laitteet',
        'Timezone:'   : 'Aikavyöhyke:'
    },

    Label : {
        Days             : 'Päivät',
        Months           : 'Kuukaudet',
        'Resource width' : 'Resurssin leveys'
    },

    NumberField : {
        Every                      : 'Joka',
        'Max events per cell'      : 'Enimmäismäärä tapahtumia per solu',
        'Scroll to hour'           : 'Vieritä tuntiin',
        'Snap increment (minutes)' : 'Napsautuslisäys (minuuttia)'
    },

    TextField : {
        'Filter resources'  : 'Suodata resurssit',
        Name                : 'Nimi',
        'Type to filter...' : 'Kirjoita suodattaaksesi...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Tapahtumat sovitetaan navigoinnin yhteydessä, kun valittu',
        'Fit events within scroll range'                                      : 'Sovita tapahtumat vieritysalueelle',
        Friday                                                                : 'Perjantai',
        Monday                                                                : 'Maanantai',
        'Print the currently active view'                                     : 'Tulosta nykyinen aktiivinen näkymä',
        Saturday                                                              : 'Lauantai',
        'Select admin mode to allow editing and rescheduling of performances' : 'Valitse ylläpitotila, jotta voit muokata ja aikatauluttaa esityksiä uudelleen',
        Settings                                                              : 'Asetukset',
        'Show the weekends'                                                   : 'Näytä viikonloput',
        Sunday                                                                : 'Sunnuntai',
        Thursday                                                              : 'Torstai',
        Tuesday                                                               : 'Tiistai',
        Wednesday                                                             : 'Keskiviikko'
    },

    SlideToggle : {
        'Hide completed' : 'Piilota valmiit'
    }
};

export default LocaleHelper.publishLocale(locale);
