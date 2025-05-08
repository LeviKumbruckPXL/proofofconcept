import { BryntumCalendarProps } from '@bryntum/calendar-react-thin';
import '@bryntum/calendar-thin'; // Makes the resourceInfo column type available
import styles from '../App.module.scss';

export const calendarConfig: Partial<BryntumCalendarProps> = {

    cls : styles.calendar,

    mode : 'week',

    date: new Date(2024, 5, 13),

    modes : {
        week : {
            // Show avatars in last position
            showResourceAvatars : 'last'
        }
    },

    sidebar : {
        items : {
            datePicker : {
                // highlight the selected cell's week row
                highlightSelectedWeek : true
            }
        }
    }
};
