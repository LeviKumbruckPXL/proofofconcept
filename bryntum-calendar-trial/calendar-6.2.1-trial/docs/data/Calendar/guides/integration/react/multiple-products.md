# Combining multiple Bryntum products

## Thin packages overview

Bryntum's products share the same data model and can be combined to provide different views of the underlying data.

When combining multiple Bryntum products in a single application using React, you should use thin npm packages. This
avoids runtime errors and also reduces the amount of code and CSS that has to be downloaded.

The main difference between thin packages and regular packages is that thin only contain product specific code and
styling, while regular contain code and styling for all underlying products (for example Scheduler includes Scheduler +
Grid + Core). Thin packages are valid for building a single product application.

<div class="note">

It is not possible to import several regular (non-thin) Bryntum npm packages like <code>@bryntum/grid</code> and
<code>@bryntum/calendar</code> in one application. Doing this will lead to a runtime console error:

```shell
The Bryntum Calendar bundle was loaded multiple times by the application.
```

</div>

## Thin packages list

Bryntum's npm repository contains thin packages for combining multiple Bryntum products in one application.

### Thin limited trial library packages:

| Package                          | Purpose                                            |
|----------------------------------|----------------------------------------------------|
| @bryntum/core-thin-trial         | Bryntum Core data and UI trial components package  |
| @bryntum/grid-thin-trial         | Bryntum Grid trial components package              |
| @bryntum/scheduler-thin-trial    | Bryntum Scheduler trial components package         |
| @bryntum/schedulerpro-thin-trial | Bryntum Scheduler Pro trial components package     |
| @bryntum/gantt-thin-trial        | Bryntum Gantt trial components package             |
| @bryntum/calendar-thin-trial     | Bryntum Calendar trial components package          |
| @bryntum/taskboard-thin-trial    | Bryntum TaskBoard trial components package         |
| @bryntum/engine-thin-trial       | Bryntum Scheduling engine trial components package |

<div class="note">

To use framework wrappers, trial packages listed above require aliasing the <code>@bryntum/*-thin-trial</code> package as
<code>@bryntum/*-thin</code> during installation, as shown below. Once installed, the provided app code samples can be used without
modification

</div>

Example for `@bryntum/calendar-thin-trial` package:

```shell
npm install @bryntum/calendar-thin@npm:@bryntum/calendar-thin-trial@6.2.1
```

Alternatively, you can directly add entries to the `"dependencies"` section of the `package.json` project file as follows:

```json
"dependencies": {
  "@bryntum/calendar-thin": "npm:@bryntum/calendar-thin-trial@6.2.1",
}
```

### Thin licensed library packages:

| Package                    | Purpose                                      |
|----------------------------|----------------------------------------------|
| @bryntum/core-thin         | Bryntum Core data and UI components package  |
| @bryntum/grid-thin         | Bryntum Grid components package              |
| @bryntum/scheduler-thin    | Bryntum Scheduler components package         |
| @bryntum/schedulerpro-thin | Bryntum Scheduler Pro components package     |
| @bryntum/gantt-thin        | Bryntum Gantt components package             |
| @bryntum/calendar-thin     | Bryntum Calendar components package          |
| @bryntum/taskboard-thin    | Bryntum TaskBoard components package         |
| @bryntum/engine-thin       | Bryntum Scheduling engine components package |

### Thin React wrapper packages:

| Package                                    | Purpose                                                   |
|--------------------------------------------|-----------------------------------------------------------|
| @bryntum/core-react-thin         | Bryntum Core UI widgets React wrappers package |
| @bryntum/grid-react-thin         | Bryntum Grid React wrapper package             |
| @bryntum/scheduler-react-thin    | Bryntum Scheduler React wrapper package        |
| @bryntum/schedulerpro-react-thin | Bryntum Scheduler Pro React wrapper package    |
| @bryntum/gantt-react-thin        | Bryntum Gantt React wrapper package            |
| @bryntum/calendar-react-thin     | Bryntum Calendar React wrapper package         |
| @bryntum/taskboard-react-thin    | Bryntum TaskBoard React wrapper package        |

## Package dependencies

Each package contains code related to the specific product only and requires installing a dependency packages for
all underlying products. This is not done automatically to give you full control over the installed packages.

List of required `dependencies` used in **package.json** for React application:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```json
{
  "dependencies": {
    "@bryntum/core-react-thin": "6.2.1",
    "@bryntum/core-thin": "6.2.1",
    "@bryntum/grid-react-thin": "6.2.1",
    "@bryntum/grid-thin": "6.2.1"
  }
}
```

</div>
<div>

```json
{
  "dependencies": {
    "@bryntum/core-react-thin": "6.2.1",
    "@bryntum/core-thin": "6.2.1",
    "@bryntum/engine-thin": "6.2.1",
    "@bryntum/grid-thin": "6.2.1",
    "@bryntum/scheduler-react-thin": "6.2.1",
    "@bryntum/scheduler-thin": "6.2.1"
  }
}
```

</div>
<div>

```json
{
  "dependencies": {
    "@bryntum/core-react-thin": "6.2.1",
    "@bryntum/core-thin": "6.2.1",
    "@bryntum/engine-thin": "6.2.1",
    "@bryntum/grid-thin": "6.2.1",
    "@bryntum/scheduler-thin": "6.2.1",
    "@bryntum/schedulerpro-react-thin": "6.2.1",
    "@bryntum/schedulerpro-thin": "6.2.1"
  }
}
```

</div>
<div>

```json
{
  "dependencies": {
    "@bryntum/core-react-thin": "6.2.1",
    "@bryntum/core-thin": "6.2.1",
    "@bryntum/engine-thin": "6.2.1",
    "@bryntum/gantt-react-thin": "6.2.1",
    "@bryntum/gantt-thin": "6.2.1",
    "@bryntum/grid-thin": "6.2.1",
    "@bryntum/scheduler-thin": "6.2.1",
    "@bryntum/schedulerpro-thin": "6.2.1"
  }
}
```

</div>
<div>

```json
{
  "dependencies": {
    "@bryntum/calendar-react-thin": "6.2.1",
    "@bryntum/calendar-thin": "6.2.1",
    "@bryntum/core-react-thin": "6.2.1",
    "@bryntum/core-thin": "6.2.1",
    "@bryntum/engine-thin": "6.2.1",
    "@bryntum/grid-thin": "6.2.1",
    "@bryntum/scheduler-thin": "6.2.1"
  }
}
```

</div>
<div>

```json
{
  "dependencies": {
    "@bryntum/core-react-thin": "6.2.1",
    "@bryntum/core-thin": "6.2.1",
    "@bryntum/engine-thin": "6.2.1",
    "@bryntum/taskboard-react-thin": "6.2.1",
    "@bryntum/taskboard-thin": "6.2.1"
  }
}
```
</div>
</div>

<div class="note">

<code>@bryntum/core-react-thin</code> package includes Bryntum base UI widgets like <code>BryntumButton</code> and others
<a href="#Calendar/guides/integration/vue/guide.md#wrappers-overview">listed here</a>. It is not required to install it if
you don't use any of them in your application.

</div>

## Product configuration

Importing product configuration for React application **app.config.tsx**:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```typescript
import { BryntumGridProps } from '@bryntum/grid-react-thin';

const gridProps : BryntumGridProps = {
    // Grid configuration
};
```

</div>
<div>

```typescript
import { BryntumSchedulerProps } from '@bryntum/scheduler-react-thin';

const schedulerProps : BryntumSchedulerProps = {
    // Scheduler configuration
};
```

</div>
<div>

```typescript
import { BryntumSchedulerProProps } from '@bryntum/schedulerpro-react-thin';

const schedulerProProps : BryntumSchedulerProProps = {
    // Scheduler Pro configuration
};
```

</div>
<div>

```typescript
import { BryntumGanttProps } from '@bryntum/gantt-react-thin';

const ganttProps : BryntumGanttProps = {
    // Gantt configuration
};
```

</div>
<div>

```typescript
import { BryntumCalendarProps } from '@bryntum/calendar-react-thin';

const calendarProps : BryntumCalendarProps = {
    // Calendar configuration
};
```

</div>
<div>

```typescript
import { BryntumTaskBoardProps } from '@bryntum/taskboard-react-thin';

const taskBoardProps : TaskBoardPropsBryntumTaskBoardProps = {
    // TaskBoard configuration
};
```
</div>
</div>

## Product styling

List of required styles for React application **App.scss**:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
@import '@bryntum/scheduler-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
@import '@bryntum/scheduler-thin/scheduler.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
@import '@bryntum/scheduler-thin/sass/themes/stockholm.scss';
@import '@bryntum/schedulerpro-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
@import '@bryntum/scheduler-thin/scheduler.stockholm.css';
@import '@bryntum/schedulerpro-thin/schedulerpro.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
@import '@bryntum/scheduler-thin/sass/themes/stockholm.scss';
@import '@bryntum/schedulerpro-thin/sass/themes/stockholm.scss';
@import '@bryntum/gantt-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
@import '@bryntum/scheduler-thin/scheduler.stockholm.css';
@import '@bryntum/schedulerpro-thin/schedulerpro.stockholm.css';
@import '@bryntum/gantt-thin/gantt.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
@import '@bryntum/scheduler-thin/sass/themes/stockholm.scss';
@import '@bryntum/calendar-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
@import '@bryntum/scheduler-thin/scheduler.stockholm.css';
@import '@bryntum/calendar-thin/calendar.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/taskboard-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/taskboard-thin/taskboard.stockholm.css';
```
</div>
</div>

## Product localization

For a complete localization information please check [localization guide](#Grid/guides/customization/localization.md).

Localization can be done using these two methods:

### Using source code

Import product locale from a thin package in your application

Example for German `De` locale:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```javascript
import '@bryntum/grid-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/scheduler-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/schedulerpro-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/gantt-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/calendar-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/taskboard-thin/lib/localization/De.js'
```
</div>
</div>

### Using prebuilt full locale

Import full UMD locale from the installed `@bryntum` package.

Example for `De` locale:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```javascript
import '@bryntum/grid-thin/lib/locales/grid.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/scheduler-thin/lib/locales/scheduler.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/schedulerpro-thin/lib/locales/schedulerpro.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/gantt-thin/lib/locales/gantt.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/calendar-thin/lib/locales/calendar.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/taskboard-thin/lib/locales/taskboard.locale.De.js'
```
</div>
</div>

Full locale can also be added to the `index.html` file of your application.
You need to copy locales from the installed @bryntum package to a folder located at `PATH_TO_LOCALE` first, and then
add this script to the application's home page.

Example for Grid product and German `De` locale:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/grid.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/scheduler.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/schedulerpro.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/gantt.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/calendar.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/taskboard.locale.De.js"></script>
```
</div>
</div>

## Product template

Example of configuring product template for React application **App.tsx**:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```typescript
import { useEffect } from 'react';

import { BryntumGrid } from '@bryntum/grid-react-thin';

import { gridProps } from './AppConfig';

import './App.scss';

function App() {

    useEffect(() => { });

    return (
        <>
            <BryntumGrid
                {...gridProps}
            />
        </>
    );
}

export default App;
```

</div>
<div>

```typescript
import { useEffect } from 'react';

import { BryntumScheduler } from '@bryntum/scheduler-react-thin';

import { schedulerProps } from './AppConfig';

import './App.scss';

function App() {

    useEffect(() => { });

    return (
        <>
            <BryntumScheduler
                {...schedulerProps}
            />
        </>
    );
}

export default App;
```

</div>
<div>

```typescript
import { useRef, useEffect } from 'react';

import { BryntumSchedulerPro, BryntumSchedulerProProjectModel } from '@bryntum/schedulerpro-react-thin';

import { schedulerProProjectProps, schedulerProProps } from './AppConfig';

import './App.scss';

function App() {

    const schedulerProProjectRef = useRef<BryntumSchedulerProProjectModel>(null);

    useEffect(() => { });

    return (
        <>
            <BryntumSchedulerProProjectModel
                ref={schedulerProProjectRef}
                {...schedulerProProjectProps}
            />
            <BryntumSchedulerPro
                {...schedulerProProps}
                project={schedulerProProjectRef}
            />
        </>
    );
}

export default App;
```

<p>
Using <code>BryntumSchedulerProProjectModel</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>project</code> prop, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>

</div>
<div>

```typescript
import { useRef, useEffect } from 'react';

import { BryntumGrid } from '@bryntum/grid-react-thin';
import { BryntumScheduler } from '@bryntum/scheduler-react-thin';
import { BryntumSchedulerPro, BryntumSchedulerProProjectModel } from '@bryntum/schedulerpro-react-thin';
import { BryntumGantt, BryntumGanttProjectModel } from '@bryntum/gantt-react-thin';

import { ganttProps, ganttProjectProps } from './AppConfig';

import './App.scss';

function App() {

    const ganttProjectRef = useRef<BryntumGanttProjectModel>(null);

    useEffect(() => { });

    return (
        <>
            <BryntumGanttProjectModel
                ref={ganttProjectRef}
                {...ganttProjectProps}
            />
            <BryntumGantt
                project={ganttProjectRef}
                {...ganttProps}
            />
        </>
    );
}

export default App;
```

<p>
Using <code>BryntumGanttProjectModel</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>project</code> prop, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>

</div>
<div>

```typescript
import { useEffect } from 'react';

import { BryntumCalendar } from '@bryntum/calendar-react-thin';
import { calendarProps } from './AppConfig';

import './App.scss';

function App() {

    useEffect(() => { });

    return (
        <>
            <BryntumCalendar
                {...calendarProps}
            />
        </>
    );
}

export default App;
```

</div>
<div>

```typescript
import { useRef, useEffect } from 'react';

import { BryntumTaskBoard, BryntumTaskBoardProjectModel } from '@bryntum/taskboard-react-thin';

import { taskBoardProjectProps, taskBoardProps } from './AppConfig';

import './App.scss';

function App() {

    const taskBoardProjectRef = useRef<BryntumTaskBoardProjectModel>(null);

    useEffect(() => { });

    return (
        <>
            <BryntumTaskBoardProjectModel
                ref={taskBoardProjectRef}
                {...taskBoardProjectProps}
            />
            <BryntumTaskBoard
                id={'taskboard'}
                {...taskBoardProps}
                project={taskBoardProjectProps}
            />
        </>
    );
}

export default App;
```

<p>
Using <code>BryntumTaskBoardProjectModel</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>project</code> prop, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>
</div>
</div>

## Technical demo

Technical demo showing all products in one application can be seen
[here](https://bryntum.com/products/grid/examples/frameworks/react-vite/multiple-products-thin/).
You may download source there clicking on Download header icon.


<p class="last-modified">Last modified on 2025-04-23 11:55:08</p>