# Migrate from FullCalendar to Bryntum Calendar

This tutorial will walk you through the process of transferring your current scheduling tasks from [FullCalendar](https://fullcalendar.io/) to [Bryntum Calendar](https://bryntum.com/products/calendar/). Bryntum Calendar is a commercial project management tool with more built-in features and advanced customization options than FullCalendar. Whether you're looking for a change or want to explore Bryntum Calendar, we've got you covered.

We'll take you through these steps to get your Bryntum Calendar set up and move your data from a MySQL database used by FullCalendar:

1. Installing and configuring Bryntum Calendar.
2. Establishing API endpoints for the server.
3. Creating database tables that are compatible with Bryntum Calendar.
4. Testing the migration process.

## Getting started

To demonstrate the process of migrating to Bryntum Calendar, we will use an existing starter project for FullCalendar that uses JavaScript on the client side and Node.js with REST API endpoints on the server side. Depending on your implementation and the client-side technology you use (such as [React](https://fullcalendar.io/docs/react) or [Angular](https://fullcalendar.io/docs/angular)), your code may differ slightly from ours.

If you prefer to follow along with our starter project instead of updating your own project code, you can clone the [FullCalendar starter GitHub repository](https://github.com/bryntum/fullcalendar-starter). Please refer to the `README.md` file for instructions on setting up the starter project.

Once you have completed the migration process, Bryntum Calendar should display the same data as the original FullCalendar app.

![Initial FullCalendar Data](data/Calendar/images/migrate-from-fullcalendar/initial-fc-data.png)

## Install and set up Bryntum Calendar

We will create a new folder for our Bryntum Calendar project.

In the root directory of your project, run the following command to make the files necessary for the Bryntum Calendar:

```bash
mkdir -p BryntumCalendar/public && touch BryntumCalendar/{server.js,package.json,.env} BryntumCalendar/public/{index.html,main.js,main.css} && cd BryntumCalendar
```

Populate the `.env` file with the same contents as the `.env` you created for the FullCalendar app. It should look something like this:

```bash
DB_HOST='localhost'
DB_USER='root'
DB_PASSWORD='<your-password>'
DB_DATABASE='<your-database>'
PORT=3000
```

Next, populate the `package.json` file we just created with the following:

```json
{
  "name": "fullcalendar",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mysql2": "^3.6.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

Run `npm install` to install the appropriate packages for the project.

## Set up the client side

Install Bryntum Calendar by following [step 1](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm#access-to-npm-registry) and [step 4](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm#install-component) of the [vanilla JavaScript with npm set-up guide](https://bryntum.com/products/calendar/docs/guide/Calendar/quick-start/javascript-npm).

Open the `index.html` file and add the following code to link to the Bryntum stylesheets and give our calendar some additional styling:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bryntum Calendar with MySQL</title>
    <link rel="stylesheet" href="./calendar.stockholm.css" id="bryntum-theme" />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <script type="module" src="main.js"></script>
  </body>
</html>
```

Next, we will style the Bryntum Calendar component. Add the following code inside `main.css`:

```css
body,
html {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Poppins, 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 14px;
}
```

Now we will set up the Bryntum Calendar component. Add the following code to `main.js`:

```javascript
import { Calendar } from './calendar.module.js';

const calendar = new Calendar({
  appendTo: document.body,

  crudManager: {
    autoLoad: true,
    autoSync: true,
    transport: {
      load: {
        url: 'http://localhost:3000/api/events',
      },
      sync: {
        url: 'http://localhost:3000/api/events',
      },
    },
  },
});
```

We have now imported the Bryntum Calendar component from the library and set it up to load data from the `/api/events` endpoint on the initial load of the webpage, which will be served on port `3000`. We also specify that the `/api/events` endpoint will be used when any create, update, or delete operation takes place to keep the client and database in sync.

## Set up the server side

Import the relevant libraries by adding the following lines to the top of the `server.js` file:

```javascript
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Now set up the Express app and database connection by adding the following code to `server.js`:

```javascript
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.static(path.join(__dirname, "/node_modules/@bryntum/calendar"))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
```

## Set up the server API endpoints

The client-side Bryntum library will make a POST request to the `/api/events` endpoint when changes are made to keep the data in the database in sync with the client-side UI.

Add the following HTTP POST request to the bottom of `server.js`:

```javascript
// Add, update, and remove events
app.post('/api/events', async (req, res) => {
  const { added, updated, removed } = req.body.events;

  try {
    const addedResponse = added ? await addEvents(added) : [];
    const updatedResponse = updated ? await updateEvents(updated) : [];
    const removedResponse = removed ? await removeEvents(removed) : [];

    res.send({
      success: true,
      events: {
        rows: [...addedResponse, ...updatedResponse, ...removedResponse],
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false });
  }
});
```

This code defines an Express.js route handler for POST requests to the `/api/events` endpoint. It handles adding, updating, and removing events based on the request body. The `added`, `updated`, and `removed` properties are destructured from `req.body.events`. A try-catch block is used to handle errors during database operations.

In the try block, `addEvents`, `updateEvents`, and `removeEvents` functions are conditionally called based on the presence of the respective properties. The results of these functions are then combined using the spread operator. If successful, the response sent to the client contains a success status and an `events` object with the combined results of the operations.

Define the `addEvents` function at the bottom of `server.js`:

```javascript
// Helper functions
async function addEvents(events) {
  const query =
    'INSERT INTO events (name, startDate, endDate, duration, durationUnit, resourceId, allDay) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const addedResponse = [];

  for (const event of events) {
    const {
      name,
      startDate,
      endDate,
      duration,
      durationUnit,
      resourceId,
      allDay,
    } = event;
    const [result] = await pool
      .promise()
      .query(query, [
        name,
        startDate,
        endDate,
        duration,
        durationUnit,
        resourceId,
        allDay,
      ]);
    addedResponse.push({
      id: result.insertId.toString(),
      $PhantomId: event.$PhantomId,
    });
  }

  return addedResponse;
}
```

The `addEvents` function inserts an array of events into the database. For each event, it extracts relevant properties, runs a SQL INSERT query, and stores the generated IDs in an array. The function returns this array after processing all events.

Define the `updateEvents` and `removeEvents` functions at the bottom of `server.js`:

```javascript
async function updateEvents(events) {
  const updatedResponse = [];

  for (const event of events) {
    const id = await updateEvent(event);
    updatedResponse.push({ id });
  }

  return updatedResponse;
}
```

```javascript
async function removeEvents(events) {
  const query = 'DELETE FROM events WHERE id = ?';

  for (const event of events) {
    await pool.promise().query(query, [event.id]);
  }

  return [];
}
```

The `updateEvents` function updates an array of events and returns an array of updated IDs. It iterates through the input events, calls the `updateEvent` function for each event, and pushes the returned ID into the `updatedResponse` array. Once all events are processed, the function returns the `updatedResponse` array.

The `removeEvents` function deletes events from the database. It takes an array of events and iterates through them, executing a SQL DELETE query for each event. It returns an empty array.

Next, define the `updateEvent` function:

```javascript
async function updateEvent(event) {
  const { id, name, startDate, endDate, resourceId, allDay, recurrenceRule } =
    event;
  const updates = [];
  const values = [];

  // Add values and updates for each field
  if (name !== undefined) {
    updates.push('name = ?');
    values.push(name);
  }
  if (startDate !== undefined) {
    updates.push('startDate = ?');
    values.push(startDate);
  }
  if (endDate !== undefined) {
    updates.push('endDate = ?');
    values.push(endDate);
  }
  if (resourceId !== undefined) {
    updates.push('resourceId = ?');
    values.push(resourceId);
  }
  if (allDay !== undefined) {
    updates.push('allDay = ?');
    values.push(allDay);
  }
  if (recurrenceRule !== undefined) {
    updates.push('recurrenceRule = ?');
    values.push(recurrenceRule);
  }

  if (updates.length === 0) {
    throw new Error('No valid fields to update.');
  } else {
    const query = `UPDATE events SET ${updates.join(', ')} WHERE id = ?`;
    values.push(id);

    await pool.promise().query(query, values);
    return id;
  }
}
```

The `updateEvent` function updates a single event. It extracts relevant properties from the input event and creates an array of updates and values for each field. It then checks if any valid fields are available to update, throws an error if not, and otherwise executes a SQL UPDATE query using the `pool.promise().query()` method. It then returns the event.

Next, add the following HTTP GET request underneath the `/api/events` POST route:

```javascript
// Get events and resources
app.get('/api/events', async (req, res) => {
  try {
    const [eventsResults] = await pool.promise().query('SELECT * FROM events');
    const [resourcesResults] = await pool
      .promise()
      .query('SELECT * FROM resources');

    const events = eventsResults.map((event) => ({
      ...event,
      id: event.id.toString(),
    }));
    const resources = resourcesResults.map((resource) => ({
      ...resource,
      id: resource.id.toString(),
    }));

    res.send({
      success: true,
      events: { rows: events },
      resources: { rows: resources },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false });
  }
});
```

This is the endpoint to fetch and read the data from our database. The library will call this endpoint to keep the client side up to date with our datastore, as we configured in the `index.html` script section.

## Create database tables compatible with Bryntum Calendar

If you followed the instructions in the `README.md` file, you will have already configured your database and populated it with some data.

The `events` table should look like this:

![FullCalendar SQL Table](data/Calendar/images/migrate-from-fullcalendar/fc-table.png)

We will now alter the `events` table and create a new table called `resources` to create a database compatible with the Bryntum Calendar implementation.

Run the following query to alter the `events` table for our event data:

```sql
ALTER TABLE events
ADD (
  duration INT,
  durationUnit VARCHAR(10),
  cls VARCHAR(255),
  exceptionDates TEXT,
  resourceId INT,
  allDay TINYINT(1),
  recurrenceRule TEXT
);
```

Rename the `start`, `end`, and `title` columns:

```sql
ALTER TABLE events
RENAME COLUMN start TO startDate,
RENAME COLUMN end TO endDate,
RENAME COLUMN title TO name;
```

Now update some columns in the table:

```sql
UPDATE events
SET
  duration = TIMESTAMPDIFF(HOUR, startDate, endDate),
  durationUnit = 'hour',
  cls = '',
  exceptionDates = NULL,
  resourceId = 1,
  allDay = 0,
  recurrenceRule = NULL;
```

This SQL code performs an update operation on the `events` table. For example, it sets the `duration` field to the difference in hours between the `startDate` and `endDate` fields for all records in the table.

Run the following query to create the `resources` table for our event data:

```sql
CREATE TABLE resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  eventColor VARCHAR(50)
);
```

Finally, add some data to the `resources` table:

```sql
INSERT INTO resources (name, eventColor)
VALUES ('Resource 1', 'green');
```

We have added this resource to demonstrate how events can be associated with specific resources using the `resourceId` field in the `events` table. The newly added resource has the name `'Resource 1'` and a green `eventColor`.

## Test the migration implementation

After completing the migration process, it's time to test the implementation. Here are the steps to test it:

1. Open the `BryntumCalendar` folder in the terminal.
2. Run the following command:

```bash
npm run start
```

The Bryntum Calendar chart should display the migrated data from the FullCalendar chart. You can now take advantage of Bryntum Calendar's extensive features and customization options to manage your project effectively.

![Final Bryntum Calendar](data/Calendar/images/migrate-from-fullcalendar/bryntum-calendar-final.png)

## Bryntum Calendar features

FullCalendar Calendar has basic features such as event drag-and-drop editing, event resizing, background highlighting, theming, locales, and different views. Bryntum Calendar offers all of these features and more. Let's look at some of the features that Bryntum Calendar offers that FullCalendar Calendar does not.

### Event filtering

Create a filter to find specific events in a Bryntum Calendar easily. Filter events using a [Textfield](https://bryntum.com/products/calendar/docs/api/Core/widget/TextField) widget with a [`change`](https://bryntum.com/products/calendar/docs/api/Core/widget/TextField#event-change) event listener added to it. In the event handler function, use a regular expression to filter events using the [`filter`](https://bryntum.com/products/calendar/docs/api/Scheduler/data/EventStore#function-filter) method on the event store. See an example of event filtering in our [event and resource filtering demo](https://www.bryntum.com/products/calendar/examples/filtering/). Click on the "</>" icon in the top-right corner of the demo to see the code. 

### Sidebar calendar widget

Add the [sidebar](https://www.bryntum.com/products/calendar/docs/api/Calendar/widget/Sidebar) widget to your Bryntum Calendar using the [`sidebar`](https://www.bryntum.com/products/calendar/docs/api/Calendar/view/Calendar#config-sidebar) config object to get an overview of your calendar and navigate to a specific date.

The Bryntum Calendar sidebar widget features:

- A date picker to navigate the calendar to the selected date.
- A filter field to filter events by name or any other field.
- A checkable resource list that allows event filtering by resource.

### Event editor

Bryntum Calendar has a built-in, easily configurable [event editor](https://bryntum.com/products/calendar/docs/guide/Calendar/customization/eventedit) that you can also use to edit [recurring events](https://bryntum.com/products/calendar/docs/api/Scheduler/view/mixin/RecurringEvents).

### Event tooltip

With the Bryntum Calendar [`eventTooltip`](https://bryntum.com/products/calendar/docs/api/Calendar/feature/EventTooltip) feature, you can add an event tooltip when an event bar is clicked on or hovered over and customize the tooltip with a range of easy configuration options.

### Time ranges

Use the Bryntum Calendar [TimeRanges](https://bryntum.com/products/calendar/docs/api/Calendar/feature/TimeRanges) feature to highlight time ranges with ease in day or week views. 

### Undo and redo support

All Bryntum Scheduling products, including Bryntum Calendar, come with built-in [undo and redo](https://bryntum.com/products/calendar/docs/api/Scheduler/widget/UndoRedo) functionality so that you can undo and redo changes to the calendar data.

Features offered by Bryntum Calendar that are not available in FullCalendar include:

- Configurable time scales
- Column sorting
- Cell editing
- Summary rows
- Multiple assignment of events
- Infinite timeline scrolling
- Handling large datasets
- Confirmation dialogs
- Event items
- Dragging events from an external source
- Animated UI updates


<p class="last-modified">Last modified on 2025-04-23 10:28:24</p>