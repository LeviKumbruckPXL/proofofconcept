# Calendar features

Features are classes that add functionality to Calendar. The purpose of this guide is to give an overview of the
features that ships with Calendar and show how you can configure them.

## Enabling/disabling and configuring features

Features are configured using Calendars [`features`](#Calendar/view/Calendar#config-features) config. Most features are
enabled by default, in which case you can disable them like this:

```javascript
const calendar = new Calendar({
    features : {
        // Drag-create, drag-move and drag-resize disabled
        drag : false
    }
});
```

Others require you to enable them:

```javascript
const calendar = new Calendar({
    features : {
        weekExpander : true
    }
});
```

Some features have configuration options (see the API docs for each feature for the options). In such cases you can
specify a configuration object instead of `true`:

```javascript
const calendar = new Calendar({
    features : {
        externalEventSource : { // Configuration object
            // Element containing draggable items
            dragRootElement : '#mySourceElementId',

            // Draggable item selector. innerText will be used as event name
            dragItemSelector : '.my-item-class'
        }
    }
});
```

If you need to access a feature at runtime, they are available through the `features` property on Calendar:

```javascript
calendar.features.eventEdit.editEvent(calendar.eventStore.first);
```

## Built-in features

Calendar itself has built-in core functionality for rendering resources & events, selection and keyboard navigation. On
top of that it ships with the features described below, some of which are enabled by default and some which you have to
enable manually.

<a href="../examples/basic" target="_blank">Click here to see the default features in action</a>

### EventMenu ([API docs](#Calendar/feature/EventMenu))

Displays a context menu when right clicking events. Features (such as `EventEdit`) add items to the menu, it is also
possible to configure extra items to show.

This feature is **enabled** by default.

Right click on an event to try it out.

### ScheduleMenu ([API docs](#Calendar/feature/ScheduleMenu))

Displays a context menu when right clicking empty time in the schedule. It is also possible to configure
extra items to show.

This feature is **enabled** by default.

Right click on an event to try it out.

### CalendarDrag ([API docs](#Calendar/feature/CalendarDrag))

Drag to create, move or resize events.

This feature is **enabled** by default.

Try dragging an event in the demo:

### EventEdit ([API docs](#Calendar/feature/EventEdit))

Displays an editor for editing event data. It is possible to customize which items are shown in the editor.

This feature is **enabled** by default.

Double click an event in the demo to show the editor:

### EventTooltip ([API docs](#Calendar/feature/EventTooltip))

Displays a tooltip upon click of an event. The tooltip template can be customized to suite your needs.

This feature is **enabled** by default.

Click an event to show the default tooltip.

### EventCopyPaste ([API docs](#Calendar/feature/EventCopyPaste))

Adds copy-paste capabilities to events. Both via context menu and keyboard actions.

This feature is **enabled** by default.

Right-click an event in the demo, click `Copy`, and then right-click somewhere else to `Paste`.

### ExcelExporter ([API docs](#Calendar/feature/experimental/ExcelExporter))

Allows exporting Calendar data to Excel without involving the server.

This feature is **disabled** by default.

### ExternalEventSource ([API docs](#Calendar/feature/ExternalEventSource))

Allows creation of new events by dragging selected elements from a specified DOM element.

This feature is **disabled** by default.

<div class="external-example" data-file="Calendar/../examples/feature/ExternalEventSource.js"></div>

### LoadOnDemand [API Docs](#Calendar/feature/LoadOnDemand)

Loads the host Calendar's `CrudManager` on demand as the date range required to produce the UI changes.

This feature is **disabled** by default.

### Print [API Docs](#Calendar/feature/print/Print)

This feature enables printing of the current Calendar mode.

This feature is **disabled** by default.

### TimeRanges ([API docs](#Calendar/feature/TimeRanges))

Add highlighted time ranges to the schedule.

This feature is **disabled** by default.

<div class="external-example" data-file="Calendar/../examples/feature/TimeRanges.js"></div>

### WeekExpander ([API docs](#Calendar/feature/WeekExpander))

adds a week row expansion tool to week rows in `MonthView`s so that a row which contains overflowing cells
can be expanded to show all events with no overflow.

This feature is **disabled** by default.

<a href="../examples/bigdataset" target="_blank">Click here to see this in action in the Month View</a>

## ScheduleTooltip ([API docs](#Calendar/feature/ScheduleTooltip))

A feature that displays a tooltip containing the time at the mouse position when hovering empty parts of the schedule. 

This feature is **disabled** by default.

<a href="../examples/tooltips" target="_blank">Click here to see this in action in the Week View</a>

## EventBuffer ([API docs](#Calendar/feature/EventBuffer))

A Feature that allows showing additional time before & after an event, to visualize things like travel time - or the time
you need to prepare a room for a meeting + clean it up after.

This feature is **disabled** by default.

<a href="../examples/travel-time" target="_blank">Click here to see this in action in the Week View</a>

## Importing features from sources

A feature is registered when the application imports it. When using the regular module/umd bundle, this is done
automatically, as the bundle encapsulates all code inside. However, when utilizing sources or thin bundles, a feature
might not be imported by default. For any feature not enabled by default, it is essential to ensure that you have
imported it to be able to use it.

Example:

```javascript
import Calendar from 'PATH_TO_SOURCE/Calendar/view/Calendar.js';
import 'PATH_TO_SOURCE/Calendar/feature/WeekExpander.js';

const calendar = new Calendar({
    features : {
        filter : {
            // feature config
        }
    }
});
```


<p class="last-modified">Last modified on 2025-04-23 10:28:23</p>