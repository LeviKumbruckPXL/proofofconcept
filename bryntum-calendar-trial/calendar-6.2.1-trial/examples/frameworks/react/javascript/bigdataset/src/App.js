/**
 * Application
 */
import React, { useRef, useEffect } from 'react';

import { BryntumCalendar, BryntumDemoHeader } from '@bryntum/calendar-react';
import { Toast } from '@bryntum/calendar';

import { calendarConfig } from './AppConfig';

import './App.scss';

function App() {
    const calendarRef = useRef();

    function onAutoRowHeightChanged({ checked }) {
        const calendar = calendarRef.current.instance;

        calendar.modes.month.autoRowHeight = checked;
    }

    function onActiveItemChange({ activeItem }) {
        const calendar = calendarRef.current.instance;
        // Only meaningful if we are on the month view
        calendar.widgetMap.autoRowHeight.disabled = activeItem.modeName !== 'month';
    }

    // Called as the resourceFilterFilter's onChange handler
    function onResourceFilterFilterChange({ value }) {
        const calendar = calendarRef.current.instance;
        // A filter with an id replaces any previous filter with that id.
        // Leave any other filters which may be in use in place.
        calendar.widgetMap.resourceFilter.store.filter({
            id       : 'resourceFilterFilter',
            filterBy : r => r.name.toLowerCase().startsWith(value.toLowerCase()) // a function which returns true to include the record
        });
    }

    useEffect(() => {
        const calendar = calendarRef.current.instance;

        calendar.widgetMap.autoRowHeight.on({ change : onAutoRowHeightChanged });
        calendar.widgetMap.resourceFilterFilter.on({ change : onResourceFilterFilterChange });
    }, []);

    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumCalendar
                ref={calendarRef}
                onActiveItemChange={onActiveItemChange}
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
