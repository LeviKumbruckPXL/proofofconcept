# Getting Started with Bryntum Scheduler in JavaScript with npm package manager

## Try JavaScript demos

Bryntum Scheduler is delivered with a variety of JavaScript demo applications showing its functionality.

<div class="b-card-group-2">
<a href="https://bryntum.com/products/scheduler/examples/" class="b-card"><i class="fas b-fa-globe"></i>View online JS demos</a>
<a href="#Scheduler/guides/download.md#javascript-demos" class="b-card"><i class="fab b-fa-js"></i>View local JS demos</a>
</div>

## Version requirements

Minimum supported:

* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)
* Vite `4.0.0` or higher (for application build with Vite)

Recommended:

* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)
* Vite `5.0.0` or higher (for application build with Vite)

## Create JavaScript application

In this guide we will explain how to get started using the npm CLI. If you prefer to not use
npm, please visit the dedicated [Quick Start here](#Scheduler/guides/quick-start/javascript.md).

To get started, the broad steps are as follows:

1. [Access to npm registry](##access-to-npm-registry)
2. [Create Application](##create-application)
3. [Bryntum bundles](##bryntum-bundles)
4. [Install component](##install-component)
5. [Add component to Application](##add-component-to-application)
6. [Apply styles](##apply-styles)
7. [Run Application](##run-application)

The application we are about to build together is pretty simple, and will look 
like the live demo below:
<div class="external-example" data-file="Scheduler/guides/readme/basic.js"></div>

## Access to npm registry

Bryntum components are commercial products, hosted in a private Bryntum repository.
Please refer to our [Npm Repository Guide](#Scheduler/guides/npm-repository.md) for a complete access information.

## Create Application

To create an application, we will use [Vitejs](https://vitejs.dev/guide) and 
choose vanilla JavaScript.

First, execute the vite command:

```shell
npm create vite@latest my-scheduler-app -- --template vanilla
```

<div class="note">

For npm 7+, extra double-dash is needed.

</div>

It will generate a vanilla JavaScript boilerplate. Next, install dependencies:

```shell
cd my-scheduler-app
npm install
```

Open the project folder and delete `counter.js`, we don't need it in our case.

## Install component

From your terminal, update project dependencies using the following commands:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/scheduler@npm:@bryntum/scheduler-trial@6.2.1
```

</div>
<div>

```shell
npm install @bryntum/scheduler@6.2.1 
```
</div>
</div>

## Add component to Application

Once you have project set up, you can proceed with configuring your Scheduler.

Replace your `main.js` with the following code:

```javascript
import { Scheduler } from '@bryntum/scheduler';
import './style.css';

const scheduler = new Scheduler({
    appendTo  : 'app',
    startDate : new Date(2022, 0, 1),
    endDate   : new Date(2022, 0, 10),
    columns   : [
        { text : 'Name', field : 'name', width : 160 }
    ],
    resources : [
        { id : 1, name : 'Dan Stevenson' },
        { id : 2, name : 'Talisha Babin' }
    ],
    events : [
        { resourceId : 1, startDate : '2022-01-01', endDate : '2022-01-10' },
        { resourceId : 2, startDate : '2022-01-02', endDate : '2022-01-09' }
    ]
});
```

Here we are providing inline data, you can learn more about how we manage 
data using Store [in this guide](#Core/guides/data/storebasics.md).

<div class="note">

Note that the <code>startDate</code> and <code>endDate</code> configs passed to the <code>Scheduler</code> instance denote the currently accessible 
timespan.

</div>

Learn more about how to use EcmaScript modules [here](#Scheduler/guides/gettingstarted/es6bundle.md).

If you want to discover how flexible the Bryntum Scheduler Component is, please explore 
the [API documentation](#Scheduler/view/Scheduler).

## Apply styles

### Stylesheet

A theme is required to render the Bryntum Scheduler correctly.

The following CSS files are provided with the Bryntum npm packages:

| File                        | Contents            |
|-----------------------------|---------------------|
| `scheduler.classic-dark.css`  | Classic-Dark theme  |
| `scheduler.classic.css`       | Classic theme       |
| `scheduler.classic-light.css` | Classic-Light theme |
| `scheduler.material.css`      | Material theme      |
| `scheduler.stockholm.css`     | Stockholm theme     |

Remove the content of `style.css` and replace it with the following:

```css
@import "./node_modules/@bryntum/scheduler/scheduler.stockholm.css";
```

<div class="note">

We have referenced the CSS file directly from the <code>node_modules</code> folder for simplicity in this code example.
Consider using your preferred build tool instead.

</div>

### Sizing the component

By Default, the Component is configured to take `100%` of the parent DOM element with a min-height of `10em`.

For your application to show the Component with the appropriate size, you can for example make parent components take
the full height of the screen.

```css
#app {
    margin         : 0;
    display        : flex;
    flex-direction : column;
    height         : 100vh;
    font-size      : 14px;
}
```

There are many other solutions depending on the situation. Feel free to adapt the code above regarding your 
application layout. For more information on the topic, see this guide
[Sizing the component](https://bryntum.com/products/grid/docs/guide/Grid/basics/sizing).

## Run Application

Run the application by executing:

```shell
npm run dev
```

## What to do next?

### Tutorial

Now it is time to customize your application. To get familiar with the most common tasks developers perform, we have
designed an [engaging tutorial](#Scheduler/guides/tutorial/tutorial.md) that we are excited 
to see you follow.

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#Scheduler/guides/data/displayingdata.md) explains how they all fit together.

### Enabling features

Please refer to the
[enabling extra features guide](#Scheduler/guides/basics/features.md) 
to learn how to enhance your Scheduler chart with additional functionality (such as displaying labels for the tasks).

### Responsiveness

Scheduler can be configured to work well on many different screen sizes. This is achieved by specifying different
responsive "levels" (breakpoints) on Scheduler and then having per level configurations on the columns. 

If this is a
concern now, visit the  [responsive guide](#Scheduler/guides/customization/responsive.md) 
 to learn how to configure responsiveness.

### Localization

Bryntum Scheduler uses locales for translations of texts, date formats and such. This
[localization guide](#Scheduler/guides/customization/localization.md) 
shows you how to use one of the locales that Bryntum Scheduler ships with and how to create your own.



<p class="last-modified">Last modified on 2025-04-23 10:49:40</p>