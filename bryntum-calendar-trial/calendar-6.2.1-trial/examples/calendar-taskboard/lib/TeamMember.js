import { ResourceModel } from '../../../build/thin/taskboard.module.thin.js';

export default class TeamMember extends ResourceModel {

    get notStarted() {
        return this.events.reduce((result, event) => {
            if (event.status === 'todo')  {
                result++;
            }
            return result;
        }, 0);
    }

    get inProgress() {
        return this.events.reduce((result, event) => {
            if (event.status === 'in-progress')  {
                result++;
            }
            return result;
        }, 0);
    }

    get completed() {
        return this.events.reduce((result, event) => {
            if (event.status === 'done')  {
                result++;
            }
            return result;
        }, 0);
    }
}

TeamMember.initClass();
