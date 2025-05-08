import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Calendar } from '@bryntum/calendar';
import { BryntumCalendarComponent } from '@bryntum/calendar-angular';
import { calendarProps } from './app.config';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild(BryntumCalendarComponent) calendarComponent!: BryntumCalendarComponent;

    private calendar!: Calendar;
    // calendar configuration
    calendarProps = calendarProps;

    ngAfterViewInit(): void {
        // Calendar instance
        this.calendar = this.calendarComponent.instance;
    }
}
