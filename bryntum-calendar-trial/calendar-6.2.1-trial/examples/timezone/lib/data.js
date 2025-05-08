import AjaxHelper from '../../../lib/Core/helper/AjaxHelper.js';
import DateHelper from '../../../lib/Core/helper/DateHelper.js';
import ObjectHelper from '../../../lib/Core/helper/ObjectHelper.js';

// The content of this file makes it possible for the demo Calendar to show events for any given time period displayed
// It is not suitable to be used as the base for any type of real-world app

let eventId        = 1;
const
    generatedDates = [],
    dataPromise    = fetch('data/data.json').then(async response => await response.json()),
    setDates       = (record, baseDate) => {
        // Dates are from 11-18:th.
        const
            currentStartDate = new Date(record.startDate),
            startDeltaDay    = currentStartDate.getDate() - 11,
            currentEndDate   = new Date(record.endDate),
            endDeltaDay      = currentEndDate.getDate() - 11;

        record.startDate = new Date(Date.UTC(
            baseDate.getFullYear(),
            baseDate.getMonth(),
            baseDate.getDate() + startDeltaDay,
            currentStartDate.getHours(),
            currentStartDate.getMinutes()
        ));
        record.endDate = new Date(Date.UTC(
            baseDate.getFullYear(),
            baseDate.getMonth(),
            baseDate.getDate() + endDeltaDay,
            currentEndDate.getHours(),
            currentEndDate.getMinutes()
        ));

        record.id = eventId;
        eventId += 1;
    };

AjaxHelper.mockUrl('timezone-data', async(url, urlParams, { queryParams }) => {
    const
        data      = await dataPromise,
        date      = DateHelper.startOf(DateHelper.parseKey(queryParams.startDate), 'week');
    let resources = [],
        events    = [];

    if (!generatedDates.includes(date.getTime())) {
        if (eventId === 1) {
            // First load request only
            resources = data.resources;
        }
        events = ObjectHelper.clone(data.events);

        // Convert all dates to one close to provided date
        events.forEach(event => setDates(event, date));

        generatedDates.push(date.getTime());
    }

    return {
        delay        : 100,
        responseText : JSON.stringify({
            success   : true,
            resources : {
                rows   : resources,
                append : true // Tells the CrudManager to add, not replace, data
            },
            events : {
                rows   : events,
                append : true
            }
        })
    };
});
