# Getting Started with Bryntum Calendar in JavaScript

## Try JavaScript demos

Bryntum Calendar is delivered with a variety of JavaScript demo applications showing its functionality.

<div class="b-card-group-2">
<a href="https://bryntum.com/products/calendar/examples/" class="b-card"><i class="fas b-fa-globe"></i>View online JS demos</a>
<a href="#Calendar/guides/download.md#javascript-demos" class="b-card"><i class="fab b-fa-js"></i>View local JS demos</a>
</div>

## Create JavaScript application

In this guide we will explain how to get started if you are not using npm. If you prefer to use npm,
[please visit the dedicated Quick Start here](#Calendar/guides/quick-start/javascript-npm.md).

To get started, the broad steps are as follows:

1. [Download Bryntum Calendar](##download)
2. [Create Application](##create-application)
3. [Bryntum bundles](##bryntum-bundles)
4. [Add component to Application](##add-component-to-application)
5. [Apply styles](##apply-styles)
6. [Run Application](##run-application)

The application we are about to build together is pretty simple, and will look like the live demo below:
<div class="external-example" data-file="Calendar/guides/readme/basic.js"></div>

## Download

Bryntum Calendar is a commercial product, but you can access our free trial archive with bundles and examples by
[downloading it here](https://bryntum.com/download/?product=calendar).

## Create Application

You can proceed as usual. The Bryntum Calendar Component is compliant with the most popular Javascript Standards.

To create an application, create a new folder and add the following to `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bryntum Calendar App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

## Bryntum bundles

The Bryntum Calendar distribution provides pre-build JavaScript bundles.
All bundles are transpiled with `chrome: 75` babel preset.

In distribution zip they are located under the `/build` folder.

| File                    | Contents                                                        |
|-------------------------|-----------------------------------------------------------------|
| `calendar.module.js`     | Modules format bundle without WebComponents                     |
| `calendar.lwc.module.js` | Modules format bundle with Lightning WebComponents (Salesforce) |
| `calendar.wc.module.js`  | Modules format bundle with WebComponents                        |
| `calendar.umd.js`        | UMD format bundle with WebComponents                            |

Typings for TypeScripts can be found in files with a `.d.ts` file extension.

Minified bundles are available for Licensed product version and delivered with `.min.js` suffix.

### Using EcmaScript module bundles

If you choose this option, **copy** the selected module file onto your application, in the root folder, for instance.

Create a `main.js` file, you can import the calendar JavaScript.

```javascript
import { Calendar } from './calendar.module.js';

const calendar = new Calendar({/*...*/ });
```

<div class="note">

We have copied the module directly from the <code>build</code> folder for simplicity in this code example. Consider
using your preferred build tool instead.

</div>

Learn more about how to use EcmaScript modules [here](#Calendar/guides/gettingstarted/es6bundle.md).

### Using `<script>` tag and UMD files

Please consider this solution as legacy and use it only for compatibility. If you choose this option, **copy** the
selected UMD file onto your application, in the root folder, for instance.

To include Bryntum Calendar on your page using a plain old script tag, add a `<script>` tag pointing to the UMD bundle
file in the `<HEAD>` of your `index.html` page. Example:

```html
<script src="calendar.umd.js"></script>
```

In the `main.js`, you will be able to access Calendar classes in the global `bryntum` namespace as
follows:

```javascript
const calendar = new bryntum.calendar.Calendar({/*...*/ });
```

<div class="note">

We also recommend you to copy onto your application the <code>.js.map</code> file paired with the umd file you selected.

</div>

<div class="note">

We have copied the module directly from the <code>build</code> folder for simplicity in this code example. Consider
using your preferred build tool instead.

</div>

Read more on [script tag and UMD modules...](#Calendar/guides/gettingstarted/scripttag.md)

## Add component to Application

Assuming the use of an EcmaScript module bundle:

```javascript
import { Calendar } from './calendar.module.js';

const calendar = new Calendar({

    appendTo : 'app',

    resources : [
        {
            id         : 1,
            name       : 'Default Calendar',
            eventColor : 'green'
        }
    ],
    events : [
        {
            id         : 1,
            name       : 'Meeting',
            startDate  : '2022-01-01T10:00:00',
            endDate    : '2022-01-01T11:00:00',
            resourceId : 1
        }
    ]
});
```

Here we are providing inline data, you can learn more about how we manage 
data using Store [in this guide](#Core/guides/data/storebasics.md).

If you want to discover how flexible the Bryntum Calendar Component is, please explore 
the [API documentation](#Calendar/view/Calendar).

## Apply styles

### Stylesheet

A theme is required to render the Bryntum Calendar correctly.

You'll find a complete list of available CSS files in the `/build` folder of the distribution:

| File                        | Contents            |
|-----------------------------|---------------------|
| `calendar.classic-dark.css`  | Classic-Dark theme  |
| `calendar.classic.css`       | Classic theme       |
| `calendar.classic-light.css` | Classic-Light theme |
| `calendar.material.css`      | Material theme      |
| `calendar.stockholm.css`     | Stockholm theme     |

You'll need to copy the selected CSS file into your project, let's say in the root folder.

<div class="note">

We also recommend you to copy onto your application the <code>.css.map</code> file paired with the css file you selected.

</div>

Create a `style.css` file and import it in your `index.html` page in the `<head>...</head>` section.

```html
<link rel="stylesheet" href="style.css">
```

Next, you can import the bryntum theme file in your `style.css`.

```css
@import './calendar.stockholm.css';
```

Makes sure to copy the `fonts/` folder located in the `/build` right next to the `.css` theme.

```bash
- my-calendar-app/
  - fonts/
  - calendar.stockholm.css
```

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

There are many other solutions depending on the situation. Feel free to adapt the code above regarding your application
layout. For more information on the topic, see this guide
[Sizing the component](https://bryntum.com/products/grid/docs/guide/Grid/basics/sizing).

## Run Application

To see the preview, start a live-server (if you are using one) or 
open the `index.html` file in your browser from your local web server.

<div class="note">

A local web server is required, viewing the app page directly from the local file system won't work.

</div>

## What to do next?

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#Calendar/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-04-23 11:55:09</p>