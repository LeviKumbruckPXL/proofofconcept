import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ko.js';

const locale = {

    localeName : 'Ko',
    localeDesc : '한국어',
    localeCode : 'ko',
    localeRtl  : false,

    App : {
        'Localization demo' : '로컬라이제이션 데모'
    },

    Button : {
        'Add column'          : '열 추가',
        'Display hints'       : '힌트 표시',
        'Remove column'       : '열 제거',
        'Show all day events' : '하루 종일 이벤트 보기',
        'My button'           : data => `내 버튼 ${data}`,
        Apply                 : '적용',
        Learn                 : '배우기',
        DownloadTrial         : '체험판 다운로드'
    },

    Column : {
        Company : '회사',
        Name    : '이름'
    },

    Checkbox : {
        'Auto apply'  : '자동 적용',
        Automatically : '자동으로',
        runHints      : '시작 시 힌트 흐름 실행'
    },

    CodeEditor : {
        'Code editor'   : '코드 편집기',
        'Download code' : '코드 다운로드'
    },

    Combo : {
        Theme    : '테마',
        Language : '언어',
        Size     : '크기'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : '회의',
        Phone   : '전화',
        Lunch   : '점심',
        Workout : '운동'
    },

    Shared : {
        'Full size'      : '전체 크기',
        'Locale changed' : '로케일 변경됨',
        'Phone size'     : '전화 크기'
    },

    Tooltip : {
        infoButton       : '정보를 표시하고 테마 또는 로케일을 전환하려면 클릭하세요',
        codeButton       : '내장 코드 편집기를 표시하려면 클릭하세요',
        hintCheck        : '예제를 로드할 때 힌트를 자동으로 표시하려면 선택하세요',
        fullscreenButton : '전체 화면',
        openInCodePen    : 'CodePen에서 열기'
    },

    Popup : {
        UsedClasses : '이 데모에서 사용된 클래스'
    },

    TextField : {
        Filter : '필터'
    }
};

export default LocaleHelper.publishLocale(locale);
