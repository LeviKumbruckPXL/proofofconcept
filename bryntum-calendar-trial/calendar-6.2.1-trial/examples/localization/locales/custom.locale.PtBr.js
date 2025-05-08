import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/PtBr.js';

const locale = {

    localeName : 'PtBr',
    localeDesc : 'Português do Brasil',
    localeCode : 'pt-BR',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Demonstração de Localização'
    },

    Button : {
        'Add column'          : 'Adicionar coluna',
        'Display hints'       : 'Exibir dicas',
        'Remove column'       : 'Remover coluna',
        'Show all day events' : 'Mostrar eventos de dia inteiro',
        'My button'           : data => `Meu botão ${data}`,
        Apply                 : 'Aplicar',
        Learn                 : 'Aprender',
        DownloadTrial         : 'Baixar Versão de Avaliação'
    },

    Column : {
        Company : 'Empresa',
        Name    : 'Nome'
    },

    Checkbox : {
        'Auto apply'  : 'Aplicação automática',
        Automatically : 'Automaticamente',
        runHints      : 'Executar fluxo de dicas na inicialização'
    },

    CodeEditor : {
        'Code editor'   : 'Editor de código',
        'Download code' : 'Baixar código'
    },

    Combo : {
        Theme    : 'Tema',
        Language : 'Idioma',
        Size     : 'Tamanho'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Reunião',
        Phone   : 'Telefone',
        Lunch   : 'Almoço',
        Workout : 'Exercício'
    },

    Shared : {
        'Full size'      : 'Tamanho completo',
        'Locale changed' : 'Localidade alterada',
        'Phone size'     : 'Tamanho do telefone'
    },

    Tooltip : {
        infoButton       : 'Clique para mostrar informações e alternar tema ou localidade',
        codeButton       : 'Clique para mostrar o editor de código embutido',
        hintCheck        : 'Marque para exibir automaticamente dicas ao carregar o exemplo',
        fullscreenButton : 'Tela cheia',
        openInCodePen    : 'Abrir no CodePen'
    },

    Popup : {
        UsedClasses : 'Classes usadas nesta demonstração'
    },

    TextField : {
        Filter : 'Filtrar'
    }
};

export default LocaleHelper.publishLocale(locale);
