# Getting Started with Bryntum Calendar in React

## Try React demos

Bryntum Calendar is delivered with a variety of React demo applications showing its functionality.
All demo applications have been verified to be compatible with Node.js 20.

<div class="b-card-group-2">
<a href="https://bryntum.com/products/calendar/examples/?framework=react" class="b-card"><i class="fas b-fa-globe"></i>View online React demos</a>
<a href="#Calendar/guides/integration/react/guide.md#build-and-run-local-demos" class="b-card"><i class="fab b-fa-react">
</i>Build and run React demos</a>
</div>

## Version requirements

Minimum supported:

* React: `16.0.0` or higher
* TypeScript: `3.6.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)
* Vite `4.0.0` or higher (for application build with Vite)

Recommended:

* React: `18.0.0` or higher
* TypeScript: `4.0.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)
* Vite `5.0.0` or higher (for application build with Vite)

## Get Started

In this guide we will explain how to get started if you are using [vitejs.org guide](https://vitejs.dev/guide).

To get started, the broad steps are as follows:

1. [Access to npm registry](##access-to-npm-registry)
2. [Project setup](##project-setup)
3. [Create Calendar Application](##create-calendar-application)
4. [Run Application](##run-application)

The application we are about to build together is pretty simple, and will look like the illustration below:

<img src="Calendar/getting-started-result-react-cra.png" class="b-screenshot" alt="Getting Started on Bryntum Calendar with React Result">

## Access to npm registry

Please refer to this [guide for Bryntum NPM repository access](#Calendar/guides/npm-repository.md).

## Project setup

There are many possible ways of creating and building React applications. Let’s use
[React Vite guide](https://vitejs.dev/guide), which has proven to offer higher efficiency and better performance in
development.

If you are using **javascript only**, please type:

```shell
npm create vite@latest bryntum-calendar-app -- --template react
```

or if you prefer using **typescript**:

```shell
npm create vite@latest bryntum-calendar-app -- --template react-ts
```

Please feel free to change `bryntum-calendar-app` to your preferred application name

Once the template is created, install the node modules:

```shell
cd bryntum-calendar-app
npm install && npm install sass
```

### Install Bryntum Calendar packages

Now that our project has been setup successfully, it's time for us to install Bryntum Calendar package into it so that
we can access the Bryntum features. From your terminal, you can install the following Bryntum Calendar packages:

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

Note: Ensure that you have configured your npm properly to get access to the Bryntum packages. If not, refer to <a href="#Calendar/guides/npm-repository.md">this guide</a>.

</div>

### Dependencies

The application configuration may add a caret `^` as a prefix of dependencies version. We recommend not to use the caret
character as a version prefix to take upgrades fully under control. If necessary, please check the generated
**package.json** file and replace `dependencies` and `devDependencies` by the following:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```json
"dependencies": {
  "@bryntum/calendar": "npm:@bryntum/calendar-trial@6.2.1",
  "@bryntum/calendar-react": "6.2.1",
  "react": "18.2.0",
  "react-dom": "18.2.0"
},
"devDependencies": {
  "@types/react": "~18.2.14",
  "@types/react-dom": "~18.2.6",
  "@vitejs/plugin-react": "~4.0.1",
  "postinstall": "~0.7.4",
  "sass": "~1.69.6",
  "typescript": "~5.1.6",
  "vite": "~4.4.5"
}
```

</div>
<div>

```json
"dependencies": {
  "@bryntum/calendar": "6.2.1",
  "@bryntum/calendar-react": "6.2.1",
  "react": "18.2.0",
  "react-dom": "18.2.0"
},
"devDependencies": {
  "@types/react": "~18.2.14",
  "@types/react-dom": "~18.2.6",
  "@vitejs/plugin-react": "~4.0.1",
  "postinstall": "~0.7.4",
  "sass": "~1.69.6",
  "typescript": "~5.1.6",
  "vite": "~4.4.5"
}
```
</div>
</div>

<div class="note">

Note: The version of React above is not mandatory and is used here only for the purpose of the example. Please
adjust the dependencies according to your development requirement.

</div>

### Vite Configuration

When using Vite to run a Bryntum application in development mode, in order to fix loading bundles multiple times, it is
recommended to include Bryntum packages in the [optimizeDeps](https://vitejs.dev/config/dep-optimization-options.html)
in **vite.config.js**.
Please follow [this guide](#Calendar/guides/integration/react/troubleshooting.md#vite-application) for more
configuration information.

## Create Calendar Application

Now that your project has been setup, let's start with creating a config file in the `src`, which will have Calendar configuration.

<div class="docs-tabs" data-name="Calendar">
<div>
    <a>CalendarConfig.js</a>
    <a>CalendarConfig.ts</a>
</div>
<div>

```javascript
const calendarProps = {
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

</div>
<div>

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
</div>
</div>

With that, add the following content to `public/data.json`.
```javascript
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

Next is to replace your `App.jsx` or `App.tsx` with the following code:

<div class="docs-tabs" data-name="App">
<div>
    <a>App.jsx</a>
    <a>App.tsx</a>
</div>
<div>

```javascript
import { BryntumCalendar } from '@bryntum/calendar-react';
import { calendarProps } from './CalendarConfig';
import './App.scss';

function App() {
  return <BryntumCalendar {...calendarProps} />;
}

export default App;
```

</div>
<div>

```typescript
import { FunctionComponent, useRef } from 'react';
import { BryntumCalendar } from '@bryntum/calendar-react';
import { calendarProps } from './CalendarConfig';
import './App.scss';

const App: FunctionComponent = () => {

    const calendar = useRef<BryntumCalendar>(null);

    return (
        <BryntumCalendar
            ref = {calendar}
            {...calendarProps}
        />
    );
};

export default App;
```
</div>
</div>

This will setup your Calendar, but you need to apply some styling to it.

If you plan to use stateful React collections for data binding
please check [this guide](#Calendar/guides/integration/react/data-binding.md).

### Styling

To ensure there is no unexpected styling, delete the `index.css` file and also remove it from the `main.jsx` or `main.tsx`.

Next, rename the `App.css` file to `App.scss` and replace it with the following:

```scss
// import bryntum theme
@import "@bryntum/calendar/calendar.stockholm.css";

// Giving our calendar some height
#root {
  height: 100vh;
}
```

If you want to customize the default theme, you can replace the `stockholm.css` with the sass version.
Visit [Creating a custom theme](#Gantt/guides/customization/styling.md#creating-a-custom-theme) section for more info.

You can learn more about styling your Bryntum Gantt in our [style guide](#Gantt/guides/customization/styling.md).

## Run Application

Run application development server:

```shell
npm run dev
```

Your application is now available under [http://localhost:5173](http://localhost:5173) in your browser.

Happy coding!

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