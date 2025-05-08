import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Ko.js';
import './shared.locale.Ko.js';

const locale = {

    localeName : 'Ko',
    localeDesc : '한국어',
    localeCode : 'ko',
    localeRtl  : false,

    Column : {
        Completed          : '완료됨',
        Duration           : '기간',
        'In progress'      : '진행 중',
        Name               : '이름',
        'Not started'      : '시작하지 않음',
        'Staff/Resource'   : '직원/자원',
        'Unassigned tasks' : '할당되지 않은 작업'
    },

    Button : {
        Actions              : '작업',
        Agenda               : '일정',
        Apr                  : '4월',
        April                : '4월',
        Aug                  : '8월',
        Cancel               : '취소',
        Create               : '생성',
        Day                  : '일',
        'Day Agenda'         : '일정',
        'Day resources'      : '일 자원',
        Dec                  : '12월',
        Delete               : '삭제',
        Dualdayview          : '이중일보기',
        'Export to Excel'    : 'Excel로 내보내기',
        Feb                  : '2월',
        February             : '2월',
        'Grouped by day'     : '일별 그룹화',
        'Grouped by station' : '스테이션별 그룹화',
        Jan                  : '1월',
        January              : '1월',
        Jul                  : '7월',
        July                 : '7월',
        Jun                  : '6월',
        June                 : '6월',
        List                 : '목록',
        Mar                  : '3월',
        March                : '3월',
        May                  : '5월',
        Month                : '월',
        'Multi Days'         : '다일',
        Nov                  : '11월',
        Oct                  : '10월',
        October              : '10월',
        Print                : '인쇄',
        Reload               : '다시 불러오기',
        'Reset database'     : '데이터베이스 재설정',
        'Reset to default'   : '기본값으로 재설정',
        Resourceview         : '자원보기',
        Save                 : '저장',
        Sep                  : '9월',
        September            : '9월',
        Timeline             : '타임라인',
        Today                : '오늘',
        'Two weeks'          : '2주',
        Week                 : '주',
        'Week Agenda'        : '주간 일정',
        Weekends             : '주말',
        Year                 : '년',
        'Zoom to events'     : '이벤트로 확대'
    },

    Checkbox : {
        'Custom styles'                   : '사용자 정의 스타일',
        'Fit events'                      : '이벤트 맞춤',
        'Fit timeline to available space' : '사용 가능한 공간에 타임라인 맞춤',
        'Full width'                      : '전체 너비',
        'Hide borders'                    : '테두리 숨기기',
        'Hide empty hours'                : '빈 시간 숨기기',
        'Hide time axes'                  : '시간 축 숨기기',
        'Hide unscheduled resources'      : '일정이 없는 리소스 숨기기',
        'Hide weekends'                   : '주말 숨기기',
        'On top'                          : '위에',
        'Show avatar'                     : '아바타 표시',
        'Show core hours in day'          : '하루의 핵심 시간 표시',
        'Show time'                       : '시간 표시',
        'Stack events vertically'         : '이벤트를 수직으로 쌓기',
        'Sync hour heights'               : '시간 높이 동기화'
    },

    Slider : {
        'Hour height'    : '시간 높이',
        'Resource width' : '자원 너비',
        Scale            : '규모'
    },

    Combo : {
        'Choose show' : '프로그램 선택',
        Equipment     : '장비',
        'Timezone:'   : '시간대:'
    },

    Label : {
        Days             : '일',
        Months           : '월',
        'Resource width' : '리소스 너비'
    },

    NumberField : {
        Every                      : '매',
        'Max events per cell'      : '셀당 최대 이벤트',
        'Scroll to hour'           : '시간으로 스크롤',
        'Snap increment (minutes)' : '스냅 증가 (분)'
    },

    TextField : {
        'Filter resources'  : '리소스 필터',
        Name                : '이름',
        'Type to filter...' : '필터링하려면 입력하세요...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : '체크하면 탐색 시 이벤트가 맞춰집니다',
        'Fit events within scroll range'                                      : '스크롤 범위 내에서 이벤트 맞추기',
        Friday                                                                : '금요일',
        Monday                                                                : '월요일',
        'Print the currently active view'                                     : '현재 활성화된 뷰 인쇄',
        Saturday                                                              : '토요일',
        'Select admin mode to allow editing and rescheduling of performances' : '공연 편집 및 일정 변경을 허용하려면 관리자 모드를 선택하세요',
        Settings                                                              : '설정',
        'Show the weekends'                                                   : '주말 표시',
        Sunday                                                                : '일요일',
        Thursday                                                              : '목요일',
        Tuesday                                                               : '화요일',
        Wednesday                                                             : '수요일'
    },

    SlideToggle : {
        'Hide completed' : '완료된 항목 숨기기'
    }
};

export default LocaleHelper.publishLocale(locale);
