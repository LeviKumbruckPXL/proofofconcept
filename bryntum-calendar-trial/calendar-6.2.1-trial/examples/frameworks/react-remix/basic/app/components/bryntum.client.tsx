import { BryntumDemoHeader, BryntumCalendar } from '@bryntum/calendar-react';
import { calendarProps } from './app.config';

const BryntumClient = () => {
    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader/>
            <BryntumCalendar
                {...calendarProps}
            />
        </>
    );
};

export default BryntumClient;
