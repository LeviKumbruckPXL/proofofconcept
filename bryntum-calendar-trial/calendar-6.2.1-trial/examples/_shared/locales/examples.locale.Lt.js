import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Lt.js';
import './shared.locale.Lt.js';

const locale = {

    localeName : 'LT',
    localeDesc : 'Lietuvių',
    localeCode : 'lt-LT',
    localeRtl  : false,

    Column : {
        Completed          : 'Užbaigta',
        Duration           : 'Trukmė',
        'In progress'      : 'Vykdoma',
        Name               : 'Pavadinimas',
        'Not started'      : 'Nepradėta',
        'Staff/Resource'   : 'Darbuotojai/Ištekliai',
        'Unassigned tasks' : 'Nepriskirtos užduotys'
    },

    Button : {
        Actions              : 'Veiksmai',
        Agenda               : 'Darbotvarkė',
        Apr                  : 'Bal',
        April                : 'Balandis',
        Aug                  : 'Rgp',
        Cancel               : 'Atšaukti',
        Create               : 'Sukurti',
        Day                  : 'Diena',
        'Day Agenda'         : 'Dienos darbotvarkė',
        'Day resources'      : 'Dienos ištekliai',
        Dec                  : 'Grd',
        Delete               : 'Ištrinti',
        Dualdayview          : 'Dvigubos dienos vaizdas',
        'Export to Excel'    : 'Eksportuoti į Excel',
        Feb                  : 'Vas',
        February             : 'Vasaris',
        'Grouped by day'     : 'Grupuota pagal dieną',
        'Grouped by station' : 'Grupuota pagal stotį',
        Jan                  : 'Sau',
        January              : 'Sausis',
        Jul                  : 'Lie',
        July                 : 'Liepa',
        Jun                  : 'Bir',
        June                 : 'Birželis',
        List                 : 'Sąrašas',
        Mar                  : 'Kov',
        March                : 'Kovas',
        May                  : 'Geg',
        Month                : 'Mėnuo',
        'Multi Days'         : 'Kelių dienų',
        Nov                  : 'Lap',
        Oct                  : 'Spa',
        October              : 'Spalis',
        Print                : 'Spausdinti',
        Reload               : 'Perkrauti',
        'Reset database'     : 'Atstatyti duomenų bazę',
        'Reset to default'   : 'Atstatyti į numatytąją',
        Resourceview         : 'Išteklių vaizdas',
        Save                 : 'Išsaugoti',
        Sep                  : 'Rgs',
        September            : 'Rugsėjis',
        Timeline             : 'Laiko juosta',
        Today                : 'Šiandien',
        'Two weeks'          : 'Dvi savaitės',
        Week                 : 'Savaitė',
        'Week Agenda'        : 'Savaitės darbotvarkė',
        Weekends             : 'Savaitgaliai',
        Year                 : 'Metai',
        'Zoom to events'     : 'Priartinti prie įvykių'
    },

    Checkbox : {
        'Custom styles'                   : 'Pasirinktiniai stiliai',
        'Fit events'                      : 'Pritaikyti įvykius',
        'Fit timeline to available space' : 'Pritaikyti laiko juostą prie turimos vietos',
        'Full width'                      : 'Visas plotis',
        'Hide borders'                    : 'Slėpti kraštines',
        'Hide empty hours'                : 'Slėpti tuščias valandas',
        'Hide time axes'                  : 'Slėpti laiko ašis',
        'Hide unscheduled resources'      : 'Slėpti neplanuotus išteklius',
        'Hide weekends'                   : 'Slėpti savaitgalius',
        'On top'                          : 'Viršuje',
        'Show avatar'                     : 'Rodyti avatarą',
        'Show core hours in day'          : 'Rodyti pagrindines valandas dienoje',
        'Show time'                       : 'Rodyti laiką',
        'Stack events vertically'         : 'Rikiuoti įvykius vertikaliai',
        'Sync hour heights'               : 'Sinchronizuoti valandų aukščius'
    },

    Slider : {
        'Hour height'    : 'Valandos aukštis',
        'Resource width' : 'Išteklių plotis',
        Scale            : 'Mastelis'
    },

    Combo : {
        'Choose show' : 'Pasirinkite šou',
        Equipment     : 'Įranga',
        'Timezone:'   : 'Laiko juosta:'
    },

    Label : {
        Days             : 'Dienos',
        Months           : 'Mėnesiai',
        'Resource width' : 'Išteklių plotis'
    },

    NumberField : {
        Every                      : 'Kiekvienas',
        'Max events per cell'      : 'Maksimalus įvykių skaičius vienoje ląstelėje',
        'Scroll to hour'           : 'Slinkti iki valandos',
        'Snap increment (minutes)' : 'Padidinti žingsnį (minutėmis)'
    },

    TextField : {
        'Filter resources'  : 'Filtruoti išteklius',
        Name                : 'Pavadinimas',
        'Type to filter...' : 'Įveskite, kad filtruotumėte...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Įvykiai bus pritaikyti naršant, kai pažymėta',
        'Fit events within scroll range'                                      : 'Pritaikyti įvykius slinkties diapazone',
        Friday                                                                : 'Penktadienis',
        Monday                                                                : 'Pirmadienis',
        'Print the currently active view'                                     : 'Atspausdinti šiuo metu aktyvų vaizdą',
        Saturday                                                              : 'Šeštadienis',
        'Select admin mode to allow editing and rescheduling of performances' : 'Pasirinkite administratoriaus režimą, kad galėtumėte redaguoti ir perplanuoti pasirodymus',
        Settings                                                              : 'Nustatymai',
        'Show the weekends'                                                   : 'Rodyti savaitgalius',
        Sunday                                                                : 'Sekmadienis',
        Thursday                                                              : 'Ketvirtadienis',
        Tuesday                                                               : 'Antradienis',
        Wednesday                                                             : 'Trečiadienis'
    },

    SlideToggle : {
        'Hide completed' : 'Slėpti užbaigtus'
    }
};

export default LocaleHelper.publishLocale(locale);
