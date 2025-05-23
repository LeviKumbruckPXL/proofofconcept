# Binding Bryntum Calendar data

Bryntum Calendar is a data intensive component that uses several datasets. These datasets usually come from the server
and are held in `Calendar` project during the lifetime of the `Calendar` view. There are several ways of populating the
project data stores.

## Using CrudManager transport

[CrudManager](#Scheduler/data/CrudManager) is a built-in class that implements loading and saving of data in multiple
stores with [transport](#Scheduler/data/CrudManager#config-transport) config. Loading the stores and saving all
changes is done in one request.

Configuring `crudManager` with `transport` is the simplest way of binding data to the `Calendar` project stores as seen
from the client side, but it does require following a specific protocol on the backend.

The configuration of `crudManager` can be as simple as:

```javascript
crudManager : {
    transport : {
        load : {
            url : '/server/load/url'
        },
        sync : {
            url : '/server/save/url'
        }
    },
    autoLoad : true
}
```

With this configuration, the data is loaded and saved from and to the above URLs and the data `transport` is handled
automatically.

## Binding existing data to the component

When the application already has a server transport layer then the data for `Calendar` is available in application
code and it needs to be passed (bound) to the component. One approach is to make the data available as component
variables and bind them in the Vue template:

**App.vue:**

```javascript
<template>
    <bryntum-calendar
        :assignments = "assignments"
        :events = "events"
        :resources = "resources"
        v-bind = "calendarConfig"
    />
</template>

<script>
import { ref, reactive } from 'vue';

import { BryntumCalendar } from '@bryntum/calendar-vue-3';

import { useCalendarConfig } from '@/AppConfig';
import * as appData from '@/AppData';

export default {
    name : 'App',

    components : {
        BryntumCalendar
    },

    setup() {
        const calendarConfig = reactive(useCalendarConfig());

        const assignments = ref(appData.assignments);
        const events = ref(appData.events);
        const resources = ref(appData.resources);

        return {
            calendarConfig,
            assignments,
            events,
            resources
        };
    }
};
</script>

<style lang = "scss">
@import './App.scss';
</style>
```

Here we have component variables, initialized by spreading `...initialData`. Whenever a change of the data is needed,
it is only necessary to assign the new values to these variables, for example:

```javascript
this.events = newEvents;
this.dependencies = newDependencies;
```

## Binding existing data to the project

This approach binds data to a standalone `CalendarProjectModel` and then uses this project in `Calendar`. Project has its
own markup in the template and it must be assigned to the `Calendar` during initialization.

This approach is suitable for more complex applications that use more than one Bryntum component that share a common
`project`:

**App.vue:**

```javascript
<template>
    <div>
        <bryntum-calendar-project-model
            ref = "project"
            :assignments = "assignments"
            :events = "events"
            :resources = "resources"
        />
        <bryntum-calendar
            :project = "project"
            v-bind = "calendarConfig"
        />
    </div>
</template>

<script>
import { ref, reactive } from 'vue';

import { BryntumCalendarProjectModel, BryntumCalendar } from '@bryntum/calendar-vue-3';

import { useCalendarConfig } from '@/AppConfig';
import * as appData from '@/AppData';

export default {
    name : 'App',

    components : {
        BryntumCalendarProjectModel,
        BryntumCalendar
    },

    setup() {
        const project = ref(null);

        const calendarConfig = reactive(useCalendarConfig());

        const assignments = ref(appData.assignments);
        const events = ref(appData.events);
        const resources = ref(appData.resources);

        return {
            project,
            calendarConfig,
            assignments,
            events,
            resources
        };
    }
};
</script>

<style lang = "scss">
@import './App.scss';
</style>
```

Here we create a standalone `CalendarProjectModel` (without any rendered output) with properties bound to individual
data sets.

<div class="note">

Note that <code>bryntum-calendar-project-model</code> tag must come before all other components that use it. Otherwise the <code>project</code>
reference is not valid to these components.

</div>

Check implementation in
[inline-data](../examples/frameworks/vue-3/javascript/inline-data/) React demo.



<p class="last-modified">Last modified on 2025-04-23 11:55:08</p>