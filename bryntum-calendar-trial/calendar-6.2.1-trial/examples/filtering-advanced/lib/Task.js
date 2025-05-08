import EventModel from '../../../lib/Scheduler/model/EventModel.js';

// A custom Event class with a few extra fields. You can extend this to add any fields and methods you want.
export default class Task extends EventModel {
    static $name = 'Task';

    static fields = [
        { name : 'projectId' }
    ];

    static relations = {
        // Define a relation between a task and a project
        projectInstance : {
            foreignKey            : 'projectId',
            foreignStore          : 'projectStore',
            relatedCollectionName : 'events'
        }
    };
}
