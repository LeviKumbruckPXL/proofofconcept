import { DateHelper } from '@bryntum/core-thin';
import ITaskList from './proxy/ITaskList';
import { UpdateAction } from './proxy/UpdatePackage';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const calendarProject: any = require('../../resources/data/data.json');

export default class DemoData {

    /**
     * Create a single event to start with
     * @param taskList
     * @param listId
     */
    public createSingleCalendarEvent(taskList: ITaskList, listId: string): Promise<any> {
        const startDate = new Date(2024, 5, 13);
        const endDate = DateHelper.add(startDate, 4, 'hours');
        const actions = [new UpdateAction({}, { StartDate : startDate, DueDate : endDate, Title : 'Scrum', EventColor : 'green' })];

        return taskList.addTaskListItems(listId, actions);
    }

    /**
     * Create a full blown example based on `data.json`.
     *
     * @param taskList
     * @param listId
     */
    public createFullExample(taskList: ITaskList, listId: string): Promise<any> {

        const mockData: any = calendarProject;
        const eventsData = mockData.events.rows;
        const generatedIdMap = {};

        const iterateTasks = async(events) => {

            if (events.length > 0) {
                for (let i = 0; i < events.length; i++) {

                    const event = events[i];

                    const data = {
                        Title           : event.name,
                        StartDate       : new Date(event.startDate),
                        DueDate         : new Date(event.endDate),
                        EventColor      : event.eventColor
                    };

                    const addResult: UpdateAction[] = await taskList.addTaskListItems(listId, [new UpdateAction({}, data)]);
                    generatedIdMap[event.id] = addResult[0].data.id;
                }
            }
        };

        return new Promise((resolve, reject) => {
            iterateTasks(eventsData).then(resolve).catch(reject);
        });
    }
}
