

const examples = {
  Features: {
    items: [{
      folder: 'print',
      title: 'Calendar print feature',
      since: '4.1.0'
    }, {
      folder: 'shifted',
      title: 'Display day views that don\'t start at midnight',
      since: '4.2.0'
    }, {
      folder: 'filtering',
      title: 'Event filtering'
    }, {
      folder: 'filtering-advanced',
      title: 'Multi-level filtering',
      since: '5.6.8'
    }, {
      folder: 'listview',
      title: 'Events viewed in grid form',
      since: '4.1.0',
      updated: '6.2.1'
    }, {
      folder: 'list-range',
      title: 'Event lists showing arbitrary date ranges',
      since: '5.3.4'
    }, {
      folder: 'load-on-demand',
      title: 'Loading only what the UI requires',
      since: '5.2.5'
    }, {
      folder: 'exporttoexcel',
      title: 'Exporting events to Excel',
      since: '6.0.0'
    }, {
      folder: 'exporttoics',
      title: 'Exporting events to ICS format',
      since: '4.0'
    }, {
      folder: 'fit-hours',
      title: 'Fit timeline to available space',
      since: '4.1.1',
      updated: '4.3.2'
    }, {
      folder: 'multiassign',
      title: 'Multi assignment'
    }, {
      folder: 'multiassign-resourceids',
      title: 'Multi assignment using resourceIds',
      since: '5.6.11'
    }, {
      folder: 'resourceview',
      title: 'ResourceView',
      since: '4.3.0',
      updated: '5.0.2'
    }, {
      folder: 'date-resource',
      title: 'Date/ResourceView',
      since: '5.3.2',
      updated: '6.1.8'
    }, {
      folder: 'resource-time-capacity',
      title: 'Resources with capacity tick renderer',
      since: '6.2.0 '
    }, {
      folder: 'date-resource-non-consecutive-dates',
      title: 'Date/ResourceView showing non-consectutive dates',
      since: '6.1'
    }, {
      folder: 'undoredo',
      title: 'Undo & redo'
    }, {
      folder: 'event-column',
      title: 'EventColumn',
      since: '5.0.1'
    }, {
      folder: 'state',
      title: 'Storing and restoring state',
      since: '5.2.0',
      updated: '5.3.5'
    }, {
      folder: 'timeranges',
      title: 'Using TimeRanges',
      since: '5.3.0',
      updated: '6.0.5'
    }, {
      folder: 'timezone',
      title: 'Time zone support',
      since: '5.3.0',
      updated: '5.6.11'
    }, {
      folder: 'dual-dayview',
      title: 'Dual DayView',
      since: '5.4.2'
    }, {
      folder: 'day-agenda',
      title: 'Day Agenda View',
      since: '6.1.0'
    }, {
      folder: 'travel-time',
      title: 'Travel time demo',
      since: '6.1.0'
    }]
  },
  Basics: {
    items: [{
      folder: 'basic',
      title: 'Basic setup'
    }, {
      folder: 'visible-hours',
      title: 'Configuring visible hours',
      updated: '4.3.6'
    }, {
      folder: 'recurrence',
      title: 'Recurring events'
    }, {
      folder: 'day-zoom',
      title: 'Zooming the DayView timeline',
      since: '5.1.3'
    }, {
      folder: 'day-time-ticks',
      title: 'DayView time axis split into six minute ticks',
      since: '5.3.0'
    }, {
      folder: 'responsive',
      title: 'Illustrates responsive sizing breakpoints',
      since: '5.3.7'
    }, {
      folder: 'action-buttons',
      title: 'Icon buttons to events in DayViews and WeekViews',
      since: '6.0.0'
    }, {
      folder: 'current-time-options',
      title: 'Show the current time line in different ways',
      since: '6.0.2'
    }, {
      folder: 'month-agenda',
      title: 'Show a compact month view suitable for phone sized displays',
      since: '6.1.0',
      updated: '6.1.2'
    }]
  },
  Customization: {
    items: [{
      folder: 'customized-resourcefilter',
      title: 'Alternative resource filtering UI',
      since: '4.3.5'
    }, {
      folder: 'confirmation-dialogs',
      title: 'Confirmation dialogs',
      since: '4.1.4'
    }, {
      folder: 'custom-menus',
      title: 'Customized context menus',
      since: '4.0.5'
    }, {
      folder: 'eventedit',
      title: 'Customized event editor',
      updated: '5.0'
    }, {
      folder: 'tooltips',
      title: 'Customized event tooltip'
    }, {
      folder: 'sidebar-customization',
      title: 'Customized sidebar',
      updated: '6.2.0'
    }, {
      folder: 'custom-rendering',
      title: 'Custom rendering',
      updated: '6.2.0'
    }, {
      folder: 'event-items',
      title: 'Event items',
      since: '5.3.7'
    }, {
      folder: 'localization',
      title: 'Localization',
      updated: '6.1.8'
    }, {
      folder: 'resource-avatars',
      title: 'Rendering resource avatars in the event bars',
      since: '4.3.9'
    }, {
      folder: 'docked-editor',
      title: 'Docked event editor',
      since: '5.2.9'
    }, {
      folder: 'event-grouping',
      title: 'Event group rendering outside the event flow',
      since: '5.6.0'
    }, {
      folder: 'custom-theme',
      title: 'Custom Theme',
      since: '6.0.5'
    }, {
      folder: 'sliding-day-range',
      title: 'Sliding day range',
      since: '6.0.6'
    }]
  },
  'Power demos': {
    items: [{
      folder: 'bigdataset',
      title: 'Big data set',
      updated: '5.3.0'
    }, {
      folder: 'calendar-taskboard',
      title: 'Calendar + Taskboard integration',
      since: '5.0.0',
      updated: '6.1.6'
    }, {
      folder: 'dragfromgrid',
      title: 'Drag events from external grid',
      since: '4.0.4',
      updated: '5.4.0'
    }, {
      folder: 'drag-between-calendars',
      title: 'Drag events between two Calendar instances',
      since: '6.2'
    }, {
      folder: 'drag-onto-tasks',
      title: 'Drag equipment from external grid onto tasks',
      since: '5.5.2',
      updated: '5.6.7'
    }, {
      folder: 'dragfromsidebar',
      title: 'Drag from sidebar grid demo',
      since: '6.1.8'
    }, {
      folder: 'calendar-scheduler',
      title: 'Scheduler Timeline',
      since: '4.1.0',
      updated: '4.2.4'
    }, {
      folder: 'megadataset',
      title: 'Colossal data set',
      since: '5.5.4'
    }, {
      folder: 'show-booking',
      title: 'Show booking and scheduling UI',
      since: '5.2.0'
    }, {
      folder: 'radio-schedule',
      title: 'Radio broadcast scheduling UI',
      since: '6.0.0'
    }]
  },
  Integration: {
    items: [{
      folder: 'esmodule',
      title: 'Include using EcmaScript module'
    }, {
      folder: 'salesforce',
      title: 'Integrate with Salesforce Lightning',
      globalUrl: 'https://bryntum-dev-ed.develop.lightning.force.com/lightning/n/BryntumCalendar',
      since: '4.0',
      updated: '5.4.1',
      overlay: 'salesforce'
    }, {
      folder: 'scripttag',
      title: 'Include using script tag'
    }, {
      folder: 'webcomponents',
      title: 'Use as web component',
      since: '4.1.0'
    }, {
      folder: 'frameworks/ionic/ionic-4',
      title: 'Integrate with Ionic',
      build: true,
      overlay: 'ionic',
      version: 'Ionic 5 + Angular 10 + TypeScript 3',
      since: '4.3.0'
    }, {
      folder: 'php',
      title: 'Backend in PHP',
      since: '6.1.2'
    }, {
      folder: 'frameworks/webpack/basic',
      title: 'Custom build using WebPack',
      overlay: 'webpack',
      version: 'WebPack 5',
      since: '2.3',
      updated: '6.1.4',
      offline: true
    }, {
      folder: 'frameworks/webpack/basic-thin',
      title: 'Custom thin build using WebPack',
      overlay: 'webpack',
      version: 'WebPack 5',
      since: '6.1.4'
    }]
  },
  'Angular examples': {
    overlay: 'angular',
    tab: 'angular',
    build: true,
    items: [{
      folder: 'frameworks/angular/angular-11',
      title: 'Basic setup using HttpClient',
      version: 'Angular 11 + TypeScript 4',
      since: '5.3.3',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/basic',
      title: 'Basic setup',
      version: 'Angular 13 + TypeScript 4',
      since: '5.1.0',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/basic-thin',
      title: 'Basic thin setup',
      version: 'Angular 13 + TypeScript 4',
      since: '6.1.4'
    }, {
      folder: 'frameworks/angular/bigdataset',
      title: 'Big data set',
      version: 'Angular 13 + TypeScript 4',
      since: '5.1.0',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/drag-from-grid',
      title: 'Drag from external source',
      version: 'Angular 13 + TypeScript 4',
      since: '5.0.5',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/drag-onto-tasks',
      title: 'Drag equipment from external grid onto tasks',
      version: 'Angular 16 + TypeScript 5',
      since: '5.6.5',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/eventedit',
      title: 'Customized event editor',
      version: 'Angular 13 + TypeScript 4',
      since: '5.1',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/filtering',
      title: 'Event filtering',
      version: 'Angular 13 + TypeScript 4',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/inline-data',
      title: 'Inline data',
      version: 'Angular 13 + TypeScript 4',
      since: '5.0.3',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/listview',
      title: 'Events viewed in grid form',
      version: 'Angular 16 + TypeScript 5',
      since: '5.6.5',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/resourceview',
      title: 'Resource view',
      version: 'Angular 16 + TypeScript 5',
      since: '5.6.1',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/timeranges',
      title: 'Using TimeRanges',
      version: 'Angular 16 + TypeScript 5',
      since: '5.6.4',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/undoredo',
      title: 'Undo/redo',
      version: 'Angular 13 + TypeScript 4',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/visible-hours',
      title: 'Configuring visible hours',
      version: 'Angular 13 + TypeScript 4',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/date-resource',
      title: 'Date/ResourceView',
      version: 'Angular 18 + TypeScript 5',
      since: '6.1.6'
    }]
  },
  'React + Vite examples': {
    overlay: 'react',
    tab: 'react',
    build: true,
    items: [{
      folder: 'frameworks/react-vite/basic-thin',
      title: 'Basic thin setup',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '6.1.4'
    }, {
      folder: 'frameworks/react-vite/drag-onto-tasks',
      title: 'Drag equipment from external grid onto tasks',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '5.6.5',
      updated: '5.6.7'
    }, {
      folder: 'frameworks/react-vite/listview',
      title: 'Events viewed in grid form',
      version: 'React 18 + Vite 4 + TypeScript 5',
      since: '5.6.5',
      updated: '5.6.7'
    }, {
      folder: 'frameworks/react-vite/resourceview',
      title: 'Resource view',
      version: 'React 18 + Vite 4 + TypeScript 5',
      since: '5.6.3'
    }, {
      folder: 'frameworks/react-vite/timeranges',
      title: 'Using TimeRanges',
      version: 'React 18 + Vite 4 + TypeScript 5',
      since: '5.6.5'
    }]
  },
  'React examples': {
    overlay: 'react',
    tab: 'react',
    build: true,
    items: [{
      folder: 'frameworks/react/javascript/basic',
      title: 'Basic setup',
      version: 'React 18',
      since: '5.1'
    }, {
      folder: 'frameworks/react/javascript/bigdataset',
      title: 'Big data set',
      version: 'React 18',
      since: '5.1'
    }, {
      folder: 'frameworks/react/javascript/eventedit',
      title: 'Customized event editor',
      version: 'React 18',
      since: '5.1'
    }, {
      folder: 'frameworks/react/javascript/filtering',
      title: 'Event filtering',
      version: 'React 16'
    }, {
      folder: 'frameworks/react/javascript/inline-data',
      title: 'Inline data',
      version: 'React 16',
      since: '5.0.3'
    }, {
      folder: 'frameworks/react/javascript/undoredo',
      title: 'Undo/redo',
      version: 'React 18',
      since: '5.1'
    }, {
      folder: 'frameworks/react/javascript/visible-hours',
      title: 'Configuring visible hours',
      version: 'React 17',
      since: '4.1'
    }, {
      folder: 'frameworks/react/typescript/basic',
      title: 'Basic setup with TypeScript',
      version: 'React 17 + TypeScript 3',
      since: '5.0.3'
    }, {
      folder: 'frameworks/react/typescript/sharepoint-fabric',
      title: 'SharePoint Workbench with TypeScript',
      version: 'React 17 + TypeScript 4',
      offline: true,
      since: '6.0.1'
    }]
  },
  'React + Remix examples': {
    overlay: 'react',
    tab: 'react',
    build: true,
    items: [{
      folder: 'frameworks/react-remix/basic',
      title: 'Basic setup',
      version: 'React 18 + Remix 2 + Vite 5 + TypeScript 5',
      offline: true,
      since: '6.0.0'
    }]
  },
  'Vue 3 + Vite examples': {
    overlay: 'vue',
    tab: 'vue',
    build: true,
    items: [{
      folder: 'frameworks/vue-3-vite/basic',
      title: 'Basic setup',
      version: 'Vue 3 + Vite 5 + TypeScript 5',
      since: '6.1.2'
    }, {
      folder: 'frameworks/vue-3-vite/basic-thin',
      title: 'Basic thin setup',
      version: 'Vue 3 + Vite 5 + TypeScript 5',
      since: '6.1.4'
    }, {
      folder: 'frameworks/vue-3-vite/drag-onto-tasks',
      title: 'Drag equipment from external grid onto tasks',
      version: 'Vue 3 + Vite 4 + TypeScript 4',
      since: '5.6.5',
      updated: '5.6.7'
    }, {
      folder: 'frameworks/vue-3-vite/listview',
      title: 'Events viewed in grid form',
      version: 'Vue 3 + Vite 4 + TypeScript 4',
      since: '5.6.5',
      updated: '5.6.7'
    }, {
      folder: 'frameworks/vue-3-vite/resourceview',
      title: 'Resource view',
      version: 'Vue 3 + Vite 4 + TypeScript 4',
      since: '5.6.3'
    }, {
      folder: 'frameworks/vue-3-vite/timeranges',
      title: 'Using TimeRanges',
      version: 'Vue 3 + Vite 4 + TypeScript 4',
      since: '5.6.5'
    }]
  },
  'Vue 3 examples': {
    overlay: 'vue',
    tab: 'vue',
    build: true,
    items: [{
      folder: 'frameworks/vue-3/javascript/basic',
      title: 'Basic setup',
      since: '4.1',
      version: 'Vue 3',
      updated: '5.3.0'
    }, {
      folder: 'frameworks/vue-3/javascript/bigdataset',
      title: 'Big data set',
      version: 'Vue 3',
      since: '5.1',
      updated: '5.3.0'
    }, {
      folder: 'frameworks/vue-3/javascript/calendar-scheduler',
      title: 'Scheduler timeline',
      version: 'Vue 3',
      since: '5.3.2'
    }, {
      folder: 'frameworks/vue-3/javascript/calendar-scheduler-inline',
      title: 'Scheduler timeline with inline data',
      version: 'Vue 3',
      since: '5.3.3'
    }, {
      folder: 'frameworks/vue-3/javascript/eventedit',
      title: 'Customized event editor',
      version: 'Vue 3',
      since: '5.1',
      updated: '5.3.0'
    }, {
      folder: 'frameworks/vue-3/javascript/inline-data',
      title: 'Inline data',
      version: 'Vue 3',
      since: '5.0.3',
      updated: '5.6.0'
    }, {
      folder: 'frameworks/vue-3/javascript/undoredo',
      title: 'Undo/redo',
      version: 'Vue 3',
      since: '5.1',
      updated: '5.3.0'
    }, {
      folder: 'frameworks/vue-3/javascript/visible-hours',
      title: 'Configuring visible hours',
      version: 'Vue 3',
      since: '5.1',
      updated: '5.3.0'
    }]
  },
  'Vue 2 examples': {
    overlay: 'vue',
    tab: 'vue',
    build: true,
    items: [{
      folder: 'frameworks/vue/javascript/filtering',
      title: 'Event filtering',
      version: 'Vue 2'
    }]
  }
};

// Flatten examples tree
window.examples = Object.entries(examples).map(([group, parent]) => parent.items.map(item => Object.assign(item, parent, {
  group,
  items: undefined
}))).flat();