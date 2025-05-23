# Styling
The Bryntum Scheduler is rendered in the DOM using regular HTML and CSS, and can be completely 
styled using CSS/SASS. It ships with both compiled CSS bundles, and the original SCSS files. 
The CSS includes different themes and event colors, which can be used to alter how the 
Scheduler and its events look.

You can also programmatically modify the appearance of cells, headers and events using renderers.

## Styling event bars using predefined styles and colors

Bryntum Scheduler ships with 7 predefined event styles, each available in 17 colors. Style and color can be specified
for the entire scheduler, per resource or per event. Event settings overrides resource, which in its turn overrides the
scheduler setting. The following snippet shows how to assign colors:

```javascript
// Make all events blue by default
scheduler.eventColor  = 'blue';
// Make all events assigned to a specific resource orange:
resource.eventColor = 'orange';
// Make a single event violet:
event.eventColor    = 'violet';
```

This demo has one event per available color:

<div class="external-example" data-file="Scheduler/guides/styling/colors.js"></div>

Event styles are assigned in a very similar way:

```javascript
// Make all events use "border" style by default
scheduler.eventStyle  = 'border';
// Make all events assigned to a resource use "line" style:
resource.eventStyle = 'line';
// Make a single event colored:
event.eventStyle    = 'colored';
```

And this demo shows the predefined styles:

<div class="external-example" data-file="Scheduler/guides/styling/styles.js"></div>

Give the <a href="../examples/eventstyles/" target="_blank">Event styles</a> demo a shot if you want to try
different colors and styles.

**Note:** If you want to control the appearance of events using custom CSS we recommend setting both `eventColor` and
`eventStyle` to `null`. This applies very basic styling that is easier to override using CSS.

## Styling individual events using data fields

You can style individual events easily by populating a few predefined fields of
the [EventModel](#Scheduler/model/EventModel#fields):

- [cls](#Scheduler/model/TimeSpan#field-cls) Add a CSS class to the event bar element
- [style](#Scheduler/model/TimeSpan#field-style) Inline styles for the event bar element
- [iconCls](#Scheduler/model/TimeSpan#field-iconCls) Define the icon for the event

These fields allow you to style each individually through event data.

<div class="external-example" data-file="Scheduler/guides/styling/styling-data.js"></div>

You can also apply styling at runtime using the
[eventRenderer](#Scheduler/view/mixin/SchedulerEventRendering#config-eventRenderer) which is described below.

## Sorting overlapping events

The vertical order (the non-timeaxis direction) of overlapping events rendered in a horizontal scheduler can be 
customized by overriding [overlappingEventSorter](#Scheduler/view/mixin/SchedulerEventRendering#config-overlappingEventSorter) 
function on the scheduler.

<div class="note">
Note that the algorithms (stack, pack) that lay the events out expects them to be served in chronological order, be sure
to first sort by `startDate` to get predictable results.
</div>

For example:

```javascript
let scheduler = new Scheduler({
    overlappingEventSorter(a, b) {
        return b.startDate.getTime() - a.startDate.getTime();
    },
    /*...*/
});
```

This live demo sorts events with identical timings by color:

<div class="external-example" data-file="Scheduler/guides/styling/events-order.js"></div>

## Using a theme

The Scheduler ships with five themes:
- Stockholm (`scheduler.stockholm.css`)
- Classic (`scheduler.classic.css`)
- Classic light (`scheduler.classic-light.css`)
- Classic dark (`scheduler.classic-dark.css`)
- Material (`scheduler.material.css`)

Each theme is compiled into a self containing bundle under `build/`. 
Simply include it on page to use it:

```html
<link rel="stylesheet" href="build/scheduler.stockholm.css" data-bryntum-theme>
<link rel="stylesheet" href="build/scheduler.classic.css" data-bryntum-theme>
<link rel="stylesheet" href="build/scheduler.classic-light.css" data-bryntum-theme>
<link rel="stylesheet" href="build/scheduler.classic-dark.css" data-bryntum-theme>
<link rel="stylesheet" href="build/scheduler.material.css" data-bryntum-theme>
```

You need to add just one of the above themes to implement styling.

<div class="note">

The <code>data-bryntum-theme</code> attribute on the link tag is not strictly required, 
but it allows you to 
programmatically switch the theme at runtime using <code>DomHelper.setTheme()</code>.

</div>

### Comparison of themes

![Classic theme](Scheduler/themes/thumb.classic.png "Default theme")
![Classic-Light theme](Scheduler/themes/thumb.classic-light.png "Light theme")
![Classic-Dark theme](Scheduler/themes/thumb.classic-dark.png "Dark theme")
![Material theme](Scheduler/themes/thumb.material.png "Material theme")
![Stockholm theme](Scheduler/themes/thumb.stockholm.png "Stockholm theme")

In most of the included examples you can switch theme on the fly by clicking on the gear icon found in the header and
then picking a theme in the dropdown.

![Change theme](Scheduler/changing-theme.png "Change theme")

### Combining products

The "normal" themes described above include all the CSS you need to use Scheduler and its helper widgets such as Popups,
TextFields and so on. When combining multiple different Bryntum products on a single page using "normal" themes, the
shared styling will be included multiple times.

To avoid this, each theme is available in a version that only has the product specific styling. These are called `thin`
themes (e.g., `scheduler.stockholm.thin.css`). When using them you will need to include
one for each used level in the Bryntum product hierarchy (Scheduler -> `Core + Grid + Scheduler`).

For example to combine Calendar and Scheduler using the Stockholm theme, you would include:

- `core.stockholm.thin.css`
- `grid.stockholm.thin.css`
- `scheduler.stockholm.thin.scss`
- `calendar.stockholm.thin.scss`

Which in your html file might look something like this:

```html
<link rel="stylesheet" href="core.stockholm.thin.css" data-bryntum-theme>
<link rel="stylesheet" href="grid.stockholm.thin.css" data-bryntum-theme>
<link rel="stylesheet" href="scheduler.stockholm.thin.css" data-bryntum-theme>
<link rel="stylesheet" href="calendar.stockholm.thin.css" data-bryntum-theme>
```

<div class="note">

Nothing prevents you from always using thin CSS bundles, but please note that there might be a slight network overhead 
from pulling in multiple CSS files as opposed to a single one with the normal themes.

</div>

## Creating a custom theme

Following are two ways to setup a custom theme:

### Via resources folder

To create your own theme, get the [distribution bundle](#Scheduler/guides/download.md) and follow these steps:

* Copy the `resources` folder to your project.
* Make a copy of an existing theme found under `resources/sass/themes` (e.g. `stockholm.scss`).
* Edit the variables in it to suit your needs. You can reference all the 
  available variables in `resources/sass/variables.scss`, and  
  for color definitions, look into `resources/core-sass/variables.scss`.
* Compile it to CSS and bundle it using your favorite SASS compiler/bundler.
* Include your theme on page (and remove any default theme you where using).

### Via npm

If you have installed Bryntum components via npm, you can follow these steps:

* Make sure you have sass installed ([Sass installation guide](https://sass-lang.com/install/))
* Create a `.scss` file and  add `@import "@bryntum/scheduler/source/resources/sass/themes/[theme].scss";` to it. 
Where `[theme]` can be any of the default Bryntum theme (e.g. `classic`).

That set up the Bryntum theme. You can now overwrite the styling by declaring 
variables before the import.

You can find all the variables at:
- `@bryntum/scheduler/source/resources/sass/variables.scss`
- `@bryntum/scheduler/source/resources/core-sass/variables.scss`

Scheduler also uses variables from `grid-sass`, found at `node_modules/@bryntum/scheduler/source/resources/grid-sass/variables.scss`

Rewrite the variables before the `@import` statement, in order to make them work. This is necessary because most
variables use the !default flag, which allows them to be overridden only if they are declared prior to being imported.

```scss
// Refine your variables here
@import "@bryntum/scheduler/source/resources/sass/themes/classic.scss";
```

<div class="note">

It is recommended to use the <code>classic</code> theme as the base. The classic theme provides a foundational structure that
simplifies customization.

If you start with another theme, it will be trickier because those themes already have their own color settings
that will override yours. You'll need to import specific parts of those themes instead of the whole theme.

</div>

Lastly, compile it to CSS using your preferred SASS compiler and import it in your `index.html`.

Please see 
<a href="../examples/custom-theme/" target="_blank">Theme example</a> 
for a custom theme in action:

![Custom theme](Scheduler/themes/thumb.custom.png "Custom theme")

## Using multiple themes

You can also add a combo box that lets you change the theme at run-time, similar to the examples we have.
To do so, ensure you have multiple themes in a folder (e.g. `/themes`).

<div class="note">

If you're using custom themes, ensure that you change their names in the file 
(<code>resources/core-sass/themes/vars/[theme-name].scss</code>) in order to 
make them work correctly (<code>content : '{"name":"Stockholm"}';</code>).

</div>

Next, you need to add a combo box using `tbar`.

```javascript
import { Scheduler, DomHelper } from '@bryntum/scheduler';
const scheduler = new Scheduler({
    // ...scheduler data
    tbar : [
        {
            type  : 'combo',
            // list of themes shown in the drop down (combo box)
            items : [
                { text : 'Stockholm', value : 'stockholm' },
                { text : 'Classic', value : 'classic' },
                { text : 'Classic-Light', value : 'classic-light' },
                { text : 'Classic-Dark', value : 'classic-dark' },
                { text : 'Material', value : 'material' }
            ],
            label : 'Theme',
            // default theme
            value : 'material',
            // change theme on selection
            onAction(props) {
                DomHelper.setTheme(props.value);
            }
        }
    ]
});
```

With that being setup, you can switch themes within your application.

## Customizing the event bar HTML contents

It is easy to show any HTML structure inside an event bar using
the [eventRenderer](#Scheduler/view/mixin/SchedulerEventRendering#config-eventRenderer).

```javascript
const scheduler = new Scheduler({
    appendTo: 'container',

    columns: [
        {
            text  : 'Name',
            field : 'name'
        }
    ],

    eventRenderer: ({
        eventRecord,
        renderData
    }) => {
        const value = eventRecord.percentDone || 0;

        // Add an extra element to the children of the container, to display a progress bar.
        // In a real app, you should avoid having inline styles and instead style using the CSS class
        renderData.children.push({
            html      : `${eventRecord.name} ${value}%`,
            className : 'percentBar',
            style     : {
                position          : 'absolute',
                width             : `${value}%`,
                height            : '100%',
                display           : 'flex',
                'background-color': 'rgba(255, 255, 255, 0.25)',
                'padding-left'    : '1em',
                'align-items'     : 'center'
            }
        });
    }
});
```

<div class="external-example" data-file="Scheduler/guides/styling/eventrenderer.js"></div>

## Controlling output using column renderers, event renderer and CSS

Contents of grid cells, header cells and events can be fully customized using 'renderers'. Renderers are functions with
access to a the data used output grid cells / header cells / events (such as style and CSS classes, and in some cases
elements). They can manipulate the data to alter appearances or return a value to have it displayed.

In the demo below, we use the following APIs:

* [Resource `cls` field](#Scheduler/model/ResourceModel#field-cls) - To provide row specific styling
* [Column cell renderer](#Grid/column/Column#config-renderer) - To output custom cell content
* [Column header renderer](#Grid/column/Column#config-headerRenderer) - To add special text in column header
* [Time Axis cell renderer](#Scheduler/preset/ViewPresetHeaderRow#config-renderer) - To show a sad emoji on the most
  boring day week of the day (Monday)
* [Event bar renderer](#Scheduler/view/mixin/SchedulerEventRendering#config-eventRenderer) - To output custom text into
  the event bar

<div class="external-example" data-file="Scheduler/guides/styling/renderers.js"></div>

```javascript
const scheduler = new Scheduler({
    viewPreset: {
        base    : 'weekAndDayLetter',
        headers : [
            {
                unit       : 'week',
                dateFormat : 'ddd DD MMM YYYY', // Mon 01 Jan 2017
            },
            {
                unit     : 'day',
                renderer : (start, end, headerConfig, index) => {
                    if (start.getDay() === 1) {
                        headerConfig.headerCellCls = "blue-monday";
                        return '☹️';
                    }

                    return DateHelper.format(start, 'd1');
                }
            }
        ]
    },
    columns   : [
        {
            text       : 'Name',
            field      : 'name',
            width      : 160,
            htmlEncode : false,
            // Custom header renderer
            headerRenderer : ({ column }) => column.text.toUpperCase() + '!',
            // Custom cell renderer
            renderer({
                record,
                value
            }) {
                return `<i class="b-fa b-fa-${record.gender}"></i>${value}`;
            }
        }
    ],

    // Custom event renderer, simple version
    eventRenderer({
        eventRecord,
        tplData
    }) {
        // Inline style
        tplData.style = 'font-weight: bold; border-radius: 3px';
        // Add CSS class
        tplData.cls.add('my-custom-css');

        // Return the text to display
        return 'Activity: ' + eventRecord.name;
    }
});
```

## Styling dependency lines

You can easily customize the arrows drawn between events when using the Dependencies feature. To change all arrows, apply
the following basic SVG CSS:

```css
.b-sch-dependency {
    stroke-width : 2;
    stroke       : red;
}

.b-sch-dependency-arrow{
    fill : red;
}
```

To style an individual dependency line, you can provide a [cls](#Scheduler/model/DependencyModel#field-cls) in your data:

```json
{
    "id"   : 9,
    "from" : 7,
    "to"   : 8,
    "cls"  : "special-dependency"
}
```

```scss
// Make line dashed 
.b-sch-dependency {
    stroke-dasharray : 5, 5;
}
```

## Other useful configs

There are a few other configs worth mentioning to affect the styling of your Scheduler/events:

* `barMargin`, distance between overlapping events within a
  resource ([docs](#Scheduler/view/mixin/TimelineEventRendering#config-barMargin)) ([demo](../examples/rowheight))
* `resourceMargin`, distance between the first and last event and the resources
  borders ([docs](#Scheduler/view/mixin/SchedulerEventRendering#config-resourceMargin)) ([demo](../examples/rowheight))
* `eventLayout`, determines if overlapping events stack, pack or simply
  overlap ([docs](#Scheduler/view/mixin/SchedulerEventRendering#config-eventLayout)) ([demo](../examples/layouts))

```javascript
 const scheduler = new Scheduler({
    barMargin      : 3,
    resourceMargin : 15,
    eventLayout    : 'pack',
    /*...*/
});
```

# Learn more

Some more information can be found in the following blog posts:

* [Styling your tasks, part 1](https://bryntum.com/blog/styling-your-tasks-part-1-built-in-styling)
* [Styling your tasks, part 2](https://bryntum.com/blog/styling-your-tasks-part-2-custom-styling)

Happy styling :)

## Troubleshooting

### CSS mismatched version

If you've encountered a CSS error:

```plaintext
CSS version 5.6.1 doesn't match bundle version 6.2.1!
Make sure you have imported css from the appropriate product version.
```

That means you're using a wrong version of Bryntum theme file. Following are some of the ways to check and fix the issue:

#### Verify CSS version

Ensure that the CSS file being used matches the version of the Bryntum API. For example, if you're using version
`6.2.1` of Scheduler, you need to have the CSS files of version `6.2.1`.

#### Clear Cache

Ensure the mismatched CSS file is not cached on your web server to prevent outdated files from being served.
Clear the browser cache to ensure the latest CSS file is loaded.

#### Cache Busting

Cache busting is a technique used to force browsers to load the most recent versions of files. If the CSS file is 
imported in `index.html`, then it should have cache busting by specifying the version
(`scheduler.stockholm.css?v=6.2.1`) or use timestamps (`scheduler.stockholm.css?1704085200`).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Scheduler App</title>
    <link rel="stylesheet" href="path/to/stylesheet.css?v=1.2.3"> <!-- Cache busting by specifying version -->
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

Modern frameworks apply this by default to the production code, but it needs to be manually implemented in the 
vanilla JavaScript projects.

<p class="last-modified">Last modified on 2025-04-23 10:49:40</p>