# Migrate from Mobiscroll Calendar to Bryntum Calendar

[Bryntum Calendar](https://bryntum.com/products/calendar/) and [Mobiscroll Calendar](https://mobiscroll.com/event-calendar-scheduler) are feature-rich, commercial JavaScript calendar components. In this tutorial, we'll migrate a full-stack Mobiscroll Calendar app to Bryntum Calendar. 

We'll do the following:

- Migrate the database.
- Update the server API endpoints.
- Update the frontend library imports and setup.
- Test the migration implementation.

## Getting started

We'll use an existing full-stack Mobiscroll Calendar app as a starting point. The frontend code uses vanilla JavaScript, and the backend server is an Express.js Node app. We'll store the calendar events data in a MySQL database. The backend server has REST API endpoints that will be used to perform CRUD operations on the database. Mobiscroll and Bryntum components are capable of integrating with frontend frameworks such as React, Angular, and Vue. You may need to adjust the migration steps, depending on your project setup. 

If you want to follow along with this guide, clone the [Mobiscroll backend Node.js app repo](https://github.com/bryntum/mobiscroll-to-bryntum-calendar-backend-starter) and follow the instructions in the `README.md` file to create a local MySQL database, add example data to it, and connect it to the backend Node.js app. The repo has a [`completed-calendar`](https://github.com/bryntum/mobiscroll-to-bryntum-calendar-backend-starter/tree/completed-calendar) branch containing the code for the completed backend migration.

## Migrate the database to the Bryntum Calendar data structure

We'll first migrate the existing database to make it compatible with Bryntum Calendar. We'll create a table for the Bryntum Calendar events and then migrate the existing data from the Mobiscroll Calendar events table to the Bryntum Calendar events table.  

## Create a database table compatible with Bryntum Calendar

After following the instructions in the [Mobiscroll backend Node.js app repo](https://github.com/bryntum/mobiscroll-to-bryntum-calendar-backend-starter) README file, you'll have an `events` table that looks like the following:

![Mobiscroll events data in MySQL database](data/Calendar/images/migrate-from-mobiscroll/starter-events-in-db.png)

To create a `bryntum_calendar_events` table with a schema compatible with Bryntum Calendar events data, run the following query:

```sql
create TABLE `bryntum_calendar_events` (
  `id`                      int           NOT NULL AUTO_INCREMENT,
  `name`                    varchar(255)  NOT NULL,
  `readOnly`                boolean       DEFAULT FALSE,
  `resourceId`              int           DEFAULT NULL,
  `timeZone`                varchar(255)  DEFAULT NULL,
  `draggable`               boolean       DEFAULT TRUE,
  `resizable`               varchar(255)  DEFAULT null,
  `children`                varchar(255)  DEFAULT null,
  `allDay`                  boolean       DEFAULT FALSE,
  `duration`                float(11, 2)  unsigned DEFAULT NULL,
  `durationUnit`            varchar(255)  DEFAULT 'day',
  `startDate`               datetime      DEFAULT NULL, 
  `endDate`                 datetime      DEFAULT NULL,
  `exceptionDates`          json          DEFAULT null,
  `recurrenceRule`          varchar(255)  DEFAULT null,
  `cls`                     varchar(255)  DEFAULT null,
  `eventColor`              varchar(255)  DEFAULT null,
  `eventStyle`              varchar(255)  DEFAULT null,
  `iconCls`                 varchar(255)  DEFAULT null,
  `style`                   varchar(255)  DEFAULT null,
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=1;
```

This table structure represents the Bryntum Calendar event store. There are other fields for specific use cases, an assignment store, and a resources store. We limited the number of fields and stores for simplicity in this guide. You can learn more about project data stores in the [Bryntum docs](https://bryntum.com/products/calendar/docs/guide/Calendar/data/project_data). 

## Migrate the existing data from the Mobiscroll events table

Run the following query to insert the existing data from the `events` table to the newly created `bryntum_calendar_events` table:

```sql
INSERT INTO bryntum_calendar_events (
    `id`,
    `name`,
    `readOnly`,
    `resourceId`,
    `timeZone`,
    `draggable`,
    `resizable`,
    `allDay`,
    `startDate`,
    `endDate`,
    `recurrenceRule`,
    `cls`,
    `eventColor`
)
SELECT
    `id`,
    `title` as `name`,
    NOT `editable` as `readOnly`,
    1,
    `timezone` as `timeZone`,
    `dragInTime` as `draggable`,
    `resize` as `resizable`,
    `allDay`,
    `start` as `startDate`,
    `end` as `endDate`,
    CASE 
      WHEN JSON_VALID(`recurring`) THEN
        CONCAT(
          'RRULE:FREQ=', IFNULL(JSON_UNQUOTE(JSON_EXTRACT(`recurring`, '$.repeat')), ''),
          ';UNTIL=', IFNULL(REPLACE(JSON_UNQUOTE(JSON_EXTRACT(`recurring`, '$.until')), '-', ''), ''),
          ';COUNT=', IFNULL(JSON_UNQUOTE(JSON_EXTRACT(`recurring`, '$.count')), ''), 
          ';BYSETPOS=', IFNULL(JSON_UNQUOTE(JSON_EXTRACT(`recurring`, '$.pos')), ''),
          ';BYDAY=', IFNULL(JSON_UNQUOTE(JSON_EXTRACT(`recurring`, '$.weekDays')), ''),
          ';BYMONTH=', IFNULL(JSON_UNQUOTE(JSON_EXTRACT(`recurring`, '$.month')), ''),
          ';INTERVAL=', IFNULL(JSON_UNQUOTE(JSON_EXTRACT(`recurring`, '$.interval')), '')
        )
      ELSE
        `recurring`
    END as `recurrenceRule`,
    `cssClass` as `cls`,
    `color` as `eventColor`
FROM events;
```

Note that the [`recurring` field for the Mobiscroll Calendar](https://demo.mobiscroll.com/javascript/eventcalendar/recurring-events#) can be an [RRULE string expression](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10) or a JavaScript object, which is why it has a type of `json`. The Bryntum Calendar `recurrenceRule` field can only be an RRULE string. The Mobiscroll Calendar `recurring` field data is inserted into the `recurrenceRule` field for the Bryntum Calendar data as it is if it's a string. If it's valid JSON, an RRULE string expression is constructed.

We set the `resourceId` to `1` for all the events. The `resourceId` is the ID of the resource an event is associated with when an event can only have a single assignment. We recommend using assignments in an [`AssignmentStore`](https://bryntum.com/products/calendar/docs/api/Scheduler/data/AssignmentStore) over this approach. We used the `resourceId` to simplify the guide. The Bryntum Calendar needs resources. We'll have a default resource with an `id` of `1`. We set the `resourceId` to `1` for each event. 

Now let's update the server APIs.

## Update the server API endpoints

We'll use the Bryntum Calendar [Crud Manager](https://bryntum.com/products/calendar/docs/guide/Calendar/data/crud_manager) on the frontend to make HTTP requests to load data into the Bryntum Calendar and persist data changes to our database. We'll create two API endpoints for the Crud Manager: `/load` and `/sync`.

### Handling data loading requests

Let's first add the `/load` API endpoint to get the events data from our database. Add the following GET request handler to the bottom of the `server.js` file:

```javascript
app.get("/load", async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM bryntum_calendar_events");
    res.send({
      success: true,
      events: {
        rows: result,
      },
      // define a default resource
      resources: {
        rows: [
          {
            id: 1,
            name: "Default resource",
          },
        ],
      },
    });
  } catch (error) {
    console.error({ error });
    res.send({
      success: false,
      message: 'There was an error loading the events data.'
    });
  }
});
```

The structure of a successful response is the expected Bryntum Calendar [load response structure](https://bryntum.com/products/calendar/docs/guide/Calendar/data/crud_manager#load-response-structure). The Bryntum Calendar event model requires a resource or a list of resources to be associated with an event. We define a single default resource with an `id` of `1` for simplicity. Every added event will have a `resourceId` of `1`.

To check that the endpoint works, start the dev server:

```bash
npm run dev
```

Open the following URL in your browser: [http://localhost:1338/load](http://localhost:1338/load). You should see the data for the four events in JSON format.

### Handling changes persisting

For the Mobiscroll Calendar, separate API endpoints are used for create, update, and delete operations. For the Bryntum Calendar, we'll create a single API endpoint to handle these CRUD operations. The API route handler for the single API endpoint will handle POST requests and will determine the CRUD operation to perform based on the request body object. Add the following route handler that will be used to keep the data in the database in sync with the Bryntum Calendar data on the frontend:

```javascript
// create, update, and delete Bryntum Calendar events
app.post("/sync", async function (req, res) {
  const { requestId, events } = req.body;
  try {
    const response = { requestId, success : true };
    // if event changes are passed
    if (events) {
      const rows = await applyTableChanges('bryntum_calendar_events', events)
      // if we get some new data to update client
      if (rows) {
        response.events = { rows };
      }
    }
    res.send(response);
  }
  catch (error) {
    console.error({ error });
    res.send({
      requestId,
      success : false,
      message : 'There was an error syncing the data.'
    });
  }
});
```

Define the `applyTableChanges` function at the bottom of the `server.js` file:

```javascript
async function applyTableChanges(table, changes) {
  let rows;
  if (changes.added) {
    rows = await createOperation(changes.added, table);
  }
  if (changes.removed) {
    await deleteOperation(changes.removed, table);
  }
  if (changes.updated) {
    await updateOperation(changes.updated, table);
  }
  // if we get some new data to update client
  return rows;
}
```

When data is changed in the client-side Bryntum Calendar, we'll set up the [Crud Manager](https://bryntum.com/products/calendar/docs/guide/Calendar/data/crud_manager) to make a POST request to the `/sync` API endpoint with information about the data change in the request body. The sync request has a specific [structure](https://bryntum.com/products/calendar/docs/guide/Calendar/data/crud_manager#sync-request-structure). The `applyTableChanges` function takes in the changes to the event store as an argument. For each change in the store, the sync request has three properties: `added`, `updated`, and `removed`, which indicate the type of change that occurred in the store. Each property, if present, contains an array of records that have changed. Different `create`, `delete`, or `update` operation functions are called, depending on the changes that occurred on the frontend. These functions perform a create, update, or delete query to the MySQL database using the `mysql2` client. 

Add the following `createOperation` function at the bottom of the `server.js` file:

```javascript
function createOperation(added, table) {
  return Promise.all(
    added.map(async (record) => {
      const { $PhantomId, exceptionDates, ...data } =
        record;
      // insert record
      const [result] = await db.query("INSERT INTO ?? set ?", [
        table,
        {
          ...data,
          // default resource
          resourceId: 1,
          exceptionDates: JSON.stringify(exceptionDates),
        },
      ]);
      // report to the client that we changed the record identifier
      return { $PhantomId, id: result.insertId };
    })
  );
}
```

The `$phantomId` is an autogenerated unique client-side value used to identify a record. It should not be used as an ID on the server. The backend should assign a new ID to the record. This new ID is returned from the `createOperation` function.

Add the following `deleteOperation` function at the bottom of the `server.js` file:

```javascript
function deleteOperation(deleted, table) {
  return db.query(
    `DELETE FROM ${table} WHERE id in (?)`,
    deleted.map(({ id }) => id)
  );
}
```

Now add the following `updateOperation` function at the bottom of the `server.js` file:

```javascript
function updateOperation(updated, table) {
  return Promise.all(
    updated.map(
      ({ id, exceptionDates, ...data }) => {
        return db.query("UPDATE ?? set ? where id = ?", [
          table,
          {
            ...data,
            exceptionDates: JSON.stringify(exceptionDates),
          },
          id,
        ]);
      }
    )
  );
}
```

Now that we've added API endpoints for our Bryntum Calendar, we can update the frontend code.

## Update the frontend: Add the Bryntum Calendar component 

Clone the [Mobiscroll frontend app repo](https://github.com/bryntum/mobiscroll-to-bryntum-calendar-frontend-starter/tree/main). The repo has a `completed-calendar` branch containing the code for the completed migration. The app uses [Vite](https://vitejs.dev/), a development server and JavaScript bundler. Install the dependencies by running the following command:

```bash
npm install
```

Next, we need to get the Mobiscroll Calendar CSS and JavaScript files. Go to the [Mobiscroll](https://mobiscroll.com/) homepage and enter your email in the navigation input or at the bottom of the page to create a Mobiscroll account and start your free trial. Go to the [Mobiscroll download page](https://download.mobiscroll.com) and click on the "Event calendar & scheduling" card. Pick "JavaScript" in the "Pick a framework" section. This will download a `mobiscroll.javascript.trial.zip` file to your computer. Unzip the file and copy the `css` and `js` folders to the root folder of your Mobiscroll frontend app. The Mobiscroll `css` and `js` files are imported to the app in the `index.html` file.

Now run the local development server:

```bash
npm run dev
```

You'll see four events in the Mobiscroll Calendar: 

![Mobiscroll Calendar](data/Calendar/images/migrate-from-mobiscroll/mobiscroll-calendar-ui.png)

Install the Bryntum Calendar by following [step 1](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm#access-to-npm-registry) and [step 4](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm#install-component) of the [vanilla JavaScript with npm set-up guide](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm).

Go to the `index.html` file and comment out the `<script>` and `<link>` tags for `mobiscroll`, `moment.js`, and `moment-timezone`, except for the `<link rel="stylesheet" href="style.css" />` tag. Comment out all the HTML tags in the `<body>`, except for `<script type="module" src="/main.js"></script>`.

In the `style.css` file, replace the `body` and `html` selector styles with the following:

```css
body,
html {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Poppins, "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
}
```

In the `main.js` file, comment out all the code and add the following lines of code:

```javascript
import { Calendar, CrudManager } from "@bryntum/calendar";
import "@bryntum/calendar/calendar.stockholm.css";

const crudManager = new CrudManager({
  transport: {
    load: {
      url: "http://localhost:1338/load",
    },
    sync: {
      url: "http://localhost:1338/sync",
    },
  },
  autoLoad: true,
  autoSync: true,
});

const calendar = new Calendar({
  appendTo: document.body,
  date: new Date(2023, 6, 25),
  crudManager,    
  features: {
    scheduleMenu: {
      items: {
        addEvent: false,
      },
    },
  },
});
```

Here we create a Bryntum Calendar instance and attach it to the `<body>` tag. We configure the `crudManager` to load data from our `/load` API endpoint and set up the `crudManager` to sync updates to the Bryntum Calendar to our MySQL database using the `/sync` API endpoint. The server uses the [`cors`](https://www.npmjs.com/package/cors) library in the `server.js` file to allow cross-origin resource sharing with our frontend app.

## Test the migration implementation

Run the local development server:

```bash
npm run dev
```

You should see the migrated data from the Mobiscroll Calendar in your Bryntum Calendar: 

![Bryntum Calendar](data/Calendar/images/migrate-from-mobiscroll/bryntum-calendar-ui.png)

Changes you make to the Bryntum Calendar will be persisted to your MySQL database. You can edit an event by right-clicking on the event and selecting the "Edit event" list item in the popup. 

## Bryntum Calendar features

Not only does Bryntum Calendar have more features out of the box than Mobiscroll Calendar, but Bryntum Calendar features are super-easy to customize to suit your project's needs. We'll take a closer look at six Bryntum Calendar features, but these are just a fraction of what's available in Bryntum Calendar. Check out our [Calendar demos](https://bryntum.com/products/calendar/examples/) for more examples of how to customize your calendar.

### Event filtering

Create a filter to find specific events in Bryntum Calendar easily. Filter events using a [Textfield](https://bryntum.com/products/calendar/docs/api/Core/widget/TextField) widget with a [`change`] (https://bryntum.com/products/calendar/docs/api/Core/widget/TextField#event-change) event listener added to it. In the event handler function, you can use a regular expression to filter events using the [`filter`](https://bryntum.com/products/calendar/docs/api/Scheduler/data/EventStore#function-filter) method on the event store. 

You can see an example of event filtering in our [event and resource filtering demo](https://www.bryntum.com/products/calendar/examples/filtering/). Click on the "</>" icon in the top-right corner of the demo to see the code. 

Mobiscroll Calendar also has an [event filtering](https://demo.mobiscroll.com/javascript/eventcalendar/searching-events-in-popup) demo, but implementing event filtering with Mobiscroll requires manaully manipulating the DOM and adding event listeners to the DOM elements using JavaScript - Mobiscroll Calendar event filtering customization is tedious as you have to implement everything yourself. 

### Sidebar calendar widget

Add the [sidebar](https://www.bryntum.com/products/calendar/docs/api/Calendar/widget/Sidebar) widget to your Bryntum Calendar using the [`sidebar`](https://www.bryntum.com/products/calendar/docs/api/Calendar/view/Calendar#config-sidebar) config object to get an overview of your calendar and navigate to a specific date.

The Bryntum Calendar sidebar features:

- A date picker to navigate the calendar to the selected date.
- A filter field to filter events by name or any other field.
- A checkable resource list that allows event filtering by resource.

### Event editor

Bryntum Calendar has a built-in, easily configurable [event editor](https://bryntum.com/products/calendar/docs/guide/Calendar/customization/eventedit) you can use to edit [recurring events](https://bryntum.com/products/calendar/docs/api/Scheduler/view/mixin/RecurringEvents). 

You can create an event editor for Mobiscroll Calendar, but you'll need to do it manually using HTML, CSS, and JavaScript. Take a look at the Mobiscroll Calendar [add/edit/delete events](https://demo.mobiscroll.com/javascript/eventcalendar/create-read-update-delete-CRUD) example to see how it's done.

### Event tooltip

With the Bryntum Calendar [`eventTooltip`](https://bryntum.com/products/calendar/docs/api/Calendar/feature/EventTooltip) feature, you can add an event tooltip when an event bar is clicked on or hovered over and customize the tooltip with a range of easy configuration options. 

Implementing and customizing the Mobiscroll [custom event tooltip](https://demo.mobiscroll.com/javascript/eventcalendar/custom-event-tooltip) requires a lot more code and effort.

### Time ranges

Use the Bryntum Calendar [TimeRanges](https://bryntum.com/products/calendar/docs/api/Calendar/feature/TimeRanges) feature to highlight time ranges with ease in day or week views. While you can highlight time ranges in a Mobiscroll Calendar too (using the [`colors`](https://demo.mobiscroll.com/javascript/scheduler/colored-cell-background) config property), the Bryntum Calendar TimeRanges feature has more configuration options and is easier to customize.

### Undo and redo support

All Bryntum Scheduling products, including Bryntum Calendar, come with built-in [undo and redo](https://bryntum.com/products/calendar/docs/api/Scheduler/widget/UndoRedo) functionality so that you can undo and redo changes to calendar data. Mobiscroll Calendar does not have undo and redo functionality.


<p class="last-modified">Last modified on 2025-04-23 10:28:24</p>