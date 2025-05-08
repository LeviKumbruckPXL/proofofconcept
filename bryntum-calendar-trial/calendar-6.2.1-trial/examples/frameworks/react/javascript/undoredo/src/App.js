/**
 * Application
 */
import React from 'react';

import { BryntumCalendar, BryntumDemoHeader } from '@bryntum/calendar-react';
import { Toast } from '@bryntum/calendar';

import { calendarConfig } from './AppConfig';

import './App.scss';

function App() {
    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumCalendar
                {...calendarConfig}
            />
        </>
    );
}

export default App;


Toast.show({
    color : 'b-orange',
    html  : `
    <p style="color:white;">This demo was created with <strong>Create React App</strong> (CRA).</p>
    <p style="color:white;">Since CRA is deprecated, we recommend you to check out our React Vite demos.</p>
`,
    timeout : 10000
});
