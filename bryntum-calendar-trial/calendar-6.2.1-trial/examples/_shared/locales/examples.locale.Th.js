import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Calendar/localization/Th.js';
import './shared.locale.Th.js';

const locale = {

    localeName : 'Th',
    localeDesc : 'ไทย',
    localeCode : 'th',
    localeRtl  : false,

    Column : {
        Completed          : 'เสร็จสิ้น',
        Duration           : 'ระยะเวลา',
        'In progress'      : 'กำลังดำเนินการ',
        Name               : 'ชื่อ',
        'Not started'      : 'ยังไม่เริ่ม',
        'Staff/Resource'   : 'พนักงาน/ทรัพยากร',
        'Unassigned tasks' : 'งานที่ยังไม่ได้มอบหมาย'
    },

    Button : {
        Actions              : 'การดำเนินการ',
        Agenda               : 'วาระการประชุม',
        Apr                  : 'เม.ย.',
        April                : 'เมษายน',
        Aug                  : 'ส.ค.',
        Cancel               : 'ยกเลิก',
        Create               : 'สร้าง',
        Day                  : 'วัน',
        'Day Agenda'         : 'วาระการประชุมประจำวัน',
        'Day resources'      : 'ทรัพยากรประจำวัน',
        Dec                  : 'ธ.ค.',
        Delete               : 'ลบ',
        Dualdayview          : 'มุมมองสองวัน',
        'Export to Excel'    : 'ส่งออกไปยัง Excel',
        Feb                  : 'ก.พ.',
        February             : 'กุมภาพันธ์',
        'Grouped by day'     : 'จัดกลุ่มตามวัน',
        'Grouped by station' : 'จัดกลุ่มตามสถานี',
        Jan                  : 'ม.ค.',
        January              : 'มกราคม',
        Jul                  : 'ก.ค.',
        July                 : 'กรกฎาคม',
        Jun                  : 'มิ.ย.',
        June                 : 'มิถุนายน',
        List                 : 'รายการ',
        Mar                  : 'มี.ค.',
        March                : 'มีนาคม',
        May                  : 'พ.ค.',
        Month                : 'เดือน',
        'Multi Days'         : 'หลายวัน',
        Nov                  : 'พ.ย.',
        Oct                  : 'ต.ค.',
        October              : 'ตุลาคม',
        Print                : 'พิมพ์',
        Reload               : 'โหลดใหม่',
        'Reset database'     : 'รีเซ็ตฐานข้อมูล',
        'Reset to default'   : 'รีเซ็ตเป็นค่าเริ่มต้น',
        Resourceview         : 'มุมมองทรัพยากร',
        Save                 : 'บันทึก',
        Sep                  : 'ก.ย.',
        September            : 'กันยายน',
        Timeline             : 'ไทม์ไลน์',
        Today                : 'วันนี้',
        'Two weeks'          : 'สองสัปดาห์',
        Week                 : 'สัปดาห์',
        'Week Agenda'        : 'วาระการประชุมประจำสัปดาห์',
        Weekends             : 'วันหยุดสุดสัปดาห์',
        Year                 : 'ปี',
        'Zoom to events'     : 'ซูมไปที่เหตุการณ์'
    },

    Checkbox : {
        'Custom styles'                   : 'สไตล์ที่กำหนดเอง',
        'Fit events'                      : 'ปรับเหตุการณ์ให้พอดี',
        'Fit timeline to available space' : 'ปรับไทม์ไลน์ให้พอดีกับพื้นที่ที่มี',
        'Full width'                      : 'เต็มความกว้าง',
        'Hide borders'                    : 'ซ่อนขอบ',
        'Hide empty hours'                : 'ซ่อนชั่วโมงว่าง',
        'Hide time axes'                  : 'ซ่อนแกนเวลา',
        'Hide unscheduled resources'      : 'ซ่อนทรัพยากรที่ไม่ได้กำหนดเวลา',
        'Hide weekends'                   : 'ซ่อนวันหยุดสุดสัปดาห์',
        'On top'                          : 'ด้านบน',
        'Show avatar'                     : 'แสดงอวาตาร์',
        'Show core hours in day'          : 'แสดงชั่วโมงหลักในวัน',
        'Show time'                       : 'แสดงเวลา',
        'Stack events vertically'         : 'จัดเหตุการณ์ในแนวตั้ง',
        'Sync hour heights'               : 'ซิงค์ความสูงของชั่วโมง'
    },

    Slider : {
        'Hour height'    : 'ความสูงของชั่วโมง',
        'Resource width' : 'ความกว้างของทรัพยากร',
        Scale            : 'มาตราส่วน'
    },

    Combo : {
        'Choose show' : 'เลือกการแสดง',
        Equipment     : 'อุปกรณ์',
        'Timezone:'   : 'เขตเวลา:'
    },

    Label : {
        Days             : 'วัน',
        Months           : 'เดือน',
        'Resource width' : 'ความกว้างของทรัพยากร'
    },

    NumberField : {
        Every                      : 'ทุก',
        'Max events per cell'      : 'เหตุการณ์สูงสุดต่อเซลล์',
        'Scroll to hour'           : 'เลื่อนไปที่ชั่วโมง',
        'Snap increment (minutes)' : 'เพิ่มทีละ (นาที)'
    },

    TextField : {
        'Filter resources'  : 'กรองทรัพยากร',
        Name                : 'ชื่อ',
        'Type to filter...' : 'พิมพ์เพื่อกรอง...'
    },

    Tooltip : {
        'Events will be fitted upon navigation when checked'                  : 'เหตุการณ์จะถูกปรับให้พอดีเมื่อมีการนำทางเมื่อเลือก',
        'Fit events within scroll range'                                      : 'ปรับเหตุการณ์ให้พอดีภายในช่วงการเลื่อน',
        Friday                                                                : 'วันศุกร์',
        Monday                                                                : 'วันจันทร์',
        'Print the currently active view'                                     : 'พิมพ์มุมมองที่ใช้งานอยู่ในปัจจุบัน',
        Saturday                                                              : 'วันเสาร์',
        'Select admin mode to allow editing and rescheduling of performances' : 'เลือกโหมดผู้ดูแลระบบเพื่ออนุญาตให้แก้ไขและจัดตารางการแสดงใหม่',
        Settings                                                              : 'การตั้งค่า',
        'Show the weekends'                                                   : 'แสดงวันหยุดสุดสัปดาห์',
        Sunday                                                                : 'วันอาทิตย์',
        Thursday                                                              : 'วันพฤหัสบดี',
        Tuesday                                                               : 'วันอังคาร',
        Wednesday                                                             : 'วันพุธ'
    },

    SlideToggle : {
        'Hide completed' : 'ซ่อนที่เสร็จสิ้น'
    }
};

export default LocaleHelper.publishLocale(locale);
