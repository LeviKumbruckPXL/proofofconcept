import { Component, ViewEncapsulation } from '@angular/core';
import { calendarProps } from './app.config';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})
export class AppComponent {
    // calendar configuration
    calendarProps = calendarProps;
}
