const calendar = new Calendar({
    appendTo : targetElement,
    height   : 500,
    date     : '2024-05-27',
    modes    : {
        day : {
            type             : 'dayagenda',
            dayStartTime     : 8,
            dayEndTime       : 18,
            visibleStartTime : 6,
            showAllDayHeader : false
        },
        week   : null,
        month  : null,
        year   : null,
        agenda : null
    },
    events : [
        {
            name       : 'Project Kickoff Meeting',
            startDate  : '2024-05-27T09:00:00',
            endDate    : '2024-05-27T09:30:00',
            resourceId : 1
        },
        {
            name       : 'Design Review',
            startDate  : '2024-05-27T09:30:00',
            endDate    : '2024-05-27T10:00:00',
            resourceId : 2
        },
        {
            name       : 'Client A Check-in',
            startDate  : '2024-05-27T10:00:00',
            endDate    : '2024-05-27T10:30:00',
            resourceId : 3
        },
        {
            name       : 'Lunch with Team',
            startDate  : '2024-05-27T12:00:00',
            endDate    : '2024-05-27T13:00:00',
            resourceId : 4
        },
        {
            name       : 'Marketing Strategy Session',
            startDate  : '2024-05-27T13:00:00',
            endDate    : '2024-05-27T13:30:00',
            resourceId : 5
        },
        {
            name       : 'Development Sync-up',
            startDate  : '2024-05-27T13:30:00',
            endDate    : '2024-05-27T14:00:00',
            resourceId : 6
        },
        {
            name       : 'Weekly Wrap-up',
            startDate  : '2024-05-27T16:00:00',
            endDate    : '2024-05-27T17:00:00',
            resourceId : 1
        }
    ],
    resources : [
        {
            id         : 1,
            name       : 'Alice Johnson',
            eventColor : 'red'
        },
        {
            id         : 2,
            name       : 'Bob Smith',
            eventColor : 'orange'
        },
        {
            id         : 3,
            name       : 'Charlie Brown',
            eventColor : 'green'
        },
        {
            id         : 4,
            name       : 'Dana White',
            eventColor : 'blue'
        },
        {
            id         : 5,
            name       : 'Eli Green',
            eventColor : 'violet'
        },
        {
            id         : 6,
            name       : 'Fiona Black',
            eventColor : 'deep-orange'
        }
    ]
});
