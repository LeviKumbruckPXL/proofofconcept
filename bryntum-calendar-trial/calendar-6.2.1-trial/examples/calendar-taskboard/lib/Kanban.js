import { TaskBoard } from '../../../build/thin/taskboard.module.thin.js';
import { DateHelper, StringHelper } from '../../../build/thin/core.module.thin.js';

export class Kanban extends TaskBoard {
    static $name = 'Kanban';

    static type = 'kanban';

    static configurable = {
        type              : 'taskboard',
        // Resource avatar images are loaded from this path
        resourceImagePath : '../_shared/images/users/',
        showCountInHeader : false,
        teamGridStore     : null,
        features          : {
            columnToolbars   : false,
            columnHeaderMenu : false
        },
        showCollapseInHeader : false,
        useDomTransition     : true,
        columnField          : 'status',
        columns              : [
            {
                id   : 'todo',
                text : 'Backlog'
            }, {
                id   : 'in-progress',
                text : 'In progress'
            }, {
                id   : 'done',
                text : 'Done'
            }
        ],

        headerItems : {
            // Label, after task name
            label : {
                type     : 'template',
                // Label is rendered with a template, using the value as both the CSS class and contents of a div
                template : ({ taskRecord }) => taskRecord.label ? ({
                    class : { label : 1, [taskRecord.label] : 1 },
                    text  : StringHelper.xss`${taskRecord.label}`
                }) : ''
            },
            startDate : {
                type     : 'template',
                cls      : 'time',
                template : ({ taskRecord }) => DateHelper.format(taskRecord.startDate, 'h A')
            }
        },

        bodyItems : {
            // Add items to show in the card body here, same format as headerItems / footerItems
        },

        footerItems : {
            duration : {
                type     : 'template',
                cls      : 'duration',
                template : ({ taskRecord }) => `<i class="b-fa b-fa-clock"></i> ${Math.round(taskRecord.duration)}${taskRecord.durationUnit[0] || ''}`
            }
        },

        tbar : {
            overflow : null,
            items    : [
                {
                    type : 'widget',
                    ref  : 'title',
                    cls  : 'title',
                    html : 'Tasks'
                },
                '->',
                {
                    type      : 'treecombo',
                    ref       : 'teamGrid',
                    store     : 'up.teamGridStore',
                    clearable : true,
                    editable  : false,
                    picker    : {
                        readOnly    : true,
                        constrain   : true,
                        columnLines : false,
                        width       : '22em',
                        // Define the columns to show in the grid
                        columns     : [
                            {
                                type        : 'tree',
                                text        : 'Name',
                                field       : 'name',
                                leafIconCls : null,
                                width       : '7em',
                                minWidth    : 50
                            },
                            { text : 'Not started', align : 'center', field : 'notStarted' },
                            { text : 'In progress', align : 'center', field : 'inProgress' },
                            { text : 'Completed', align : 'center', field : 'completed' }
                        ]
                    },
                    width    : '20em',
                    onSelect : 'up.onTeamFilterChange'
                },
                {
                    type : 'slidetoggle',
                    text : 'Hide completed',
                    ref  : 'showAll',
                    onChange({ checked }) {
                        const
                            taskBoard  = this.up('kanban'),
                            doneColumn = taskBoard.columns.getById('done');

                        taskBoard.toggleCollapse(doneColumn);
                    }
                }
            ]
        }
    };

    onTeamFilterChange({ source, records }) {
        const { taskStore } = this.project;

        if (records.length === 0) {
            taskStore.clearFilters();
        }
        else {
            this.project.taskStore.filter({
                filters : {
                    filterBy : task => task.resources.some(resource => records.includes(resource))
                },
                replace : true
            });
        }
    }
}

Kanban.initClass();
