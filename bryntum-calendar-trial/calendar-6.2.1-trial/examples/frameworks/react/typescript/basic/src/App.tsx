/**
 * Application
 */
import React, { Fragment, FunctionComponent, useRef, useEffect } from 'react';
import { BryntumDemoHeader, BryntumCalendar } from '@bryntum/calendar-react';
import { Toast } from '@bryntum/calendar';
import { calendarConfig } from './AppConfig';
import './App.scss';

const App: FunctionComponent = () => {
    const calendarRef = useRef<BryntumCalendar>(null);
    const calendarInstance = () => calendarRef.current?.instance;

    useEffect(() => {
        // This shows loading data
        // To load data automatically configure crudManager with `autoLoad : true`
        calendarInstance()?.crudManager.load();
    });

    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumCalendar
                ref = {calendarRef}
                {...calendarConfig}
            />
        </Fragment>
    );
};

export default App;

// <test>
!document.location.search.includes('test') &&
// </test>
Toast.show({
    color : 'b-orange',
    html  : `
    <p style="color:white;">This demo was created with <strong>Create React App</strong> (CRA).</p>
    <p style="color:white;">Since CRA is deprecated, we recommend you to check out our React Vite demos.</p>
`,
    timeout : 10000
});
