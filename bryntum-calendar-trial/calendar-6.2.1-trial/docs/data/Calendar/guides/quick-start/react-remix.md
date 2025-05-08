# Getting started with Bryntum Calendar in Remix

This quick start guide will show you how to build a basic Bryntum Calendar in a Remix TypeScript application.

## Version requirements

Bryntum Calendar requires React `16.0.0` or higher and TypeScript `3.6.0` or higher for applications written in
TypeScript and Remix version `2.15.0` requires [Node LTS version](https://nodejs.org/en).

## Getting started

To get started, we will follow these steps to create a basic Bryntum Calendar Remix app:

1. [Setup a Remix application](##setup-a-remix-application)
2. [Install the Bryntum Calendar component](##install-the-bryntum-calendar-component)
3. [Create a Bryntum Calendar component](##create-a-bryntum-calendar-component)
4. [Run the application](##run-the-application)

The basic Bryntum Calendar starter template that we'll build will look like this:

<img src="Calendar/getting-started-result-react-cra.png" class="b-screenshot" alt="Getting Started on 
Bryntum Calendar with React Result">

## Setup a Remix application

We'll use the [Remix quick start guide](https://remix.run/docs/en/main/start/quickstart) to create a Remix application.
Create a Remix application by running the following command:

```shell
npx create-remix@latest
```

This command will prompt a few questions:

```bash
- Where should we create your new project?
 my-remix-calendar
- Initialize a new git repository?
 Yes
- Install dependencies with npm?
 Yes
```

After you've selected your answers for the prompt questions, `create-remix` will create a folder with your 
project name and install the dependencies. 

Change your current working directory to the new Remix project directory:

```shell
cd my-remix-calendar
```

## Install the Bryntum Calendar component

Installing the Bryntum Calendar component using npm is the quickest way to use our products. First, get access to the
Bryntum private npm registry by following the [guide in our docs](#Calendar/guides/npm-repository.md#repository-access).
Once you’ve logged in to the registry, install the Bryntum Calendar component packages:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/calendar@npm:@bryntum/calendar-trial @bryntum/calendar-react
```

</div>
<div>

```shell
npm install @bryntum/calendar @bryntum/calendar-react
```
</div>
</div>

<div class="note">

Note: Ensure that you have configured your npm properly to get access to the Bryntum packages.
If not, refer to <a href="#Calendar/guides/npm-repository.md">this guide</a>.

</div>

You'll also need to install `remix-utils` to do client-side rendering.

```shell
npm install remix-utils
```

### Dependencies

The application configuration may add a caret `^` as a prefix of the dependencies version in your `package.json` file.
We recommend removing the caret character as a version prefix so that you have full control over package updates.

## Create a Bryntum Calendar component

Let's start by creating a config file called `app.config.tsx`.
Create a `components` folder in the `app` folder and add the following lines of code to it:

```typescript
import { BryntumCalendarProps } from '@bryntum/calendar-react';

const calendarProps: BryntumCalendarProps = {
    date : new Date(2022, 2, 15),

    crudManager : {
        transport : {
            load : {
                url : 'data.json'
            }
        },
        autoLoad : true
    }
};

export { calendarProps };
```

This object will be used for configuration of the Bryntum Calendar component.

Next, we'll create a Bryntum Calendar React component. Create a file called `bryntum.client.tsx` in the
`app/components/` folder. Add the following lines of code to it:

```typescript
import { BryntumCalendar } from '@bryntum/calendar-react';
import { calendarProps } from './app.config';

const BryntumClient = () => {
    return (
        <BryntumCalendar
            {...CalendarProps}
        />
    );
};

export default BryntumClient;
```

The file extension is `.client.tsx` becase Bryntum components are rendered on **client-side** only and Remix uses
`.client.tsx` for client side files.

Let's create the file for the example data. In the `public` folder, create a folder called `data`. In the `data` folder,
create a file called `data.json` and add the following JSON object to it:

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
        "startDate": "2022-03-11T14:00:00",
        "endDate": "2022-03-18T12:00:00",
        "name": "Hackathon",
        "allDay": true,
        "resourceId": "bryntum",
        "eventColor": "green"
      },
      {
        "id": 2,
        "startDate": "2022-03-11T14:00:00",
        "endDate": "2022-03-11T18:00:00",
        "name": "Check-In in Hotel",
        "resourceId": "hotel"
      },
      {
        "id": 3,
        "startDate": "2022-03-11T18:00:00",
        "endDate": "2022-03-11T20:00:00",
        "name": "Relax and official arrival beer",
        "allDay": true,
        "resourceId": "michael"
      },
      {
        "id": 4,
        "startDate": "2022-03-11T20:00:00",
        "endDate": "2022-03-11T21:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 5,
        "startDate": "2022-03-12T09:00:00",
        "endDate": "2022-03-12T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 6,
        "startDate": "2022-03-12T10:00:00",
        "endDate": "2022-03-12T12:00:00",
        "name": "Team Scrum",
        "resourceId": "bryntum"
      },
      {
        "id": 7,
        "startDate": "2022-03-12T12:00:00",
        "endDate": "2022-03-12T14:00:00",
        "name": "Scheduler Grid introduction + review",
        "resourceId": "bryntum"
      },
      {
        "id": 8,
        "startDate": "2022-03-12T14:00:00",
        "endDate": "2022-03-12T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 9,
        "startDate": "2022-03-12T15:00:00",
        "endDate": "2022-03-12T19:00:00",
        "name": "Active client project review",
        "resourceId": "bryntum"
      },
      {
        "id": 10,
        "startDate": "2022-03-12T19:00:00",
        "endDate": "2022-03-12T20:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 11,
        "startDate": "2022-03-13T09:00:00",
        "endDate": "2022-03-13T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 12,
        "startDate": "2022-03-13T10:00:00",
        "endDate": "2022-03-13T12:00:00",
        "name": "Roadmapping for 2020",
        "resourceId": "bryntum"
      },
      {
        "id": 13,
        "startDate": "2022-03-13T12:00:00",
        "endDate": "2022-03-13T14:00:00",
        "name": "Review Assembla tickets and decide features to add",
        "resourceId": "bryntum"
      },
      {
        "id": 14,
        "startDate": "2022-03-13T14:00:00",
        "endDate": "2022-03-13T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 15,
        "startDate": "2022-03-13T15:00:00",
        "endDate": "2022-03-13T19:00:00",
        "name": "Active programming",
        "resourceId": "bryntum"
      },
      {
        "id": 16,
        "startDate": "2022-03-13T19:00:00",
        "endDate": "2022-03-13T20:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 17,
        "startDate": "2022-03-14T09:00:00",
        "endDate": "2022-03-14T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 18,
        "startDate": "2022-03-14T10:00:00",
        "endDate": "2022-03-14T18:00:00",
        "name": "Excursion",
        "resourceId": "michael"
      },
      {
        "id": 19,
        "startDate": "2022-03-14T18:00:00",
        "endDate": "2022-03-14T22:00:00",
        "name": "Team Building",
        "resourceId": "michael",
        "eventColor": "green"
      },
      {
        "id": 20,
        "startDate": "2022-03-15T09:00:00",
        "endDate": "2022-03-15T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 21,
        "startDate": "2022-03-15T14:00:00",
        "endDate": "2022-03-15T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 22,
        "startDate": "2022-03-15T19:00:00",
        "endDate": "2022-03-15T20:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 23,
        "startDate": "2022-03-15T00:00:00",
        "endDate": "2022-03-16T00:00:00",
        "name": "Gantt review + development",
        "allDay": true,
        "resourceId": "bryntum"
      },
      {
        "id": 24,
        "startDate": "2022-03-16T09:00:00",
        "endDate": "2022-03-16T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 25,
        "startDate": "2022-03-16T14:00:00",
        "endDate": "2022-03-16T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 26,
        "startDate": "2022-03-16T18:00:00",
        "endDate": "2022-03-16T21:00:00",
        "name": "Split.JS conference: Monitoring and Reproducing Errors in Web Applications + Late Dinner or AfterParty",
        "resourceId": "michael"
      },
      {
        "id": 27,
        "startDate": "2022-03-16T00:00:00",
        "endDate": "2022-03-17T00:00:00",
        "name": "Root Cause ticket bash",
        "allDay": true,
        "resourceId": "bryntum"
      },
      {
        "id": 28,
        "startDate": "2022-03-17T09:00:00",
        "endDate": "2022-03-17T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 29,
        "startDate": "2022-03-17T14:00:00",
        "endDate": "2022-03-17T15:00:00",
        "name": "Lunch",
        "resourceId": "hotel"
      },
      {
        "id": 30,
        "startDate": "2022-03-17T19:00:00",
        "endDate": "2022-03-17T20:00:00",
        "name": "Dinner",
        "resourceId": "hotel"
      },
      {
        "id": 31,
        "startDate": "2022-03-17T00:00:00",
        "endDate": "2022-03-18T00:00:00",
        "name": "Pair programming sessions",
        "allDay": true,
        "resourceId": "bryntum"
      },
      {
        "id": 32,
        "startDate": "2022-03-18T09:00:00",
        "endDate": "2022-03-18T10:00:00",
        "name": "Breakfast",
        "resourceId": "hotel"
      },
      {
        "id": 33,
        "startDate": "2022-03-18T10:00:00",
        "endDate": "2022-03-18T12:00:00",
        "name": "Check-Out & Fly home",
        "resourceId": "michael"
      }
    ]
  }
}
```

We need to create a wrapper component for the Bryntum Calendar React component to render on the client only.
Replace the `app/routes/_index.tsx` file with the following code:

```typescript
import { ClientOnly } from 'remix-utils/client-only';
import BryntumClient from '~/components/bryntum.client';

export default function Index() {
    return (
        <ClientOnly fallback={<h1>Loading Bryntum Calendar</h1>}>
            {() => <BryntumClient/>}
        </ClientOnly>
    );
}
```

Where the `ClientOnly` lets you render the components on the client-side only.

### Styling

To style the Bryntum Calendar, create a `app/styles/` folder and add `index.css` file:

```css
body,
html {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Poppins, "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
}
```

Import the `index.css` file along with one of the Bryntum theme in `Bryntum.client.tsx`:

```typescript
import "@bryntum/calendar/calendar.stockholm.css";
import "../styles/index.css";
```

If you want to customize the default theme, you can replace the `stockholm.css` with the sass version.
Visit [Creating a custom theme](#Gantt/guides/customization/styling.md#creating-a-custom-theme) section for more info.

You can learn more about styling your Bryntum Calendar in our [style guide](#Calendar/guides/customization/styling.md). 

## Run the application

Run the local development server:

```shell
npm run dev
```

You'll see the Bryntum Calendar app at the URL [http://localhost:5173/](http://localhost:5173/).

## Troubleshooting

Please refer to this [Troubleshooting guide](#Calendar/guides/integration/react/troubleshooting.md).

## What to do next?

### Further on integration with React

Do you want to know more about how Bryntum Calendar integrates with react and start to customize your application? We
provide you with a [complete React guide here](#Calendar/guides/integration/react/guide.md).

### Learn about Data

[Data Binding Guide](#Calendar/guides/integration/react/data-binding.md) explains how data can be bound to the component.

Bryntum components often use multiple collections and entities.

The [Data guide](#Calendar/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-04-23 11:55:09</p>