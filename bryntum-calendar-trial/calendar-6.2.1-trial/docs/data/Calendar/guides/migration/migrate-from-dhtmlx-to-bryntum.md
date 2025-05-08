# Migrate from a DHTMLX Scheduling Calendar to a Bryntum Calendar

[Bryntum Calendar](https://bryntum.com/products/calendar/) and [DHTMLX Scheduler](https://dhtmlx.com/docs/products/dhtmlxScheduler/) are similar commercial, full-featured, highly customizable calendar components. DHTMLX also has a [DHTMLX Calendar](https://docs.dhtmlx.com/calendar__index.html) component, but it's a popup date picker. To prevent confusion, we'll refer to the DHTMLX Scheduler as a Scheduling Calendar in this tutorial. 

This tutorial will show you how to migrate an existing implementation of a DHTMLX Scheduling Calendar to Bryntum Calendar.

Here are the steps we'll follow:

- Migrate the database to the Bryntum Calendar data structure.
- Update the server API endpoints.
- Update the client-side code.
- Test the migration implementation.

## Getting started

This tutorial uses an existing DHTMLX Scheduling Calendar starter project as a starting point and describes how to migrate it to a Bryntum Calendar. The starter project uses vanilla JavaScript on the client side and Node.js with REST API endpoints on the server side. These endpoints interact with a MySQL client to perform CRUD operations on the database.

<div class="note">

If you want to follow the guide step by step, please clone the <a href="https://github.com/bryntum/migrate-dhtmlx-calendar-to-bryntum-starter">DHTMLX Scheduling Calendar starter repository</a>
and install the application by following the instructions in the <code>README.md</code> file in the repo.

</div>

Your implementation may differ slightly, depending on which client-side ([React](https://dhtmlx.com/docs/products/dhtmlxScheduler-for-React/), [Vue](https://dhtmlx.com/docs/products/dhtmlxScheduler-for-Vuejs/), or [Angular](https://dhtmlx.com/docs/products/dhtmlxScheduler-for-Angular/)), and [server-side](https://docs.dhtmlx.com/scheduler/howtostart_guides.html) variants you're using.

Following the migration, we expect the Bryntum Calendar to display the same data as this DHTMLX Scheduling Calendar:

![DHTMLX Scheduling Calendar](data/Calendar/images/migrate-from-dhtmlx/dhtmlx.png)

## Migrate the database to the Bryntum Calendar data structure

To begin, we'll migrate the existing database so that its data structure is suitable for a Bryntum Calendar. We'll make a new table for the Bryntum Calendar and then import data from the existing table made for DHTMLX to the new table.

### Create a database table compatible with Bryntum Calendar

If you followed the instructions in the starter repository `README.md` file, you'll have configured your database already and populated it with some data.

The `dhtmlx_calendar_events` table should look like this:

![dhtmlx_scheduling calendar_events database table](data/Calendar/images/migrate-from-dhtmlx/dhtmlx-events-db-table.png)

Now create an events table called `bryntum_calendar_events` for the Bryntum Calendar using the following query:

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

This data structure represents the Bryntum Calendar event store.

<div class="note">

Bryntum Calendar has more data models out of the box than demonstrated in this tutorial, for example, assignments and resources. To keep this guide simple, we only create a table for events. Learn more about Bryntum data models in the <a href="https://bryntum.com/products/calendar/docs/guide/Calendar/data/project_data">project data guide</a> in our docs.

</div>

### Migrate the existing data from the DHTMLX table into the new table

Run the following query to insert the existing data from the `dhtmlx_calendar_events` table into the newly created `bryntum_calendar_events` table:

```sql
INSERT INTO `bryntum_calendar_events` 
    (`id`, `name`, `startDate`, `endDate`, `resourceId`, `recurrenceRule`, `duration`, `durationUnit`)
SELECT 
    id, 
    text AS `name`, 
    start_date AS `startDate`, 
    -- Determine endDate based on event type
    CASE
        WHEN rec_type IS NOT NULL AND rec_type != '' THEN
            -- For recurring events, set endDate to same day as startDate, adjusted for duration
            ADDTIME(start_date, SEC_TO_TIME(event_length))
        ELSE
            -- For non-recurring events, use end_date as provided
            end_date
    END AS `endDate`,
    1 AS `resourceId`,  -- Setting resourceId to 1 for all records
    -- Construct recurrence rule for recurring events
    CASE 
        WHEN rec_type LIKE 'day_%' AND event_pid = '0' THEN
            CONCAT('FREQ=DAILY;COUNT=', 
                   (TIMESTAMPDIFF(DAY, start_date, end_date) + 1))
        ELSE 
            NULL 
    END AS `recurrenceRule`,
    -- Calculate duration in days for recurring events
    CASE
        WHEN rec_type IS NOT NULL AND rec_type != '' THEN
            event_length / 86400  -- Convert seconds to days
        ELSE
            NULL
    END AS `duration`,
    'day' AS `durationUnit`
FROM `dhtmlx_calendar_events`;
```

Now that the database is ready, we can update the server-side code.

Note that the conversion logic for recurring events might need further refinement based on the recurrence patterns in your data. You can learn more about recurring events for the DHTMLX Scheduling Calendar in the [DHTMLX Scheduler with Node.js](https://docs.dhtmlx.com/scheduler/howtostart_nodejs.html#recurringevents) guide. The Bryntum Calendar uses a [`recurrenceRule`](https://www.bryntum.com/products/calendar/docs/api/Scheduler/model/mixin/RecurringTimeSpan#field-recurrenceRule) property to describe the recurrence of an event. The `recurrenceRule` property is a string in [RFC-5545](https://tools.ietf.org/html/rfc5545#section-3.3.10) format (an "RRULE" expression).

## Update the server API endpoints

We'll create two new API route handlers on the server for querying `/load` and `/sync` paths. The `/load` path will read the data from the database and send it to the Bryntum Calendar. Any changes you make on the client side will be persisted to the database using the `/sync` path.

### Handling data loading requests

Let's add the `/load` path API endpoint. In the `serverConfig` function of the `server.js` file, add the following GET request handler:

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
        message: "There was an error loading the events data.",
      });
    }
  });
```

This GET request handler fetches the data from the `bryntum_calendar_events` database table using the MySQL Node.js client, then sends it to the Bryntum Calendar.

To check that the endpoint works, open the root folder of the project in the terminal and run:

```bash
npm start
```

Now if you open the [http://localhost:1337/load](http://localhost:1337/load) URL in a browser, you should see the Bryntum Calendar data.

### Handling persisting changes

DHTMLX sends HTTP request data encoded in the URL. Bryntum sends data to the server in a POST request body that uses JSON format. To accommodate this, add the following JSON `bodyParser` below the line `app.use(bodyParser.urlencoded({ extended: true }));` in the `server.js` file:

```javascript
app.use(bodyParser.json());
```

DHTMLX uses separate HTTP methods for each of the CRUD operations. With Bryntum, except for the read operation, we use a single POST request and determine the method and operation based on the request object. Add the following HTTP POST `/sync` route that will be used to keep the data in the database in sync with the changes on the client-side UI:

```javascript
  app.post("/sync", async function (req, res) {
    const { requestId, events } = req.body;
    try {
      const response = { requestId, success: true };
      // if event changes are passed
      if (events) {
        const rows = await applyTableChanges("bryntum_calendar_events", events);
        // if got some new data to update client
        if (rows) {
          response.events = { rows };
        }
      }
      res.send(response);
    } catch (error) {
      console.error({ error });
      res.send({
        requestId,
        success: false,
        message: "There was an error syncing the data.",
      });
    }
  });
```

When changes are made to your Bryntum Calendar, the client-side Bryntum library will make a POST request to the `/sync` endpoint to keep the data in the database in sync with the client-side UI. The code above handles an incoming POST request and inspects the request body to determine which action to take on a particular data model. We first determine which data model to apply a sync request to and then inspect the type of operation to perform. In this case, we check if the sync request body object has a key called `events` and then call the `applyTableChanges` function. 

Let's define the `applyTableChanges` function now. Add the following code to the bottom of the `server.js` file:

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
  return rows;
}
```

In this function, we check if the change operation is an `added`, `updated`, or `removed` operation. If it is, we perform the relevant create, update, or delete query using the MySQL client.

Define the `createOperation` function at the bottom of `server.js` file:

```javascript
function createOperation(added, table) {
  return Promise.all(
    added.map(async (record) => {
      const { $PhantomId, exceptionDates, ...data } = record;
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

<div class="note">

The <code>$PhantomId</code> is a phantom identifier, a unique, autogenerated client-side value used to identify a record. You shouldn't persist <code>$PhantomId</code> on the server. Read more about phantom identifiers in our <a href="https://bryntum.com/products/calendar/docs/guide/Calendar/data/crud_manager#saving-data">docs</a>.

</div>

Add the `deleteOperation` function to the bottom of the `server.js` file:

```javascript
function deleteOperation(deleted, table) {
  return db.query(
    `DELETE FROM ${table} WHERE id in (?)`,
    deleted.map(({ id }) => id)
  );
}
```

Now add the `updateOperation` function:

```javascript
function updateOperation(updated, table) {
  return Promise.all(
    updated.map(({ id, exceptionDates, ...data }) => {
      return db.query("UPDATE ?? set ? where id = ?", [
        table,
        {
          ...data,
          exceptionDates: JSON.stringify(exceptionDates),
        },
        id,
      ]);
    })
  );
}
```

We've now added the API endpoints needed for our Bryntum Calendar.

## Update the client-side code

Now that the server-side part is ready, we'll update and set up the client-side code.

Install the Bryntum Calendar by following [step 1](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm#access-to-npm-registry) and [step 4](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm#install-component) of the [vanilla JavaScript with npm setup guide](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm).

Open the `index.html` file and find the `<script>`, `<link>`, and `<style>` tags used for the DHTMLX Scheduling Calendar. Comment them out, along with the HTML elements in the `<body>` HTML element. Add the following code in the `<head>` tag to import the Bryntum Calendar styles:

```html
    <link rel="stylesheet" href="./calendar.stockholm.css" data-bryntum-theme>
    <style type="text/css" >
      body,
      html {
        display: flex;
        flex-direction: column;
        height: 100vh;
        font-family: Poppins, "Open Sans", Helvetica, Arial, sans-serif;
        font-size: 14px;
      }
    </style>
```

Add the following `<script>` tag in the `<head>` tag:

```html
    <script type="module" defer>
      import { Calendar, CrudManager } from "./calendar.module.js";

      const crudManager = new CrudManager({
        transport: {
          load: {
            url: "http://localhost:1337/load",
          },
          sync: {
            url: "http://localhost:1337/sync",
          },
        },
        autoLoad: true,
        autoSync: true,
      });

      const calendar = new Calendar({
        appendTo: document.body,
        date: new Date(2024, 0, 9),
        weekStartDay: 1,
        crudManager,    
      });
    </script>
```

Here we import the Bryntum Calendar component from the library and set it up to load data from the `/load` endpoint on the initial load of the web page. We specify the `/sync` endpoint is used to keep the client and database in sync when any create, update, or delete operation takes place.

Now configure the server to serve the Bryntum Calendar package files as static resources. In the `server.js` file, add the following line below the `app.use(express.static(path.join(__dirname, "public")))` line:

```javascript
app.use(
  express.static(path.join(__dirname, "/node_modules/@bryntum/calendar"))
);
```

## Test the migration implementation

Run the development server:

```bash
npm start
```

Open the URL [http://localhost:1337](http://localhost:1337/). You should see the migrated data from the DHTMLX Scheduling Calendar loaded into the Bryntum Calendar. You're now ready to take your project management to the next level with a feature-rich and highly customizable Bryntum Calendar.

![Bryntum Calendar](data/Calendar/images/migrate-from-dhtmlx/bryntum.png)


<p class="last-modified">Last modified on 2025-04-23 10:28:23</p>