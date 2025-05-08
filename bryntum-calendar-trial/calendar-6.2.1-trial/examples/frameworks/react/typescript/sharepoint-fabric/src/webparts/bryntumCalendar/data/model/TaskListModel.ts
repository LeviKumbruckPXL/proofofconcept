import { CrudManager, CrudManagerConfig } from '@bryntum/calendar-thin';
import Service from '../service/Service';

/**
 * A CrudManager populated from a SharePoint Task List
 */
export default class TaskListModel extends CrudManager {
    private service: Service;

    constructor(config?: Partial<CrudManagerConfig>) {
        // Turn on auto syncing with the server (SharePoint)
        config.autoSync = true;

        super(config);

        this.service = config['service'];

        // Changes to assignments need to be reflected to the AssignedToId field in the event
        this.assignmentStore.on('change', this.onAssignmentChange, this);
    }

    private onAssignmentChange({ action, records, changes }) {
        if (action !== 'dataset') {
            for (const record of records) {
                const id = record.resource ? record.resourceId : null;
                record.event?.setFieldChangeToLookupField(action, 'assignedToId', id, changes?.resourceId?.oldValue);
            }
        }
    }

    // Override of the crudmanager to bypass Ajax response, no decoding needed
    public decode(response: any): any {
        return response;
    }

    // Override of the crudmanager to bypass Ajax response, no encoding needed
    public encode(requestConfig: any): string {
        return requestConfig;
    }

    /**
     * Use the List Proxy instead of the default AjaxRequest
     * @param request
     */
    public sendRequest(request: any): Promise<any> {
        return new Promise((resolve, reject) => {

            const end = (response) => {
                this.trigger?.('responseReceived', { success : response.success });

                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            };

            switch (request.type) {
                case 'load':
                    this.service.load(request).then(end).catch(end);
                    break;
                case 'sync':
                    this.service.sync(request).then(end).catch(end);
                    break;
            }
        });
    }

}
