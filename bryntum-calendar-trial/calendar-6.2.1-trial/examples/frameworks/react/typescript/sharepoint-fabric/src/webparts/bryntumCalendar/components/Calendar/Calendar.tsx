import { BryntumCalendar } from '@bryntum/calendar-react-thin';
import React from 'react';
import { ICalendarProps } from './ICalendarProps';

import { calendarConfig } from './CalendarConfig';

// import css theme
import '@bryntum/core-thin/core.stockholm.css';
import '@bryntum/grid-thin/grid.stockholm.css';
import '@bryntum/scheduler-thin/scheduler.stockholm.css';
import '@bryntum/calendar-thin/calendar.stockholm.css';

/**
 * Calendar React component.
 *
 * This component renders the Bryntum Calendar widget.
 */
export default class Calendar extends React.Component<ICalendarProps> {

    constructor(props: Readonly<ICalendarProps>) {
        super(props);
        // Add a reference to the calendar engine in the service
        props.service.calendarRef = React.createRef();
    }

    public render(): React.ReactNode {
        return <BryntumCalendar
            ref={this.props.service.calendarRef}

            crudManager={this.props.service.getTaskListModel()}

            {...calendarConfig}
        />;
    }

    public shouldComponentUpdate(): boolean {
        // This component should never update
        return false;
    }
}
