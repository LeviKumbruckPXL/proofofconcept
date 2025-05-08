<h1 class="title-with-image"><img src="Core/logo/vue.svg"
alt="Bryntum Calendar supports Vue"/>Using Bryntum Calendar with Vue</h1>

## Version requirements

Minimum supported:

* Vue: `3.0.0` or higher
* TypeScript: `3.6.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)

Recommended:

* Vue: `3.0.0` or higher
* TypeScript: `4.0.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)

<div class="note">

Please note that since Vue 2 has reached end of life, we no longer maintain guides or components for it. We recommend
upgrading to Vue 3 for continued support and compatibility.

</div>

## Bryntum NPM repository access

Please refer to this [guide for Bryntum NPM repository access](#Calendar/guides/npm-repository.md).

## Bryntum Calendar

Bryntum Calendar itself is framework agnostic, but it ships with demos and wrappers to simplify using it with popular
frameworks such as Vue. The purpose of this guide is to give a basic introduction on how to use Bryntum Calendar with Vue.

## View online demos

Bryntum Calendar Vue demos can be viewed in our
[online example browser](https://bryntum.com/products/calendar/examples/?framework=vue).

## Build and run local demos

Download distribution zip with demos according to this [guide](#Calendar/guides/download.md#distribution).

Vue demos are located in **examples/frameworks/vue** and **examples/frameworks/vue-3** folders inside distribution zip.

Each demo contains bundled `README.md` file in demo folder with build and run instructions.

To view and run an example locally in development mode, you can use the following commands:

```shell
npm install
npm run start
```

That starts a local server accessible at [http://127.0.0.1:8080](http://127.0.0.1:8080). If you modify the example code
while running it locally it is automatically rebuilt and updated in the browser allowing you to see your changes
immediately.

The production version of an example, or your application, is built by running:

```shell
npm install
npm run build
```

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

The Vue wrappers encapsulate Bryntum Calendar and other Bryntum widgets in Vue components that expose
configuration options, properties, features and events. The wrapped all Bryntum UI components so they can be used the
usual Vue way.

To use native API package classes with wrappers import them from `@bryntum/calendar`.

```javascript
import { Calendar } from '@bryntum/calendar';
```

### Installing the wrappers package

The wrappers are distributed as a separate package `@bryntum/calendar-vue` that is installed according to the used
package manager. Please refer to this [guide for Bryntum NPM repository access](#Calendar/guides/npm-repository.md).

### Wrappers Overview

Wrappers are Vue components which provide full access to Bryntum API widget class configs, properties, events and
features. Each Wrapper has it's own HTML tag which can be used in vue templates. This is the list of available
wrappers for Bryntum Calendar Vue package:

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

### Using the wrapper in your application

Now you can use the component defined in the wrapper in your application:

Sample code for `App.vue`:

```html
<template>
    <bryntum-calendar
        ref="calendar"
        tooltip="calendarConfig.tooltip"
        v-bind="calendarConfig"
        @click="onClick"
    />
</template>

<script>

import { BryntumCalendar } from '@bryntum/calendar-vue';
import { calendarConfig } from './AppConfig';
import './components/ColorColumn.js';

export default {
    name: 'app',

    // local components
    components: {
        BryntumCalendar
    },
    data() {
        return { calendarConfig };
    }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
```

As shown above you can assign values and bind to Vue data with `tooltip="calendarConfig.tooltip"` or `v-bind` option.
Listen to events with `@click="onClick"`, or use `v-on`.

`AppConfig.js` should contain a simple Bryntum Calendar configuration.
We recommend to keep it in a separate file because it can become lengthy especially for more advanced configurations.

Sample code for `AppConfig.js`:

```javascript
export const calendarConfig =  {
    tooltip : "My cool Bryntum Calendar component"
    // Bryntum Calendar config options
};
```

Add `sass-loader` to your `package.json` if you used SCSS.

You will also need to import CSS file for Bryntum Calendar.
The ideal place for doing it is the beginning of `App.scss/App.css` that would be imported in `App.vue`:

```javascript
@import "~@bryntum/calendar/calendar.stockholm.css";
```

### Embedding widgets inside wrapper

Wrappers are designed to allow using Bryntum widgets as Vue components, but they themselves cannot contain other
Bryntum wrappers inside their tag. To embed Bryntum widgets inside a wrapper you should instead use the available
configuration options for the wrapper's widget. Please note that not all widgets may contain inner widgets, please refer
to the API docs to check for valid configuration options.

This example shows how to use a `Toolbar` widget inside the wrapper for Bryntum Calendar:

Sample code for `AppConfig.js`:

```javascript
export const calendarConfig =  {
    // Toolbar (tbar) config
    tbar: {
        items : [
            {
                type : 'button',
                text : 'My button'
            }
        ]
    }
    // Bryntum Calendar config options
};
```

### Syncing bound data changes

The stores used by the wrapper enable [syncDataOnLoad](#Core/data/Store#config-syncDataOnLoad) by default (Stores not
used by the wrapper have it disabled by default). It is done to make Vue column renderer update the value.
Without `syncDataOnLoad`, each time a new array of data is set to the store would apply the data as a completely new
dataset. With `syncDataOnLoad`, the new state is instead compared to the old, and the differences are applied.

<div class="note">

If you're using Vue3, avoid using <code>ref</code> to access any store (eventStore, resourceStore etc).
Vue 3 wraps the passed object in a JavaScript Proxy, which can cause unexpected issues. Use
it to get access to higher level component (Grid, Scheduler, and Gantt etc) and
then access the store.

</div>

## Using Vue component in widgets and tooltips

Any widget or tooltip content can be provided by a Vue component. There are several steps to implement that:

1. [Register Vue component globally](#Calendar/guides/integration/vue/guide.md#register-vue-component)
2. Configure `html` property for widgets or `renderer` for tooltips

For example, to configure a cell tooltip the following code is needed:

```javascript
cellTooltipFeature : {
    tooltipRenderer({ record }) {
        return {
            vue  : true, // Required flag
            is   : 'VueTooltip',
            bind : { record }
        };
    }
},
```

The return value of the renderer must be an object minimally with `vue: true` and `is` properties. The string value of
`is` is the component name registered in `main.js`.

To configure a widget the following code can be used:

```javascript
const propHello = ref('Hello');
const propWorld = ref('world!');

function handleMyClick() {
    // ...
}

const bbar = {
    items : [{
        type : 'widget',
        html : {
            vue  : true, // Required flag
            is   : 'VueWidget', // must be registered
            bind : { propHello, propWorld },
            on   : { myclick : handleMyClick }
        }
    }]
}
```

`bbar` can then be bound to a Calendar component. Properties `propHello` and `propWorld` are passed down to the
`VueWidget` component. Any changes of these properties are then reflected in `VueWidget`. Custom event `myclick`
is bound to the handler `handleMyClick`.

You can see the above examples in action in [this demo](https://bryntum.com/products/scheduler/examples/frameworks/vue-3-vite/widget-rendering/dist/).

## Configs, properties and events

All Bryntum Vue Wrappers support the full set of the public configs, properties and events of a component.

### Using dataChange event to synchronize data

Bryntum Calendar keeps all data in its stores, which are automatically synchronized with the UI and the user actions.
Nevertheless, it is sometimes necessary for the rest of the application to be informed about data changes. For that
it is easiest to use `dataChange` event.

```javascript
<template>
    <div>
        <bryntum-calendar
            ref="calendar"
            v-bind="calendarConfig"
            @datachange="syncData"
        />
    </div>
</template>

<script>
import { BryntumCalendar } from "@bryntum/calendar-vue";
import { calendarConfig } from "./AppConfig.js";

export default {
    name: "App",

    components: { BryntumCalendar },

    methods: {
        syncData({ store, action, records }) {
            console.log(`${store.id} changed. The action was: ${action}. Changed records: `, records);
            // Your sync data logic comes here
        }
    },

    data() {
        return { calendarConfig };
    }
};
</script>
```

### Wrapper configs

* `relayStoreEvents` - set it to `true` to relay events from stores to `Calendar` instance.
`dataChange` event fires twice if set to true.  Defaults to `false`.

## Features

Features are suffixed with `Feature` and act as both configs and properties for `BryntumCalendarComponent`.
They are mapped to the corresponding API features of the Bryntum Calendar `instance`.

This is a list of all `BryntumCalendarComponent` features:

| Wrapper feature parameter      | API feature reference                                         |
| ------------------------------ | ------------------------------------------------------------- |
| :drag-feature                  | [CalendarDrag](#Calendar/feature/CalendarDrag)                |
| :event-buffer-feature          | [EventBuffer](#Calendar/feature/EventBuffer)                  |
| :event-copy-paste-feature      | [EventCopyPaste](#Calendar/feature/EventCopyPaste)            |
| :event-edit-feature            | [EventEdit](#Calendar/feature/EventEdit)                      |
| :event-menu-feature            | [EventMenu](#Calendar/feature/EventMenu)                      |
| :event-tooltip-feature         | [EventTooltip](#Calendar/feature/EventTooltip)                |
| :excel-exporter-feature        | [ExcelExporter](#Calendar/feature/experimental/ExcelExporter) |
| :external-event-source-feature | [ExternalEventSource](#Calendar/feature/ExternalEventSource)  |
| :load-on-demand-feature        | [LoadOnDemand](#Calendar/feature/LoadOnDemand)                |
| :print-feature                 | [Print](#Calendar/feature/print/Print)                        |
| :schedule-menu-feature         | [ScheduleMenu](#Calendar/feature/ScheduleMenu)                |
| :schedule-tooltip-feature      | [ScheduleTooltip](#Calendar/feature/ScheduleTooltip)          |
| :time-ranges-feature           | [TimeRanges](#Calendar/feature/TimeRanges)                    |
| :week-expander-feature         | [WeekExpander](#Calendar/feature/WeekExpander)                |

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

It is important to know that the Vue `BryntumCalendarComponent` is **not** the native Bryntum Calendar instance, it
is a wrapper or an interface between the Vue application and the Bryntum Calendar itself.

All available configs, properties and features are propagated from the wrapper down to the underlying Bryntum Calendar
instance, but there might be the situations when you want to access the Bryntum Calendar directly. That is fully valid
approach and you are free to do it.

<div class="docs-tabs" data-name="vue">
<div>
    <a>Vue 2</a>
    <a>Vue 3</a>
</div>
<div>

<p>
If you need to access Bryntum Calendar functionality not exposed by the wrapper, you can access the Bryntum Calendar
instance directly. Within the <strong>Vue 2</strong> wrapper it is available under the <code>instance</code> property.

This simple example shows how you could use it:

App.vue:
</p>

```html
<template>
    <bryntum-calendar ref="calendar" v-bind="calendarConfig" />
</template>

<script>
// Bryntum Calendar and its config
import { BryntumCalendar } from '@bryntum/calendar-vue';
import { calendarConfig } from './CalendarConfig';
import './components/ColorColumn.js';

// App
export default {
    name: 'App',

    // local components
    components: {
        BryntumCalendar
    },

    data() {
        return { calendarConfig };
    },

    methods: {
        doSomething() {
            // Reference to Bryntum Calendar instance
            const calendarInstance = this.$refs.calendar.instance;

            // NOTE: Do not use assignment to this.calendarInstance
            // Vue will wrap Bryntum Calendar instance with Proxy class
            // and this will not work as expected.
            // Refer to this Vue guide for the details:
            // https://vuejs.org/guide/extras/reactivity-in-depth.html
        }
    }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
```
<p>
When accessing <code>instance</code> directly, use wrapper's API widget reference docs from the list above to get available
configs and properties.
</p>

</div>
<div>

<p>
If you need to access Bryntum Calendar functionality not exposed by the wrapper, you can access the Bryntum Calendar instance
directly. Within the <strong>Vue 3</strong> wrapper it is available under the <code>instance.value</code> property.

This simple example shows how you could use it:

App.vue:
</p>

```html
<template>
    <bryntum-calendar ref="calendar" v-bind="calendarConfig" />
</template>

<script>
// vue imports
import { ref, reactive } from 'vue';

// Bryntum Calendar and its config
import { BryntumCalendar } from '@bryntum/calendar-vue-3';
import { useCalendarConfig } from './CalendarConfig';
import './components/ColorColumn.js';

// App
export default {
    name: 'App',

    // local components
    components: {
        BryntumCalendar
    },

    setup() {
        const calendar = ref(null);
        const calendarConfig = reactive(useCalendarConfig());

        doSomething() {
            // Reference to Bryntum Calendar instance
            const calendarInstance = calendar.value.instance.value;

            // NOTE: Do not use assignment to this.calendarInstance
            // Vue will wrap Bryntum Calendar instance with Proxy class
            // and this will not work as expected.
            // Refer to this Vue guide for the details:
            // https://vuejs.org/guide/extras/reactivity-in-depth.html
        }

        return {
            calendar,
            calendarConfig,
            doSomething
        };
    },
};
</script>

<style lang="scss">
@import './App.scss';
</style>
```

<p>
When accessing <code>instance</code> directly, use wrapper's API widget reference docs from the list above to get available
configs and properties.
</p>
</div>
</div>

## Troubleshooting

Please refer to this [Troubleshooting guide](#Calendar/guides/integration/vue/troubleshooting.md).

## References

* Config options, features, events and methods [Bryntum Calendar API docs](#api)
* Visit [Vue Framework Homepage](https://vuejs.org)
* Post your questions to [Bryntum Support Forum](https://forum.bryntum.com/)
* [Contact us](https://bryntum.com/contact/)


<p class="last-modified">Last modified on 2025-04-23 11:55:08</p>