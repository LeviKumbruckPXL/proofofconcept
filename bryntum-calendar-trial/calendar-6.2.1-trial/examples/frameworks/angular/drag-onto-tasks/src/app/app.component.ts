import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BryntumCalendarComponent, BryntumGridComponent } from '@bryntum/calendar-angular';
import { calendarProps, equipmentGridProps, equipmentStore } from './app.config';
import type { Calendar, Combo, Grid } from '@bryntum/calendar';
import Drag from 'src/lib/drag';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild(BryntumCalendarComponent) calendarComponent!: BryntumCalendarComponent;
    @ViewChild(BryntumGridComponent) gridComponent!: BryntumGridComponent;
    private calendar!: Calendar;
    private grid!: Grid;

    // calendar & grid configuration
    calendarProps = calendarProps;
    gridProps     = equipmentGridProps;

    ngAfterViewInit(): void {
        // Calendar and Grid instance
        this.calendar = this.calendarComponent.instance;
        this.grid     = this.gridComponent.instance;

        if (this.calendar && this.grid) {

            const
                // Assign grid store to equipmentStore
                gridStore      = this.grid.store = equipmentStore,
                equipmentCombo = this.calendar.features.eventEdit.editor.widgetMap['equipment'] as Combo;

            // Use a chained Store to avoid it's filtering to interfere with calendar's rendering
            equipmentCombo.store = gridStore.chain();

            new Drag({
                grid         : this.grid,
                calendar     : this.calendar,
                outerElement : this.grid.element
            });
        }
    }
}
