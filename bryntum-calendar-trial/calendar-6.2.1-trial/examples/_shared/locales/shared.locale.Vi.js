import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Vi',
    localeDesc : 'Tiếng Việt',
    localeCode : 'vi',
    localeRtl  : false,

    Button : {
        'Display hints' : 'Hiển thị gợi ý',
        Apply           : 'Áp dụng',
        Learn           : 'Học',
        DownloadTrial   : 'Tải bản dùng thử'
    },

    Checkbox : {
        Automatically : 'Tự động',
        runHints      : 'Chạy luồng gợi ý khi khởi động'
    },

    Combo : {
        Theme    : 'Chủ đề',
        Language : 'Ngôn ngữ',
        Size     : 'Kích thước'
    },

    Popup : {
        UsedClasses : 'Các lớp được sử dụng trong bản demo này'
    },

    Shared : {
        'Locale changed' : 'Ngôn ngữ đã thay đổi'
    },

    TextField : {
        Filter : 'Bộ lọc'
    },

    Tooltip : {
        infoButton       : 'Nhấn để hiển thị thông tin và chuyển đổi chủ đề hoặc ngôn ngữ',
        codeButton       : 'Nhấn để hiển thị trình chỉnh sửa mã tích hợp',
        hintCheck        : 'Chọn để tự động hiển thị gợi ý khi tải ví dụ',
        fullscreenButton : 'Toàn màn hình',
        openInCodePen    : 'Mở trong CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
