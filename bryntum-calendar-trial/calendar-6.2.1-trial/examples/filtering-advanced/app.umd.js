var {
    Model,
    List,
    EventModel,
    Store,
    Calendar,
    StringHelper,
    DateHelper
} = bryntum.calendar;
//region "lib/Project.js"

// A custom record definition with two extra fields. You can extend this to add any fields and methods you want.
class Project extends Model {
    static $name = 'Project';
    static fields = [{
        name : 'icon'
    }, {
        name : 'name'
    }];
}

//endregion

//region "lib/ProjectFilter.js"

// List subclass which allows Projects to be checked and unchecked.
// The checked set is used to filter events in or out of visibility for the selected projects.
class ProjectFilter extends List {
    static $name = 'ProjectFilter';
    static type = 'projectfilter';
    static configurable = {
    // Allow checkbox selection to select multiple rows
        multiSelect  : true,
        // The record property to use to create list item content
        displayField : 'name'
    };

    itemIconTpl(record, i) {
    // Use the List's default icon markup and add our own from the Project definition
        return List.prototype.itemIconTpl.call(this, ...arguments) + `<i class="${record.icon}"></i>`;
    }
}

// Register new widget type with its Factory so it can be instantiated from a "type" string
ProjectFilter.initClass();

//endregion

//region "lib/Task.js"

// A custom Event class with a few extra fields. You can extend this to add any fields and methods you want.
class Task extends EventModel {
    static $name = 'Task';
    static fields = [{
        name : 'projectId'
    }];

    static relations = {
    // Define a relation between a task and a project
        projectInstance : {
            foreignKey            : 'projectId',
            foreignStore          : 'projectStore',
            relatedCollectionName : 'events'
        }
    };
}

//endregion

const projectStore = new Store({
        id         : 'projects',
        modelClass : Project
    }),
    dayWeekConfig = {
        showResourceAvatars : 'last',
        hourHeight          : 60,
        eventRenderer       : ({
            eventRecord
        }) => {
            const {
                projectInstance
            } = eventRecord;

            // Only add project details if it's in the main day part.
            // If it's across multiple days, it will be an event bar.
            if (!eventRecord.isInterDay) {
                return [{
                    class : 'b-event-name',
                    text  : eventRecord.name
                },
                // Show project name inside event bar
                projectInstance ? {
                    class    : 'project-wrap',
                    alt      : StringHelper.encodeHtml(projectInstance.name),
                    children : [{
                        tag   : 'i',
                        class : projectInstance.icon
                    }, projectInstance.name]
                } : undefined];
            }
        }
    };
const calendar = new Calendar({
    date              : new Date(2024, 6, 21),
    appendTo          : 'container',
    // Where the avatar rendering utility finds the resource images
    resourceImagePath : '../_shared/images/users/',
    modes             : {
    // Day and week share the same configs (see above)
        day  : dayWeekConfig,
        week : dayWeekConfig
    },
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager : {
        autoLoad   : true,
        loadUrl    : 'data/data.json',
        stores     : [projectStore],
        eventStore : {
            modelClass : Task,
            projectStore
        }
    },
    features : {
        eventEdit : {
            items : {
                // Customize the label of the resourceField
                resourceField : {
                    label : 'Resources'
                },
                // Show a project picker field (can only be set when creating a new event)
                projectField : {
                    type         : 'combo',
                    name         : 'projectId',
                    displayField : 'name',
                    valueField   : 'id',
                    label        : 'Project',
                    store        : projectStore,
                    required     : true
                }
            }
        },
        eventTooltip : {
            // Custom tooltip content rendering
            renderer : ({
                eventRecord
            }) => `<dl>
                <div class="tooltip-property">Assigned to:</div>
                <div>${StringHelper.encodeHtml(eventRecord.resource.name)}</div>
                <div class="tooltip-property">Starts:</div>
                <div>${DateHelper.format(eventRecord.startDate, 'LT')}</div>
                <div class="tooltip-property">Project:</div>
                <div>${calendar.crudManager.getStore('projects').getById(eventRecord.projectId).name}</div>
            </dl>`
        }
    },
    sidebar : {
        items : {
            // An extra project filter list, when changed it will trigger a filter of the resource store
            // and event store to only include records that map to the selected project(s)
            projects : {
                // Our registered ProjectFilter List type
                type     : 'projectfilter',
                // Places it above the ResourceFilter List
                weight   : 150,
                store    : projectStore,
                title    : 'Projects',
                selected : [1],
                onSelectionChange({
                    selected
                }) {
                    const resourceStore = calendar.resourceStore,
                        eventStore = calendar.eventStore;

                    // The filter method *adds* a filter by default. Using a filter with an id ensures
                    // it *replaces* any previous filter with the same id.
                    resourceStore.filter({
                        id       : 'resourceFilter',
                        filterBy : resource => resource.events.some(eventRecord => selected.includes(eventRecord.projectInstance))
                    });
                    eventStore.filter({
                        id       : 'eventFilter',
                        filterBy : eventRecord => selected.includes(eventRecord.projectInstance)
                    });
                }
            },
            resourceFilter : {
                title : 'Resources'
            },
            eventFilter : false
        }
    },
    listeners : {
        beforeEventEditShow({
            eventRecord,
            editor
        }) {
            editor.widgetMap.projectField.readOnly = !eventRecord.isCreating;
        }
    }
});
