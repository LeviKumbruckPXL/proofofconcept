import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Th.js';

const locale = {

    localeName : 'Th',
    localeDesc : 'ไทย',
    localeCode : 'th',
    localeRtl  : false,

    App : {
        'Localization demo' : 'การสาธิตการแปลภาษา'
    },

    Button : {
        'Add column'          : 'เพิ่มคอลัมน์',
        'Display hints'       : 'แสดงคำแนะนำ',
        'Remove column'       : 'ลบคอลัมน์',
        'Show all day events' : 'แสดงกิจกรรมตลอดวัน',
        'My button'           : data => `ปุ่มของฉัน ${data}`,
        Apply                 : 'ใช้',
        Learn                 : 'เรียนรู้',
        DownloadTrial         : 'ดาวน์โหลดรุ่นทดลอง'
    },

    Column : {
        Company : 'บริษัท',
        Name    : 'ชื่อ'
    },

    Checkbox : {
        'Auto apply'  : 'ใช้โดยอัตโนมัติ',
        Automatically : 'อัตโนมัติ',
        runHints      : 'เรียกใช้กระบวนการคำแนะนำเมื่อเริ่มต้น'
    },

    CodeEditor : {
        'Code editor'   : 'ตัวแก้ไขโค้ด',
        'Download code' : 'ดาวน์โหลดโค้ด'
    },

    Combo : {
        Theme    : 'ธีม',
        Language : 'ภาษา',
        Size     : 'ขนาด'
    },

    EventColor : {
        Meeting : 'green',
        Phone   : 'red',
        Lunch   : 'blue',
        Workout : 'orange'
    },

    EventType : {
        Meeting : 'การประชุม',
        Phone   : 'โทรศัพท์',
        Lunch   : 'อาหารกลางวัน',
        Workout : 'ออกกำลังกาย'
    },

    Shared : {
        'Full size'      : 'ขนาดเต็ม',
        'Locale changed' : 'เปลี่ยนภาษาแล้ว',
        'Phone size'     : 'ขนาดโทรศัพท์'
    },

    Tooltip : {
        infoButton       : 'คลิกเพื่อแสดงข้อมูลและเปลี่ยนธีมหรือภาษา',
        codeButton       : 'คลิกเพื่อแสดงตัวแก้ไขโค้ดในตัว',
        hintCheck        : 'เลือกเพื่อแสดงคำแนะนำโดยอัตโนมัติเมื่อโหลดตัวอย่าง',
        fullscreenButton : 'เต็มจอ',
        openInCodePen    : 'เปิดใน CodePen'
    },

    Popup : {
        UsedClasses : 'คลาสที่ใช้ในเดโมนี้'
    },

    TextField : {
        Filter : 'กรอง'
    }
};

export default LocaleHelper.publishLocale(locale);
