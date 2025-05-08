import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Pt',
    localeDesc : 'Português',
    localeCode : 'pt',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Exibir dicas',
        Apply           : 'Aplicar',
        Learn           : 'Aprender',
        DownloadTrial   : 'Baixar Versão de Avaliação'
    },

    Checkbox : {
        Automatically : 'Automaticamente',
        runHints      : 'Executar fluxo de dicas na inicialização'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Idioma',
        Size     : 'Tamanho'
    },

    Popup : {
        UsedClasses : 'Classes usadas nesta demonstração'
    },

    Shared : {
        'Locale changed' : 'Localidade alterada'
    },

    TextField : {
        Filter : 'Filtrar'
    },

    Tooltip : {
        infoButton       : 'Clique para mostrar informações e alternar tema ou localidade',
        codeButton       : 'Clique para mostrar o editor de código embutido',
        hintCheck        : 'Marque para exibir automaticamente dicas ao carregar o exemplo',
        fullscreenButton : 'Tela cheia',
        openInCodePen    : 'Abrir no CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
