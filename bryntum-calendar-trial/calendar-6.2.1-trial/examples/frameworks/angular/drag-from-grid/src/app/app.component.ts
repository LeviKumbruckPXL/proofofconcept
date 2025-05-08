import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BryntumCalendarComponent } from '@bryntum/calendar-angular';
import { Calendar, Toast } from '@bryntum/calendar';
import { calendarProps, gridProps, projectProps } from './app.config';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
    @ViewChild(BryntumCalendarComponent) calendarComponent!: BryntumCalendarComponent;

    private calendar!: Calendar;

    calendarProps = calendarProps;
    gridProps = gridProps;
    projectProps = projectProps;

    /**
     * Called after View is initialized
     */
    ngAfterViewInit(): void {
        // Calendar instance
        this.calendar = this.calendarComponent.instance;

        Toast.show({
            timeout  : 3500,
            maxWidth : 480,
            html     : `<b>Note:</b> To show the unplanned tasks, this demo uses the <a href='https://bryntum.com/products/grid'>Bryntum Grid</a> component which is licensed separately.`
        });
    }
}
