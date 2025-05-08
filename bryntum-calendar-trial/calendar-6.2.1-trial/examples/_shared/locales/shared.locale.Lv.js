import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Lv',
    localeDesc : 'Latviešu',
    localeCode : 'lv-LV',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Parādīt norādes',
        Apply           : 'Piemērot',
        Learn           : 'Mācīties',
        DownloadTrial   : 'Lejupielādēt izmēģinājuma versiju'
    },

    Checkbox : {
        Automatically : 'Automātiski',
        runHints      : 'Palaist norāžu plūsmu startēšanas laikā'
    },

    Combo : {
        Theme    : 'Tēma',
        Language : 'Valoda',
        Size     : 'Izmērs'
    },

    Popup : {
        UsedClasses : 'Šajā demonstrācijā izmantotās klases'
    },

    Shared : {
        'Locale changed' : 'Valoda mainīta'
    },

    TextField : {
        Filter : 'Filtrs'
    },

    Tooltip : {
        infoButton       : 'Noklikšķiniet, lai parādītu informāciju un pārslēgtu tēmu vai valodu',
        codeButton       : 'Noklikšķiniet, lai parādītu iebūvēto koda redaktoru',
        hintCheck        : 'Atzīmējiet, lai automātiski parādītu norādes, ielādējot piemēru',
        fullscreenButton : 'Pilnekrāna režīms',
        openInCodePen    : 'Atvērt CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
