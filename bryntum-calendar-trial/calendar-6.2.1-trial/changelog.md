# Bryntum Calendar version history

## 6.2.1 - 2025-04-23

### FEATURES / ENHANCEMENTS

* When a `Scheduler` is used as a Calendar mode, the `timeAxisHeaderMenu` no longer allows the configured `range` to be
  overridden by the `Start date`, `End date` header menu item. Instead, a `RangeMenu` is shown to allow the user to
  select what time range the Scheduler should encapsulate. The Calendar's navigation buttons will update to reflect the
  setting

### API CHANGES

* In `AgendaView`, the floating settings button may be configured by, and accessed by the property name
  `settingsButton`.

### BUG FIXES

* [#11025](https://github.com/bryntum/support/issues/11025) - [HIGH PRIO] `CalendarPanel` does not output week number when `weekRenderer` present
* [#11092](https://github.com/bryntum/support/issues/11092) - Group records in `resourceStore` should be ignored in resource-driven views
* [#11140](https://github.com/bryntum/support/issues/11140) - API change settings to `settingsButton` is a breaking change. Month agenda example affected

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.78.0`
* Remix: `>= 2.15.0`

## 6.2.0 - 2025-04-10

### FEATURES / ENHANCEMENTS

* [ACCESSIBILITY] `Calendar` is now fully operable solely using the keyboard, and all focusable elements are labelled
  to tell assistive technologies contextual details
* [ACCESSIBILITY] Added focus outline for `DatePicker` day cells and `Button` elements
* We've improved search in the documentation with new context-aware algorithms, delivering more accurate and relevant
  results from the API, guides & examples
* A new config for `Panel`, `drawer` marks a `Panel` as a docked, slide-in panel, which by default slides in over the
  contents of the browser viewport
* To make the event editor a docked panel sliding in from the end of the viewport, configure the `EventEdit` feature
  with `{ editorConfig : { drawer : true } }`
* New `showWeekNumber` prop added to the Calendar `MonthView` to control if week numbers should be shown
* A new `tickRenderer` renderer is available in `DayView` (`WeekView` and `DayResourceView` are `DayView`s), that allows
  content to be placed in the hour/half-hour ticks of the `DayView`. Try it out in the new `resource-time-capacity` demo
* [BREAKING] Since most apps have a build process that includes a transpilation step, starting with `v6.2.0` we use
  the minimum possible transpile polyfills for the source code inside the `@bryntum/calendar-thin` npm package to ensure
  that it works for all currently supported frameworks. Previously, each source file was transpiled with more polyfills,
  which introduced unnecessary overhead from transpilation helper functions. After this change, the size of your built
  app should be reduced. If you encounter issues with your framework's builder parsing the code, consider upgrading to a
  newer framework version that supports the latest ECMAScript specification ([#10797](https://github.com/bryntum/support/issues/10797))
* [BREAKING] The `AjaxHelper.fetch()` utility function no longer applies `credentials: 'include'` by default, to better
  match how the native `fetch` API works. This change also affects `AjaxStore` and `CrudManager`, if used by your app to
  handle remote data ([#10886](https://github.com/bryntum/support/issues/10886))

### LOCALE UPDATES

* The following new locale keys have been added: `Calendar.gotoDate`, `Sidebar.selectDate`, `Sidebar.matchEvents`,
  `Sidebar.filterEvents`, `Sidebar.filterResources`

### DEMOS

* New `resource-time-capacity` demo showing resources with capacity tick renderer. The new demo is located in
  the `examples/resource-time-capacity` folder
* New `drag-between-calendars` demo showing how to allow dragging from one calendar to another. The new demo is located
  in the `examples/drag-between-calendars` folder

### BUG FIXES

* [#10984](https://github.com/bryntum/support/issues/10984) - `AgendaView` does not keep current date in the rendered block across store repopulate

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.78.0`
* Remix: `>= 2.15.0`

## 6.1.9 - 2025-04-07

### BUG FIXES

* [#8782](https://github.com/bryntum/support/issues/8782) - [Salesforce] LWS support in Firefox

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.78.0`
* Remix: `>= 2.15.0`

## 6.1.8 - 2025-04-01

### FEATURES / ENHANCEMENTS

* We've launched nightly npm package builds on our Bryntum npm server. Versions follow the format
  `X.Y.Z-nightly.YYYYMMDD` (e.g. `6.1.8-nightly.20250330`), reflecting the current version and publish date
* A new `AgendaView` config, `showEmptyDates` specifies that all dates in the AgendaView's `range`
  are represented in the UI ([#10828](https://github.com/bryntum/support/issues/10828))
* Updated the `date-resource` demo to ensure event names are fully visible for 1-hour duration events ([#10979](https://github.com/bryntum/support/issues/10979))

### API CHANGES

* The `rtl` config property of widgets is now public. By default, widgets conform to the writing direction of the
  element they are rendered to. But with the now public `rtl` property, you can force a widget, and all descendant
  widgets to lay out from right to left ([#10859](https://github.com/bryntum/support/issues/10859))

### DEMOS

* We have introduced UI localization for our Vanilla JavaScript demos, supporting all 45 currently available locales
* A new example (`dragfromsidebar`) has been added showcasing dragging in new, unscheduled events from a grid in the
  Calendar's sidebar. The demo is located in `examples/dragfromsidebar` folder

### BUG FIXES

* [#10795](https://github.com/bryntum/support/issues/10795) - [SALESFORCE] Remove `Map`/`Set` polyfills
* [#10823](https://github.com/bryntum/support/issues/10823) - [HIGH PRIO] `OptionalChaining` in Locale is not being `transpiled`
* [#10842](https://github.com/bryntum/support/issues/10842) - Events not clickable after filtering resource in vertical mode
* [#10844](https://github.com/bryntum/support/issues/10844) - `ExternalEventSource` source should be possible to be within `Calendar`'s DOM
* [#10938](https://github.com/bryntum/support/issues/10938) - [HIGH PRIO] Incorrect CSS `sourceMappingURL` in Bryntum thin npm packages
* [#10988](https://github.com/bryntum/support/issues/10988) - `Scheduler` in `Calendar` moving to different week when setting Date

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.78.0`
* Remix: `>= 2.15.0`

## 6.1.7 - 2025-02-21

### BUG FIXES

* [#10716](https://github.com/bryntum/support/issues/10716) - `DayView` scroll to an event does not scroll horizontally
* [#10722](https://github.com/bryntum/support/issues/10722) - Calendar integration guide mention `cellTooltip` when it does not exist in Calendar
* [#10750](https://github.com/bryntum/support/issues/10750) - Changing project in Calendar does not fully detach from the old project

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.78.0`
* Remix: `>= 2.15.0`

## 6.1.6 - 2025-01-31

### FEATURES / ENHANCEMENTS

* [ANGULAR] New "Date Resource view" demo shows resources grouped by date. The demo is located in
  `frameworks/angular/date-resource` folder
* A new config in `MonthView` allows multi day events to not propagate into future cells in the same row as one long
  bar. When `stackMultiDayEvents` is set, every cell's event bars are independent and sorted into ascending order of
  start time ([#9948](https://github.com/bryntum/support/issues/9948))

### DEMOS

* The `custom-rendering` example has been updated to illustrate how to create a fixed duration seven day `DayView` which
  always shows seven days from the Calendar's active date

### BUG FIXES

* [#10543](https://github.com/bryntum/support/issues/10543) - Crash after pasting event in `calendar-scheduler` demo
* [#10564](https://github.com/bryntum/support/issues/10564) - `DayResourceView`. Hide resource row when all resources filtered out
* [#10608](https://github.com/bryntum/support/issues/10608) - `DayResource` changes its `startDate` when the `weekStartDay` is changed
* [#10641](https://github.com/bryntum/support/issues/10641) - All day events row laid out wrong in `DayAgendaView`
* [#10672](https://github.com/bryntum/support/issues/10672) - Setting `hideNonWorkingDays` on `MonthView`s with many events throws error

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.38.0`

## 6.1.5 - 2024-12-25

### FEATURES / ENHANCEMENTS

* A new config for multi day `DayView`s and `WeekView`, `interDayResize : false` allows applications to limit
  drag-resizing an event (including when drag-creating a new event) to operate only in the day column the drag gesture
  started in ([#8030](https://github.com/bryntum/support/issues/8030))
* A new config for multi day `DayView`s and `WeekView`, `interDayDrag : false` allows applications to limit drag-moving
  an outside its starting date. Note, for other view types, use `allowDragResize : false` and `allowDragCreate : false`
  because drag gestures in other view types are always inter day

### BUG FIXES

* [#9450](https://github.com/bryntum/support/issues/9450) - [HIGH PRIO] Event scheduling from `11:30 PM` to `12 AM` highlights entire day in IST timezone
* [#10420](https://github.com/bryntum/support/issues/10420) - When a keyMap action is invoked, it always calls `preventDefault`
* [#10451](https://github.com/bryntum/support/issues/10451) - `DayView` get description should not use `formatDelta` to format the range
* [#10488](https://github.com/bryntum/support/issues/10488) - [HIGH PRIO] `calendar-taskboard` demo code is not available in online Code Editor

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.38.0`

## 6.1.4 - 2024-12-09

### FEATURES / ENHANCEMENTS

* Starting with the `6.1.4` release, there are now trial versions of thin NPM packages available on our NPM server.
  These can be used to evaluate combining multiple products before purchasing a license. Please check the "What's new"
  guide for the details

### DEMOS

* [ANGULAR] Added new Angular `basic-thin` demo showing use of thin NPM packages. Demo is located in
  `examples/frameworks/angular/basic-thin` folder
* [REACT] Added new React `basic-thin` demo showing use of thin NPM packages. Demo is located in
  `examples/frameworks/react-vite/basic-thin` folder
* [VUE-3] Added new Vue-3 `basic-thin` demo showing use of thin NPM packages. Demo is located in
  `examples/frameworks/vue-3-vite/basic-thin` folder
* [WEBPACK] Added new Webpack `basic-thin` demo showing use of thin NPM packages. Demo is located in
  `examples/frameworks/webpack/basic-thin` folder

### BUG FIXES

* [#10062](https://github.com/bryntum/support/issues/10062) - Return value from `headerRenderer` in `MonthView` not used
* [#10070](https://github.com/bryntum/support/issues/10070) - `resourceRecord` was not defined in `dragmoveend` event of `dayResourceView`
* [#10358](https://github.com/bryntum/support/issues/10358) - Actual record being moved/resized should be exposed in `dragMoveEnd` event
* [#10399](https://github.com/bryntum/support/issues/10399) - Event edit dialog closes without clicking on save with `autoCreate` gesture `'click'`
* [#10433](https://github.com/bryntum/support/issues/10433) - `MonthAgenda` agenda doesn't respect `emptyText` config
* [#10437](https://github.com/bryntum/support/issues/10437) - `MonthAgenda` fails to load if navigated to via empty week
* [#10448](https://github.com/bryntum/support/issues/10448) - [REACT] JSX renderers are not supported with `React 19`

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.38.0`

## 6.1.3 - 2024-11-18

### FEATURES / ENHANCEMENTS

* Salesforce LWC build now using generators instead of async/await as a workaround for
  [Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1663090). LWC bundle is now compiled with `"chrome": "54"`
  babel target ([#7849](https://github.com/bryntum/support/issues/7849))

### API CHANGES

* [VUE 2] reached end of life on December 31, 2023. As a result, we will no longer be updating our Vue 2 components.
  While the components will continue to exist, we will remove them in a future release and recommend that you upgrade to
  Vue 3 for continued support

### STYLING CHANGES

* Certain color adjustment functions in SASS has been deprecated and will be removed from SASS in a future version. To
  be prepared for that, we have replaced our usages of these functions with the new ones. In general, this should not
  affect the look of components, with reservation for minor color variations (for more information, see
  https://sass-lang.com/documentation/breaking-changes/color-functions)

### DEMOS

* New `php` demo showing how to use Bryntum Calendar with a PHP backend ([#7574](https://github.com/bryntum/support/issues/7574))

### BUG FIXES

* [#3393](https://github.com/bryntum/support/issues/3393) - [HIGH PRIO] Inconsistent duration unit in created calendar events
* [#9018](https://github.com/bryntum/support/issues/9018) - [HIGH PRIO] Localization doesn't work for Microsoft Dynamics CRM Online
* [#10141](https://github.com/bryntum/support/issues/10141) - Avatar style conflict between `Gantt` and `Calendar`
* [#10170](https://github.com/bryntum/support/issues/10170) - Calendar `visibleStartTime` issue, 5s scroll delay
* [#10228](https://github.com/bryntum/support/issues/10228) - `AgendaView` does not always scroll the new date that is set into it into view
* [#10232](https://github.com/bryntum/support/issues/10232) - `resourceRecord` is `undefined` in `DayResource` View
* [#10331](https://github.com/bryntum/support/issues/10331) - `AgendaView` `eventTimeRenderer` needs to be able to be more flexible

### VERSIONS SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 3.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`
* Sass: `>= 1.38.0`

## 6.1.2 - 2024-10-11

### FEATURES / ENHANCEMENTS

* `CalendarDatePicker`, `MonthAgendaView` and `YearView`, when using `showEvents : 'dots'` may now be configured with
  details about the sizing and spacing of the dots. See the `eventDots` config, and the Month Agenda example
* A new config on the `EventTooltip` *Feature*, `clickDelay` delays the show on click to allow disambiguating click
  gestures from double click gestures ([#9971](https://github.com/bryntum/support/issues/9971))

### API CHANGES

* [DEPRECATED] The `maxDots` config of `CalendarDatePicker` has been deprecated in favour of the new `eventDots`
  config

### DEMOS

* [VUE-3-VITE] New basic demo (Vue 3 vite) shows how to use Bryntum Calendar in Vue 3 project with TypeScript. The demo
  is located in `examples/frameworks/vue-3-vite/basic` folder ([#9808](https://github.com/bryntum/support/issues/9808))

### BUG FIXES

* [#9685](https://github.com/bryntum/support/issues/9685) - [HIGH PRIO] Bryntum agenda print issue

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.1.1 - 2024-09-27

### BUG FIXES

* [#10076](https://github.com/bryntum/support/issues/10076) - [HIGH PRIO] Disabling `autoCreate` causes exception when drag events
* [#10089](https://github.com/bryntum/support/issues/10089) - `beforeRequest` and `afterRequest` events missing in Calendar `6.1.0` version
* [#10102](https://github.com/bryntum/support/issues/10102) - Duplicate title in week view after drag & drop
* [#10109](https://github.com/bryntum/support/issues/10109) - `ModeSelector` overflow menu items do not get registered in `calendar.widgetMap`

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.1.0 - 2024-09-18

### FEATURES / ENHANCEMENTS

* A new feature, `ScheduleTooltip` shows the hovered date and time in a tooltip which tracks mouse movement. It is
  not enabled by default. In its default configuration, it only activates in `DayView`s ([#5314](https://github.com/bryntum/support/issues/5314))
* The regular non-Ajax `Store` now has the ability to accept remote paging, sorting and filtering ([#6860](https://github.com/bryntum/support/issues/6860),
  [#8180](https://github.com/bryntum/support/issues/8180), [#9363](https://github.com/bryntum/support/issues/9363))
* A new feature, `EventBuffer` shows preamble and postamble times before and after events in `DayView`s ([#7148](https://github.com/bryntum/support/issues/7148))
* A new Calendar view, `DayAgendaView` (`mode : 'dayagenda'`) offers a serial view of events in a day with the
  events rendering at their natural size, in ascending order of `startDate`. A new example (`examples/day-agenda`)
  exhibits this ([#9191](https://github.com/bryntum/support/issues/9191))
* `DayResourceCalendarRow` now lets you render additional HTML below the avatar/name with the new
  `resourceHeaderExtraRenderer` method. See it in use in the new `date-resource-non-consecutive-dates` demo
* `DayResourceCalendarRow` now lets you fully customize the HTML showing for each resource with the new
  `resourceHeaderRenderer` method
* A new Calendar view, `MonthAgendaView` (`mode : 'monthagenda'`) offers a compact view of a month's events with the
  agenda for the selected date displayed below. This is designed specifically for use on phone-sized devices with a
  width of less than 600 pixels. A new example (`examples/month-agenda`) exhibits this
* `ExcelExport` feature got a minor refactoring, and now uses more feature-rich `write-excel-file` library ([#6089](https://github.com/bryntum/support/issues/6089))

### API CHANGES

* Previously, clicking on a long-running event in a `MonthView`, on one of its continuation days would return in the
  `eventClick` event a `date` property which is the date of the *start point* of the event bar, *not* the date of the
  cell clicked in. From 6.1.0, the date of the cell clicked in is always returned. This brings the API in line with
  the established Scheduler API ([#9870](https://github.com/bryntum/support/issues/9870))

### DEMOS

* New `date-resource-non-consecutive-dates` demo showing how to use non-consecutive days in the `DayResource` mode
  ([#9543](https://github.com/bryntum/support/issues/9543))
* New `month-agenda` demo showing how to use `MonthAgendaView` mode
* New `day-agenda` demo showing how to use `DayAgendaView` mode
* New `travel-time` demo showing how to use the `EventBuffer` feature

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.0.6 - 2024-09-13

### STYLING CHANGES

* Predefined colors available as `eventColor` has been normalized between `Scheduler`, `Calendar` and `TaskBoard`

### BUG FIXES

* [#9884](https://github.com/bryntum/support/issues/9884) - [TypeScript] Event tooltip type should accept tools config
* [#9904](https://github.com/bryntum/support/issues/9904) - `ResourceView` `TimeAxis` always shows current time pill if `showTime` is set
* [#9909](https://github.com/bryntum/support/issues/9909) - Moving an infinitely weekly repeating event by drag & drop fails
* [#9930](https://github.com/bryntum/support/issues/9930) - Cannot read properties of undefined (reading 'then')
* [#9939](https://github.com/bryntum/support/issues/9939) - Calendar crashes when `autoRowHeight` and `hideOtherMonthCells` set to `true`
* [#9949](https://github.com/bryntum/support/issues/9949) - Repeat event error when selecting option first day in month
* [#9956](https://github.com/bryntum/support/issues/9956) - `AgendaView` has incorrect row heights if `hideNonWorkingDays` changed while hidden

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.0.5 - 2024-08-30

### DEMOS

* Custom theme demo (JavaScript) shows how to create a custom theme by modifying scss varibales. New demo is located in
  `custom-theme` folder ([#9762](https://github.com/bryntum/support/issues/9762))

### BUG FIXES

* [#5233](https://github.com/bryntum/support/issues/5233) - [ANGULAR] Frameworks wrappers components not triggering some events
* [#9378](https://github.com/bryntum/support/issues/9378) - [HIGH PRIO] `RecurrenceConfirmationPopup` reconfiguration should be easy
* [#9718](https://github.com/bryntum/support/issues/9718) - [VUE-3] Preventable events don't work in Vue wrapper
* [#9726](https://github.com/bryntum/support/issues/9726) - [HIGH PRIO] Reassigning resource of one event within series triggers incorrect `CrudManager` operations
* [#9752](https://github.com/bryntum/support/issues/9752) - `autoCreate` Calendar setting not propagated to sub views by `resourceView`
* [#9794](https://github.com/bryntum/support/issues/9794) - `shortEventDuration` not calculated correctly if custom `hourHeight` used
* [#9809](https://github.com/bryntum/support/issues/9809) - Error on `EventEdit` close when `recurrenceCombo` is set to `null`
* [#9811](https://github.com/bryntum/support/issues/9811) - `minDate`/`maxDate` not processed correctly
* [#9829](https://github.com/bryntum/support/issues/9829) - [HIGH PRIO] JS error thrown when `EventEdit` popup is modal and delete button pressed

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.0.4 - 2024-08-02

### BUG FIXES

* [#8626](https://github.com/bryntum/support/issues/8626) - `startDate` and  `endDate` are `undefined` in `beforeDragMoveEnd` listener
* [#9687](https://github.com/bryntum/support/issues/9687) - Incorrect localization in Calendar
* [#9690](https://github.com/bryntum/support/issues/9690) - `LoadOnDemand` feature with `ResourceView` causes infinite load loop
* [#9699](https://github.com/bryntum/support/issues/9699) - `alwaysShowCurrentDate` doesn't work when the Agenda store is filtered
* [#9702](https://github.com/bryntum/support/issues/9702) - `CalendarDrag` `resizable:false` doesn't disable the edge hover effect

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.0.3 - 2024-07-26

### FEATURES / ENHANCEMENTS

* The Calendar `Drag` feature now fires vetoable events *before* the dragging starts. The event names are
  `beforeDragCreate`, `beforeDragMove`, `beforeDragResize`
* The plugin processing has been updated to correctly handle multiple plugin configurations

### BUG FIXES

* [#9388](https://github.com/bryntum/support/issues/9388) - Event changes background color while resizing + dragging

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.0.2 - 2024-07-24

### FEATURES / ENHANCEMENTS

* Bumped the built-in version of FontAwesome Free to `v6.6.0`, which includes a new
  [table-cells-row-unlock](https://fontawesome.com/icons/table-cells-row-unlock) icon sponsored by Bryntum
* `DayView`s (`WeekView` is a `DayView`) now can show the current time as a pill in the time axis. The `showCurrentTime`
  config may be an object containing `showTime : true/false` and `fullWidth : true/false`. The `fullWidth` property
  causes the current timeline to cover the full view width, including all days that the view contains

### DEMOS

* [REACT-REMIX] "Basic" (React + Remix) demo shows using Calendar component in Remix. The demo is located in
  `frameworks/react-remix/basic` folder ([#4912](https://github.com/bryntum/support/issues/4912))
* [SHAREPOINT] Added a new demo for SharePoint Framework (SPFx) in the `frameworks/react/typescript/sharepoint-fabric`
  folder ([#9224](https://github.com/bryntum/support/issues/9224))
* Calendar `radio-schedule` demos has been updated ([#9620](https://github.com/bryntum/support/issues/9620))

### BUG FIXES

* [#9434](https://github.com/bryntum/support/issues/9434) - `TimeRanges` do not render if `'day'` is default mode
* [#9443](https://github.com/bryntum/support/issues/9443) - `dblClick` to create after `23:00` in `DayView` results in a day-crossing event
* [#9513](https://github.com/bryntum/support/issues/9513) - Event start date is one day before for zero-duration all-day events
* [#9532](https://github.com/bryntum/support/issues/9532) - Bug with `timeRanges` after `dayEndTime`
* [#9547](https://github.com/bryntum/support/issues/9547) - `alwaysShowCurrentDate` setting needed for `AgendaView`
* [#9600](https://github.com/bryntum/support/issues/9600) - `eventColor` not applied correctly in `Timeline` mode
* [#9606](https://github.com/bryntum/support/issues/9606) - `autoCreate` event close to midnight throws error in shifted day example
* [#9616](https://github.com/bryntum/support/issues/9616) - Refocus after mouse-based event delete should only scroll is using keyboard
* [#9631](https://github.com/bryntum/support/issues/9631) - `ModeSelector` has smaller font-size than others

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.0.1 - 2024-07-05

### BUG FIXES

* [#9198](https://github.com/bryntum/support/issues/9198) - Grid printing does not handle auto height rows
* [#9457](https://github.com/bryntum/support/issues/9457) - Incorrect selected date in `WeekView` header on first load

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 6.0.0 - 2024-06-28

* We are thrilled to announce version `6.0` of our Calendar product. This release marks a significant milestone for us
  after more than two years of dedicated development. In this update, we are excited to bring you:
  * **Copy paste of events**
  * **Improved TypeScript typings**
  * **A new code editor in the examples for easy fiddling**
  * **Cool new demos**
  * **Bug fixes and other enhancements requested by our community**
* A special thanks to everyone who helped us by testing our alpha and beta versions. Your feedback and support have been
  invaluable

### FEATURES / ENHANCEMENTS

* `EventCopyPaste` feature adds copy-paste capabilities to events. Both via context menu and keyboard actions
  ([#4728](https://github.com/bryntum/support/issues/4728))
* All Calendar modes now expose an `eventCount` property, which yields the number of *visible* events, which intersect
  the view's date range. This is a convenience property for creating view description ([#8758](https://github.com/bryntum/support/issues/8758))
* The code editor in examples is now implemented with the VS Code engine. Code folding, search and replace, full
  undo/redo is now available when editing examples
* The `List` widget now handles a tree store and will indent and expand/collapse nodes on click of an inline toggle
  button
* [TypeScript] Class configs `*Config` (e.g. `ButtonConfig`) now provide type declarations for `listeners` parameter in
  `*.d.ts` files
* [TypeScript] Class configs `*Config` (e.g. `ButtonConfig`) types now have optional parameters in `*.d.ts` files.
  `*Config` type can be used instead of `Partial<*Config>` declaration
* Bumped the built-in version of FontAwesome Free to `v6.5.2`, which includes a new
  [table-cells-row-lock](https://fontawesome.com/icons/table-cells-row-lock) icon sponsored by Bryntum
* [Angular] Bryntum Angular wrapper now exports `Bryntum...Props` types (e.g. `BryntumCalendarProps`) which match the
  configs available for a wrapper component (e.g. `BryntumCalendarComponent`). Wrappers code is now delivered with
  documentation inside, that helps in setting up the components
* `EventHelper` no longer mutates the DOM event object to fix browser quirks and add utility properties. It now wraps
  the DOM event with a Proxy, which exposes all the properties of the DOM event and also accepts any new properties
  added to it. The original DOM event is available in the `browserEvent` property

### API CHANGES

* [VUE-3] Bryntum Vue-3 wrapper now exports `Bryntum...Props` types (e.g. `BryntumCalendarProps`) which match the
  configs available for a wrapper component (e.g. `<bryntum-calendar>`). Wrappers code is now delivered with
  documentation and TypeScript sources inside ([#3085](https://github.com/bryntum/support/issues/3085))
* [DEPRECATED] The `WidgetHelper` utility class has been deprecated and will be removed in a future release. Use the
  corresponding widget class instead - `Widget`, `Toast` or `Mask` ([#6103](https://github.com/bryntum/support/issues/6103))
* [BREAKING] The `drop` events in the `ExternalEventSource` feature have been renamed to conform to the wider Bryntum
  product standard: `dropExternal` was renamed to `beforeDropExternal`, and `afterDropExternal` to `dropExternal`
  ([#7491](https://github.com/bryntum/support/issues/7491))
* [BREAKING] The `useRawData` setting on `Store` is now enabled by default, but with all sub-settings disabled. This
  means that the incoming data object will be used as is, without being cloned. Which will boost data loading
  performance, but is potentially a breaking change if the data object is reused / used in other parts of the
  application ([#8335](https://github.com/bryntum/support/issues/8335))
* [BREAKING] In `6.0.0-alpha-2` we changed the default value for `useRawData` on stores to `true`. This boosted record
  creation performance by not cloning the incoming data object. However, this change has lead to some issues, and we are
  now taking a step back. It will once again default to `false` when supplying data inline, and instead only to `true`
  when data is loaded remotely using an `AjaxStore` or a `CrudManager` ([#9289](https://github.com/bryntum/support/issues/9289))
* [DEPRECATED] `@bryntum/babel-preset-react-app`, `@bryntum/cra-template-typescript-calendar`,
  `@bryntum/cra-template-javascript-calendar` npm packages are deprecated, and will not get any further updates.
  Versions prior to `6.0.0` are still accessible
* [BREAKING] [ANGULAR] [REACT] [VUE] `BryntumProjectModel` framework wrapper is no longer available since `6.0.0`.
  Use `BryntumCalendarProProjectModel` instead. Check the upgrade guide for the details
* [DEPRECATED] The `count` property of `EventList` is deprecated in favour of the more descriptive
  `eventCount` property, which now exists in all Calendar modes.
* `allowOverlap` flag was made private. Functionality is not yet implemented, will be public once it is fully supported

### STYLING CHANGES

* The Stockholm theme got some slight tweaks to panel header (removed bottom border) and tab panel styling (replaced
  active tab background with thick bottom border) for a more modern look ([#8440](https://github.com/bryntum/support/issues/8440))

### DEMOS

* New `exporttoexcel` demo showing how to export the Calendar events to Excel ([#1567](https://github.com/bryntum/support/issues/1567))
* New `action-buttons` demo showing how to render icon buttons inside DayView events

### BUG FIXES

* [#6261](https://github.com/bryntum/support/issues/6261) - Drag proxy not aligned under cursor when dragging overlapping event
* [#6441](https://github.com/bryntum/support/issues/6441) - Instance config values should not be overridden by responsive configs
* [#7141](https://github.com/bryntum/support/issues/7141) - Event drag proxy has overlapping text when event is small
* [#7760](https://github.com/bryntum/support/issues/7760) - [HIGH PRIO] [TypeScript] Type intersection with `any` might be wrong
* [#7808](https://github.com/bryntum/support/issues/7808) - Cannot configure mode selector as minified
* [#8657](https://github.com/bryntum/support/issues/8657) - `ResourceFilter` `List` widget does not correctly handle tree structure
* [#8891](https://github.com/bryntum/support/issues/8891) - Change Range for `DayResource` and `ResourceView` at runtime
* [#9110](https://github.com/bryntum/support/issues/9110) - Calendar crashes when zooming multiple times
* [#9299](https://github.com/bryntum/support/issues/9299) - Copy pasting a multi-assigned event pastes to "random" resource
* [#9316](https://github.com/bryntum/support/issues/9316) - Calendar zoom stops working once zoom level has hit minimum
* [#9415](https://github.com/bryntum/support/issues/9415) - Contextual recurrence options not shown when EventEditor docked
* [#9418](https://github.com/bryntum/support/issues/9418) - Event Editor should not hide when clicking modal mask with recurrence prompt open
* [#9448](https://github.com/bryntum/support/issues/9448) - Delete dialog for recurrent events disappears automatically

### FRAMEWORK SUPPORT

* NodeJS: `>= 20.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.13 - 2024-06-26

### BUG FIXES

* [#9299](https://github.com/bryntum/support/issues/9299) - Copy/pasting a multi-assigned event pastes to "random" resource
* [#9368](https://github.com/bryntum/support/issues/9368) - `NumberField.wrapAround` processed incorrectly when spin down goes below the min

### FRAMEWORK SUPPORT

* NodeJS: `>= 14.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.12 - 2024-06-13

### FEATURES / ENHANCEMENTS

* You can now configure Calendar's `enableRecurringEvents` with a `defaultAction` property, to always
  choose a predefined action. Use `single` to always only process the selected event, or `future` to
  change all future events ([#7606](https://github.com/bryntum/support/issues/7606))
* `DayView` and `WeekView` now accept a `columnHeaderRenderer` configuration. This is a callback function that can be
  used to create custom header content at the top of day columns ([#9260](https://github.com/bryntum/support/issues/9260))

### API CHANGES

* [VUE] [REACT] When using wrappers for Vue or React, `syncDataOnLoad` is by default set to `true` on all stores
  configured on the wrapped Widget. Starting from `5.6.12`, stores with a configured `readUrl` or that belongs to a
  project configured with a `loadUrl`, will have their `syncDataOnLoad` default to `null`

### BUG FIXES

* [#9025](https://github.com/bryntum/support/issues/9025) - `calendar.createEvent` with empty date triggers an error
* [#9231](https://github.com/bryntum/support/issues/9231) - Disable recurring event confirmation pop-up does not work
* [#9317](https://github.com/bryntum/support/issues/9317) - `Agenda` view flickers when pasting events
* [#9348](https://github.com/bryntum/support/issues/9348) - External drag back into Calendar does not correctly update the event's `startDate`
* [#9361](https://github.com/bryntum/support/issues/9361) - Calendar event edit button sometimes is hidden after creating a new event

### FRAMEWORK SUPPORT

* NodeJS: `>= 14.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.11 - 2024-05-21

### FEATURES / ENHANCEMENTS

* A new static boolean property, `Widget.accessibility` was added, which, when set to `true` causes tooltips to
  be activated on `focus` in addition to `mouseover` ([#5539](https://github.com/bryntum/support/issues/5539))
* Vanilla JavaScript documentation has a new section on Multiple Products, showing how to use multiple components in a
  single page using `thin` components ([#8756](https://github.com/bryntum/support/issues/8756))

### API CHANGES

* After a docs regression, several APIs flagged to be hidden in subclasses were still visible in the docs. These APIs
  are now correctly hidden ([#9140](https://github.com/bryntum/support/issues/9140))

### DEMOS

* Added new `multiassign-resourceids` demo showing event `resourceIds` field usage ([#9187](https://github.com/bryntum/support/issues/9187))

### BUG FIXES

* [#8783](https://github.com/bryntum/support/issues/8783) - Occurrences should not be skipped for COUNT-based rules when changing `exceptionDates` at the data level
* [#8927](https://github.com/bryntum/support/issues/8927) - [HIGH PRIO] `CrudManager` sync does not clear changes for updated recurring event
* [#8972](https://github.com/bryntum/support/issues/8972) - MonthView error when `sixWeeks: false`, `autoRowHeight: true`
* [#9039](https://github.com/bryntum/support/issues/9039) - [HIGH PRIO] Window Freezes when resolving recurrence confirmation popup
* [#9143](https://github.com/bryntum/support/issues/9143) - `startDate` is overridden upon editing other fields of an event in `EventEdit`
* [#9151](https://github.com/bryntum/support/issues/9151) - [HIGH PRIO] New events disappear from `timezone` demo when changing date
* [#9157](https://github.com/bryntum/support/issues/9157) - Deleting last recurring event resulting in new event on the following day
* [#9185](https://github.com/bryntum/support/issues/9185) - `contextMenuTriggerEvent: 'click'` does not work for calendar

### FRAMEWORK SUPPORT

* NodeJS: `>= 14.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.10 - 2024-04-24

### FEATURES / ENHANCEMENTS

* `CalendarPanel` (and its subclass `DatePicker`) may now be configured with a `nonWorkingDays` object which
  is separate from weekend days while weekend days continue to exist in their fixed position. ([#8914](https://github.com/bryntum/support/issues/8914))

### BUG FIXES

* [#8972](https://github.com/bryntum/support/issues/8972) - MonthView error when sixWeeks : false, autoRowHeight : true
* [#8987](https://github.com/bryntum/support/issues/8987) - DayView.scrollTo function does not work more than one time
* [#8992](https://github.com/bryntum/support/issues/8992) - [ANGULAR] implement support of `ViewEncapsulation.ShadowDom`
* [#9012](https://github.com/bryntum/support/issues/9012) - Calendar: Multi-day recurring event over weekend throws errors
* [#9022](https://github.com/bryntum/support/issues/9022) - AgendaView shows inconsistent "Ends" date relative to how the tooltip shows it

### FRAMEWORK SUPPORT

* NodeJS: `>= 14.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.9 - 2024-04-09

### FEATURES / ENHANCEMENTS

* `DayView` (`WeekView` is a `DayView`) can now show both event start time and event end time in the event block header.
  Configure the `showTime` property as `{ startTime : true, endTime : true }` ([#8886](https://github.com/bryntum/support/issues/8886))

### LOCALE UPDATES

* Added Brazilian Portuguese translation (`'PtBr'`) ([#8747](https://github.com/bryntum/support/issues/8747))

### BUG FIXES

* [#8730](https://github.com/bryntum/support/issues/8730) - Event renderer uses single `DomConfig` object incorrectly
* [#8787](https://github.com/bryntum/support/issues/8787) - Recurring events, which cross a midnight boundary can cause extra cells in `AgendaView`
* [#8792](https://github.com/bryntum/support/issues/8792) - Step does not work for `startTimeField` in event editor
* [#8795](https://github.com/bryntum/support/issues/8795) - New recurrence popup created on window focus out
* [#8862](https://github.com/bryntum/support/issues/8862) - `ListView` does not generate correct `stepUnit` for a range
* [#8863](https://github.com/bryntum/support/issues/8863) - Drag snapping should snap relative to hour start, not current position
* [#8948](https://github.com/bryntum/support/issues/8948) - Undefined variable `$cal-intraday-event-color`

### FRAMEWORK SUPPORT

* NodeJS: `>= 14.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.8 - 2024-03-04

### FEATURES / ENHANCEMENTS

* The `DayView` (Calendar mode `day` or `week`) now offers an `eventHeaderRenderer` property, which is a callback to be
  configured by applications which need to customize the header portion of an event block. By default, the
  event's `startTime` time is displayed according to the configured `timeFormat`. This setting allows applications to
  place any content in the event block's header.
* The `DayView` (Calendar mode `day` or `week`) now offers a `timeAxisTimeFormat` property which is a `DateHelper`
  format string to format the time ticks in the time axis on the left side of the view.

### DEMOS

* New `filtering-advanced` example showing how to add additional filtering fields to the `SideBar`

### BUG FIXES

* [#8642](https://github.com/bryntum/support/issues/8642) - `DayView`'s `timeFormat` is used in event header *and* in the time axis generation
* [#8688](https://github.com/bryntum/support/issues/8688) - `dblclick` `beforeAutoCreate` event does not receive a `resourceRecord` property
* [#8702](https://github.com/bryntum/support/issues/8702) - [HIGH PRIO] Dragged event bar does not have identical content to event being moved

### FRAMEWORK SUPPORT

* NodeJS: `>= 14.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.7 - 2024-02-22

### FEATURES / ENHANCEMENTS

* The `DayResourceView` (Calendar mode `dayresource`) now offers a `resourceDateFilter` property, which is a callback
  implemented by applications, which allows applications to filter out resource columns for dates depending upon any
  conditions the application requires. The callback is passed context about the resource and date. It must return `true`
  or `false` to show or not show the resource column for the passed resource and date
* The `DayView` (Calendar mode `day`) now offers a `dateFilter` property, which is a callback implemented by
  applications, which allows applications to filter out columns for dates depending upon any conditions the application
  requires. The callback is passed context including the date. It must return `true` or `false` to show or not show the
  day column for the passed date
* `DayView` (`WeekView` is a subclass of `DayView`) has a new config property `showDayStartHour` which causes the
  zero-minute tick of the configured day start (usually 12:00 AM) to be shown at the top of the time axis ([#8420](https://github.com/bryntum/support/issues/8420))
* Calendar views now have a `syncCalendarDate` property, which prevents the Calendar date from the following view date
  clicks ([#8501](https://github.com/bryntum/support/issues/8501))

### BUG FIXES

* [#8415](https://github.com/bryntum/support/issues/8415) - `highlightSelectedWeek` makes week rows jump 1px
* [#8423](https://github.com/bryntum/support/issues/8423) - [HIGH PRIO] [LWC] Engine performance is too low with LWS enabled
* [#8455](https://github.com/bryntum/support/issues/8455) - Crash when drag creating in event-items demo
* [#8458](https://github.com/bryntum/support/issues/8458) - Tools should have white color in tooltip header
* [#8539](https://github.com/bryntum/support/issues/8539) - Crash when toggling full screen
* [#8540](https://github.com/bryntum/support/issues/8540) - Crash when adding new event via context menu
* [#8564](https://github.com/bryntum/support/issues/8564) - Returning false from `beforeDragCreateEnd` listener leaves the drag-create element in place
* [#8603](https://github.com/bryntum/support/issues/8603) - Agenda View - Incorrect Order of Events after updating one event when recurring events are present
* [#8640](https://github.com/bryntum/support/issues/8640) - [REACT] Update `EquipmentStore` to `Store` type in all demos, fixed grid store to be unchained and only
  combo store should be chained in all framework demos

### FRAMEWORK SUPPORT

* NodeJS: `>= 14.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.6 - 2024-01-31

### FEATURES / ENHANCEMENTS

* Bumped built-in FontAwesome Free to version `6.5.1`
* All frameworks demo applications have been verified and updated to be compatible with Node.js 20

### API CHANGES

* To boost record creation performance, records now cache their `id` (it is accessed very frequently, helps performance
  a bit) and join their store(s) in a more efficient way. As a side effect, a record no longer has a `stores` array
  prior to joining a store, previously it was there as an empty array from start. We don't think this will affect any
  code, but wanted to share the change in case it does
* [DEPRECATED] [ANGULAR] [REACT] [VUE] `BryntumProjectModel` framework wrapper will be removed starting from `6.0.0`
  version. Use `BryntumCalendarProjectModel` instead. Check the upgrade guide for the details

### BUG FIXES

* [#4605](https://github.com/bryntum/support/issues/4605) - `EventRenderer` renders html as raw string when name is `null`
* [#5639](https://github.com/bryntum/support/issues/5639) - Calendar drag create should fire `beforeEventAdd` like Scheduler
* [#8196](https://github.com/bryntum/support/issues/8196) - `displayName` config has no effect for Scheduler as a Calendar mode
* [#8200](https://github.com/bryntum/support/issues/8200) - Webpack build failed with `.min.css` file
* [#8337](https://github.com/bryntum/support/issues/8337) - `EventRenderer` does not share well with `resourceAvatars`

### FRAMEWORK SUPPORT

* NodeJS: `>= 14.0.0`
* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.5 - 2024-01-09

### FEATURES / ENHANCEMENTS

* `DayView` and `WeekView` now accept a new config, `dashedSubticks` which cause minor tick lines (at 30 and 15 minutes
  etc.) to be rendered as dashed lines

### API CHANGES

* [DEPRECATED] The Calendar `tbar` item `toggleSideBar` has been renamed `toggleSidebar` for naming consistency. The old
  name will continue to be recognized until `v7.0`, but it is recommended that if your app customizes that item in
  the `tbar`, you update your app to use the correct name

### DEMOS

* [ANGULAR] New "Drag equipment onto tasks" demo (Angular) demonstrates how to drag any DOM node and drop it onto a task
  to update some aspect of it. The demo is located in `frameworks/angular/drag-onto-tasks` folder ([#7985](https://github.com/bryntum/support/issues/7985))
* [ANGULAR] New "List view" demo (Angular) demonstrates the 'list' view type. The demo is located in
  `frameworks/angular/listview` folder ([#8106](https://github.com/bryntum/support/issues/8106))
* [ANGULAR] New "Using TimeRanges" demo (Angular) shows how to use the TimeRanges feature to add vertical zones to the
  calendar. The demo is located in `frameworks/angular/timeranges` folder ([#8075](https://github.com/bryntum/support/issues/8075))
* [REACT + VITE] New "Drag equipment onto tasks demo" (React + Vite) demonstrates how to drag any DOM node and drop it
  onto a task to update some aspect of it. The demo is located in `frameworks/react-vite/drag-onto-tasks` folder
  ([#7984](https://github.com/bryntum/support/issues/7984))
* [REACT + VITE] New "List view" demo (React + Vite) demonstrates the 'list' view type. The demo is located in
  `frameworks/react-vite/listview` folder ([#8105](https://github.com/bryntum/support/issues/8105))
* [REACT + VITE] New "Using TimeRanges" demo (React + Vite) shows how to use the TimeRanges feature to add vertical
  zones to the calendar. The demo is located in `frameworks/react-vite/timeranges` folder ([#8032](https://github.com/bryntum/support/issues/8032))
* [VUE 3 + VITE] New "List view" demo (Vue 3 + Vite) demonstrates the 'list' view type. The demo is located in
  `frameworks/vue-3-vite/listview` folder
* [VUE-3 + VITE] New "Using TimeRanges" demo (Vue 3 + Vite) shows how to use the TimeRanges feature to add vertical
  zones to the calendar. The demo is located in `frameworks/vue-3-vite/timeranges` folder ([#8033](https://github.com/bryntum/support/issues/8033))

### BUG FIXES

* [#4500](https://github.com/bryntum/support/issues/4500) - `allDay` event with long duration may become interday when dragged to main schedule
* [#7403](https://github.com/bryntum/support/issues/7403) - Make a guide on how to make a theme selector in frameworks
* [#7947](https://github.com/bryntum/support/issues/7947) - Setting `defaultCalendar : null` makes the 'add event' item of scheduleMenu disabled
* [#7964](https://github.com/bryntum/support/issues/7964) - [REACT] JSX doesn't work in Popups
* [#8104](https://github.com/bryntum/support/issues/8104) - `onEventClick` is not called by events relayed from `DayView` child views
* [#8140](https://github.com/bryntum/support/issues/8140) - Modes should refresh when `eventRenderer` changed
* [#8144](https://github.com/bryntum/support/issues/8144) - Setting `highlightSelectedWeek` to `true` isn't working
* [#8145](https://github.com/bryntum/support/issues/8145) - `toggleSidebar` item has not consistent naming.
* [#8149](https://github.com/bryntum/support/issues/8149) - `LoadOnDemand` should not request subsets of a range which is already loaded
* [#8157](https://github.com/bryntum/support/issues/8157) - Crash in event tooltip when hovering one event and moving directly to another
* [#8158](https://github.com/bryntum/support/issues/8158) - `Tooltip` realign crash

### FRAMEWORK SUPPORT

* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.4 - 2023-12-21

### BUG FIXES

* [#8066](https://github.com/bryntum/support/issues/8066) - `ResourceFilter` throws an error on `deselectAll` when it has a `change` listener
* [#8080](https://github.com/bryntum/support/issues/8080) - Missing `TimelineHistogram` component in Angular / React / Vue packages
* [#8081](https://github.com/bryntum/support/issues/8081) - Missing `TreeGrid` component in Angular / React / Vue packages
* [#8087](https://github.com/bryntum/support/issues/8087) - Angular `drag-from-grid` demo broken

### FRAMEWORK SUPPORT

* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.3 - 2023-12-13

### FEATURES / ENHANCEMENTS

* `DayView` zooming now also works using pinch-zoom gestures on touch devices. This is still controlled by the
  `zoomOnMouseWheel` config property
* [REACT] New Resource view demo (React + Vite) shows per-resource calendar views. The demo is located in
  `frameworks/react-vite/resourceview` folder ([#7857](https://github.com/bryntum/support/issues/7857))
* [VUE-3-VITE] New Resource view demo (Vue 3 + Vite) shows per-resource calendar views. The demo is located in
  `frameworks/vue-3-vite/resourceview` folder ([#7890](https://github.com/bryntum/support/issues/7890))
* [VUE-3-VITE] New Drag equipment onto tasks demo (Vue 3 + Vite) demonstrates how to drag any DOM node and drop it onto
  a task to update some aspect of it. The demo is located in `frameworks/vue-3-vite/drag-onto-tasks` folder
  ([#7464](https://github.com/bryntum/support/issues/7464))
* [REACT] Documentation in "Quick start" and "Guide" is now updated with how to build a React application using Vite for
  higher efficiency and better performance in development

### API CHANGES

* [DEPRECATED] Please kindly note that `@bryntum/babel-preset-react-app` and
  `@bryntum/cra-template-typescript-calendar`, `@bryntum/cra-template-javascript-calendar` packages will not get any
  updates after `6.0.0` version

### BUG FIXES

* [#6125](https://github.com/bryntum/support/issues/6125) - `EventTooltip` hides when event menu shows
* [#7937](https://github.com/bryntum/support/issues/7937) - Drag-create's `newName` function call needs more context
* [#7978](https://github.com/bryntum/support/issues/7978) - `nextActiveView is undefined` error on deleting last visible event when sidebar date picker is showing
  events as dots
* [#7987](https://github.com/bryntum/support/issues/7987) - List stops reacting to selection change if selection is programmatically updated
* [#7988](https://github.com/bryntum/support/issues/7988) - `EventTip` adds its "reveal" class to its `overTarget` before the vetoable show event is fired
* [#7991](https://github.com/bryntum/support/issues/7991) - List view event tooltip not always displaying
* [#8003](https://github.com/bryntum/support/issues/8003) - `minWidth` of aligned widget calculated wrong when percentage is involved
* [#8004](https://github.com/bryntum/support/issues/8004) - All-day bar created from resizing intra-day event does not inherit the event's resource/color
* [#8036](https://github.com/bryntum/support/issues/8036) - Copy to clipboard doesn't work in some code blocks

### FRAMEWORK SUPPORT

* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.2 - 2023-11-24

### FEATURES / ENHANCEMENTS

* [VUE-3] New List view demo (Vue 3 + Vite) demonstrates the 'list' view type. The demo is located in
  `frameworks/vue-3-vite/listview` folder ([#7463](https://github.com/bryntum/support/issues/7463))

### BUG FIXES

* [#7092](https://github.com/bryntum/support/issues/7092) - Feature mixin on-owner events are not exposed on class
* [#7725](https://github.com/bryntum/support/issues/7725) - Grid cells in an event list do not stretch grid row elements

### FRAMEWORK SUPPORT

* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.1 - 2023-11-17

### FEATURES / ENHANCEMENTS

* [ANGULAR] New "Resource view" demo shows per-resource calendar views. The demo is located in
  `frameworks/angular/resourceview` folder ([#7441](https://github.com/bryntum/support/issues/7441))
* `DayView` now has a `hideEmptyDays` option which hides date columns for dates which contain no events.
  Note that this should be used with care. It may result in no visible date columns if there are no events
  in the view's date range. This is in all `DayView` subclasses such as `WeekView` and `DayResourceView` ([#7804](https://github.com/bryntum/support/issues/7804))
* `DayResourceView` now has a `hideEmptyResources` option which hides resource columns for resources
  which have no scheduled events for the date
* The `WeekExpander` feature now cooperates with the `MonthView`'s `autoRowHeight` property. Empty week rows
  flex-shrink to a minimum height when a week row is expanded to show all events. Vertical overflow is avoided
  where possible ([#7854](https://github.com/bryntum/support/issues/7854))

### BUG FIXES

* [#5719](https://github.com/bryntum/support/issues/5719) - [YARN] Can not install `@bryntum` product packages using yarn v2/v3
* [#7703](https://github.com/bryntum/support/issues/7703) - `NumberField` limits typed input to `minimumFractionDigits` not `maximumFractionDigits`
* [#7750](https://github.com/bryntum/support/issues/7750) - Vite error `@charset must precede all other statements`
* [#7754](https://github.com/bryntum/support/issues/7754) - [Frameworks] Thin packages not working with `pnpm`
* [#7767](https://github.com/bryntum/support/issues/7767) - List groups which start collapsed cannot be expanded using the UI
* [#7775](https://github.com/bryntum/support/issues/7775) - Setting `autoCreate` to false doesn't prevent the dblclick event creation
* [#7820](https://github.com/bryntum/support/issues/7820) - `globalThis` should be defined in locales to support LWC
* [#7823](https://github.com/bryntum/support/issues/7823) - Inconsistent drag creation behavior in Calendar year view
* [#7846](https://github.com/bryntum/support/issues/7846) - Clicking on event, changes the start date of the view

### FRAMEWORK SUPPORT

* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.6.0 - 2023-10-26

### FEATURES / ENHANCEMENTS

* This release introduces a new set of npm packages and framework components, that allows combining multiple Bryntum
  products in the same application. These packages contain the product specific code only, as opposed to the current
  packages that has all code for the products each product builds upon (for example Scheduler contains Grid & Core).
  The new packages are called `thin` packages, and moving forward it will be the recommended way of using Bryntum
  products in npm based applications (for all supported frameworks). See the "What's new" guide for more information
* `@bryntum/calendar-thin` bundle includes scss theme files in `sass/themes` folder ([#7445](https://github.com/bryntum/support/issues/7445))
* Time ranges now support recurrence out of the box, you no longer have to subclass and mix `RecurringTimeSpan` manually
  ([#7217](https://github.com/bryntum/support/issues/7217))
* Calendar print feature allows printing Agenda View ([#3884](https://github.com/bryntum/support/issues/3884))
* There is a new event, `dayCellPopulated` which fires when an array of events has been gathered for a
  certain date. This event may be used to mutate the `events` array for that date ([#7715](https://github.com/bryntum/support/issues/7715))
* [TypeScript] Functions and events declarations in typings were improved to contain all available parameters and return
  type ([#6961](https://github.com/bryntum/support/issues/6961), [#4456](https://github.com/bryntum/support/issues/4456))

### API CHANGES

* [BREAKING] `Core.util.helper.Point` class has been moved to solve circular module dependencies. It is now a named
  export of the `Core.util.helper.Rectangle` module. Check upgrading guide for the details
* [BREAKING] [TypeScript] `ScrollOptions` typedef has been renamed to `BryntumScrollOptions` to not interfere with
  TypeScript interface `ScrollOptions`. Check upgrading guide for the details ([#7385](https://github.com/bryntum/support/issues/7385))
* [FRAMEWORKS][DEPRECATED] `BryntumProjectModel` wrapper component has been renamed to `BryntumCalendarProjectModel`.
  Please see the upgrade guide for details

### BUG FIXES

* [#6619](https://github.com/bryntum/support/issues/6619) - Calendar's `inline-data` demo should use `ProjectModel` wrapper
* [#7739](https://github.com/bryntum/support/issues/7739) - Events with 0 duration still not displaying side by side

### FRAMEWORK SUPPORT

* TypeScript: `>= 3.6.0`
* Angular: `>= 9.0.0`
* React: `>= 16.0.0`
* Vue: `>= 2.0.0`
* Ionic: `>= 5.0.0`
* Vite: `>= 4.0.0`
* Webpack: `>= 4.0.0`

## 5.5.5 - 2023-10-23

### BUG FIXES

* [#1317](https://github.com/bryntum/support/issues/1317) - Calendar fires 2 refresh events on adding a new event record
* [#4727](https://github.com/bryntum/support/issues/4727) - Documentation for Calendar `EventMenu` items missing
* [#6206](https://github.com/bryntum/support/issues/6206) - Wrong guide for customizing context menu
* [#7587](https://github.com/bryntum/support/issues/7587) - `onBeforeDragMoveEnd` returns incorrect datetime on event record
* [#7607](https://github.com/bryntum/support/issues/7607) - List should allow easy setting of selected items
* [#7666](https://github.com/bryntum/support/issues/7666) - `DayLayout` not laying out zero-duration events
* [#7673](https://github.com/bryntum/support/issues/7673) - Events not rendering after switching to Russian locale
* [#7678](https://github.com/bryntum/support/issues/7678) - `titleRenderer` not honoured if editor is not floating
* [#7679](https://github.com/bryntum/support/issues/7679) - Event blinks after drag create is completed
* [#7693](https://github.com/bryntum/support/issues/7693) - Align anchor arrow colour detection wrong when mouse is over adjacent element
* [#7706](https://github.com/bryntum/support/issues/7706) - `EventEdit` does not exit when clicking on sidebar `DatePicker`

## 5.5.4 - 2023-10-05

### FEATURES / ENHANCEMENTS

* There is a new Calendar config `activeDateCls` which is a CSS class name which gets added to the currently active
  date's cell in all modes ([#7535](https://github.com/bryntum/support/issues/7535))

### BUG FIXES

* [#7478](https://github.com/bryntum/support/issues/7478) - Unable to scroll after quickly navigating in Agenda view
* [#7487](https://github.com/bryntum/support/issues/7487) - `DateResourceView` does not render `ResourceTimeRanges`
* Partially fixed [#7491](https://github.com/bryntum/support/issues/7491) - `ExternalEventSource` `dropExternal` event should be preventable
* [#7512](https://github.com/bryntum/support/issues/7512) - `ExternalEventSource: eventRecord` not always set in `externalDrop` event
* [#7513](https://github.com/bryntum/support/issues/7513) - Calendar tries to sync assignments on drag-create start
* [#7520](https://github.com/bryntum/support/issues/7520) - `viewContainer` should be a config to allow reconfiguration
* [#7553](https://github.com/bryntum/support/issues/7553) - Incorrect Swedish translation in Calendar
* [#7567](https://github.com/bryntum/support/issues/7567) - `overflowPopup` should inherit the `eventSorter` of its owner
* [#7599](https://github.com/bryntum/support/issues/7599) - `autoRowHeight` and `maxEventsPerCell` do not work together
* [#7600](https://github.com/bryntum/support/issues/7600) - Event filter is not working when Calendar is read only

## 5.5.3 - 2023-09-15

### BUG FIXES

* [#4782](https://github.com/bryntum/support/issues/4782) - React calendar issue when setting state
* [#7059](https://github.com/bryntum/support/issues/7059) - `beforeDragMoveEnd` and `beforeDragResizeEnd` has not correct event ids
* [#7178](https://github.com/bryntum/support/issues/7178) - `dragMoveEnd` listener in `DayResourceView` not having updated data

## 5.5.2 - 2023-08-30

### FEATURES / ENHANCEMENTS

* New demo `drag-onto-tasks` showing how to drag custom objects onto an event
* `YearView` may now show "No events" in its cell tooltip ([#5530](https://github.com/bryntum/support/issues/5530))

### LOCALE UPDATES

* There is a new locale key `noEvents : 'No events'` which may be used by `YearView`'s cell tooltip

### BUG FIXES

* [#6993](https://github.com/bryntum/support/issues/6993) - `DatePicker` doesn't trigger `dateChange` for grayed days when `disableOtherMonthCells` false
* [#7331](https://github.com/bryntum/support/issues/7331) - Cannot set day and date in two separate statements
* [#7332](https://github.com/bryntum/support/issues/7332) - Crash when double clicking calendar icon in `dual-dayview` demo

## 5.5.1 - 2023-08-16

### BUG FIXES

* [#7179](https://github.com/bryntum/support/issues/7179) - `beforeAutoCreate` missing parameter in new `DayResourceView`
* [#7199](https://github.com/bryntum/support/issues/7199) - `timeFormat` localization is ignored
* [#7224](https://github.com/bryntum/support/issues/7224) - `isCreating` flag gets "stuck" if the edit is vetoed
* [#7256](https://github.com/bryntum/support/issues/7256) - Incorrect number of events
* [#7260](https://github.com/bryntum/support/issues/7260) - Event not rendered on `overflowClickAction` expand

## 5.5.0 - 2023-07-31

* This release is a replacement for the 5.4.3 patch release. It was changed to a minor version because of some larger
  changes behind the scenes to pave the way for future support for live updates in Scheduler Pro and Gantt.

### BUG FIXES

* [#7221](https://github.com/bryntum/support/issues/7221) - [VUE] Vue vite app doesn't compile with Bryntum vue wrappers
* [#7224](https://github.com/bryntum/support/issues/7224) - `isCreating` flag gets "stuck" if the edit is vetoed

## 5.4.2 - 2023-07-26

### BUG FIXES

* [#4163](https://github.com/bryntum/support/issues/4163) - Inconsistent undo/redo behavior in calendar demo
* [#6995](https://github.com/bryntum/support/issues/6995) - [VUE] An exception when use `workingTime` config in calendar timeline view
* [#7127](https://github.com/bryntum/support/issues/7127) - Id collision error when creating new event using an external button on `EventList` mode
* [#7166](https://github.com/bryntum/support/issues/7166) - Properly maintain `b-selected-date` class in `ResourceView` day headers
* [#7169](https://github.com/bryntum/support/issues/7169) - Events hidden behind other events when switching modes
* [#7185](https://github.com/bryntum/support/issues/7185) - Event sort works incorrect in Month View
* [#7196](https://github.com/bryntum/support/issues/7196) - `autoCreate` step not always propagated into `TimeField` step
* [#7208](https://github.com/bryntum/support/issues/7208) - Calendar's active date not changing with `Datepicker`

## 5.4.1 - 2023-07-13

### FEATURES / ENHANCEMENTS

* We have created a public repository to showcase Salesforce demos. All previous demos are merged into one Lightning
  Application which is easy to install to a new scratch org. You can find more information in updated guides and in this
  repository: https://github.com/bryntum/bryntum-salesforce-showcase#bryntum-salesforce-showcase
* We have created a public Salesforce org where this app is preinstalled. You can find link to it and login credentials
  on the updated examples page

### BUG FIXES

* [#6077](https://github.com/bryntum/support/issues/6077) - [TypeScript] `Model` constructors should allow second param
* [#7085](https://github.com/bryntum/support/issues/7085) - `beforeEventEdit` event should handle async handlers
* [#7106](https://github.com/bryntum/support/issues/7106) - `ExternalEventResource` drag drop crashes if no resource on `DayResourceView`
* [#7107](https://github.com/bryntum/support/issues/7107) - Extra horizontal scrollbars shown in `resourceview` in narrow window
* [#7132](https://github.com/bryntum/support/issues/7132) - Calendar `ResourceFilter` change listener has wrong 'oldValue' on select

## 5.4.0 - 2023-06-30

### FEATURES / ENHANCEMENTS

* `Widget` has a new config, `maximizeOnMobile` which takes effect only on `floating` widgets on a mobile device. It
  causes the widget to be maximized instead of positioned in order to accommodate the mobile virtual keyboard. This will
  make event editing much easier to use on mobile devices ([#6522](https://github.com/bryntum/support/issues/6522))
* On mobile devices, `type : 'checkbox'` is rendered as a `slidetoggle` widget. The API and value is the same, it is
  just a more appropriate UI for the platform
* Calendar has a new mode, `dayresourceview` which shows columns of events for each selected resource for each day
  in its range. Check it out in the new `date-resource` example
* The `CalendarDrag` feature now has a new config `removeFromExternalStore`. It defaults to `true` meaning that when an
  event is dropped on the Calendar from an outside event store, the record is removed from that store. If set
  to `false`, the record is *not* removed, and a __clone__ of the dragged record is inserted at the drop position.
* The `ExternalEventSource` feature now allows a `droppable` property to be specified. If a `grid` is configured as the
  external UI, then dropping will Just Work. If the event source is just DOM elements, there are `dragMoveExternal`
  and `dropExternal` events. ([#6826](https://github.com/bryntum/support/issues/6826))
* For a slightly better docs experience for most users, the docs browser now by default hides some more obscure APIs
  normally only used when implementing own widgets and features. Advanced users in need of these APIs can still opt in
  to see them using the `Show` menu in the docs browser

### BUG FIXES

* [#6957](https://github.com/bryntum/support/issues/6957) - Unexpected drag proxy in `dragfromgrid` demo
* [#6963](https://github.com/bryntum/support/issues/6963) - Drag from Grid demo exception when dragging
* [#7002](https://github.com/bryntum/support/issues/7002) - Clarify granularity level of `dayStartTime` and `dayEndTime` in API docs
* [#7003](https://github.com/bryntum/support/issues/7003) - Set `coreHours` to the `dayStart` and end if they went through rounding
* [#7007](https://github.com/bryntum/support/issues/7007) - ResourceView overwrites configuration with values from itself.
* [#7019](https://github.com/bryntum/support/issues/7019) - Align constrained doesn't work in some cases.
* [#7020](https://github.com/bryntum/support/issues/7020) - Drag from `ExternalEventSource` into Calendar with no resources throws Error
* [#7057](https://github.com/bryntum/support/issues/7057) - CalendarRow cell width mismatch on narrow Calendars
* [#7068](https://github.com/bryntum/support/issues/7068) - The "Select all" item in List is not internationalized

## 5.3.8 - 2023-06-28

### BUG FIXES

* [#6981](https://github.com/bryntum/support/issues/6981) - Applying german locale after init makes `ResourceView` show wrong week

## 5.3.7 - 2023-06-20

### FEATURES / ENHANCEMENTS

* New Event items demo. The example shows how to attach an arbitrary list of items (guests) to an event. The demo is
  located in `examples/event-items` folder

### API CHANGES

* When changing `timeZone` on a Calendar, the date range that the Calendar is currently displaying will not change
  unless the active view is a `DayView` and the selected days events center point will, when converted to a different
  time zone, be changed to a different day
* The `DayView` methods `zoomTo` and `zoomBy` now return a `Promise` that may be awaited if postprocessing the updated
  UI state is required

### BUG FIXES

* [#6467](https://github.com/bryntum/support/issues/6467) - Replace separate view live demos to enable drag drop
* [#6839](https://github.com/bryntum/support/issues/6839) - Calendar `currentTime` indicator is not converted to `timeZone`
* [#6871](https://github.com/bryntum/support/issues/6871) - `overflowPopup : null` should make `YearView` switch to `DayView` in Calendar
* [#6872](https://github.com/bryntum/support/issues/6872) - `FilterField` should tolerate its field value being `null`/`undefined`
* [#6880](https://github.com/bryntum/support/issues/6880) - `WeekView`'s all day row horizontal scroll may become out of sync if no all day events
  exist and the `minDayWidth` is set to cause horizontal overflow.
* [#6973](https://github.com/bryntum/support/issues/6973) - Calendar `editEvent(eventRecord)` crashes without `startDate` and `endDate`

## 5.3.6 - 2023-05-26

### API CHANGES

* Event bar colors are set in an event element using the `--cal-event-color` CSS property, not by setting a color name
  CSS class
* All day event bars (and all event bars which are rendered using the renderData option `solidBar : true`) which do not
  have an `iconCls` may now show the default circular "bullet" icon before the text. To enable this, configure that
  mode (or the Calendar's `modeDefaults`) with `showBullet : { bar : true }`
* The `durationUnit` used in the new record when drag-creating events now matches the unit specified in the `dragUnit`
  property of the active view. The defaults have not changed, so in a `DayView`, the duration of drag-created events
  will be in `hours` and in all other views, (including the all day `CalendarRow` in a `DayView`) in `days`
  ([#6798](https://github.com/bryntum/support/issues/6798))
* The `EventTooltip` feature may now be configured with `revealEventsInCluster : false` which means that when hovering a
  narrow event which is sharing day column width with other, overlapping events the hovered event does not expand to the
  full width ([#6410](https://github.com/bryntum/support/issues/6410))

### LOCALE UPDATES

* `DayView` and `WeekView` may now be configured with how to snap an autoCreate pointer date to an `autoCreate.step`
  point. The `autoCreate.snapType` may be configured as `'round'` (the default), `'floor'` or `'ceil'` ([#6739](https://github.com/bryntum/support/issues/6739))

### BUG FIXES

* [#6771](https://github.com/bryntum/support/issues/6771) - No cell content should be shown for "other month" cells in `MonthView`
* [#6772](https://github.com/bryntum/support/issues/6772) - Event colour source should be taken from correct resource
* [#6779](https://github.com/bryntum/support/issues/6779) - `MonthView` events bars not conforming to `eventColor` renderer values.
* [#6781](https://github.com/bryntum/support/issues/6781) - Remove erroneous `dayCellRenderer` docs from `AgendaView`
* [#6828](https://github.com/bryntum/support/issues/6828) - `CalendarDrag` should not create an `AllDayZone` if the `allDayEvents` widget has been configured away

## 5.3.5 - 2023-05-11

### FEATURES / ENHANCEMENTS

* The `ResourceFilter` widget may now be configured to also filter the `resourceStore` by configuring `filterResources`
  as `true` ([#6698](https://github.com/bryntum/support/issues/6698))
* `DayView` and `WeekView` event renderers now accept a `bodyColor` property to the `renderData` which specifies the
  background color of the body part of the event block ([#6690](https://github.com/bryntum/support/issues/6690))
* The `EventStore` setting `removeUnassignedEvent` now defaults to `false` for the Calendar product. This means that
  removing all assignments from an event will *not* remove it from the event store ([#6732](https://github.com/bryntum/support/issues/6732))

### BUG FIXES

* [#6093](https://github.com/bryntum/support/issues/6093) - Resource filter not respected on initial loading
* [#6516](https://github.com/bryntum/support/issues/6516) - Calendar state save and restore may include the date
* [#6683](https://github.com/bryntum/support/issues/6683) - Calendar sidebar collapses when `Combo` dropdown clicked
* [#6701](https://github.com/bryntum/support/issues/6701) - [IONIC] `Scrollbar` width could not be determined under Ionic framework
* [#6702](https://github.com/bryntum/support/issues/6702) - Setting EventList `listRangeItems` item to `null` causes error
* [#6705](https://github.com/bryntum/support/issues/6705) - Crash in `shifted` demo
* [#6708](https://github.com/bryntum/support/issues/6708) - `showEvents : 'count'` in `YearView` doesn't work
* [#6714](https://github.com/bryntum/support/issues/6714) - When `DayView` has `daySelector : true`, the time axis is not accounted for
* [#6733](https://github.com/bryntum/support/issues/6733) - Crash if calendar sidebar is destroyed while loading
* [#6744](https://github.com/bryntum/support/issues/6744) - `DayView` `allDayEvents` should be able to be configured as expanded

## 5.3.4 - 2023-04-28

### BUG FIXES

* [#4631](https://github.com/bryntum/support/issues/4631) - `eventDrag` not working well if data mapping used for start/end dates
* [#6588](https://github.com/bryntum/support/issues/6588) - `ListView` bugs when asked to display arbitrary date range as opposed to range config
* [#6627](https://github.com/bryntum/support/issues/6627) - Zero duration all Day Event shown incorrectly
* [#6629](https://github.com/bryntum/support/issues/6629) - Fix hiding context menus inside LWC components on scroll
* [#6633](https://github.com/bryntum/support/issues/6633) - `PickerField` `editable:false` doesn't work inside WebComponent
* [#6651](https://github.com/bryntum/support/issues/6651) - Calendar: after zoom, scroll jumps on click-n-drag event creation
* [#6652](https://github.com/bryntum/support/issues/6652) - Minified UMD bundle does not export `bryntum` namespace

## 5.3.3 - 2023-04-21

### FEATURES / ENHANCEMENTS

* [VUE-3] Added a new Vue-3 demo, "Scheduler Timeline". Demo is located in the
  `examples/frameworks/vue-3/calendar-scheduler` folder
* [VUE-3] Added a new Vue-3 demo showing binding to inline data arrays, "Scheduler Timeline Inline data". Demo is
  located in the `examples/frameworks/vue-3/calendar-scheduler-inline` folder
* `CalendarDatePicker` now offers an `eventFilter` config to match other Calendar widgets ([#6591](https://github.com/bryntum/support/issues/6591))
* [ANGULAR] Bryntum Calendar now ships with two npm Angular wrapper packages to support different versions of Angular
  framework. Existing `@bryntum/calendar-angular` package is now designed to work with Angular 12 and newer versions,
  which use the IVY rendering engine. New `@bryntum/calendar-angular-view` package is designed to work with Angular 11
  and older versions, which use the View Engine rendering. Check Upgrading and Angular integration guides in
  documentation for more information ([#6270](https://github.com/bryntum/support/issues/6270))
* [ANGULAR] `angular-7` demo has been upgraded to use Angular 11 and `@bryntum/calendar-angular-view` package. Demo is
  located in `examples/frameworks/angular/angular-11` folder

### BUG FIXES

* [#4516](https://github.com/bryntum/support/issues/4516) - Calendar doesn't accept `project` instance
* [#5532](https://github.com/bryntum/support/issues/5532) - Fix documentation of Vue 3 demo documentation
* [#6498](https://github.com/bryntum/support/issues/6498) - Allow application intervention in event positioning within `DayView`
* [#6583](https://github.com/bryntum/support/issues/6583) - `YearView` doesn't render recurring events which are `allDay`
* [#6612](https://github.com/bryntum/support/issues/6612) - Duplicate tooltip renderer called
* [#6614](https://github.com/bryntum/support/issues/6614) - + n more count incorrect when overflowing events start below the bottom of the cell
* [#6622](https://github.com/bryntum/support/issues/6622) - `DayView` does not change date on header click

## 5.3.2 - 2023-04-04

### FEATURES / ENHANCEMENTS

* Elements rendered by the `TaskNonWorkingTime` feature elements now trigger `taskNonWorkingTimeClick`,
  `taskNonWorkingTimeDblClick` and `taskNonWorkingTimeContextMenu` events on the Gantt instance. ([#5679](https://github.com/bryntum/support/issues/5679))
* There is a new `Calendar` event: `beforeAutoCreate`. This is a preventable event which fires before a UI-initiated
  create gesture is actioned. This allows a single point of validation for UI-initiated event creation ([#6472](https://github.com/bryntum/support/issues/6472))
* ScheduleMenu is now enabled by default, allowing easier event creation using context menu on empty schedule space.

### BUG FIXES

* [#6395](https://github.com/bryntum/support/issues/6395) - [ANGULAR] Cannot use `StateProvider` with a production build
* [#6417](https://github.com/bryntum/support/issues/6417) - `schedule<DomEvent>` events do not bubble out of `ResourceView` to the Calendar
* [#6458](https://github.com/bryntum/support/issues/6458) - Event dragging in Scheduler child mode does not relay onBeforeEventDrag event correctly
* [#6513](https://github.com/bryntum/support/issues/6513) - Event tooltip should not show when double clicking event inside scheduler
* [#6514](https://github.com/bryntum/support/issues/6514) - `ScheduleMenu` not working inside Scheduler mode
* [#6515](https://github.com/bryntum/support/issues/6515) - Clicking `EventList` row for event who's `startDate` is before visible range changes visible range

## 5.3.1 - 2023-03-17

### API CHANGES

* Date parsing was made more forgiving in regard to character used to separate date parts. For example these strings are
  now all acceptable as `HH:mm`: `10:20`, `10 20`, `10-20`, `10/20` ([#6344](https://github.com/bryntum/support/issues/6344))

### BUG FIXES

* [#6351](https://github.com/bryntum/support/issues/6351) - Components do not render into containers not already in DOM
* [#6368](https://github.com/bryntum/support/issues/6368) - `MonthView` event sorter gets order wrong

## 5.3.0 - 2023-03-02

### FEATURES / ENHANCEMENTS

* CSS changes in Scheduler has cut the size of Calendar's standalone CSS-bundles roughly in half (Calendar includes
  Schedulers styling to allow using Scheduler as a mode). See Schedulers upgrade guide for more information
* Support for Time zone conversion has been added to all Bryntum scheduling products. Simply set a IANA time zone
  identifier as value for the `timeZone` config and that's it. But, since time zones is not supported natively in
  JavaScript we strongly recommend to read our Time zone guide ([#1533](https://github.com/bryntum/support/issues/1533))
* Localization demos updated to show up-to-date localization approach
* New `TimeRanges` feature, that shades time ranges and displays a header in the gutter of day and week views. Try it
  out in the new `timeranges` demo ([#5113](https://github.com/bryntum/support/issues/5113))
* `AjaxHelper.fetch` now supports using request body to pass parameters for non-GET requests. Please check
  `addQueryParamsToBody` argument in the method documentation ([#2855](https://github.com/bryntum/support/issues/2855))
* We have added support for `resourceTimeRanges` to be added to a project. These are rendered only into subviews of a
  `ResourceView` which have matching resource ids ([#5835](https://github.com/bryntum/support/issues/5835))
* `DayView` and `WeekView` have a new `sixMinuteTicks` config. When set to true, the time axis is subdivided into six
  minute ticks instead of the default five minute ticks ([#5645](https://github.com/bryntum/support/issues/5645))
* Lots (but not all) of the not so informative `object` types in our TypeScript typings have been replaced with more
  specific types. Objects that in our JavaScript are used as maps are now declared as `Record<keyType, valueType>`, and
  for functions that accept object arguments many are replaced with anonymous type declarations, such as
  `{ foo: string, bar: number }` (Partially fixed [#5176](https://github.com/bryntum/support/issues/5176))
* `YearView` and the Calendar's `datePicker` may now show more than 4 dots when `showEvents` is `'dots'` by setting
  the `maxDots` config on the `year` mode or the `datePicker` config. Note that increasing this value may produce a
  cluttered UI ([#6238](https://github.com/bryntum/support/issues/6238))
* `YearView` and the Calendar's `datePicker` may now be configured with `eventCountTip : true` which causes a tooltip
  to appear to display the event count for the day when a cell is hovered

### API CHANGES

* [DEPRECATED] `LocaleManager.registerLocale` and `LocaleManager.extendLocale` are deprecated.
  `LocaleHelper.publishLocale` should be used instead.
* `DayView`'s `hourHeightBreakpoints` now accepts an array of heights instead of an object. The object form is still
  supported, but might get deprecated in the future

### LOCALE UPDATES

* Locales format and process for applying locales have been simplified
* New locales for 31 languages have been added. Currently available languages are listed in the localization guide
  (Guides/Customization/Localization)

### BUG FIXES

* [#4764](https://github.com/bryntum/support/issues/4764) - Calendar `multiEventSelect` not working
* [#5988](https://github.com/bryntum/support/issues/5988) - Calendar timezone demo UTC time incorrect
* [#6225](https://github.com/bryntum/support/issues/6225) - Calendar collapses and expands event on each subsequent click or double click
* [#6255](https://github.com/bryntum/support/issues/6255) - `EventTooltip` Placement Issue for Overlapping Events

## 5.2.10 - 2023-02-17

### FEATURES / ENHANCEMENTS

* Added support for adding different core hours times for each day ([#6043](https://github.com/bryntum/support/issues/6043))

### API CHANGES

* Recently browsers have added support for Unicode 15, which changes the output of `Intl.DateTimeFormat` when
  formatting time to include `AM`/`PM`. Those browsers now use "thin space" (`\u202f`) instead of regular space. This
  affects the `DateHelper.format()` function, but likely you do not need to take any action in your application. It
  also affects `DateHelper.parse()`, which has been updated to support the new unicode space ([#6193](https://github.com/bryntum/support/issues/6193))

### BUG FIXES

* [#5791](https://github.com/bryntum/support/issues/5791) - `EventHelper`'s listeners for `.b-using-keyboard` break iOS dragging
* [#6177](https://github.com/bryntum/support/issues/6177) - `EventSelection`'s `isEventSelectable` not called by Calendar's `EventSelection` mixin

## 5.2.9 - 2023-01-30

### FEATURES / ENHANCEMENTS

* The event editor of the `EventEdit` feature may be reconfigured to not be a popup by configuring the  `editorConfig`
  with `floating : false` or by adding an `appendTo` config. In this situation, the editor is displayed as a side-docked
  overlay. See the new docked-editor example. ([#5873](https://github.com/bryntum/support/issues/5873))

### BUG FIXES

* [#6019](https://github.com/bryntum/support/issues/6019) - [TypeScript] Feature classes and configs have `on` event handlers exposed on owner class

## 5.2.8 - 2023-01-19

### BUG FIXES

* [#5918](https://github.com/bryntum/support/issues/5918) - `DatePicker`'s month field does not update when locale changed at init time
* [#5934](https://github.com/bryntum/support/issues/5934) - Agenda view shows events in wrong year
* [#5962](https://github.com/bryntum/support/issues/5962) - Day zoom demo slider shows value with decimals when `devicePixelRatio` is not `1`

## 5.2.7 - 2023-01-11

### FEATURES / ENHANCEMENTS

* Internal code improvements and bugfixes

## 5.2.6 - 2022-12-28

### FEATURES / ENHANCEMENTS

* [REACT] React wrapper now supports React components in widgets and tooltips ([#774](https://github.com/bryntum/support/issues/774))

### BUG FIXES

* [#5789](https://github.com/bryntum/support/issues/5789) - Determining whether an event is `interDay` must consult the view's `dayTime` to handle shifted days
* [#5821](https://github.com/bryntum/support/issues/5821) - `constrainTo` not applied unless component is shown using `alignTo`
* [#5827](https://github.com/bryntum/support/issues/5827) - Error when navigating to view with event starting on hidden non working day

## 5.2.5 - 2022-12-16

### FEATURES / ENHANCEMENTS

* `ListView` now offers a `resourceColumn` in which is displayed a read-only `ChipView` depicting the resources assigned
  to the event

### API CHANGES

* The `EventStore` `loadDateRange` event would previously only fire when a different date range of events was requested
  from the store. Not as the documentation states "when a range of events is requested". This now fires whenever a date
  range of events is requested. A `changed` flag is set in the event if the range is a new date range

### BUG FIXES

* [#3954](https://github.com/bryntum/support/issues/3954) - Fixed dragging all-day events with `dayStartShift` in effect.
* [#4530](https://github.com/bryntum/support/issues/4530) - `loadOnDemand` with sidebar date picker using `showEvents : true` causes an infinite loop
* [#4920](https://github.com/bryntum/support/issues/4920) - Calendar throws error when dragging event from overflow popup
* [#5672](https://github.com/bryntum/support/issues/5672) - Double click on calendar date throws exception
* [#5685](https://github.com/bryntum/support/issues/5685) - Non-draggable events are draggable in overflow popup
* [#5763](https://github.com/bryntum/support/issues/5763) - `loadOnDemand` feature needs `refresh` method
* [#5780](https://github.com/bryntum/support/issues/5780) - ICS export datetime stamp is not UTC

## 5.2.4 - 2022-11-28

### FEATURES / ENHANCEMENTS

* We recently launched a new homepage over at [bryntum.com](https://bryntum.com), and have now slightly updated the
  styling for demos and docs to better match it (new logo, new header color, new font). Please note that this is not a
  change to our themes, only the look of the demos, and it won't affect your application

### BUG FIXES

* [#2125](https://github.com/bryntum/support/issues/2125) - Recurrence edit confirmation should not be displayed when drag creating a recurring event
* [#4220](https://github.com/bryntum/support/issues/4220) - Fixed calendar drag create in day/week view on DST days.
* [#5595](https://github.com/bryntum/support/issues/5595) - Fix panel collapse icon directions
* [#5606](https://github.com/bryntum/support/issues/5606) - Calendar events duplicated in UI when events start date is changed.

## 5.2.3 - 2022-11-17

### BUG FIXES

* [#5051](https://github.com/bryntum/support/issues/5051) - Field does not show its invalid state unless it is hovered
* [#5533](https://github.com/bryntum/support/issues/5533) - `DayViewDragZone` moves proxy element in the wrong direction in RTL mode

## 5.2.2 - 2022-11-08

### FEATURES / ENHANCEMENTS

* In `DayView`s, events with a duration such that relative to the `hourHeight`, the element is too small to contain
  wrapped text will automatically change to a compact rendition. If the `hourHeight` changes (such as by zooming), the
  rendition will be corrected as appropriate ([#1948](https://github.com/bryntum/support/issues/1948))
* `DayView` now has a `currentTimeIndicatorRenderer` which allows a customized current time indicator to be used
  ([#4972](https://github.com/bryntum/support/issues/4972))
* The `emptyText` config of the `agenda` mode may now be an HTML string ([#5046](https://github.com/bryntum/support/issues/5046))

### API CHANGES

* [DEPRECATED] The behaviour of the `store.data` getter will be changed in 6.0. Currently, it returns the **initial**
  raw dataset, in 6.0 it will be changed to have the more expected behaviour of returning the data objects for the
  **current** state instead. See Grid's upgrade guide for more information ([#5499](https://github.com/bryntum/support/issues/5499))

### BUG FIXES

* [#5484](https://github.com/bryntum/support/issues/5484) - Add day of week indicator class name to Calendar cells
* [#5495](https://github.com/bryntum/support/issues/5495) - `AgendaColumn` needs to be `autoHeight` if using a custom `eventRenderer`
* [#5528](https://github.com/bryntum/support/issues/5528) - `dayNumberClick` and `monthNameClick` events are not firing for specific modes
* [#5536](https://github.com/bryntum/support/issues/5536) - `allDayEvents : null` in `DayView` children of `resourceView` leaves all day rows in the timeaxes

## 5.2.1 - 2022-10-28

### FEATURES / ENHANCEMENTS

* `DatePicker` now fully supports two modes of `multiSelect`. Setting it to `true` means that multiple, discontinuous
  ranges may be selected. Setting it to `'range'` means that one single range of one or more consecutive dates may be
  selected. ([#5368](https://github.com/bryntum/support/issues/5368))

### API CHANGES

* Added `includeWeekendsButton` to `Calendar` with default value of `false`. Changed text of
  button to "Weekends" from "Full". ([#5459](https://github.com/bryntum/support/issues/5459))

### BUG FIXES

* [#5149](https://github.com/bryntum/support/issues/5149) - Angular demos now use component-local styles using `ViewEncapsulation.None`
* [#5374](https://github.com/bryntum/support/issues/5374) - Text cropped in calendar events
* [#5392](https://github.com/bryntum/support/issues/5392) - Crash when clicking mode selector button in small screen in web component
* [#5433](https://github.com/bryntum/support/issues/5433) - Today button does not reset small and large calendar to today
* [#5440](https://github.com/bryntum/support/issues/5440) - Allow custom `eventSorter` function for views including `OverflowPopup`
* [#5455](https://github.com/bryntum/support/issues/5455) - LTS date format does not parse seconds
* [#5460](https://github.com/bryntum/support/issues/5460) - The duplicate event option breaks assignment of events to resources

## 5.2.0 - 2022-10-13

### FEATURES / ENHANCEMENTS

* Calendar `DayView` now shows all week days above the detail area ([#2899](https://github.com/bryntum/support/issues/2899))
* Calendar responds to platform differences (via the `Responsive` mixin) and provides a significantly improved User
  Experience on small screens. This responsive behavior is also compatible with saving the calendar state In particular,
  on small screens:
    * The calendar sidebar automatically switches to overlay mode
    * The mode selection area switches to a menu button with radio items instead of the button group
    * The calendar description text is shortened
    * Improved year view layout ([#4617](https://github.com/bryntum/support/issues/4617))
* Calendar uses a new `Calendar.widget.ModeSelector` instead of a `Core.widget.ButtonGroup` on its toolbar
    * The `ModeSelector` supports a `popup` mode which, when `popup: true`, displays the available calendar modes in a
      menu instead of the regular button group. This switch is made by default on small displays via the new
      `responsive` behavior described above.
    * When the active mode of the calendar supports it, the mode selector displays a `Full` button to allow the user to
      toggle between full weeks and work weeks.
* Calendar views now have a `descriptionFormat` config to simplify changing the description responsively. If a
  `descriptionRenderer` is provided, it takes precedence over the `descriptionFormat`
* Calendar added the `navigatorPlacement` config to allow the forward/backward/Today buttons to appear on the sidebar
  instead of the toolbar
* Menu has a `separator` config to make it easier to visually separate menu items
* The responsive state objects used in the `responsive` config of the `Responsive` mixin now support a `once` property
  to allow configs to only be set on first activation of the state
* The `Core.helper.DateHelper` class has a new method `formatRange` method which can format date ranges, as well as new
  formatting options for week numbers
* A new config, `emptyCellRenderer` allows `MonthView` and `CalendarRow` (The all day row in a `DayView`
  or `WeekView`) to display a clickable button in cells which contain no events. There is a new
  `emptyCellClick` event. ([#4413](https://github.com/bryntum/support/issues/4413))

## 5.1.5 - 2022-10-12

### FEATURES / ENHANCEMENTS

* `DatePicker` now fully supports two modes of `multiSelect`. Setting it to `true` means
  that multiple, discontinuous ranges may be selected. Setting it to `'range'` means
  that one single range of one or more consecutive dates may be selected. ([#5368](https://github.com/bryntum/support/issues/5368))
* New records are assigned a generated `id` if none is provided. The generated `id` is meant to be temporary (a
  phantom `id`), and should be replaced by the backend on commit. Previously the `id` was based on a global counter
  incremented with each assignment. That simplistic scheme assured no two records got the same `id` during a session,
  but if an application serialized the generated `id` (note, they should not) and then reloaded it, it would eventually
  collide with a new generated `id`. To prevent this, the generated `id`s are now based on a random UUID instead
* Stores now by default show a warning on console when loading records that has generated `id`s, as a reminder that it
  should be replaced by the backend on commit

### BUG FIXES

* [#4434](https://github.com/bryntum/support/issues/4434) - The `EventMenu` context menu's "Delete event" option doesn't handle recurring events properly
* [#4488](https://github.com/bryntum/support/issues/4488) - Overflowed events with custom `propagateEndDate` not marked with right arrow
* [#4645](https://github.com/bryntum/support/issues/4645) - Improve error message "Bryntum bundle included twice"
* [#4654](https://github.com/bryntum/support/issues/4654) - [REACT] Bryntum widget wrappers don't accept all component properties in React 18
* [#4729](https://github.com/bryntum/support/issues/4729) - Can't clear multi-select options in combo with keyboard navigation only
* [#5333](https://github.com/bryntum/support/issues/5333) - `syncCurrentTimeIndicator` throws an error if "today" is a hidden non working day
* [#5346](https://github.com/bryntum/support/issues/5346) - Deleting the base of a repeating event causes exception
* [#5347](https://github.com/bryntum/support/issues/5347) - Allow `defaultCalendar` to be explicitly configured as `null`
* [#5370](https://github.com/bryntum/support/issues/5370) - `EventEditor` `resourceField` store cannot be reconfigured

## 5.1.4 - 2022-09-29

### FEATURES / ENHANCEMENTS

* The `showEvents` config of Calendar's sidebar `DatePicker` and Calendar's `YearView` may now be `'dots'` to show
  events as a series of event-coloured dots. Maximum of three in `YearView` and four in `DatePicker`. ([#5234](https://github.com/bryntum/support/issues/5234))

### API CHANGES

* [DEPRECATED] The `events` config of the sidebar `DatePicker` has been renamed to `showEvents`. The `events` property
  is deprecated but will continue to work during its deprecation period

### BUG FIXES

* [#5164](https://github.com/bryntum/support/issues/5164) - Calendar listview doesn't respect columns order when rendering
* [#5311](https://github.com/bryntum/support/issues/5311) - Enable app to change load parameters sent by `loadOnDemand` feature
* [#5313](https://github.com/bryntum/support/issues/5313) - Multiday event not displaying if `hideNonWorkingDays` is `true`

## 5.1.3 - 2022-09-09

### BUG FIXES

* [#415](https://github.com/bryntum/support/issues/415) - Improve docs on formatting currency values on `NumberField`
* [#2742](https://github.com/bryntum/support/issues/2742) - Configurable time axis tick `amount`/`unit` showing the Hours Between 15 Minutes
* [#5156](https://github.com/bryntum/support/issues/5156) - Calendar Overflow Popup is hidden behind other nearby components on the page
* [#5165](https://github.com/bryntum/support/issues/5165) - Keyboard operations from `overflowPopup` in `ResourceView` throw errors, or silently fail

## 5.1.2 - 2022-08-29

### FEATURES / ENHANCEMENTS

* Configs that accept configuration options for a widget (or other class) are now (mostly) documented to accept a typed
  config object rather than a plain object. For example instead of `{Object} tooltip - A tooltip configuration object`,
  it is now `{TooltipConfig} tooltip - A tooltip configuration object`. This improves our TypeScript typings (transforms
  to `Partial<TooltipConfig>` in typings) when using such configs, but also improves our docs by linking to the configs
  of the type
* We added the config `offsetStartsBeforeEvents` to `AgendaView` which, when set to `false`, removes the alignment of
  the textual content of event bars when there is an arrow indicating that the event is continued from a previous
  cell ([#5044](https://github.com/bryntum/support/issues/5044))

### BUG FIXES

* [#2124](https://github.com/bryntum/support/issues/2124) - UI issues related to recurring events
* [#3433](https://github.com/bryntum/support/issues/3433) - Changing `minDayWidth` of the week view makes dragged events misaligned
* [#4766](https://github.com/bryntum/support/issues/4766) - Focus changes when clicking scroll down resources list
* [#4769](https://github.com/bryntum/support/issues/4769) - `EventTooltip` tools which are not active are hidden (For example if Calendar is `readOnly`)
* [#4781](https://github.com/bryntum/support/issues/4781) - Calendar events are not being displayed correctly when ending at midnight
* [#4793](https://github.com/bryntum/support/issues/4793) - Wrong sidebar styling for classic theme in calendar demos
* [#4897](https://github.com/bryntum/support/issues/4897) - `ResourceFilter` should continue to filter when its own `Store` is filtered
* [#4988](https://github.com/bryntum/support/issues/4988) - `scheduleMenu` doesn't catch `resourceRecord` correctly in scheduler timeline mode
* [#5007](https://github.com/bryntum/support/issues/5007) - `zoomOnMousewheel` zooming has to be synced between multiple `DayViews` in `ResourceView`
* [#5017](https://github.com/bryntum/support/issues/5017) - [TypeScript] Property type is missing in `DataFieldConfig`
* [#5018](https://github.com/bryntum/support/issues/5018) - [Vue] Prop Validation fails for `String` options
* [#5024](https://github.com/bryntum/support/issues/5024) - `eventRenderer` `renderData` object needs an `iconStyle` property for apps to override defaults
* [#5079](https://github.com/bryntum/support/issues/5079) - Sidebar datepicker should not have a background color
* [#5111](https://github.com/bryntum/support/issues/5111) - Mouse events not being triggered properly in events on same day
* [#5120](https://github.com/bryntum/support/issues/5120) - `EventTip` throws error when shown on `contextmenu`

## 5.1.1 - 2022-07-28

### BUG FIXES

* [#4904](https://github.com/bryntum/support/issues/4904) - `eventsPerCell` not recalculated on month change when `sixWeeks` is `false`
* [#4951](https://github.com/bryntum/support/issues/4951) - `timeFormat` doesn't work in `resourceView`
* [#4958](https://github.com/bryntum/support/issues/4958) - List store reload needs to reset selection if no incoming records match previous selection

## 5.1.0 - 2022-07-21

### FEATURES / ENHANCEMENTS

* The new config `eventListTimeFormat` is available for views which extend `EventList` (`EventList` and
  `AgendaView`). This config specifies the format for rendering time values next to event bars ([#4375](https://github.com/bryntum/support/issues/4375))
* Our TypeScript typings for string types that have a predefined set of alternatives was improved to only accept
  those alternatives. For example previously the `dock` config which was previously declared as `dock: string` is now
  `dock : 'top'|'right'|'bottom'|'left'`
* Create React App templates now available
* Configuring the CrudManager was made a little easier by introducing shortcuts for setting load and sync urls using the
  new `loadUrl` and `syncUrl` configs
* Updated the built-in version of FontAwesome Free to `6.1.1`
* `KeyMap` is a mixin that allows for standardized and customizable keyboard shortcuts functionality. `KeyMap` is by
  default mixed in to `Widget` and therefore available to all `Widget`'s child classes. There is a new guide
  **Guides/Customization/Keyboard shortcuts** describing how to customize currently integrated keyboard shortcuts
  ([#4300](https://github.com/bryntum/support/issues/4300), [#4313](https://github.com/bryntum/support/issues/4313), [#4328](https://github.com/bryntum/support/issues/4328))
* Calendar's `MonthView` has a new config : `hideOtherMonthCells` Hide day cells which are not part of
  the current displayed month
* Calendar's `MonthView` has a new config : `disableOtherMonthCells` Disable all pointer interaction
  with day cells which are not part of the current displayed month

### API CHANGES

* [BREAKING] [ANGULAR] Angular wrappers now use the more modern module bundle by default, instead of the legacy umd
  bundle. Hence application imports must be changed to match. This will slightly improve application size and
  performance ([#2786](https://github.com/bryntum/support/issues/2786))
* [BREAKING] `calendar.lite.umd.js` bundle is no longer available
* [BREAKING] WebComponents has been removed from `calendar.module.js` ES modules bundle. New bundle with WebComponents
  is `calendar.wc.module.js`

### BUG FIXES

* [#3554](https://github.com/bryntum/support/issues/3554) - Prevent navigating when clicking "other month" day cells in month view
* [#4696](https://github.com/bryntum/support/issues/4696) - Parents sorted below children in docs
* [#4697](https://github.com/bryntum/support/issues/4697) - Too dark code background in docs
* [#4941](https://github.com/bryntum/support/issues/4941) - Calendar doesn't propagate dynamic `readOnly` setting to child views

## 5.0.7 - 2022-07-13

### BUG FIXES

* [#4610](https://github.com/bryntum/support/issues/4610) - Make `calendar.assignments` public
* [#4856](https://github.com/bryntum/support/issues/4856) - `OverflowPopup` disappears when right click one of its items
* [#4857](https://github.com/bryntum/support/issues/4857) - `OverflowZone`'s drag proxy only required if `owner.isYearView`
* [#4864](https://github.com/bryntum/support/issues/4864) - `MonthView` resize event using left edge leaves the event name rendered at the old position
* [#4895](https://github.com/bryntum/support/issues/4895) - [LWC] `DragCreate` in all day header throws
* [#4916](https://github.com/bryntum/support/issues/4916) - `Fullscreen` is not working on mobile Safari

## 5.0.6 - 2022-06-20

### BUG FIXES

* [#4597](https://github.com/bryntum/support/issues/4597) - Calendar `autoCreate.startHour` cannot be fractional
* [#4808](https://github.com/bryntum/support/issues/4808) - Typings are wrong for async functions

## 5.0.5 - 2022-05-30

### FEATURES / ENHANCEMENTS

* New Angular demo that shows how to drag events from an unplanned event grid to calendar (Partial fix of [#4587](https://github.com/bryntum/support/issues/4587))

### BUG FIXES

* [#4350](https://github.com/bryntum/support/issues/4350) - Fixed various panel and calendar sidebar collapse issues
* [#4607](https://github.com/bryntum/support/issues/4607) - [VUE] Incorrect prop types in Vue wrapper

## 5.0.4 - 2022-05-11

### BUG FIXES

* [#4499](https://github.com/bryntum/support/issues/4499) - Resource avatars demo not showing any event bars
* [#4529](https://github.com/bryntum/support/issues/4529) - Sync is triggered when Scheduler is used as Calendar mode, after double clicking to create new event
* [#4544](https://github.com/bryntum/support/issues/4544) - Calendar fires an `eventundefined` event upon key down
* [#4548](https://github.com/bryntum/support/issues/4548) - Not possible to hide delete button on the event editor
* [#4562](https://github.com/bryntum/support/issues/4562) - [REACT] React wrappers have incorrect source mapping urls

## 5.0.3 - 2022-04-26

### FEATURES / ENHANCEMENTS

* [WRAPPERS] `ProjectModel` wrapper component reference can now be used as `project` parameter for Bryntum Calendar
  wrapper component in Angular applications ([#4238](https://github.com/bryntum/support/issues/4238))
* [WRAPPERS] Calendar has a new `ProjectModel` framework wrapper available for React and Angular. It simplifies
  sharing data between multiple Bryntum components ([#4382](https://github.com/bryntum/support/issues/4382))
* [ANGULAR] New demo showing use of inline data and `ProjectModel` wrapper. Demo located in
  `examples/frameworks/angular/inline-data` folder
* [REACT] New demo showing use of inline data and `ProjectModel` wrapper. Demo located in
  `examples/frameworks/react/javascript/inline-data` folder
* [VUE-3] New demo showing use of inline data for `Calendar` wrapper. Demo located in
  `examples/frameworks/vue-3/javascript/inline-data` folder

### API CHANGES

* The `validateResponse` flag on `CrudManager` has been changed to default to `true`. When enabled, it validates
  `CrudManager` responses from the backend and outputs a message on console if the format isn't valid. This is helpful
  during the development phase, but can be turned off in production
* New Vue 2/3 wrapper config option `relayStoreEvents` (defaults to `false`). When set to `true`, the events fired by
  stores are relayed to the Bryntum Grid instance
* [REACT] New basic React demo with TypeScript. Demo located in `examples/frameworks/react/typescript/basic` folder
* [REACT] React wrappers now include TypeScript definitions ([#3378](https://github.com/bryntum/support/issues/3378))

### BUG FIXES

* [#4127](https://github.com/bryntum/support/issues/4127) - [LWC] `DomHelper.isInView()` throws
* [#4222](https://github.com/bryntum/support/issues/4222) - [LWC] Performance degradation in 5.0 release
* [#4316](https://github.com/bryntum/support/issues/4316) - `DatePicker`'s `events : 'count'` option should sync with the current filtered state of the `eventStore`
* [#4432](https://github.com/bryntum/support/issues/4432) - [LWC] Mouse events do not work
* [#4461](https://github.com/bryntum/support/issues/4461) - [Vue] wrapper triggers doubled `dataChange` events with different params

## 5.0.2 - 2022-04-13

### FEATURES / ENHANCEMENTS

* A new example (`megadataset`) has been added showcasing rapid view generation upon navigation through 100,000 event
  records
* `ResourceFilter` in `Sidebar` should be configurable with custom selection ([#2006](https://github.com/bryntum/support/issues/2006))
* `AgendaView`'s time rendering is now configurable with an `eventTimeRenderer` config ([#4437](https://github.com/bryntum/support/issues/4437))

### BUG FIXES

* [#3469](https://github.com/bryntum/support/issues/3469) - `loadOnDemand` causes fetch loop when involving Scheduler
* [#4279](https://github.com/bryntum/support/issues/4279) - Calendar Resource Filter works incorrectly after one of resources removed
* [#4303](https://github.com/bryntum/support/issues/4303) - `MonthView` `autoRowHeight -> false` can result in incorrect `eventsPerCell` count
* [#4307](https://github.com/bryntum/support/issues/4307) - Order of data setting must be enforced when data set through `setConfig`
* [#4315](https://github.com/bryntum/support/issues/4315) - `MonthView` doesn't refresh on prev/next click is it contains a cell for the new date
* [#4323](https://github.com/bryntum/support/issues/4323) - Calendar features should tolerate being invoked upon non-Calendar views
* [#4331](https://github.com/bryntum/support/issues/4331) - Resource view items can sometimes disappear when filtering by resource
* [#4353](https://github.com/bryntum/support/issues/4353) - Resource avatar hidden while dragging
* [#4406](https://github.com/bryntum/support/issues/4406) - Fixed items in disabled `fieldset`/`radiogroup` not being disabled
* [#4451](https://github.com/bryntum/support/issues/4451) - Removing a resource causes crash in agenda mode

## 5.0.1 - 2022-03-04

### FEATURES / ENHANCEMENTS

* The `Calendar` `modeDefaults` config is now dynamic. Mutations applied to any of its properties made will immediately
  be applied to all child views. ([#4268](https://github.com/bryntum/support/issues/4268))
* Add default "Duplicate Event" context menu item ([#4271](https://github.com/bryntum/support/issues/4271))

### BUG FIXES

* [#4186](https://github.com/bryntum/support/issues/4186) - Wrong docs in Angular integration guide
* [#4212](https://github.com/bryntum/support/issues/4212) - Error thrown when event is updated in a non-painted scheduler (re-fix)
* [#4261](https://github.com/bryntum/support/issues/4261) - Crash after changing start date of a recurring event in `calendar-scheduler` demo
* [#4284](https://github.com/bryntum/support/issues/4284) - Drag external event to certain resource

## 5.0.0 - 2022-02-21

* We are thrilled to announce version 5.0 of our Calendar product. This release marks a big milestone for us, after more
  than a year of development. In this version we have greatly simplified how to combine Bryntum products, and we have
  made a new combination demo with the TaskBoard to show you how. The release also includes lots of improvements to the
  other demos as well as bug fixes and enhancements requested by our community. A big thanks to our customers who
  helped us with testing our alpha & beta versions
* You are most welcome to join us on March 16th, at 9am PST (6pm CET) for a 5.0 walkthrough webinar, demonstrating all
  the shiny new features
  [Click here to register](https://us06web.zoom.us/webinar/register/5116438317103/WN_4MkExpZPQsGYNpzh1mR_Ag)
* We hope you will enjoy this release and we are looking forward to hearing your feedback of what you would like us to
  develop next

*/ Mats Bryntse, CEO @Bryntum

### FEATURES / ENHANCEMENTS

* New TaskBoard + Calendar integration demo
* The `EventList` calendar view which displays a grid-based view of the `EventStore` now *merges* any
  configured `columns` with its default `columns` by matching the `field` property. On display in the
  `listview` demo ([#3500](https://github.com/bryntum/support/issues/3500))
* Each product has a new "thin" JavaScript bundle. The thin bundle only contains product specific code, letting you
  combine multiple Bryntum products without downloading the shared code multiple times (previously only possible with
  custom-built bundles from sources). Find out more in the What's new guide ([#2805](https://github.com/bryntum/support/issues/2805))
* Each theme is now available in a version that only has product specific CSS in it, called a `thin` version. These
  files are name `[product].[theme].thin.css` - `calendar.stockholm.thin.css` for example. They are intended for using
  when you have multiple different bryntum products on the same page, to avoid including shared CSS multiple times
  Read more about it in the `What's new` section in docs ([#3276](https://github.com/bryntum/support/issues/3276))
* `Model` has a new `readOnly` field that is respected by UI level editing features to disallow editing records having
  `readOnly : true`. It does not directly affect the datalayer, meaning that you can still programmatically edit the
  records ([#665](https://github.com/bryntum/support/issues/665))
* New `ProjectModel` setters/getters for `assignments`, `dependencies`, `events`, `resources` ([#4043](https://github.com/bryntum/support/issues/4043))
* `window` references are replaced with `globalThis` which is supported in all modern browsers and across different JS
  environments ([#4071](https://github.com/bryntum/support/issues/4071))
* A new function called `downloadTestCase()` was added to Bryntum widgets, it is intended to simplify creating test
  cases for reporting issues on Bryntum's support forum. Running it collects the current value for the configs your app
  is using, inlines the current dataset and compiles that into a JavaScript app that is then downloaded. The app will
  most likely require a fair amount of manual tweaking to reproduce the issue, but we are hoping it will simplify the
  process for you. Run `calender.downloadTestCase()` on the console in a demo to try it
* Updated FontAwesome Free to version 6, which includes some new icons sponsored by Bryntum in the charts category:
  https://fontawesome.com/search?m=free&c=charts-diagrams&s=solid

### API CHANGES

* [BREAKING] React wrappers now use the more modern module bundle by default, instead of the legacy umd bundle. Hence
  application imports must be changed to match. This will slightly improve application size and performance
  ([#2787](https://github.com/bryntum/support/issues/2787))

### BUG FIXES

* [#3140](https://github.com/bryntum/support/issues/3140) - Possibility calendar entries side by side (when there is enough space)
* [#4223](https://github.com/bryntum/support/issues/4223) - ResourceView example. `minWidth` setting not applied to filtered out views
* [#4231](https://github.com/bryntum/support/issues/4231) - Fix day view sort by duration for interday events

## 4.3.9 - 2022-02-17

### FEATURES / ENHANCEMENTS

* `Calendar` now supports `minDate` and `maxDate`, meaning that temporal navigation may never place the start date of
  any view before the `minDate`, and never place the end date of any view after the `maxDate`
* Views (and therefore an owning `Calendar`) now fire a preventable `beforeDateChange` event before temporal navigation
  so that date changes may be vetoed by application logic ([#4057](https://github.com/bryntum/support/issues/4057))

### BUG FIXES

* [#4125](https://github.com/bryntum/support/issues/4125) - A tooltip and event editor shows different `endDate` for same event
* [#4160](https://github.com/bryntum/support/issues/4160) - Sort day/week view events that start before midnight as starting at midnight for each intersecting day
* [#4173](https://github.com/bryntum/support/issues/4173) - `ResourceView` does not handle multi assignment
* [#4175](https://github.com/bryntum/support/issues/4175) - Double border on far right side of resource view
* [#4196](https://github.com/bryntum/support/issues/4196) - Calendar Create event when Wednesday is a `nonWorkingDay` and `hideNonWorkingDays` is true
* [#4197](https://github.com/bryntum/support/issues/4197) - Crash when configuring resource filter with selectAllItem
* [#4204](https://github.com/bryntum/support/issues/4204) - `AgendaView` `dateRangeChange` event doesn't fire when `CrudManager` is `autoLoad : false`
* [#4217](https://github.com/bryntum/support/issues/4217) - Calendar "select all Items" is not working if inline data used

## 4.3.8 - 2022-02-07

### FEATURES / ENHANCEMENTS

* Short events get CSS class `b-short-event` added for special rendition. ([#4106](https://github.com/bryntum/support/issues/4106))

### BUG FIXES

* [#4099](https://github.com/bryntum/support/issues/4099) - `Tooltip` doesn't handle reshowing on delegate change consistently
* [#4103](https://github.com/bryntum/support/issues/4103) - `weekStartDay` is ignored when using Next/Previous week button in toolbar
* [#4111](https://github.com/bryntum/support/issues/4111) - Drag from external event source doesn't work on touch devices
* [#4112](https://github.com/bryntum/support/issues/4112) - Timeaxis in resource view is missing after resourceStore sort
* [#4114](https://github.com/bryntum/support/issues/4114) - ResourceView child `allDayEvents` rows don't sync height on filter in/out

## 4.3.7 - 2022-02-02

### BUG FIXES

* [#2850](https://github.com/bryntum/support/issues/2850) - `weekStart` not honored by date picker nor `AgendaView`
* [#4005](https://github.com/bryntum/support/issues/4005) - `eventColor` for resource and event not applied on Month and Agenda views
* [#4010](https://github.com/bryntum/support/issues/4010) - Menu icon in Agenda view is not round
* [#4011](https://github.com/bryntum/support/issues/4011) - All day text in Agenda view is not localized
* [#4015](https://github.com/bryntum/support/issues/4015) - Setting Calendar `readOnly` makes filter field in sidebar also `readOnly`
* [#4020](https://github.com/bryntum/support/issues/4020) - Document event mouse events
* [#4024](https://github.com/bryntum/support/issues/4024) - `calculatePropagateEndDate` needs to be passed more context and be public
* [#4063](https://github.com/bryntum/support/issues/4063) - `MonthView` `autoRowHeight` causes recursive `loadOnDemand` reloading
* [#4065](https://github.com/bryntum/support/issues/4065) - `CalendarRow`. When `autoHeight`, data changes do not sync scrollbar presence
* [#4069](https://github.com/bryntum/support/issues/4069) - Document schedule mouse events and the `eventAutoCreated` event
* [#4088](https://github.com/bryntum/support/issues/4088) - `EventTooltip`'s `activeClient` can be set before it gets shown
* [#4089](https://github.com/bryntum/support/issues/4089) - Click on an event bar in "other month" cell should not navigate to that month

## 4.3.6 - 2022-01-13

### FEATURES / ENHANCEMENTS

* `DayView` and `WeekView` have a new config, `coreHours` which specifies the core working hours to show. ([#3964](https://github.com/bryntum/support/issues/3964))

### BUG FIXES

* [#3489](https://github.com/bryntum/support/issues/3489) - Calendar styling issues
* [#3942](https://github.com/bryntum/support/issues/3942) - WeekView elements misaligned when day shifted and week crosses DST change boundary
* [#3971](https://github.com/bryntum/support/issues/3971) - MonthView dayCellRenderer result not used as HTML
* [#3973](https://github.com/bryntum/support/issues/3973) - Clicking overflow button and OverflowPopup on an "other month" cell changes month
* [#3990](https://github.com/bryntum/support/issues/3990) - Chrome & Content Security Policy causes failure because of debug code section

## 4.3.5 - 2021-12-24

### FEATURES / ENHANCEMENTS

* Views which show OverflowPopups now allow the `overflowPopup` to be reconfigured to show customized content, to be
  configured with an `eventRenderer` of the same type as their owning view, or to be configured away entirely
  ([#3860](https://github.com/bryntum/support/issues/3860))

### BUG FIXES

* [#3846](https://github.com/bryntum/support/issues/3846) - Fix drag/drop issues in `DayView` when `showAllDayHeader=false`
* [#3885](https://github.com/bryntum/support/issues/3885) - DayView needs a `dayCellRenderer` config
* [#3892](https://github.com/bryntum/support/issues/3892) - DayView does not lay out day-spanning events correctly when `showAllDayHeader` is false
* [#3893](https://github.com/bryntum/support/issues/3893) - Resource view filtering should refresh child views
* [#3896](https://github.com/bryntum/support/issues/3896) - [TypeScript] Wrong typings of model class configs
* [#3905](https://github.com/bryntum/support/issues/3905) - AgendaView doesn't remove cells when a day becomes empty due to event deletion/filtering
* [#3907](https://github.com/bryntum/support/issues/3907) - [TypeScript] Cannot pass Scheduler instance to `Store.relayAll`
* [#3914](https://github.com/bryntum/support/issues/3914) - Bug when EventEdit from EventTooltip used in DayView with `showAllDayHeader: false`
* [#3915](https://github.com/bryntum/support/issues/3915) - MonthView layout overlays events when events span multiple weeks
* [#3920](https://github.com/bryntum/support/issues/3920) - Listeners for eventTooltip not applying if config notation used
* [#3922](https://github.com/bryntum/support/issues/3922) - `hideNonWorkingDays` in yearView generates an error if configured initially
* [#3924](https://github.com/bryntum/support/issues/3924) - CalendarRow doesn't support `overflowClickAction`
* [#3928](https://github.com/bryntum/support/issues/3928) - DateHelper `k` format behaves incorrectly
* [#3929](https://github.com/bryntum/support/issues/3929) - YearView's overflow popup doesn't show event continuation arrows
* [#3934](https://github.com/bryntum/support/issues/3934) - Added `dayHeaderRenderer` to DayView to allow custom cay cell header in `allDayEvents`

## 4.3.4 - 2021-12-13

### FEATURES / ENHANCEMENTS

* Calendar's `DayView` (and, by extension, `WeekView`) now offers the `showAllDayHeader` config. This is
  `true` by default. Configure this as `false` to *not* show all day and inter-day events spanning days in
  *header cells*, but to arrange them in the day detail part of the view, wrapping into as many columns as necessary
  ([#3771](https://github.com/bryntum/support/issues/3771))
* Updated `filtering` Angular demo to use Angular 13 ([#3742](https://github.com/bryntum/support/issues/3742))
* Added a config to hide eventTooltip header. Use `header : false` ([#3828](https://github.com/bryntum/support/issues/3828))
* Added a new config to the `ResourceView`. `stableResourceOrder` is `true` by default and means that the resource child
  views will always be in the same order as the resources in the `resourceStore`. If set to
  `false`, newly added (or filtered in) child views will be appended to the combined view
* Calendar now supports the `overlaySidebar` config which means that the sidebar is collapsed and the collapse tool in
  the top toolbar toggles the sidebar between the collapsed state and an overlayed _revealed_ state. On small UIs such
  as phones, this mode is enabled by default
* Added a new config for `DayCellRenderer` widgets (`MonthView` and `CalendarRow`)
  `overflowButtonRenderer` which allows apps to customize the appearance of the "+n more" button
  ([#3867](https://github.com/bryntum/support/issues/3867))

### BUG FIXES

* [#3551](https://github.com/bryntum/support/issues/3551) - Localize listRangeMenu in Agenda section
* [#3621](https://github.com/bryntum/support/issues/3621) - [TypeScript] Improve typings of mixins
* [#3664](https://github.com/bryntum/support/issues/3664) - Correct date in calendar title when switching modes in a `ResourceView`
* [#3769](https://github.com/bryntum/support/issues/3769) - `ResourceView` child views should be in the same order as the `ResourceStore`
* [#3850](https://github.com/bryntum/support/issues/3850) - [TypeScript] Missing static properties in typings

## 4.3.3 - 2021-11-30

### FEATURES / ENHANCEMENTS

* Calendar modes now support a `syncViewDate` config. It is `true` by default. This means that a Calendar's modes have
  their date automatically synced with the Calendar's date. This may be set to `false` to opt out
* The `MonthView` now has an `autoRowHeight` config which means that week rows assume the height of the events they
  contain. The `minRowHeight` config controls how small week rows may shrink and may be specified in any CSS units, but
  also *in events*. So if you use `autoRowHeight`, you can specify `minRowHeight : '3ev'` which means empty weeks may
  shrink to the height equivalent to showing three event bars.

### BUG FIXES

* [#3505](https://github.com/bryntum/support/issues/3505) - Bryntum Calendar Agenda View Decade Button not working
* [#3629](https://github.com/bryntum/support/issues/3629) - Some views may not be tied to the Calendar's date. `EventList` may not be required to "snap"
* [#3648](https://github.com/bryntum/support/issues/3648) - [DOCS] Content navigation is broken
* [#3672](https://github.com/bryntum/support/issues/3672) - `ResourceView` gets its `start`/`end` date wrong
* [#3696](https://github.com/bryntum/support/issues/3696) - `MonthView` `WeekExpander` feature flips all other rows back to be flexed when expanding a row
* [#3697](https://github.com/bryntum/support/issues/3697) - `MonthView`'s `shrinkwrapWeekRow` (`WeekExpander` feature) is static. Week does not expand if events are
  added
* [#3743](https://github.com/bryntum/support/issues/3743) - [DOCS] `web.config` file for Windows IIS server

## 4.3.2 - 2021-10-29

### FEATURES / ENHANCEMENTS

* `DayView` now supports the `fitHours` config which sizes the hour cell heights to fit exactly within available height

### BUG FIXES

* [#2397](https://github.com/bryntum/support/issues/2397) - Events are re-rendered during drag and now include a footer with event end time
* [#2640](https://github.com/bryntum/support/issues/2640) - Events can be dragged into and out of the `allDay` zone on the day and week views
* [#3585](https://github.com/bryntum/support/issues/3585) - When using a `dayStartTime` in `DayView`, `CalendarDrag` gets the drop time wrong
* [#3586](https://github.com/bryntum/support/issues/3586) - Fixed event drag (move) in an expanded week of a month view when using `weekExpander` feature
* [#3633](https://github.com/bryntum/support/issues/3633) - `EventTooltip` feature needs to document it's currently active event record

## 4.3.1 - 2021-10-21

### FEATURES / ENHANCEMENTS

* YearView now supports `dayCellRenderer` to add custom styling to its day cells, see updated `custom-rendering` demo
  ([#2485](https://github.com/bryntum/support/issues/2485))
* Bumped builtin Font Awesome Free to version 5.15.4

### BUG FIXES

* [#3526](https://github.com/bryntum/support/issues/3526) - Fixed `EventList` in `ResourceView` crashes with `hideNonWorkingDays`
* [#3538](https://github.com/bryntum/support/issues/3538) - Calendar view do not show the time horizontal lines in angular 12 after initial load
* [#3567](https://github.com/bryntum/support/issues/3567) - Minified css bundle contains unicode chars
* [#3574](https://github.com/bryntum/support/issues/3574) - Fix recurrence editor handling of monthly pattern using "On the n'th of the month" ("first" was ignored,
  "second" was interpreted as "first", etc.)

## 4.3.0 - 2021-10-12

### FEATURES / ENHANCEMENTS

* Calendar has a new `ResourceView` that encapsulates a series of calendar views, one for each resource/calendar on
  display in the new `resourceview` demo ([#2353](https://github.com/bryntum/support/issues/2353), [#3385](https://github.com/bryntum/support/issues/3385))
* [IONIC] Added Ionic framework integration demo. Demo located in `examples/frameworks/ionic/ionic-4` folder
  ([#2622](https://github.com/bryntum/support/issues/2622))

### API CHANGES

* [DEPRECATED] Buttons `menuIconCls` config was deprecated in favor of the new `menuIcon` config, which better matches
  the naming of other configs

### BUG FIXES

* [#3513](https://github.com/bryntum/support/issues/3513) - Time axis column not aligned with resource border

## 4.2.7 - 2021-10-01

### FEATURES / ENHANCEMENTS

* When there are many "all day" events, and the all day row of a day or week view is expanded, the all day row now only
  grows to consume up to 50% of the Calendar's height ([#3317](https://github.com/bryntum/support/issues/3317))

### BUG FIXES

* [#1481](https://github.com/bryntum/support/issues/1481) - Recurring events repeats endless after delete one of occurrences
* [#3269](https://github.com/bryntum/support/issues/3269) - Zero duration events are not displayed
* [#3318](https://github.com/bryntum/support/issues/3318) - Calendar mode's overflow popup can be misaligned when there are many overflowing events
* [#3413](https://github.com/bryntum/support/issues/3413) - Correct DST handling in monthly recurrence for n-th weekdays of a month
* [#3417](https://github.com/bryntum/support/issues/3417) - Missing icon for all day events
* [#3456](https://github.com/bryntum/support/issues/3456) - End after X time setting not applies for event with end on date setting
* [#3458](https://github.com/bryntum/support/issues/3458) - Document nested fields
* [#3461](https://github.com/bryntum/support/issues/3461) - Dragging from grid makes resource selector single select

## 4.2.6 - 2021-09-15

### BUG FIXES

* [#3408](https://github.com/bryntum/support/issues/3408) - Updated typings to support spread operator for parameters
* [#3409](https://github.com/bryntum/support/issues/3409) - Missing icon Intraday events in Month and Agenda view

## 4.2.5 - 2021-09-08

### FEATURES / ENHANCEMENTS

* When using a Scheduler as a mode in Calendar (as in the calendar-scheduler demo) there are now two new useful configs,
  `range` and `stepUnit`. They let you configure how much time the time axis spans and how large steps to take when
  clicking the previous/next buttons on the toolbar. Another enhancement for the same combination is that clicking a
  date in the mini calendar in the sidebar now scrolls that date into view ([#3328](https://github.com/bryntum/support/issues/3328))
* ProjectModel now fires a `dataReady` event when the engine has finished its calculations and the result has been
  written back to the records ([#2019](https://github.com/bryntum/support/issues/2019))
* The API documentation now better communicates when a field or property accepts multiple input types but uses a single
  type for output. For example date fields on models, which usually accepts a `String` or `Date` but always outputs a
  `Date` ([#2933](https://github.com/bryntum/support/issues/2933))
* New `examples/frameworks/webpack` demo added which shows how build a Calendar bundle from sources with Webpack
  Available for licensed Calendar version which includes sources

### BUG FIXES

* [#3322](https://github.com/bryntum/support/issues/3322) - Add `dataChange` event to framework guides
* [#3408](https://github.com/bryntum/support/issues/3408) - Updated typings to support spread operator for method parameters

## 4.2.4 - 2021-08-27

### FEATURES / ENHANCEMENTS

* Previous versions of Calendar used a bottom border on events to create a fake gap between them in day and week views
  With this release there is now an actual gap between events instead, whose size is determined using the
  `eventSpacing` config of the DayView ([#2613](https://github.com/bryntum/support/issues/2613))

### BUG FIXES

* [#3265](https://github.com/bryntum/support/issues/3265) - Docs are not scrolled to the referenced member
* [#3294](https://github.com/bryntum/support/issues/3294) - List should update its selection prior to firing its item event
* [#3305](https://github.com/bryntum/support/issues/3305) - Guides look bad in the docs search results
* [#3306](https://github.com/bryntum/support/issues/3306) - Doc browser does not scroll to member

## 4.2.3 - 2021-08-05

### FEATURES / ENHANCEMENTS

* [NPM] Bryntum Npm server now supports remote private repository access for Artifactory with username and password
  authentication ([#2864](https://github.com/bryntum/support/issues/2864))
* [TYPINGS] Type definitions now contain typed `features` configs and properties ([#2740](https://github.com/bryntum/support/issues/2740))

### BUG FIXES

* [#1795](https://github.com/bryntum/support/issues/1795) - Add configs to show event `startTime` + `endTime` optionally (partial: `startTime` is optional)
* [#2395](https://github.com/bryntum/support/issues/2395) – Document `showTime` / `timeFormat` in CalendarMixin
* [#3239](https://github.com/bryntum/support/issues/3239) - `showTime: false` on Calendar WeekView throws + make `showTime` public

## 4.2.2 - 2021-07-21

### FEATURES / ENHANCEMENTS

* You can now distinguish new events being created using drag create (or double clicking in the schedule) by checking
  the Model#isCreating flag. In the DOM, a new CSS class b-sch-creating has been added to all events that are being
  created
* [NPM] Bryntum Npm server now supports `npm token` command for managing access tokens for CI/CD ([#2703](https://github.com/bryntum/support/issues/2703))

### BUG FIXES

* [#3039](https://github.com/bryntum/support/issues/3039) - Fixed incorrect `dragcancel` firing when only a click (and no drag) occurred
* [#3162](https://github.com/bryntum/support/issues/3162) - LoadOnDemand feature cannot be disabled in runtime
* [#3167](https://github.com/bryntum/support/issues/3167) - LWC bundle is missing from trial packages
* [#3178](https://github.com/bryntum/support/issues/3178) - Syntax highlighter messes up code snippets in docs
* [#3185](https://github.com/bryntum/support/issues/3185) - Add CSS class to indicate that an event is being created

## 4.2.1 - 2021-07-07

### FEATURES / ENHANCEMENTS

* [FRAMEWORKS] Added `dragFeature` and `externalEventSourceFeature` to frameworks wrappers ([#3135](https://github.com/bryntum/support/issues/3135))

### BUG FIXES

* [#3136](https://github.com/bryntum/support/issues/3136) - [NPM] Running `npm install` twice creates modified `package-lock.json` file
* [#3139](https://github.com/bryntum/support/issues/3139) - Support `on` and `un` methods for `eventTooltip` feature instance

## 4.2.0 - 2021-06-30

### FEATURES / ENHANCEMENTS

* New config for day/week views (`dayStartShift`) to allow day columns to start their 24-hour period at a specified time
  other than midnight. This differs from `dayStartTime` which only controls the first time to render
* Added "Upgrade Font Awesome icons to Pro version" guide
* Added "Replacing Font Awesome with Material Icons" guide
* Improved day view layout and added new configs to address layout issues with many overlapping events. ([#2409](https://github.com/bryntum/support/issues/2409))
* For more details, see [What's new](https://bryntum.com/products/calendar/docs/guide/Calendar/whats-new/4.2.0) in docs

### BUG FIXES

* [#1185](https://github.com/bryntum/support/issues/1185) - Calendar should auto-scroll as you drag an event close to edges
* [#3086](https://github.com/bryntum/support/issues/3086) - Day/WeekView now update correctly on changing `dayStartShift`

## 4.1.6 - 2021-06-23

### BUG FIXES

* [#3004](https://github.com/bryntum/support/issues/3004) - New calendar event added does not sync its assignment when using multi-assignment
* [#3005](https://github.com/bryntum/support/issues/3005) - [VUE-3] Problem with Critical Paths due to Vue Proxy and double native events firing bug
* [#3013](https://github.com/bryntum/support/issues/3013) - Card layout causes overflow during card change
* [#3026](https://github.com/bryntum/support/issues/3026) - [VUE-2] and [VUE-3] typescript type declarations are missing
* [#3027](https://github.com/bryntum/support/issues/3027) - Can't create event when using filter

## 4.1.5 - 2021-06-09

### FEATURES / ENHANCEMENTS

* [TYPINGS] API singleton classes are correctly exported to typings ([#2752](https://github.com/bryntum/support/issues/2752))

### BUG FIXES

* [#2943](https://github.com/bryntum/support/issues/2943) - Agenda view should not scroll after clicking event
* [#2958](https://github.com/bryntum/support/issues/2958) - Weekly Repeat event editor doesn't fit day names
* [#2959](https://github.com/bryntum/support/issues/2959) - TypeError: Cannot read property 'focus' of null on event edit in Year view
* [#2961](https://github.com/bryntum/support/issues/2961) - Recurring event rule is not working correctly for Week/Day view
* [#2972](https://github.com/bryntum/support/issues/2972) - Cancelling a newly created event in event editor should not trigger sync
* [#2978](https://github.com/bryntum/support/issues/2978) - Fixed focus/scroll reverting to previously resized event
* [#2990](https://github.com/bryntum/support/issues/2990) - [ANGULAR] Preventable async events don't work
* [#2994](https://github.com/bryntum/support/issues/2994) - Cannot configure defaultCalendar on Calendar instance

## 4.1.4 - 2021-05-28

### FEATURES / ENHANCEMENTS

* TypeScript definitions updated to use typed `Partial<>` parameters where available
* Calendar now fires preventable `beforeDragMoveEnd`, `beforeDragResizeEnd` and `beforeDragCreateEnd`. Each of these
  events can be prevented by returning `false` or a Promise yielding `false` (async confirmation)
* New demo `confirmation-dialogs` showing how to do asynchronous confirmation of drag drop, resize and drag create
  actions
* Buttons now has a new style `b-transparent` that renders them without background or borders ([#2853](https://github.com/bryntum/support/issues/2853))
* [NPM] repository package `@bryntum/calendar` now includes source code ([#2723](https://github.com/bryntum/support/issues/2723))
* [NPM] repository package `@bryntum/calendar` now includes minified versions of bundles ([#2842](https://github.com/bryntum/support/issues/2842))
* [FRAMEWORKS] Frameworks demos packages dependencies updated to support Node v12

### API CHANGES

* Resource field in EventEditor is no longer `required` by default

### BUG FIXES

* [#2699](https://github.com/bryntum/support/issues/2699) - First day of week is incorrect
* [#2781](https://github.com/bryntum/support/issues/2781) - Remove leading 0 in hour for US English locale
* [#2828](https://github.com/bryntum/support/issues/2828) - Memory leak when replacing project instance
* [#2834](https://github.com/bryntum/support/issues/2834) - Core should not use b-fa for icon prefix
* [#2892](https://github.com/bryntum/support/issues/2892) - MonthView eventHeight cannot use string based values (eg '2em')
* [#2894](https://github.com/bryntum/support/issues/2894) - Cannot assign multiple resources when creating new event
* [#2896](https://github.com/bryntum/support/issues/2896) - Event Adds Without Event Editor Prompt if month cell has many events
* [#2897](https://github.com/bryntum/support/issues/2897) - Crash when double clicking to create a new event
* [#2902](https://github.com/bryntum/support/issues/2902) - Overflowing events popup doesn't look good with a lot of content
* [#2903](https://github.com/bryntum/support/issues/2903) - Event Edit modal closes on iPhone when user taps "Done" on the keyboard

## 4.1.3 - 2021-05-13

### FEATURES / ENHANCEMENTS

* Bumped the built-in version of FontAwesome Free to 5.15.3 and added missing imports to allow stacked icons etc
* Bumped the `@babel/preset-env` config target to `chrome: 75` for the UMD and Module bundles. This decreased bundle
  sizes and improved performance for modern browsers
* Updated Angular Wrappers to be compatible with Angular 6-7 in production mode for target `es2015`

### BUG FIXES

* [#2778](https://github.com/bryntum/support/issues/2778) - Wrong module declaration in typings file
* [#2780](https://github.com/bryntum/support/issues/2780) - Changing dayStartTime / dayEndTime on the fly is not working
* [#2820](https://github.com/bryntum/support/issues/2820) - Loading SchedulerPro styles to a Calendar demo breaks it
* [#2844](https://github.com/bryntum/support/issues/2844) - Calendar scrollbar flicker on initial animation
* [#2851](https://github.com/bryntum/support/issues/2851) - Event tap doesn't work show event tooltip on touch devices
* Fixes [#2821](https://github.com/bryntum/support/issues/2821) - Cannot drag create an event in a calendar
* Fixes [#2848](https://github.com/bryntum/support/issues/2848) - Newly created event syncs before editor is shown

## 4.1.2 - 2021-04-27

### FEATURES / ENHANCEMENTS

* Internal code improvements and bugfixes

## 4.1.1 - 2021-04-23

### FEATURES / ENHANCEMENTS

* Added Lightning Web Component integration guide ([#2623](https://github.com/bryntum/support/issues/2623))
* New demo 'fit-hours' showing how to fit the week view timeline to available vertical space
* Updated 'visible-hours' demo with a number field which lets you configure the snap increment
* Scheduler / Gantt / Calendar will now react when CTRL-Z key to undo / redo recent changes made. Behavior can be
  controlled with the new `enableUndoRedoKeys` config ([#2532](https://github.com/bryntum/support/issues/2532))

### BUG FIXES

* [#1629](https://github.com/bryntum/support/issues/1629) - Calendar React Filtering demo styling
* [#1987](https://github.com/bryntum/support/issues/1987) - DOCS: React guide needs a section on how to listen for events
* [#2601](https://github.com/bryntum/support/issues/2601) - Drag proxy misplaced in all day bar
* [#2602](https://github.com/bryntum/support/issues/2602) - List view demo broken
* [#2603](https://github.com/bryntum/support/issues/2603) - Add opacity to original element while drag drop is ongoing
* [#2611](https://github.com/bryntum/support/issues/2611) - Drag move and drag resize operations now properly restore focus to the dragged event
* [#2619](https://github.com/bryntum/support/issues/2619) - Dragging non-allDay event in all day zone is offset incorrectly
* [#2679](https://github.com/bryntum/support/issues/2679) - on-owner events should be added to owner too in docs
* [#2681](https://github.com/bryntum/support/issues/2681) - Yarn. Package trial alias can not be installed
* [#2719](https://github.com/bryntum/support/issues/2719) - New event won't sync after drag creation
* [#2725](https://github.com/bryntum/support/issues/2725) - Calendar styles are broken when scheduler stylesheet is loaded on the same page

## 4.1.0 - 2021-04-02

### FEATURES / ENHANCEMENTS

* We are happy to announce that Bryntum Calendar now can be directly installed using our npm registry
  We've updated all our frameworks demos to use `@bryntum` npm packages. See them in `examples/frameworks` folder
  Please refer to "Npm packages" guide in docs for registry login and usage information
* Bryntum demos were updated with XSS protection code. `StringHelper.encodeHtml` and `StringHelper.xss` functions were
  used for this
* The calendar now defaults to show current date if no `date` config is provided
* Added new React 17 demo for configuring visible hours in Calendar. The example also implements theme switching
  ([#1823](https://github.com/bryntum/support/issues/1823) and [#2213](https://github.com/bryntum/support/issues/2213))
* A new Calendar mode, `list` is now available which shows events as a Grid in a fixed range around the Calendar's
  current date. Range may be `day`, `week`, `month`, `year`, `decade`. The default range is `'month'` ([#2034](https://github.com/bryntum/support/issues/2034))
* The Agenda mode now extends the `list` view and offers a settings button to change the range size ([#1875](https://github.com/bryntum/support/issues/1875))
* Added `shiftNext`, `shiftPrevious`, and `shiftToNow` methods to Calendar to navigate in Calendar views ([#2343](https://github.com/bryntum/support/issues/2343))
* Added new Vue 3 Basic demo to show how to use Bryntum Calendar in Vue 3 ([#1315](https://github.com/bryntum/support/issues/1315))
* Added new Calendar + Scheduler demo ([#1578](https://github.com/bryntum/support/issues/1578))
* Added support for `overflowClickAction : 'shrinkwrap'` which makes a click on a `+n more` indicator expand that week
  row to show all events in the week. The MonthView may then scroll vertically to show all week rows because this may
  make it overflow its available height. New API and event support. ([#1165](https://github.com/bryntum/support/issues/1165))
* Added a new Feature `weekExpander` which offers a UI to expand MonthView week rows which contain overflowing cells
* A new feature, `print` allows the current active view to be printed. ([#1595](https://github.com/bryntum/support/issues/1595))

### API CHANGES

* [BREAKING] Removed RequireJS demos and integration guides in favor of using modern ES6 Modules technology
  ([#1963](https://github.com/bryntum/support/issues/1963))
* [BREAKING] `init` method is no longer required in Lightning Web Components and was removed from the LWC bundle
* The drag create feature no longer shows a tooltip by default during dragging ([#2394](https://github.com/bryntum/support/issues/2394)). See upgrade guide for
  details

### BUG FIXES

* [#1452](https://github.com/bryntum/support/issues/1452) - All day event duration is not shown in the tooltip
* [#1794](https://github.com/bryntum/support/issues/1794) - Cannot toggle calendar modes in readonly mode
* [#2023](https://github.com/bryntum/support/issues/2023) - Calendar should not sync to the store when create a new event before the event is saved in Event Editor
* [#2211](https://github.com/bryntum/support/issues/2211) - Add test coverage for XSS
* [#2312](https://github.com/bryntum/support/issues/2312) - Wrong dragFeature name in wrappers
* [#2340](https://github.com/bryntum/support/issues/2340) - Saving events when resource field is disabled resets assigned resource
* [#2355](https://github.com/bryntum/support/issues/2355) - Multicombo box css is disturbed if it's not editable
* [#2359](https://github.com/bryntum/support/issues/2359) - Update readme files in all framework demos in all products
* [#2379](https://github.com/bryntum/support/issues/2379) - Add minified version of *.lite.umd.js to the bundle
* [#2399](https://github.com/bryntum/support/issues/2399) - sync triggered after loading initial data
* [#2400](https://github.com/bryntum/support/issues/2400) - Sync failure messages displayed in `syncMask` where not auto-closing
* [#2405](https://github.com/bryntum/support/issues/2405) - Corrected event position when moving or resizing an event that overlaps other events
* [#2416](https://github.com/bryntum/support/issues/2416) - Crash when beforeEventEdit returns false
* [#2439](https://github.com/bryntum/support/issues/2439) - Drag and drop selects text in Safari
* [#2445](https://github.com/bryntum/support/issues/2445) - Calendar year view should have white background
* [#2454](https://github.com/bryntum/support/issues/2454) - Editor stays opened in ListView demo
* [#2457](https://github.com/bryntum/support/issues/2457) - All day events with a picture look bad in Custom rendering demo

## 4.0.8 - 2021-01-27

* Internal code improvements and bugfixes

## 4.0.7 - 2021-01-12

### BUG FIXES

* [#2106](https://github.com/bryntum/support/issues/2106) - Add `tools` to tooltip demo to show interaction with the hovered event

## 4.0.6 - 2020-12-29

### FEATURES / ENHANCEMENTS

* The [Custom event editor example](https://bryntum.com/products/calendar/examples/eventedit/) has been enhanced to
  illustrate how to make the provided editor widgets match conform with a theme. Guides on how to customize the event
  editor have been improved. ([#2000](https://github.com/bryntum/support/issues/2000))

### BUG FIXES

* [#1421](https://github.com/bryntum/support/issues/1421) - Week start day and number are not updated on locale change
* [#2017](https://github.com/bryntum/support/issues/2017) - DayView and WeekView timeline time format and Event time format is not localized dynamically
* [#2108](https://github.com/bryntum/support/issues/2108) - Update of recurrent event occurrence specifying "All future events" when the occurrence is limited by a
  COUNT value resulted in the COUNT being applied from the modified date, so too many occurrences were created
* [#2113](https://github.com/bryntum/support/issues/2113) - Event width is preserved when dragging event in the calendar
* [#2149](https://github.com/bryntum/support/issues/2149) - Unable to filter multi assigned task

## 4.0.5 - 2020-12-15

### FEATURES / ENHANCEMENTS

* Two new Calendar features have been added, `EventMenu` which offers a context menu
  for right-click on events, and `ScheduleMenu` for right-click on empty areas of a calendar. These work in the same
  way as the Scheduler's features by the same name. ([#1274](https://github.com/bryntum/support/issues/1274))

### BUG FIXES

* [#2105](https://github.com/bryntum/support/issues/2105) - Crash when switching to single day view from any other calendar view

## 4.0.4 - 2020-12-09

### API CHANGES

* The following params of DayCellRenderer#dayCellRenderer and AgendaView#dayCellRenderer were made private:
  `key`, `day`, `visibleColumnIndex`, `isOtherMonth`, `visible`, `tomorrow`, `isRowStart`, `isRowEnd`, `renderedEvents`

### FEATURES / ENHANCEMENTS

* A new Calendar Feature, `ExternalEventSource` makes it extremely easy to drag in events to "import" them in to a
  Calendar instance. ([#1683](https://github.com/bryntum/support/issues/1683))

### BUG FIXES

* [#1812](https://github.com/bryntum/support/issues/1812) - Make tables look better in docs
* [#1898](https://github.com/bryntum/support/issues/1898) - Custom event renderer doesn't work properly for AgendaView
* [#1977](https://github.com/bryntum/support/issues/1977) - Fields added to a default layout Container are stretched along the main axis
* [#1991](https://github.com/bryntum/support/issues/1991) - Sidebar Customization example throws JS error when "Create Event" clicked when YearView is active

## 4.0.3 - 2020-11-17

### FEATURES / ENHANCEMENTS

* A new Scheduler widget type `undoredo` has been added which, when added to the `tbar` of a scheduling widget (such as
  a `Scheduler`, `Gantt`, or `Calendar`), provides undo and redo functionality
* Added experimental support for Salesforce Lightning Locker Service. The distributed bundle only supports modern
  browsers (not IE11 or non-chromium based Edge), since Salesforce drops support for those on January 1st 2021 too
  ([#1822](https://github.com/bryntum/support/issues/1822))
* Added Lightning Web Component demo, see `examples/salesforce/src/lwc`
* `calendar.umd.js` and `calendar.lite.umd.js` bundles are now compiled with up-to-date `@babel/preset-env` webpack
  preset with no extra polyfilling. This change decreases size for the bundle by ~20% and offers performance
  enhancements for supported browsers
* [DEPRECATED] `calendar.lite.umd.js` was deprecated in favor of `calendar.umd.js` and will be removed in version 5.0

### BUG FIXES

* [#1792](https://github.com/bryntum/support/issues/1792) - Resource filter names missing colors
* [#1852](https://github.com/bryntum/support/issues/1852) - Exception when editing new event in collapsed CalendarRow when that new event is in overflow
* [#1882](https://github.com/bryntum/support/issues/1882) - dblclick in YearView should not initiate autoCreate in the WeekView

## 4.0.2 - 2020-11-04

### BUG FIXES

* Fixed documentation bugs

## 4.0.1 - 2020-11-03

### BUG FIXES

* [#1451](https://github.com/bryntum/support/issues/1451) - Use selected element to anchor event editor instead of scrolling the first rendered element of an event
  into view
* [#1454](https://github.com/bryntum/support/issues/1454) - Calendar Month View: +2 more shown but only one event present
* [#1459](https://github.com/bryntum/support/issues/1459) - Fix cleanup issues when cancelling drag via ESC key press
* [#1609](https://github.com/bryntum/support/issues/1609) - Calendar CSS issues
* [#1617](https://github.com/bryntum/support/issues/1617) - Event layout, (ordering and element sizing) not corrected after drag move and drag create
* [#1720](https://github.com/bryntum/support/issues/1720) - Crash when clicking task in examples browser demo
* [#2168](https://github.com/bryntum/support/issues/2168) - dblclick in AgendaView adds new event, but doesn't show the editor

## 4.0.0 - 2020-10-19

### FEATURES / ENHANCEMENTS

* [BREAKING] Dropped Support for Edge 18 and older. Our Edge <=18 fixes are still in place and active, but we will not
  be adding more fixes. Existing fixes will be removed in a later version
* Improved default description property of `WeekView` to display week of year in addition to month
* Added `descriptionRenderer` config to calendar view widgets to allow custom descriptions
* Calendar now ships with the same set of themes as its relatives Grid, Scheduler and Gantt: material, stockholm,
  classic, classic-light and classic-dark ([#477](https://github.com/bryntum/support/issues/477))
* New event `dateRangeChange` is fired before any Calendar view changes its date range. This allows
  apps to request new data from the server. Upon loading data, any new events will appear
* Added new localization demo and guide ([#1409](https://github.com/bryntum/support/issues/1409))
* New `loadOnDemand` feature which dynamically loads the Calendar's CrudManager depending on the date
  range active in the current view
* Added a styling guide ([#1427](https://github.com/bryntum/support/issues/1427))
* Added XSS protection to default renderers (based on `StringHelper.encodeHtml` and `StringHelper.xss`)
* Added support to export events to ICS format with the new `TimeSpan#exportToICS` method. Demonstrated in the
  new `exporttoics` example
* Added `calendar.lite.umd.js` module that does not include `Promise` polyfill. This module is primarily intended to be
  used with Angular to prevent `zone.js` polyfills overwrite
* Added a new `angular-7` demo ([#1537](https://github.com/bryntum/support/issues/1537))

### API CHANGES

* Model fields in derived classes are now merged with corresponding model fields (by name) in super classes. This allows
  serialization and other attributes to be inherited when a derived class only wants to change the `defaultValue` or
  other attribute of the field
* The `dateFormat` config for `type='date'` model fields has been simplified to `format`

### BUG FIXES

* [#1133](https://github.com/bryntum/support/issues/1133) - Calendar event selection
* [#1228](https://github.com/bryntum/support/issues/1228) - Custom fields in event editor now properly hide and show based on `eventType`
* [#1234](https://github.com/bryntum/support/issues/1234) - Visible date range required event to notify when views navigate in tiime
* [#1237](https://github.com/bryntum/support/issues/1237) - CrudManager.load() resulted in doubling of events
* [#1246](https://github.com/bryntum/support/issues/1246) - Fix css warning in Calendar theme
* [#1253](https://github.com/bryntum/support/issues/1253) - All day header out of sync with main schedule body after browser zoom
* [#1257](https://github.com/bryntum/support/issues/1257) - Event editor docs regarding how to add the `eventTypeField` were incorrect
* [#1281](https://github.com/bryntum/support/issues/1281) - Calendar drag/drop did not work correctly with a scrolled body element
* [#1282](https://github.com/bryntum/support/issues/1282) - Ripple misplaced when clicking
* [#1285](https://github.com/bryntum/support/issues/1285) - Drag handles are no longer displayed where events in day view extend outside of day start/end times
* [#1422](https://github.com/bryntum/support/issues/1422) - Doubleclicking calendar throws after locale change
* [#1434](https://github.com/bryntum/support/issues/1434) - TimeAxis time format in Day and Week views should match time format in event elements
* [#1446](https://github.com/bryntum/support/issues/1446) - Calendar size is changed when switching months
* [#1548](https://github.com/bryntum/support/issues/1548) - [ANGULAR] Investigate zone.js loading order and set it to Angular default
* [#1641](https://github.com/bryntum/support/issues/1641) - Extra CSS classes applied to Calendar container
* [#1696](https://github.com/bryntum/support/issues/1696) - Calendar drag create throws error when event edit feature enabled

## 1.0.1 - 2020-07-24

### BUG FIXES

* [#1031](https://github.com/bryntum/support/issues/1031) - Some localized properties not processed
* [#1187](https://github.com/bryntum/support/issues/1187) - Corrected drag/drop handling for non-date drop locations
* [#1213](https://github.com/bryntum/support/issues/1213) - Events created on current date always uses current time
* [#1722](https://github.com/bryntum/support/issues/1722) - dblclick to edit event when autoCreate is false throws error

## 1.0.0 - 2020-07-17

* We are very excited to announce the 1.0 GA of the Bryntum Calendar – our super modern calendar component
  with day, week, month, year and agenda views. It is written in pure ES6+ with wrappers available for React, Vue and
  Angular. The data model and UI are both extremely flexible and can be extended to match any application data model.
  Additionally, the data model is identical to that used in the Gantt / Scheduler products so you can easily share
  project data between multiple views. The SDK contains lots of examples and API documentation to get you started
  quickly

### FEATURES / ENHANCEMENTS

* Added `DayView#visibleStartTime` config indicating the starting hour to scroll to for day / week view
* Added new 'visible-hours' demo showing how to customize the visible time span
* Added new 'undoredo' demo
* Added new 'recurrence' demo showing recurring events
* Added new 'filterfield' to sidebar widget
* Added new 'custom-rendering' demo showing use of the `eventRenderer` method
* Added new 'bigdataset' demo to show a very busy week, to test the performance

### BUG FIXES

* [#1173](https://github.com/bryntum/support/issues/1173) - `autoCreate: false` not propagated from calendar into participating views
* [#1684](https://github.com/bryntum/support/issues/1684) - `EventRecords` with recurrenceRule should be mutable before they acquire an `eventStore`
