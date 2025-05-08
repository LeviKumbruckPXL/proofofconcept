import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BryntumCoreModule } from '@bryntum/core-angular-thin';
import { BryntumGridModule } from '@bryntum/grid-angular-thin';
import { BryntumSchedulerModule } from '@bryntum/scheduler-angular-thin';
import { BryntumCalendarModule } from '@bryntum/calendar-angular-thin';

import { AppComponent } from './app.component';

@NgModule({
    declarations : [AppComponent],
    imports      : [
        BrowserModule,
        BryntumCoreModule,
        BryntumGridModule,
        BryntumSchedulerModule,
        BryntumCalendarModule,
        FormsModule
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
