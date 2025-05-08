import { Calendar } from '../../../build/thin/calendar.module.thin.js';

const
    statusOrder = {
        todo          : 0,
        'in-progress' : 1,
        done          : 2
    },
    statusName = {
        todo          : 'Backlog',
        'in-progress' : 'In progress',
        done          : 'Done'
    };

export class TeamCalendar extends Calendar {
    static $name = 'TeamCalendar';
    static type = 'teamcalendar';

    static configurable = {
        sidebar : false,
        modes   : {
            day    : null,
            year   : null,
            agenda : null,
            list   : {
                range    : 'decade',
                features : {
                    group : {
                        field : 'status',
                        groupSortFn(a, b) {
                            statusOrder[a.status] - statusOrder[b.status];
                        },
                        renderer({ record, isFirstColumn }) {
                            return isFirstColumn ? `<span class="b-status-title">${statusName[record.status]}</span>` : '';
                        }
                    },
                    rowReorder : true
                }
            },
            month : {
                showWeekColumn : false,
                eventSpacing   : 6
            },
            week : {
                dayStartTime : 7,
                dayEndTime   : 22,
                fitHours     : {
                    minHeight : 50
                }
            }
        },

        responsive : {
            small : {
                when : 400
            },

            medium : {
                when : 600
            }
        },

        features : {
            eventEdit : {
                items : {
                    status : {
                        type    : 'radiogroup',
                        label   : 'Status',
                        name    : 'status',
                        // Insert just before start time which is at 300
                        weight  : 290,
                        style   : 'margin:.5em 0',
                        options : {
                            todo          : 'Not started',
                            'in-progress' : 'In progress',
                            done          : 'Done'
                        }
                    }
                }
            }
        },

        tbar : {
            items : {
                modeSelector : {
                    icon     : null,
                    minified : true
                },

                todayButton : {
                    icon   : null,
                    weight : 1000,
                    cls    : 'b-transparent'
                }
            }
        }
    };
}

TeamCalendar.initClass();
