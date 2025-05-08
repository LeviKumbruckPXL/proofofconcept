import * as CoreBundle from './product/core.module.js';
import * as GridBundle from './product/grid.module.js';
import * as SchedulerBundle from './product/scheduler.module.js';
import * as CalendarBundle from './product/calendar.module.js';

import '../data/docs_calendar.js';
import '../data/navigation.js';

const placeOnWindow = Bundle => {
    for (const clsName in Bundle) {
        window[clsName] = Bundle[clsName];
    }
};

window.product = 'calendar';
window.productName = 'Calendar';
window.bryntum.editorPath = 'lib/monaco-editor';
window.bryntum.algoliaAppId = 'TXNBK0UT0J';
window.bryntum.algoliaSearchApiKey = '57f52a132dfe1821ccdd36bd4c20dda2';

placeOnWindow(CoreBundle);
placeOnWindow(GridBundle);
placeOnWindow(SchedulerBundle);
placeOnWindow(CalendarBundle);

export * from './product/core.module.js';
export * from './product/grid.module.js';
export * from './product/scheduler.module.js';
export * from './product/calendar.module.js';
