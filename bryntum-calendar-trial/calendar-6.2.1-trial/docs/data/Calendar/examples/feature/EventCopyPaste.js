targetElement.innerHTML = '<p>Copy/cut and paste events using keyboard shortcuts or context menu:</p>';

new Calendar({
    appendTo : targetElement,
    height   : 600,

    // We have a little less width in our context, so reduce the responsive breakpoints
    responsive : {
        small : {
            when : 480
        },
        medium : {
            when : 640
        }
    },

    date : '2024-05-13T10:00',

    events : [
        { id : 1, name : 'Interview', startDate : '2024-05-13T10:00', duration : 1, durationUnit : 'h' },
        { id : 2, name : 'Press meeting', startDate : '2024-05-14T15:00', duration : 2, durationUnit : 'h' },
        { id : 3, name : 'Audition', startDate : '2024-05-15T08:00', duration : 3, durationUnit : 'h' }
    ]
});
