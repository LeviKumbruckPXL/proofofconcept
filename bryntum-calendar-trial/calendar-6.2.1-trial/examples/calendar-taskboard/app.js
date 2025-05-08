import '../_shared/shared.module.thin.js';

import { Container } from '../../build/thin/core.module.thin.js';
import { ProjectModel } from '../../build/thin/taskboard.module.thin.js';
import '../../build/thin/grid.module.thin.js';
import '../../build/thin/calendar.module.thin.js';
import './lib/Kanban.js';
import TeamMember from './lib/TeamMember.js';
import './lib/TeamCalendar.js';

const
    // Project holding data, will be consumed by Calendar and chained to TaskBoard
    project           = window.proj = new ProjectModel({
        loadUrl       : 'data/data.json',
        autoLoad      : true,
        resourceStore : {
            tree       : true,
            modelClass : TeamMember
        },
        taskStore : {
            fields : [
                { name : 'status', defaultValue : 'todo' },
                { name : 'label' }
            ]
        }
    }),
    teamGridStore = project.resourceStore.chain(undefined, undefined, { tree : null }),
    demo              = new Container({
        appendTo : 'container',
        cls      : 'resource-tasks',
        layout   : {
            type : 'box'
        },
        items : {
            calendar : {
                mode : 'month',
                type : 'teamcalendar',
                date : '2024-06-03',
                flex : 1,
                project,
                onEventMouseEnter({ eventRecord }) {
                    const kanbanTaskEl = this.owner.widgetMap.kanban.getTaskElement(eventRecord);

                    kanbanTaskEl.classList.add('b-hovered');
                },
                onEventMouseLeave({ eventRecord }) {
                    const kanbanTaskEl = this.owner.widgetMap.kanban.getTaskElement(eventRecord);

                    kanbanTaskEl?.classList.remove('b-hovered');
                }
            },
            splitter : {
                type : 'splitter'
            },
            kanban : {
                type      : 'kanban',
                flex      : 1,
                project,
                teamGridStore,
                listeners : {
                    taskMouseEnter : 'onTaskMouseEnterLeave',
                    taskMouseLeave : 'onTaskMouseEnterLeave'
                },
                onTaskMouseEnterLeave({ taskRecord, type }) {
                    if (!this.features.taskDrag.isDragging) {
                        const calendarEventEl = this.owner.widgetMap.calendar.getElementFromEventRecord(taskRecord);
                        calendarEventEl?.classList.toggle('b-hovered', type === 'taskmouseenter');
                    }
                }
            }
        }
    });

// For testing purposes, not needed in production
const { calendar, kanban } = demo.widgetMap;
Object.assign(window, { calendar, kanban });
