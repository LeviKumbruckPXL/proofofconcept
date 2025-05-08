# Getting Started with Bryntum Calendar in Vue

## Try Vue demos

Bryntum Calendar is delivered with a variety of Vue demo applications showing its functionality.
All demo applications have been verified to be compatible with Node.js 20.

<div class="b-card-group-2">
<a href="https://bryntum.com/products/calendar/examples/?framework=vue" class="b-card"><i class="fas b-fa-globe"></i>View online Vue demos</a>
<a href="#Calendar/guides/integration/vue/guide.md#build-and-run-local-demos" class="b-card"><i class="fab b-fa-vuejs"></i>Build and run Vue demos</a>
</div>

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

Please note that this guide is designed for creating a Vue 3 application. Since Vue 2 has reached end of life, we no
longer maintain guides or components for Vue 2. We recommend upgrading to Vue 3 for continued support and compatibility.

</div>

## Create Vue 3 application

To get started, the broad steps are as follows:

1. [Access to npm registry](##access-to-npm-registry)
2. [Create Application](##create-application)
3. [Install component](##install-component)
4. [Add component to Application](##add-component-to-application)
5. [Apply styles](##apply-styles)
6. [Run Application](##run-application)

The application we will be building now should look like the illustration below:

<img src="Calendar/getting-started-vue.png" class="b-screenshot" alt="Getting Started on Bryntum Calendar with Vue Result">

## Access to npm registry

Bryntum components are commercial products, hosted in a private Bryntum repository.
Please refer to our [Npm Repository Guide](#Calendar/guides/npm-repository.md) for a complete access information.

## Create Application

Similarly to all the examples shipped with the distribution, we will be using [Vue CLI](https://cli.vuejs.org/) to build
Vue applications.

Type the following command to install Vue CLI:

```shell
npm create vue@latest
```

This command will install and execute create-vue, the official Vue project scaffolding tool.
You will be presented with prompts for several optional features such as TypeScript and testing support:

```shell
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes✔️
✔ Add JSX Support? … No✔️ / Yes
✔ Add Vue Router for Single Page Application development? … No✔️ / Yes
✔ Add Pinia for state management? … No✔️ / Yes
✔ Add Vitest for Unit testing? … No✔️ / Yes
✔ Add an End-to-End Testing Solution? … No✔️ / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No✔️ / Yes
✔ Add Prettier for code formatting? … No✔️ / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No✔️ / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

We are using the above config in this quick start guide but feel free to make any changes.

You can then move to your application folder:

```shell
cd <your-project-name>
```

<div class="note">

Please note some generated files will no longer be needed in your app, you can safely remove 
<code>.src/components/HelloWorld.vue</code> and <code>src/assets/logo.png</code>. Also, remove the <code>assets</code> folder and any links to <code>.css</code>
files in the <code>main.ts</code> or <code>main.js</code>.

</div>

## Install Bryntum Calendar packages

From your terminal, update project dependencies using the following commands:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/calendar@npm:@bryntum/calendar-trial@6.2.1 @bryntum/calendar-vue-3@6.2.1
```

</div>
<div>

```shell
npm install @bryntum/calendar@6.2.1 @bryntum/calendar-vue-3@6.2.1
```
</div>
</div>

## Add component to Application

Edit the `src/App.vue` file and replace the content with the following:

<div class="docs-tabs" data-name="AppVue">
<div>
    <a>JavaScript</a>
    <a>TypeScript</a>
</div>
<div>

```javascript
<script setup>
import { BryntumCalendar } from '@bryntum/calendar-vue-3';
import { calendarConfig } from './AppConfig.js';
</script>

<template>
  <bryntum-calendar v-bind="calendarConfig" />
</template>

<style lang="scss">
@import './App.scss';
</style>
```

</div>
<div>

```typescript
<script setup>
import { BryntumCalendar } from '@bryntum/calendar-vue-3';
import { calendarConfig } from './AppConfig.ts';
</script>

<template>
  <bryntum-calendar v-bind="calendarConfig" />
</template>

<style lang="scss">
@import './App.scss';
</style>
```
</div>
</div>

Create a `AppConfig` file in the `src/` directory with the following content:

<div class="docs-tabs" data-name="AppConfig">
<div>
    <a>JavaScript</a>
    <a>TypeScript</a>
</div>
<div>

```javascript
export const calendarConfig = {
    // Start life looking at this date
    date : new Date(2024, 9, 12),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        loadUrl : 'data/data.json',
        autoLoad : true
    },

    // Features named by the properties are included.
    // An object is used to configure the feature.
    eventTooltipFeature : {
        // Configuration options are passed on to the tooltip instance
        // We want the tooltip's left edge aligned to the right edge of the event if possible.
        align : 'l-r'
    }
};
```

</div>
<div>

```typescript
import { type BryntumCalendarProps } from '@bryntum/calendar-vue-3';

export const calendarConfig : BryntumCalendarProps = {
    // Start life looking at this date
    date : new Date(2024, 9, 12),

    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        loadUrl : 'data/data.json',
        autoLoad : true
    },

    // Features named by the properties are included.
    // An object is used to configure the feature.
    eventTooltipFeature : {
        // Configuration options are passed on to the tooltip instance
        // We want the tooltip's left edge aligned to the right edge of the event if possible.
        align : 'l-r'
    }
};
```
</div>
</div>

## Add component data

Create a `data/data.json` in the `public` directory with the following content:
```json
{
  "success": true,
  "resources": {
    "rows": [
      {
        "id": "bryntum",
        "name": "Bryntum team",
        "eventColor": "blue"
      },
      {
        "id": "hotel",
        "name": "Hotel Park",
        "eventColor": "orange"
      },
      {
        "id": "michael",
        "name": "Michael Johnson",
        "eventColor": "deep-orange"
      }
    ]
  },
  "events": {
    "rows": [
      {
        "id": 1,
        "startDate": "2024-10-11T14:00:00",
        "endDate": "2024-10-18T12:00:00",
        "name": "Hackathon 2024",
        "allDay": true,
        "resourceId": "bryntum",
        "eventColor": "green"
      },
      {
        "id": 2,
        "startDate": "2024-10-11T14:00:00",
        "endDate": "2024-10-11T18:00:00",
        "name": "Check-In in Hotel",
        "resourceId": "hotel"
      },
      {
        "id": 3,
        "startDate": "2024-10-11T18:00:00",
        "endDate": "2024-10-11T20:00:00",
        "name": "Relax and official arrival beer",
        "allDay": true,
        "resourceId": "michael"
      },
      {
        "id": 4,
        "startDate": "2024-10-11T20:00:00",
        "endDate": "2024-10-11T21:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 5,
        "startDate": "2024-10-12T09:00:00",
        "endDate": "2024-10-12T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 6,
        "startDate": "2024-10-12T10:00:00",
        "endDate": "2024-10-12T12:00:00",
        "name": "Team Scrum",
        "resourceId": "bryntum"
      },
      {
        "id": 7,
        "startDate": "2024-10-12T12:00:00",
        "endDate": "2024-10-12T14:00:00",
        "name": "Scheduler Grid introduction + review",
        "resourceId": "bryntum"
      },
      {
        "id": 8,
        "startDate": "2024-10-12T14:00:00",
        "endDate": "2024-10-12T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 9,
        "startDate": "2024-10-12T15:00:00",
        "endDate": "2024-10-12T19:00:00",
        "name": "Active client project review",
        "resourceId": "bryntum"
      },
      {
        "id": 10,
        "startDate": "2024-10-12T19:00:00",
        "endDate": "2024-10-12T20:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 11,
        "startDate": "2024-10-13T09:00:00",
        "endDate": "2024-10-13T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 12,
        "startDate": "2024-10-13T10:00:00",
        "endDate": "2024-10-13T12:00:00",
        "name": "Roadmapping for 2024",
        "resourceId": "bryntum"
      },
      {
        "id": 13,
        "startDate": "2024-10-13T12:00:00",
        "endDate": "2024-10-13T14:00:00",
        "name": "Review Assembla tickets and decide features to add",
        "resourceId": "bryntum"
      },
      {
        "id": 14,
        "startDate": "2024-10-13T14:00:00",
        "endDate": "2024-10-13T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 15,
        "startDate": "2024-10-13T15:00:00",
        "endDate": "2024-10-13T19:00:00",
        "name": "Active programming",
        "resourceId": "bryntum"
      },
      {
        "id": 16,
        "startDate": "2024-10-13T19:00:00",
        "endDate": "2024-10-13T20:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 17,
        "startDate": "2024-10-14T09:00:00",
        "endDate": "2024-10-14T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 18,
        "startDate": "2024-10-14T10:00:00",
        "endDate": "2024-10-14T18:00:00",
        "name": "Excursion",
        "resourceId": "michael"
      },
      {
        "id": 19,
        "startDate": "2024-10-14T18:00:00",
        "endDate": "2024-10-14T22:00:00",
        "name": "Team Building",
        "resourceId": "michael",
        "eventColor": "green"
      },
      {
        "id": 20,
        "startDate": "2024-10-15T09:00:00",
        "endDate": "2024-10-15T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 21,
        "startDate": "2024-10-15T14:00:00",
        "endDate": "2024-10-15T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 22,
        "startDate": "2024-10-15T19:00:00",
        "endDate": "2024-10-15T20:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 23,
        "startDate": "2024-10-15T00:00:00",
        "endDate": "2024-10-16T00:00:00",
        "name": "Gantt review + development",
        "allDay": true,
        "resourceId": "bryntum"
      },
      {
        "id": 24,
        "startDate": "2024-10-16T09:00:00",
        "endDate": "2024-10-16T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 25,
        "startDate": "2024-10-16T14:00:00",
        "endDate": "2024-10-16T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 26,
        "startDate": "2024-10-16T18:00:00",
        "endDate": "2024-10-16T21:00:00",
        "name": "Split.JS conference: Monitoring and Reproducing Errors in Web Applications + Late Dinner or AfterParty",
        "resourceId": "michael"
      },
      {
        "id": 27,
        "startDate": "2024-10-16T00:00:00",
        "endDate": "2024-10-17T00:00:00",
        "name": "Root Cause ticket bash",
        "allDay": true,
        "resourceId": "bryntum"
      },
      {
        "id": 28,
        "startDate": "2024-10-17T09:00:00",
        "endDate": "2024-10-17T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 29,
        "startDate": "2024-10-17T14:00:00",
        "endDate": "2024-10-17T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 30,
        "startDate": "2024-10-17T19:00:00",
        "endDate": "2024-10-17T20:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 31,
        "startDate": "2024-10-17T00:00:00",
        "endDate": "2024-10-18T00:00:00",
        "name": "Pair programming sessions",
        "allDay": true,
        "resourceId": "bryntum"
      },
      {
        "id": 32,
        "startDate": "2024-10-18T09:00:00",
        "endDate": "2024-10-18T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 33,
        "startDate": "2024-10-18T10:00:00",
        "endDate": "2024-10-18T12:00:00",
        "name": "Check-Out & Fly home",
        "resourceId": "michael"
      }
    ]
  }
}
```

This is the data the Bryntum Calendar will use.

## Apply styles

### Stylesheet

Remove both `src/assets/main.css` and `src/assets/base.css`, and delete the `main.css` import from `src/main.ts`.

A theme is required to render the Bryntum Calendar correctly.

The following CSS files are provided with the Bryntum npm packages or in the `/build` folder of the distribution:

| File                        | Contents            |
|-----------------------------|---------------------|
| `calendar.classic-dark.css`  | Classic-Dark theme  |
| `calendar.classic.css`       | Classic theme       |
| `calendar.classic-light.css` | Classic-Light theme |
| `calendar.material.css`      | Material theme      |
| `calendar.stockholm.css`     | Stockholm theme     |

You'll need to reference the selected CSS file into your project.

<div class="docs-tabs" data-name="stylesheet">
<div>
    <a>CSS</a>
    <a>SCSS</a>
</div>
<div>

Create a <code>src/App.css</code> file and add the following:

```css
@import "@bryntum/calendar/calendar.stockholm.css";
```

You need to change the <code>App.scss</code> to <code>App.css</code> in the <code>App.vue</code>.

</div>
<div>

Create a <code>src/App.scss</code> file and add the following:

```scss
@import "@bryntum/calendar/calendar.stockholm.css";
```

For your application to support sass files, you'll need to add additional dependencies to your project.

From the terminal:

```shell
npm install sass@1.42.0 --save-dev --save-prefix=~
```

If you want to customize the default theme, you can replace the <code>stockholm.css</code> with the sass version.
Visit <a href="#Gantt/guides/customization/styling.md#creating-a-custom-theme">Creating a custom theme</a> section for more info.
</div>
</div>

### Sizing the component

By Default, the Component is configured to take `100%` of the parent DOM element with a min-height of `10em`.

For your application to show the Component with the appropriate size, you can for example make parent components take
the full height of the screen.

<div class="docs-tabs" data-name="stylesheet">
<div>
    <a>CSS</a>
    <a>SCSS</a>
</div>
<div>

In your <code>src/App.css</code> file, add the following:

```css
body,
html {
    margin         : 0;
    display        : flex;
    flex-direction : column;
    height         : 100vh;
    font-family    : sans-serif;
    font-size      : 14px;
}
```

```css
#app {
    flex : 1 1 100%;
}
```

</div>
<div>

In your <code>src/App.scss</code> file, add the following:

```css
body,
html {
    margin         : 0;
    display        : flex;
    flex-direction : column;
    height         : 100vh;
    font-family    : sans-serif;
    font-size      : 14px;
}
```

```css
#app {
    flex : 1 1 100%;
}
```
</div>
</div>

There are many other solutions depending on the situation. Feel free to adapt the code above regarding your application
layout. For more information on the topic, see this guide
[Sizing the component](https://bryntum.com/products/grid/docs/guide/Grid/basics/sizing).

## Run Application

From your terminal:

```shell
npm run dev
```

Your application is now available under [http://localhost:5173](http://localhost:5173).

## Further on integration with Vue

Do you want to know more about how Bryntum Calendar integrates with Vue and starts to customize your application? We
provide you with a [complete Vue guide here](#Calendar/guides/integration/vue/guide.md).

## Troubleshooting

Stuck somewhere? Please refer to this [Troubleshooting guide](#Calendar/guides/integration/vue/troubleshooting.md). If
you find errors in our docs and/or onboarding guides, please report them in [our forums](https://forum.bryntum.com).

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#Calendar/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-04-23 11:55:09</p>