import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BryntumCalendarComponent } from '@bryntum/calendar-angular';
import { Calendar, Checkbox, FilterField, MonthView, ResourceFilter, Store } from '@bryntum/calendar';
import { calendarProps } from './app.config';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
    @ViewChild(BryntumCalendarComponent) calendarComponent: BryntumCalendarComponent;

    private calendar: Calendar;
    private resourceFilter: ResourceFilter;
    private resourceFilterFilter: FilterField;
    private autoRowHeight: Checkbox;

    // calendar configuration
    calendarProps = calendarProps;

    onActiveItemChange({ activeItem }: { activeItem: any }): void {
        // Only meaningful if we are on the month view
        this.autoRowHeight.disabled = activeItem.modeName !== 'month';
    }

    onAutoRowHeightChanged({ checked }: { checked: boolean }): void {
        (this.calendar.modes as { month: MonthView }).month.autoRowHeight = checked;
    }

    // Called as the resourceFilterFilter's onChange handler
    onResourceFilterFilterChange({ value }: { value: string }): void {
        // A filter with an id replaces any previous filter with that id.
        // Leave any other filters which may be in use in place.
        (this.resourceFilter.store as Store).filter({
            id       : 'resourceFilterFilter',
            filterBy : r => r.name.toLowerCase().startsWith(value.toLowerCase()) // a function which returns true to include the record
        });
    }

    /**
     * Called after View is initialized
     */
    ngAfterViewInit(): void {
        this.calendar             = this.calendarComponent.instance;
        const { widgetMap }       = this.calendar;
        this.autoRowHeight        = widgetMap['autoRowHeight'] as Checkbox;
        this.resourceFilterFilter = widgetMap['resourceFilterFilter'] as FilterField;
        this.resourceFilter       = widgetMap['resourceFilter'] as ResourceFilter;

        this.autoRowHeight.on({
            change  : this.onAutoRowHeightChanged,
            thisObj : this
        });
        this.resourceFilterFilter.on({
            change  : this.onResourceFilterFilterChange,
            thisObj : this
        });
    }
}
