const calendar = new Calendar({
    appendTo : targetElement,
    width    : 300,
    height   : 550,
    date     : '2024-05-06',
    modes    : {
        day   : null,
        week  : null,
        month : {
            type : 'monthagenda'
        },
        year   : null,
        agenda : null
    },
    events : [
        {
            name       : 'Project Kickoff Meeting',
            startDate  : '2024-05-06T09:00:00',
            endDate    : '2024-05-06T09:45:00',
            resourceId : 1
        },
        {
            name       : 'Design Review',
            startDate  : '2024-05-06T10:00:00',
            endDate    : '2024-05-06T10:30:00',
            resourceId : 2
        },
        {
            name       : 'Client A Check-in',
            startDate  : '2024-05-06T11:00:00',
            endDate    : '2024-05-06T11:30:00',
            resourceId : 3
        },
        {
            name       : 'Lunch with Team',
            startDate  : '2024-05-06T12:00:00',
            endDate    : '2024-05-06T13:00:00',
            resourceId : 4
        },
        {
            name       : 'User Feedback Session',
            startDate  : '2024-05-07T09:00:00',
            endDate    : '2024-05-07T09:45:00',
            resourceId : 1
        },
        {
            name       : 'Financial Review',
            startDate  : '2024-05-07T10:00:00',
            endDate    : '2024-05-07T10:30:00',
            resourceId : 2
        },
        {
            name       : 'Client B Meeting',
            startDate  : '2024-05-07T11:00:00',
            endDate    : '2024-05-07T11:30:00',
            resourceId : 3
        },
        {
            name       : 'Product Brainstorm',
            startDate  : '2024-05-07T12:00:00',
            endDate    : '2024-05-07T12:45:00',
            resourceId : 4
        },
        {
            name       : 'Client C Presentation',
            startDate  : '2024-05-08T09:00:00',
            endDate    : '2024-05-08T09:45:00',
            resourceId : 5
        },
        {
            name       : 'Operations Review',
            startDate  : '2024-05-08T10:00:00',
            endDate    : '2024-05-08T10:45:00',
            resourceId : 6
        },
        {
            name       : 'Development Update',
            startDate  : '2024-05-08T11:00:00',
            endDate    : '2024-05-08T11:30:00',
            resourceId : 1
        },
        {
            name       : 'Lunch with Client D',
            startDate  : '2024-05-08T12:00:00',
            endDate    : '2024-05-08T13:00:00',
            resourceId : 2
        },
        {
            name       : 'Technical Demo',
            startDate  : '2024-05-09T09:00:00',
            endDate    : '2024-05-09T09:45:00',
            resourceId : 3
        },
        {
            name       : 'Customer Support Review',
            startDate  : '2024-05-09T10:00:00',
            endDate    : '2024-05-09T10:45:00',
            resourceId : 4
        },
        {
            name       : 'Client E Discussion',
            startDate  : '2024-05-09T11:00:00',
            endDate    : '2024-05-09T11:30:00',
            resourceId : 5
        },
        {
            name       : 'Team Lunch',
            startDate  : '2024-05-09T12:00:00',
            endDate    : '2024-05-09T13:00:00',
            resourceId : 6
        },
        {
            name       : 'Product Launch Meeting',
            startDate  : '2024-05-10T09:00:00',
            endDate    : '2024-05-10T09:45:00',
            resourceId : 1
        },
        {
            name       : 'Marketing Review',
            startDate  : '2024-05-10T10:00:00',
            endDate    : '2024-05-10T10:30:00',
            resourceId : 2
        },
        {
            name       : 'Client F Call',
            startDate  : '2024-05-10T11:00:00',
            endDate    : '2024-05-10T11:30:00',
            resourceId : 3
        },
        {
            name       : 'Team Brainstorming',
            startDate  : '2024-05-10T12:00:00',
            endDate    : '2024-05-10T12:45:00',
            resourceId : 4
        },
        {
            name       : 'Client G Follow-up',
            startDate  : '2024-05-11T09:00:00',
            endDate    : '2024-05-11T09:45:00',
            resourceId : 5
        },
        {
            name       : 'Performance Review',
            startDate  : '2024-05-11T10:00:00',
            endDate    : '2024-05-11T10:45:00',
            resourceId : 6
        },
        {
            name       : 'End-of-Week Wrap-up',
            startDate  : '2024-05-11T11:00:00',
            endDate    : '2024-05-11T11:30:00',
            resourceId : 1
        },
        {
            name       : 'Happy Hour',
            startDate  : '2024-05-11T12:00:00',
            endDate    : '2024-05-11T13:00:00',
            resourceId : 2
        },
        {
            name       : 'Sprint Planning',
            startDate  : '2024-05-12T09:00:00',
            endDate    : '2024-05-12T09:45:00',
            resourceId : 3
        },
        {
            name       : 'Retrospective Meeting',
            startDate  : '2024-05-12T10:00:00',
            endDate    : '2024-05-12T10:45:00',
            resourceId : 4
        },
        {
            name       : 'Client H Presentation',
            startDate  : '2024-05-12T11:00:00',
            endDate    : '2024-05-12T11:30:00',
            resourceId : 5
        },
        {
            name       : 'Weekly Summary',
            startDate  : '2024-05-12T12:00:00',
            endDate    : '2024-05-12T12:45:00',
            resourceId : 6
        }
    ],
    resources : [
        {
            id   : 1,
            name : 'Alice Johnson'
        },
        {
            id   : 2,
            name : 'Bob Smith'
        },
        {
            id   : 3,
            name : 'Charlie Brown'
        },
        {
            id   : 4,
            name : 'Dana White'
        },
        {
            id   : 5,
            name : 'Eli Green'
        },
        {
            id   : 6,
            name : 'Fiona Black'
        }
    ]
});
