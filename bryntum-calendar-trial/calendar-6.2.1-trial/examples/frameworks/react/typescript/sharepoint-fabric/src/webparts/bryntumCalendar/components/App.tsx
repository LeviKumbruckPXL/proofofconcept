import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { IAppProps } from './IAppProps';
import Calendar from './Calendar/Calendar';
import { Toast } from '@bryntum/core-thin';

/**
 * The WebPart App component. Includes the Calendar Component
 *
 * @param props
 * @constructor
 */
const App: React.FC<IAppProps> = props => {

    // Listen for property changes on the listId
    useEffect(() => {
        // Will trigger a loading operation on the provided listId
        props.service.listId = props.listId;
    }, [props.listId]);

    return (
        <>
            <div className={styles.app}>
                <div className={styles.container}>
                    <Calendar
                        service={props.service}
                    />
                </div>
            </div>
        </>
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
