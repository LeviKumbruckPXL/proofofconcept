import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'Th',
    localeDesc : 'ไทย',
    localeCode : 'th',
    localeRtl  : false,

    Button : {
        'Display hints' : 'แสดงคำแนะนำ',
        Apply           : 'ใช้',
        Learn           : 'เรียนรู้',
        DownloadTrial   : 'ดาวน์โหลดรุ่นทดลอง'
    },

    Checkbox : {
        Automatically : 'อัตโนมัติ',
        runHints      : 'เรียกใช้กระบวนการคำแนะนำเมื่อเริ่มต้น'
    },

    Combo : {
        Theme    : 'ธีม',
        Language : 'ภาษา',
        Size     : 'ขนาด'
    },

    Popup : {
        UsedClasses : 'คลาสที่ใช้ในเดโมนี้'
    },

    Shared : {
        'Locale changed' : 'เปลี่ยนภาษาแล้ว'
    },

    TextField : {
        Filter : 'กรอง'
    },

    Tooltip : {
        infoButton       : 'คลิกเพื่อแสดงข้อมูลและเปลี่ยนธีมหรือภาษา',
        codeButton       : 'คลิกเพื่อแสดงตัวแก้ไขโค้ดในตัว',
        hintCheck        : 'เลือกเพื่อแสดงคำแนะนำโดยอัตโนมัติเมื่อโหลดตัวอย่าง',
        fullscreenButton : 'เต็มจอ',
        openInCodePen    : 'เปิดใน CodePen'
    }
};

export default LocaleHelper.publishLocale(locale);
