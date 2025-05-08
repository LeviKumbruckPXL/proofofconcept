import { BryntumCalendar, BryntumDemoHeader } from '@bryntum/calendar-react';
import { calendarConfig } from './AppConfig';

// Demo styling is used for Bryntum example only. Not required for application
import '@bryntum/demo-resources/scss/example.scss';

function App() {
    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader/>
            <BryntumCalendar {
                ...calendarConfig
            } />
        </>
    );
}

export default App;
