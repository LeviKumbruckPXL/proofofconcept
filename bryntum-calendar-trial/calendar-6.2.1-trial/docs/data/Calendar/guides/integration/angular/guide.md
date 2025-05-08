<h1 class="title-with-image"><img src="Core/logo/angular.svg" alt="Bryntum Calendar supports Angular"/>
Using Bryntum Calendar with Angular</h1>

## Version requirements

Minimum supported:

* Angular: `9.0.0` or higher
* TypeScript: `3.6.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)

Recommended:

* Angular: `12.0.0` or higher
* TypeScript: `4.0.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)

## Bryntum NPM repository access

Please refer to this [guide for Bryntum NPM repository access](#Calendar/guides/npm-repository.md).

## Bryntum Calendar

The Bryntum Calendar itself is framework-agnostic, but it ships with demos and wrappers to simplify its use with popular
frameworks such as Angular. The purpose of this guide is to give you a basic introduction on how to use Bryntum Calendar
with Angular.

## View online demos

Bryntum Calendar Angular demos can be viewed in our [online example browser](https://bryntum.com/products/calendar/examples/?framework=angular).

## IVY and View Engine wrappers

Bryntum Calendar comes with two npm Angular wrapper packages to support different versions of Angular framework.

<div class="docs-tabs" data-name="angular">
<div>
    <a>IVY</a>
    <a>View Engine</a>
</div>
<div>

<code>@bryntum/calendar-angular</code> is designed to work with Angular 12 and newer versions, which use the IVY rendering
engine. It is <strong>recommended</strong> to use this package if possible. Follow these steps to use the package:

Install the package using npm:

```shell
npm install @bryntum/calendar-angular@6.2.1
```

Import the component in your Angular application:

```typescript
import { BryntumCalendarComponent } from '@bryntum/calendar-angular';
```

</div>
<div>

<p>
<code>@bryntum/calendar-angular-view</code> is designed to work with Angular 11 and older versions, which use the View Engine
for rendering. If you are using one of the legacy Angular versions, you can follow these steps to use the
package:</p>

<p>Install the package using npm:</p>

```shell
npm install @bryntum/calendar-angular-view@6.2.1
```

<p>Import the component in your Angular application:</p>

```typescript
import { BryntumCalendarComponent } from '@bryntum/calendar-angular-view';
```

<p>You may also install View Engine package with npm aliasing and import classes from <code>@bryntum/calendar-angular</code>:</p>

```shell
npm install @bryntum/calendar-angular@npm@bryntum/calendar-angular-view@6.2.1
```

<p>Import the component in your Angular application:</p>

```typescript
import { BryntumCalendarComponent } from '@bryntum/calendar-angular';
```
</div>
</div>

<div class="note">

Do not forget to change wrapper package name accordingly when you import classes.

</div>

## Build and run local demos

Download distribution zip with demos according to this [guide](#Calendar/guides/download.md#distribution).

Angular demos are located in **examples/frameworks/angular** folder inside distribution zip.

Each demo contains bundled `README.md` file in demo folder with build and run instructions.

To view and run an example locally in development mode, you can use the following commands:

```shell
npm install
npm run start
```

That starts a local server accessible at [http://localhost:4200](http://localhost:4200). If
you modify the example code while running it locally it is automatically rebuilt and updated in the browser allowing you
to see your changes immediately.

The production version of an example, or your application, is built by running:

```shell
npm install
npm run build
```

The built version is then located in `dist` sub-folder which contains the compiled code that can be deployed to your
production server.

The demos have been created with [Angular CLI](https://cli.angular.io/)</a>
by `ng new [example-name]` and then implemented using the Bryntum Calendar wrappers. You can refer to an example while
studying this guide to get more information on the implementation.

## TypeScript and Typings

Bryntum bundles ship with typings for the classes for usage in TypeScript applications. You can find `calendar*.d.ts`
files in the `build` folder inside the distribution zip package. The definitions also contain a special config type
which can be passed to the class constructor.

The config specific types are also accepted by multiple other properties and functions, for example
the [Store.data](#Core/data/Store#config-data) config of the `Store` which accepts type `ModelConfig[]`.

Sample code for tree store creation with `ModelConfig` and `StoreConfig` classes:

```typescript
import { Store, StoreConfig, ModelConfig } from '@bryntum/calendar';

const storeConfig: StoreConfig = {
    tree : true,
    data : [
        {
            id       : 1,
            children : [
                {
                    id : 2
                }
            ] as ModelConfig[]
        }
    ] as ModelConfig[]
};

new Store(storeConfig);
```

## Wrappers

The Angular wrappers encapsulate Bryntum Calendar and other Bryntum widgets in Angular components that expose
configuration options, properties, features and events. The wrapped all Bryntum UI components so they can be used the
usual Angular way.

To use native API package classes with wrappers import them from `@bryntum/calendar`.

```typescript
import { Calendar } from '@bryntum/calendar';
```

### Installing the wrappers package

The wrappers are distributed as a separate package `@bryntum/calendar-angular` that is installed according to the used
package manager. Please refer to this [guide for Bryntum NPM repository access](#Calendar/guides/npm-repository.md).

### Wrappers Overview

Wrappers are Angular components which provide full access to Bryntum API widget class configs, properties, events and
features. Each Wrapper has it's own HTML tag which can be used in angular templates. This is the list of available
wrappers for Bryntum Calendar Angular package:

| Wrapper tag name                                | API widget reference                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------- |
| &lt;bryntum-agenda-view/&gt;                    | [AgendaView](#Calendar/widget/AgendaView)                             |
| &lt;bryntum-button/&gt;                         | [Button](#Core/widget/Button)                                         |
| &lt;bryntum-button-group/&gt;                   | [ButtonGroup](#Core/widget/ButtonGroup)                               |
| &lt;bryntum-calendar/&gt;                       | [Calendar](#Calendar/view/Calendar)                                   |
| &lt;bryntum-calendar-date-picker/&gt;           | [CalendarDatePicker](#Calendar/widget/CalendarDatePicker)             |
| &lt;bryntum-checkbox/&gt;                       | [Checkbox](#Core/widget/Checkbox)                                     |
| &lt;bryntum-checkbox-group/&gt;                 | [CheckboxGroup](#Core/widget/CheckboxGroup)                           |
| &lt;bryntum-checklist-filter-combo/&gt;         | [ChecklistFilterCombo](#Grid/widget/ChecklistFilterCombo)             |
| &lt;bryntum-chip-view/&gt;                      | [ChipView](#Core/widget/ChipView)                                     |
| &lt;bryntum-code-editor/&gt;                    | [CodeEditor](#Core/widget/CodeEditor)                                 |
| &lt;bryntum-color-field/&gt;                    | [ColorField](#Core/widget/ColorField)                                 |
| &lt;bryntum-combo/&gt;                          | [Combo](#Core/widget/Combo)                                           |
| &lt;bryntum-container/&gt;                      | [Container](#Core/widget/Container)                                   |
| &lt;bryntum-date-field/&gt;                     | [DateField](#Core/widget/DateField)                                   |
| &lt;bryntum-date-picker/&gt;                    | [DatePicker](#Core/widget/DatePicker)                                 |
| &lt;bryntum-date-range-field/&gt;               | [DateRangeField](#Core/widget/DateRangeField)                         |
| &lt;bryntum-date-time-field/&gt;                | [DateTimeField](#Core/widget/DateTimeField)                           |
| &lt;bryntum-day-agenda-view/&gt;                | [DayAgendaView](#Calendar/widget/DayAgendaView)                       |
| &lt;bryntum-day-resource-view/&gt;              | [DayResourceView](#Calendar/widget/DayResourceView)                   |
| &lt;bryntum-day-view/&gt;                       | [DayView](#Calendar/widget/DayView)                                   |
| &lt;bryntum-demo-code-editor/&gt;               | [DemoCodeEditor](#Core/widget/DemoCodeEditor)                         |
| &lt;bryntum-display-field/&gt;                  | [DisplayField](#Core/widget/DisplayField)                             |
| &lt;bryntum-duration-field/&gt;                 | [DurationField](#Core/widget/DurationField)                           |
| &lt;bryntum-editor/&gt;                         | [Editor](#Core/widget/Editor)                                         |
| &lt;bryntum-event-color-field/&gt;              | [EventColorField](#Scheduler/widget/EventColorField)                  |
| &lt;bryntum-field-filter-picker/&gt;            | [FieldFilterPicker](#Core/widget/FieldFilterPicker)                   |
| &lt;bryntum-field-filter-picker-group/&gt;      | [FieldFilterPickerGroup](#Core/widget/FieldFilterPickerGroup)         |
| &lt;bryntum-field-set/&gt;                      | [FieldSet](#Core/widget/FieldSet)                                     |
| &lt;bryntum-file-field/&gt;                     | [FileField](#Core/widget/FileField)                                   |
| &lt;bryntum-file-picker/&gt;                    | [FilePicker](#Core/widget/FilePicker)                                 |
| &lt;bryntum-filter-field/&gt;                   | [FilterField](#Core/widget/FilterField)                               |
| &lt;bryntum-grid/&gt;                           | [Grid](#Grid/view/Grid)                                               |
| &lt;bryntum-grid-base/&gt;                      | [GridBase](#Grid/view/GridBase)                                       |
| &lt;bryntum-grid-field-filter-picker/&gt;       | [GridFieldFilterPicker](#Grid/widget/GridFieldFilterPicker)           |
| &lt;bryntum-grid-field-filter-picker-group/&gt; | [GridFieldFilterPickerGroup](#Grid/widget/GridFieldFilterPickerGroup) |
| &lt;bryntum-group-bar/&gt;                      | [GroupBar](#Grid/widget/GroupBar)                                     |
| &lt;bryntum-hint/&gt;                           | [Hint](#Core/widget/Hint)                                             |
| &lt;bryntum-label/&gt;                          | [Label](#Core/widget/Label)                                           |
| &lt;bryntum-list/&gt;                           | [List](#Core/widget/List)                                             |
| &lt;bryntum-menu/&gt;                           | [Menu](#Core/widget/Menu)                                             |
| &lt;bryntum-mode-selector/&gt;                  | [ModeSelector](#Calendar/widget/ModeSelector)                         |
| &lt;bryntum-month-agenda-view/&gt;              | [MonthAgendaView](#Calendar/widget/MonthAgendaView)                   |
| &lt;bryntum-month-picker/&gt;                   | [MonthPicker](#Core/widget/MonthPicker)                               |
| &lt;bryntum-month-view/&gt;                     | [MonthView](#Calendar/widget/MonthView)                               |
| &lt;bryntum-number-field/&gt;                   | [NumberField](#Core/widget/NumberField)                               |
| &lt;bryntum-paging-toolbar/&gt;                 | [PagingToolbar](#Core/widget/PagingToolbar)                           |
| &lt;bryntum-panel/&gt;                          | [Panel](#Core/widget/Panel)                                           |
| &lt;bryntum-password-field/&gt;                 | [PasswordField](#Core/widget/PasswordField)                           |
| &lt;bryntum-project-combo/&gt;                  | [ProjectCombo](#Scheduler/widget/ProjectCombo)                        |
| &lt;bryntum-calendar-project-model/&gt;         | [ProjectModel](#Calendar/model/ProjectModel)                          |
| &lt;bryntum-radio/&gt;                          | [Radio](#Core/widget/Radio)                                           |
| &lt;bryntum-radio-group/&gt;                    | [RadioGroup](#Core/widget/RadioGroup)                                 |
| &lt;bryntum-range-menu/&gt;                     | [RangeMenu](#Calendar/widget/RangeMenu)                               |
| &lt;bryntum-resource-combo/&gt;                 | [ResourceCombo](#Scheduler/widget/ResourceCombo)                      |
| &lt;bryntum-resource-filter/&gt;                | [ResourceFilter](#Scheduler/widget/ResourceFilter)                    |
| &lt;bryntum-resource-view/&gt;                  | [ResourceView](#Calendar/widget/ResourceView)                         |
| &lt;bryntum-scheduler/&gt;                      | [Scheduler](#Scheduler/view/Scheduler)                                |
| &lt;bryntum-scheduler-base/&gt;                 | [SchedulerBase](#Scheduler/view/SchedulerBase)                        |
| &lt;bryntum-scheduler-date-picker/&gt;          | [SchedulerDatePicker](#Scheduler/widget/SchedulerDatePicker)          |
| &lt;bryntum-slider/&gt;                         | [Slider](#Core/widget/Slider)                                         |
| &lt;bryntum-slide-toggle/&gt;                   | [SlideToggle](#Core/widget/SlideToggle)                               |
| &lt;bryntum-splitter/&gt;                       | [Splitter](#Core/widget/Splitter)                                     |
| &lt;bryntum-tab-panel/&gt;                      | [TabPanel](#Core/widget/TabPanel)                                     |
| &lt;bryntum-text-area-field/&gt;                | [TextAreaField](#Core/widget/TextAreaField)                           |
| &lt;bryntum-text-area-picker-field/&gt;         | [TextAreaPickerField](#Core/widget/TextAreaPickerField)               |
| &lt;bryntum-text-field/&gt;                     | [TextField](#Core/widget/TextField)                                   |
| &lt;bryntum-time-field/&gt;                     | [TimeField](#Core/widget/TimeField)                                   |
| &lt;bryntum-timeline-histogram/&gt;             | [TimelineHistogram](#Scheduler/view/TimelineHistogram)                |
| &lt;bryntum-time-picker/&gt;                    | [TimePicker](#Core/widget/TimePicker)                                 |
| &lt;bryntum-toolbar/&gt;                        | [Toolbar](#Core/widget/Toolbar)                                       |
| &lt;bryntum-tree-combo/&gt;                     | [TreeCombo](#Grid/widget/TreeCombo)                                   |
| &lt;bryntum-tree-grid/&gt;                      | [TreeGrid](#Grid/view/TreeGrid)                                       |
| &lt;bryntum-undo-redo/&gt;                      | [UndoRedo](#Scheduler/widget/UndoRedo)                                |
| &lt;bryntum-view-preset-combo/&gt;              | [ViewPresetCombo](#Scheduler/widget/ViewPresetCombo)                  |
| &lt;bryntum-week-view/&gt;                      | [WeekView](#Calendar/widget/WeekView)                                 |
| &lt;bryntum-widget/&gt;                         | [Widget](#Core/widget/Widget)                                         |
| &lt;bryntum-year-picker/&gt;                    | [YearPicker](#Core/widget/YearPicker)                                 |
| &lt;bryntum-year-view/&gt;                      | [YearView](#Calendar/widget/YearView)                                 |

### Import BryntumCalendarModule

Add the following code to your `app.module.ts`:

```typescript
import { BryntumCalendarModule } from '@bryntum/calendar-angular'

@NgModule({
    imports : [
        BryntumCalendarModule
    ]
})
```

Then you will be able to use the custom tag like `<bryntum-calendar>` and others listed above the same way as you use
your application components. Our examples are built this way so you can refer to them to see how to use the tag and how
to pass parameters.

### Using the wrapper in your application

Now you can use the component defined in the wrapper in your application:

```html
<bryntum-calendar
    #calendar
    tooltip = "My cool Bryntum Calendar component",
    (onCatchAll) = "onCalendarEvents($event)"
    // other configs, properties, events or features
></bryntum-calendar>
```

You will also need to import CSS file for Bryntum Calendar. We recommend doing it in `src/styles.scss`:

```typescript
@import "@bryntum/calendar/calendar.material.css";

// other application-global styling
```

### Embedding widgets inside wrapper

Wrappers are designed to allow using Bryntum widgets as Angular components, but they themselves cannot contain other
Bryntum wrappers inside their tag. To embed Bryntum widgets inside a wrapper, you should instead use the available
configuration options for the wrapper's widget. Please note that not all widgets may contain inner widgets, please refer
to the API docs to check for valid configuration options.

This example shows how to use a `Toolbar` widget inside the wrapper for Bryntum Calendar:

Sample code for `app.component.ts`:

```typescript
export class AppComponent {

    // Toolbar (tbar) config
    tbarConfig = {
        items : [
            {
                type : 'button',
                text : 'My button'
            }
        ]
    }

}
```

Sample code for `app.component.html`:

```html
<bryntum-calendar
    #calendar
    [tbar]="tbarConfig"
></bryntum-calendar>
```

## View Encapsulations

Angular provides 3 options for `ViewEncapsulation`: `Emulated` (default), `None` and `ShadowDom`, two of which are fully supported by Bryntum.

### View Encapsulation.Emulated

The default encapsulation, when active, modifies styles defined and imported in the component's (s)css file so that styles do not leak into the rest of the application. The Bryntum theme imported therein is also modified. For example:

```css
.b-fa {
  font-family:var(--b-fa-style-family, "Font Awesome 6 Free");
  font-weight:var(--b-fa-style, 900);
}
```

is changed to:

```css
.b-fa[_ngcontent-ng-c2992155993] {
  font-family:var(--b-fa-style-family, "Font Awesome 6 Free");
  font-weight:var(--b-fa-style, 900);
}
```

Should the `b-fa` CSS class be used in the component's html template, the class name would be changed as well and it would become `.b-fa[_ngcontent-ng-c2992155993]`. The scope of css classes is this way scoped to the component only.

The problem here is that the html of Bryntum Calendar is not generated by Angular but by the underlying JavaScript code. Therefore, the modified CSS classes are not understood and the Calendar is not styled at all.

The solution would be to import Bryntum Calendar theme in `styles.scss` which makes it global when no CSS class name mangling takes place so they are understood and properly applied to Bryntum Calendar. The styles defined in component's (s)css file are still scoped to the component only and can be used for html which is not Calendar.

This is a partial support.

### ViewEncapsulation.None

This is the easiest way because no modification of CSS classes takes place so the Bryntum Calendar theme can be imported either in `styles.scss` or in component's (s)css file.

This is the full support.

### ViewEncapsulation.ShadowDom

If this encapsulation method is used, Bryntum Calendar is generated into a shadow root element and therefore there are several things to do at the application level to make it working fully. First of all, the Bryntum Calendar theme **has to be imported in the component's (s)css file**. The reason for it is that Angular then ensures the styles are copied from the theme file to the shadow root element from where they are applied to the Calendar.

The only remaining problem to solve is fonts. Fonts are not copied and reference to them is broken by copying styles to shadow root. This can be solved in either of the following two ways.

#### Add Font Faces to `styles.scss`:

```css
@font-face {
    font-family : Roboto;
    font-style  : normal;
    font-weight : 400;
    src         :
        url("../node_modules/@bryntum/calendar/fonts/Roboto-Regular.woff2") format("woff2"),
        url("../node_modules/@bryntum/calendar/fonts/Roboto-Regular.woff") format("woff");
}

@font-face {
    font-family  : "Font Awesome 6 Free";
    font-style   : normal;
    font-weight  : 900;
    font-display : block;
    src          :
        url("../node_modules/@bryntum/calendar/fonts/fa-solid-900.woff2") format("woff2"),
        url("../node_modules/@bryntum/calendar/fonts/fa-solid-900.ttf") format("truetype");
}
```

This approach is used in [Scheduler Animations demo](https://bryntum.com/products/scheduler/examples/frameworks/angular/animations/). This demo also shows how to access the shadow root element in the code.

#### Add Font Faces in `ngAfterViewInit`:

You can also add the required font faces at runtime:

```typescript
    ngAfterViewInit(): void {
        // The following lines are only needed for ViewEncapsulation.ShadowDom
        document.fonts.add(new FontFace('FontAwesome6Free', `url(assets/fonts/fa-solid-900.woff2)`));
        document.fonts.add(new FontFace('Roboto', `url(assets/fonts/Roboto-Regular.woff2)`));
    }
```

You will also need to modify the default `tsconfig.json` file to add `DOM.Iterable`:

```json
  "compilerOptions": {
    // other options
    "lib": [
      "ES2022",
      "dom",
      "DOM.Iterable"
    ]
```

The last thing to add is fonts directory to assets in `angular.json`:

```json
// other options
"assets": [
    "src/assets",
    {
        "glob": "**/*",
        "input": "node_modules/@bryntum/calendar/fonts",
        "output": "assets/fonts"
    },
]
```

This approach is used in [Scheduler Basic demo](https://bryntum.com/products/scheduler/examples/frameworks/angular/basic/).

## Using Angular components as renderers

To use an Angular component as column renderer, header renderer, tooltip renderer or any other renderer, create a
component first (`src/app/tooltip-renderer/tooltip-renderer.component.ts`)

```typescript
/**
 * Tooltip renderer component
 */
import { Component, Input } from '@angular/core';

@Component({
    selector : 'event-tooltip-renderer',
    template : `
        <h3>Custom tooltip</h3>
        <p>Destination : {{ destination }}</p>
    `
})
export class EventRendererComponent {

    @Input() destination : string;

}
```

Next, inject the custom element in the `src/app/app.module.ts`

```typescript
// The component used for custom tag definition
import { ToolTipRenderer } from './tooltip-renderer/tooltip-renderer.component';

// Function to create the custom element
import { createCustomElement } from '@angular/elements';

// ... other required imports

@NgModule({
    declarations : [
        AppComponent,
        ToolTipRenderer
    ],
    // These component(s) will be converted to Custom Elements
    entryComponents : [
        ToolTipRenderer
    ],
    imports : [
        BrowserModule,
        BryntumCalendarModule
    ],
    providers : [],
    bootstrap : [AppComponent]
})

export class AppModule {
    constructor(injector: Injector) {
        // convert Angular Component to Custom Element and register it with browser
        customElements.define('tooltip-renderer', createCustomElement(ToolTipRenderer, { injector }));
    }
}
```

The above renderer can be then used, for example, as a tooltip renderer:

```typescript
features : {
    // enable EventTooltip and configure a renderer
    eventTooltip : {
        renderer : ({ eventRecord }) => {
            return `<tooltip-renderer event="${eventRecord}"></tooltip-renderer>`
        }
    }
},
```

This approach is used in
[Grid Angular Renderer demo](https://bryntum.com/products/grid/examples/frameworks/angular/angular-renderer/)
and [Scheduler Angular Booking demo](https://bryntum.com/products/scheduler/examples/frameworks/angular/booking).
The renderers are used the same way also for Scheduler, Gantt, Calendar and others.

## Configs, properties and events

All Bryntum Angular Wrappers support the full set of the public configs, properties and events of a component.

## Features

Features are suffixed with `Feature` and act as both configs and properties for `BryntumCalendarComponent`. They are
mapped to the corresponding API features of the Bryntum Calendar `instance`.

This is a list of all `BryntumCalendarComponent` features:

| Wrapper feature name       | API feature reference                                         |
| -------------------------- | ------------------------------------------------------------- |
| dragFeature                | [CalendarDrag](#Calendar/feature/CalendarDrag)                |
| eventBufferFeature         | [EventBuffer](#Calendar/feature/EventBuffer)                  |
| eventCopyPasteFeature      | [EventCopyPaste](#Calendar/feature/EventCopyPaste)            |
| eventEditFeature           | [EventEdit](#Calendar/feature/EventEdit)                      |
| eventMenuFeature           | [EventMenu](#Calendar/feature/EventMenu)                      |
| eventTooltipFeature        | [EventTooltip](#Calendar/feature/EventTooltip)                |
| excelExporterFeature       | [ExcelExporter](#Calendar/feature/experimental/ExcelExporter) |
| externalEventSourceFeature | [ExternalEventSource](#Calendar/feature/ExternalEventSource)  |
| loadOnDemandFeature        | [LoadOnDemand](#Calendar/feature/LoadOnDemand)                |
| printFeature               | [Print](#Calendar/feature/print/Print)                        |
| scheduleMenuFeature        | [ScheduleMenu](#Calendar/feature/ScheduleMenu)                |
| scheduleTooltipFeature     | [ScheduleTooltip](#Calendar/feature/ScheduleTooltip)          |
| timeRangesFeature          | [TimeRanges](#Calendar/feature/TimeRanges)                    |
| weekExpanderFeature        | [WeekExpander](#Calendar/feature/WeekExpander)                |

### Configuring features

Most features are enabled by default, in which case you can disable them like this:

```javascript
const calendarProps = {
    // other config
   eventEditFeature : false
};
```

Others require you to enable them:

```javascript
const calendarProps = {
    // other config
    timeRangesFeature : {
        // configure timeRanges feature...
        headerWidth : 42
    },
    eventTooltipFeature : {
        // Configuration options are passed on to the tooltip instance
        // We want the tooltip's left edge aligned to the right edge of the event if possible.
        align : 'l-r'
    },
};
```

To learn more about configuration, visit the feature page from the **API Feature reference** table above.

## Bryntum Calendar API instance

It is important to know that the Angular `BryntumCalendarComponent` is **not** the native Bryntum Calendar instance, it is
a wrapper or an interface between the Angular application and the Bryntum Calendar itself.

All available configs, properties and features are propagated from the wrapper down to the underlying Bryntum Calendar
instance, but there might be situations when you want to access the Bryntum Calendar directly. That is fully valid
approach, and you are free to do it.

### Accessing the Bryntum Calendar instance

If you need to access Bryntum Calendar functionality not exposed by the wrapper, you can access the Bryntum Calendar instance
directly. Within the wrapper it is available under the `instance` property.

This simple example shows how you could use it:

app.component.html

```html
<bryntum-calendar
    #calendar
    tooltip = "My cool Bryntum Calendar component"
></bryntum-calendar>
```

Sample code for `app.component.ts`:

```typescript
import { BryntumCalendarComponent } from '@bryntum/calendar-angular';
import { Calendar } from '@bryntum/calendar';

export class AppComponent implements AfterViewInit {

    @ViewChild(BryntumCalendarComponent, { static : false }) calendarComponent: BryntumCalendarComponent;

    private calendar : Calendar;

    @ViewChild(BryntumCalendarComponent, { static : false }) calendarComponent: BryntumCalendarComponent;

    ngAfterViewInit(): void {
        // store Bryntum Calendar isntance
        this.calendar = this.calendarComponent.instance;
    }
}
```

When accessing `instance` directly, use wrapper's API widget reference docs from the list above to get available configs
and properties.

## Troubleshooting

Please refer to this [Troubleshooting guide](#Calendar/guides/integration/angular/troubleshooting.md).

## References

* Config options, features, events and methods [Bryntum Calendar API docs](#api)
* Visit [Angular Framework Homepage](https://angular.io)
* Post your questions to [Bryntum Support Forum](https://forum.bryntum.com/)
* [Contact us](https://bryntum.com/contact/)


<p class="last-modified">Last modified on 2025-04-23 11:55:08</p>