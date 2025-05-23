import { ResourceModelConfig, EventModelConfig } from '@bryntum/calendar';

export const resources : ResourceModelConfig[] = [
    {
        id         : 'bryntum',
        name       : 'Bryntum team',
        eventColor : 'blue'
    },
    {
        id         : 'hotel',
        name       : 'Hotel Park',
        eventColor : 'orange'
    },
    {
        id         : 'michael',
        name       : 'Michael Johnson',
        eventColor : 'deep-orange'
    }
];

export const events : EventModelConfig[] = [
    {
        id         : 1,
        startDate  : '2020-10-11T14:00:00',
        endDate    : '2020-10-18T12:00:00',
        name       : 'Hackathon 2020',
        allDay     : true,
        resourceId : 'bryntum',
        eventColor : 'green'
    },
    {
        id         : 2,
        startDate  : '2020-10-11T14:00:00',
        endDate    : '2020-10-11T18:00:00',
        name       : 'Check-In in Hotel',
        resourceId : 'hotel'
    },
    {
        id         : 3,
        startDate  : '2020-10-11T18:00:00',
        endDate    : '2020-10-11T20:00:00',
        name       : 'Relax and official arrival beer',
        allDay     : true,
        resourceId : 'michael'
    },
    {
        id         : 4,
        startDate  : '2020-10-11T20:00:00',
        endDate    : '2020-10-11T21:00:00',
        name       : 'Dinner',
        resourceId : 'hotel'
    },
    {
        id         : 5,
        startDate  : '2020-10-12T09:00:00',
        endDate    : '2020-10-12T10:00:00',
        name       : 'Breakfast',
        resourceId : 'hotel'
    },
    {
        id         : 6,
        startDate  : '2020-10-12T10:00:00',
        endDate    : '2020-10-12T12:00:00',
        name       : 'Team Scrum',
        resourceId : 'bryntum'
    },
    {
        id         : 7,
        startDate  : '2020-10-12T12:00:00',
        endDate    : '2020-10-12T14:00:00',
        name       : 'Scheduler Grid introduction + review',
        resourceId : 'bryntum'
    },
    {
        id         : 8,
        startDate  : '2020-10-12T14:00:00',
        endDate    : '2020-10-12T15:00:00',
        name       : 'Lunch',
        resourceId : 'hotel'
    },
    {
        id         : 9,
        startDate  : '2020-10-12T15:00:00',
        endDate    : '2020-10-12T19:00:00',
        name       : 'Active client project review',
        resourceId : 'bryntum'
    },
    {
        id         : 10,
        startDate  : '2020-10-12T19:00:00',
        endDate    : '2020-10-12T20:00:00',
        name       : 'Dinner',
        resourceId : 'hotel'
    },
    {
        id         : 11,
        startDate  : '2020-10-13T09:00:00',
        endDate    : '2020-10-13T10:00:00',
        name       : 'Breakfast',
        resourceId : 'hotel'
    },
    {
        id         : 12,
        startDate  : '2020-10-13T10:00:00',
        endDate    : '2020-10-13T12:00:00',
        name       : 'Roadmapping for 2020',
        resourceId : 'bryntum'
    },
    {
        id         : 13,
        startDate  : '2020-10-13T12:00:00',
        endDate    : '2020-10-13T14:00:00',
        name       : 'Review Assembla tickets and decide features to add',
        resourceId : 'bryntum'
    },
    {
        id         : 14,
        startDate  : '2020-10-13T14:00:00',
        endDate    : '2020-10-13T15:00:00',
        name       : 'Lunch',
        resourceId : 'hotel'
    },
    {
        id         : 15,
        startDate  : '2020-10-13T15:00:00',
        endDate    : '2020-10-13T19:00:00',
        name       : 'Active programming',
        resourceId : 'bryntum'
    },
    {
        id         : 16,
        startDate  : '2020-10-13T19:00:00',
        endDate    : '2020-10-13T20:00:00',
        name       : 'Dinner',
        resourceId : 'hotel'
    },
    {
        id         : 17,
        startDate  : '2020-10-14T09:00:00',
        endDate    : '2020-10-14T10:00:00',
        name       : 'Breakfast',
        resourceId : 'hotel'
    },
    {
        id         : 18,
        startDate  : '2020-10-14T10:00:00',
        endDate    : '2020-10-14T18:00:00',
        name       : 'Excursion',
        resourceId : 'michael'
    },
    {
        id         : 19,
        startDate  : '2020-10-14T18:00:00',
        endDate    : '2020-10-14T22:00:00',
        name       : 'Team Building',
        resourceId : 'michael',
        eventColor : 'green'
    },
    {
        id         : 20,
        startDate  : '2020-10-15T09:00:00',
        endDate    : '2020-10-15T10:00:00',
        name       : 'Breakfast',
        resourceId : 'hotel'
    },
    {
        id         : 21,
        startDate  : '2020-10-15T14:00:00',
        endDate    : '2020-10-15T15:00:00',
        name       : 'Lunch',
        resourceId : 'hotel'
    },
    {
        id         : 22,
        startDate  : '2020-10-15T19:00:00',
        endDate    : '2020-10-15T20:00:00',
        name       : 'Dinner',
        resourceId : 'hotel'
    },
    {
        id         : 23,
        startDate  : '2020-10-15T00:00:00',
        endDate    : '2020-10-16T00:00:00',
        name       : 'Gantt review + development',
        allDay     : true,
        resourceId : 'bryntum'
    },
    {
        id         : 24,
        startDate  : '2020-10-16T09:00:00',
        endDate    : '2020-10-16T10:00:00',
        name       : 'Breakfast',
        resourceId : 'hotel'
    },
    {
        id         : 25,
        startDate  : '2020-10-16T14:00:00',
        endDate    : '2020-10-16T15:00:00',
        name       : 'Lunch',
        resourceId : 'hotel'
    },
    {
        id         : 26,
        startDate  : '2020-10-16T18:00:00',
        endDate    : '2020-10-16T21:00:00',
        name       : 'Split.JS conference: Monitoring and Reproducing Errors in Web Applications + Late Dinner or AfterParty',
        resourceId : 'michael'
    },
    {
        id         : 27,
        startDate  : '2020-10-16T00:00:00',
        endDate    : '2020-10-17T00:00:00',
        name       : 'Root Cause ticket bash',
        allDay     : true,
        resourceId : 'bryntum'
    },
    {
        id         : 28,
        startDate  : '2020-10-17T09:00:00',
        endDate    : '2020-10-17T10:00:00',
        name       : 'Breakfast',
        resourceId : 'hotel'
    },
    {
        id         : 29,
        startDate  : '2020-10-17T14:00:00',
        endDate    : '2020-10-17T15:00:00',
        name       : 'Lunch',
        resourceId : 'hotel'
    },
    {
        id         : 30,
        startDate  : '2020-10-17T19:00:00',
        endDate    : '2020-10-17T20:00:00',
        name       : 'Dinner',
        resourceId : 'hotel'
    },
    {
        id         : 31,
        startDate  : '2020-10-17T00:00:00',
        endDate    : '2020-10-18T00:00:00',
        name       : 'Pair programming sessions',
        allDay     : true,
        resourceId : 'bryntum'
    },
    {
        id         : 32,
        startDate  : '2020-10-18T09:00:00',
        endDate    : '2020-10-18T10:00:00',
        name       : 'Breakfast',
        resourceId : 'hotel'
    },
    {
        id         : 33,
        startDate  : '2020-10-18T10:00:00',
        endDate    : '2020-10-18T12:00:00',
        name       : 'Check-Out & Fly home',
        resourceId : 'michael'
    }
];

export const unplannedData = [
    {
        id           : 1001,
        name         : 'Fun task',
        duration     : 4,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-beer'
    },
    {
        id           : 1002,
        name         : 'Medium fun task',
        duration     : 8,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-cog'
    },
    {
        id           : 1003,
        name         : 'Outright boring task',
        duration     : 2,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-book'
    },
    {
        id           : 1004,
        name         : 'Inspiring task',
        duration     : 2,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-book'
    },
    {
        id           : 1005,
        name         : 'Mysterious task',
        duration     : 2,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-question'
    },
    {
        id           : 1006,
        name         : 'Answer forum question',
        duration     : 4,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-life-ring'
    },
    {
        id           : 1007,
        name         : 'Gym',
        duration     : 1,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-dumbbell'
    },
    {
        id           : 1009,
        name         : 'Book flight',
        duration     : 7,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-plane'
    },
    {
        id           : 1010,
        name         : 'Customer support call',
        duration     : 3,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-phone'
    },
    {
        id           : 1011,
        name         : 'Angular bug fix',
        duration     : 3,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-bug'
    },
    {
        id           : 1012,
        name         : 'React feature fix',
        duration     : 2,
        durationUnit : 'h',
        iconCls      : 'b-fa b-fa-fw b-fa-cog'
    },
    {
        id             : 1013,
        name           : 'Weekly Backup',
        recurrenceRule : 'FREQ=WEEKLY',
        duration       : 1,
        durationUnit   : 'h',
        iconCls        : 'b-fa b-fa-fw b-fa-tape'
    }
];
