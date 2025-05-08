import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { calendarProps } from './app.config';
import { BryntumCalendarComponent } from '@bryntum/calendar-angular';

import { Calendar } from '@bryntum/calendar';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

    // Bryntum Calendar Angular wrapper reference
    @ViewChild(BryntumCalendarComponent) calendarComponent! : BryntumCalendarComponent;

    calendar!: Calendar;

    calendarProps = calendarProps;

    ngAfterViewInit() : void {
        // Store calendar instance
        this.calendar = this.calendarComponent.instance;
    }
}
