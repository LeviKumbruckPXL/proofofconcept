import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Vi.js';
import './shared.locale.Vi.js';

const locale = {

    localeName : 'Vi',
    localeDesc : 'Tiếng Việt',
    localeCode : 'vi',
    localeRtl  : false,

    Column : {
        Completed          : 'Hoàn thành',
        Duration           : 'Thời lượng',
        'In progress'      : 'Đang tiến hành',
        Name               : 'Tên',
        'Not started'      : 'Chưa bắt đầu',
        'Staff/Resource'   : 'Nhân viên/Tài nguyên',
        'Unassigned tasks' : 'Nhiệm vụ chưa được giao'
    },

    Button : {
        Actions              : 'Hành động',
        Agenda               : 'Lịch trình',
        Apr                  : 'Tháng 4',
        April                : 'Tháng Tư',
        Aug                  : 'Tháng 8',
        Cancel               : 'Hủy',
        Create               : 'Tạo',
        Day                  : 'Ngày',
        'Day Agenda'         : 'Lịch trình ngày',
        'Day resources'      : 'Tài nguyên ngày',
        Dec                  : 'Tháng 12',
        Delete               : 'Xóa',
        Dualdayview          : 'Xem hai ngày',
        'Export to Excel'    : 'Xuất ra Excel',
        Feb                  : 'Tháng 2',
        February             : 'Tháng Hai',
        'Grouped by day'     : 'Nhóm theo ngày',
        'Grouped by station' : 'Nhóm theo trạm',
        Jan                  : 'Tháng 1',
        January              : 'Tháng Một',
        Jul                  : 'Tháng 7',
        July                 : 'Tháng Bảy',
        Jun                  : 'Tháng 6',
        June                 : 'Tháng Sáu',
        List                 : 'Danh sách',
        Mar                  : 'Tháng 3',
        March                : 'Tháng Ba',
        May                  : 'Tháng 5',
        Month                : 'Tháng',
        'Multi Days'         : 'Nhiều ngày',
        Nov                  : 'Tháng 11',
        Oct                  : 'Tháng 10',
        October              : 'Tháng Mười',
        Print                : 'In',
        Reload               : 'Tải lại',
        'Reset database'     : 'Đặt lại cơ sở dữ liệu',
        'Reset to default'   : 'Đặt lại mặc định',
        Resourceview         : 'Xem tài nguyên',
        Save                 : 'Lưu',
        Sep                  : 'Tháng 9',
        September            : 'Tháng Chín',
        Timeline             : 'Dòng thời gian',
        Today                : 'Hôm nay',
        'Two weeks'          : 'Hai tuần',
        Week                 : 'Tuần',
        'Week Agenda'        : 'Lịch trình tuần',
        Weekends             : 'Cuối tuần',
        Year                 : 'Năm',
        'Zoom to events'     : 'Thu phóng đến sự kiện'
    },

    Checkbox : {
        'Custom styles'                   : 'Kiểu tùy chỉnh',
        'Fit events'                      : 'Phù hợp sự kiện',
        'Fit timeline to available space' : 'Điều chỉnh dòng thời gian với không gian có sẵn',
        'Full width'                      : 'Chiều rộng đầy đủ',
        'Hide borders'                    : 'Ẩn đường viền',
        'Hide empty hours'                : 'Ẩn giờ trống',
        'Hide time axes'                  : 'Ẩn trục thời gian',
        'Hide unscheduled resources'      : 'Ẩn tài nguyên chưa được lên lịch',
        'Hide weekends'                   : 'Ẩn cuối tuần',
        'On top'                          : 'Ở trên cùng',
        'Show avatar'                     : 'Hiển thị hình đại diện',
        'Show core hours in day'          : 'Hiển thị giờ làm việc chính trong ngày',
        'Show time'                       : 'Hiển thị thời gian',
        'Stack events vertically'         : 'Xếp chồng sự kiện theo chiều dọc',
        'Sync hour heights'               : 'Đồng bộ chiều cao giờ'
    },

    Slider : {
        'Hour height'    : 'Chiều cao giờ',
        'Resource width' : 'Chiều rộng tài nguyên',
        Scale            : 'Tỷ lệ'
    },

    Combo : {
        'Choose show' : 'Chọn chương trình',
        Equipment     : 'Thiết bị',
        'Timezone:'   : 'Múi giờ:'
    },

    Label : {
        Days             : 'Ngày',
        Months           : 'Tháng',
        'Resource width' : 'Chiều rộng tài nguyên'
    },

    NumberField : {
        Every                      : 'Mỗi',
        'Max events per cell'      : 'Sự kiện tối đa mỗi ô',
        'Scroll to hour'           : 'Cuộn đến giờ',
        'Snap increment (minutes)' : 'Tăng dần (phút)'
    },

    TextField : {
        'Filter resources'  : 'Lọc tài nguyên',
        Name                : 'Tên',
        'Type to filter...' : 'Nhập để lọc...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'Sự kiện sẽ được điều chỉnh khi điều hướng khi được chọn',
        'Fit events within scroll range'                                      : 'Điều chỉnh sự kiện trong phạm vi cuộn',
        Friday                                                                : 'Thứ Sáu',
        Monday                                                                : 'Thứ Hai',
        'Print the currently active view'                                     : 'In chế độ xem hiện tại đang hoạt động',
        Saturday                                                              : 'Thứ Bảy',
        'Select admin mode to allow editing and rescheduling of performances' : 'Chọn chế độ quản trị để cho phép chỉnh sửa và sắp xếp lại các buổi biểu diễn',
        Settings                                                              : 'Cài đặt',
        'Show the weekends'                                                   : 'Hiển thị cuối tuần',
        Sunday                                                                : 'Chủ Nhật',
        Thursday                                                              : 'Thứ Năm',
        Tuesday                                                               : 'Thứ Ba',
        Wednesday                                                             : 'Thứ Tư'
    },

    SlideToggle : {
        'Hide completed' : 'Ẩn đã hoàn thành'
    }
};

export default LocaleHelper.publishLocale(locale);
