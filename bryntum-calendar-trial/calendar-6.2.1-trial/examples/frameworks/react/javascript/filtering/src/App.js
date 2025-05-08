/**
 * Application
 */
import React, { Fragment, useRef } from 'react';

import {
    BryntumCalendar,
    BryntumDemoHeader,
    BryntumTextField
} from '@bryntum/calendar-react';
import { Toast } from '@bryntum/calendar';
import { calendarConfig, filterConfig, highlightConfig } from './AppConfig';
import './App.scss';

const App = () => {
    const calendarRef = useRef(null);

    const filterChangeHandler = ({ value }) => {
        // We filter using a RegExp, so quote significant characters
        value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // A filter with an id replaces any previous filter with that id.
        // Leave any other filters which may be in use in place.
        calendarRef.current.instance.eventStore.filter({
            id       : 'eventNameFilter',
            filterBy : event => event.name.match(new RegExp(value, 'i'))
        });
    };
    const highlightChangeHandler = ({ value }) => {
        value = value.toLowerCase();
        const { instance } = calendarRef.current;
        const { eventStore } = instance;

        // Calendars refresh on any data change so suspend that.
        // We will trigger the store's change event when we're done.
        eventStore.suspendEvents();

        // Loop through all events in the store
        eventStore.forEach(task => {
            // The cls field is a DomClassList with add and remove methods
            if (value !== '' && task.name.toLowerCase().includes(value)) {
                task.cls.add('b-match');
            }
            else {
                task.cls.remove('b-match');
            }
        });

        eventStore.resumeEvents();

        // Announce that data has changed which will refresh UIs.
        eventStore.trigger('change');

        instance.element.classList[value.length > 0 ? 'add' : 'remove']('b-highlighting');
    };

    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <div className="demo-toolbar align-right">
                <BryntumTextField
                    onChange={filterChangeHandler}
                    {...filterConfig}
                />
                <BryntumTextField
                    onChange={highlightChangeHandler}
                    {...highlightConfig}
                />
            </div>
            <BryntumCalendar
                ref={calendarRef}
                {...calendarConfig}
            />
        </Fragment>
    );
};

export default App;


Toast.show({
    color : 'b-orange',
    html  : `
    <p style="color:white;">This demo was created with <strong>Create React App</strong> (CRA).</p>
    <p style="color:white;">Since CRA is deprecated, we recommend you to check out our React Vite demos.</p>
`,
    timeout : 10000
});
