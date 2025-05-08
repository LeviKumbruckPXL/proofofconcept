import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Bg.js';

const locale = {

    localeName : 'Bg',
    localeDesc : 'Български',
    localeCode : 'bg',
    localeRtl  : false,

    App : {
        'Localization demo' : 'Демонстрация на локализация'
    },

    Button : {
        'Add column'          : 'Добавяне на колона',
        'Display hints'       : 'Показване на подсказки',
        'Remove column'       : 'Премахване на колона',
        'Show all day events' : 'Показване на събития за целия ден',
        'My button'           : data => `Моят бутон ${data}`,
        Apply                 : 'Приложи',
        Learn                 : 'Научи',
        DownloadTrial         : 'Изтегли пробна версия'
    },

    Column : {
        Company : 'Компания',
        Name    : 'Име'
    },

    Checkbox : {
        'Auto apply'  : 'Автоматично прилагане',
        Automatically : 'Автоматично',
        runHints      : 'Стартиране на потока с подсказки при стартиране'
    },

    CodeEditor : {
        'Code editor'   : 'Редактор на код',
        'Download code' : 'Изтегляне на код'
    },

    Combo : {
        Theme    : 'Тема',
        Language : 'Език',
        Size     : 'Размер'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'Среща',
        Phone   : 'Телефон',
        Lunch   : 'Обяд',
        Workout : 'Тренировка'
    },

    Shared : {
        'Full size'      : 'Пълен размер',
        'Locale changed' : 'Локалът е променен',
        'Phone size'     : 'Размер за телефон'
    },

    Tooltip : {
        infoButton       : 'Кликнете, за да покажете информация и да смените темата или локала',
        codeButton       : 'Кликнете, за да покажете вградения редактор на код',
        hintCheck        : 'Отметнете, за да показвате автоматично подсказки при зареждане на примера',
        fullscreenButton : 'Цял екран',
        openInCodePen    : 'Отвори в CodePen'
    },

    Popup : {
        UsedClasses : 'Класове, използвани в тази демонстрация'
    },

    TextField : {
        Filter : 'Филтър'
    }
};

export default LocaleHelper.publishLocale(locale);
