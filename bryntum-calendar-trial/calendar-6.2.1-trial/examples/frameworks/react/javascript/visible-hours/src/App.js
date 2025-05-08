/**
 * The React App file
 */

// React libraries
import React, { Fragment } from 'react';

// Stylings
import './App.scss';

// Application components
import { BryntumDemoHeader } from '@bryntum/calendar-react';
import { Toast } from '@bryntum/calendar';
import Calendar from './components/Calendar';

const App = () => {
    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <Calendar />
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
