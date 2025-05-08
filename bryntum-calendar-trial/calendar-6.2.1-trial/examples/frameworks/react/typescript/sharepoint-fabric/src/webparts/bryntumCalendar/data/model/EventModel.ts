import LookupEventModel from './LookupEventModel';

export default class EventModel extends LookupEventModel {

    // Fields which are not on a default SharePoint TaskList should be added here
    static get additionalFields() {
        return [
            { name : 'constraintDate', dataSource : 'ConstraintDate', type : 'date' },
            { name : 'constraintType', dataSource : 'ConstraintType' },
            { name : 'duration', dataSource : 'Duration', type : 'number', allowNull : true },
            { name : 'recurrenceRule', dataSource : 'RecurrenceRule', type : 'string', allowNull : true },
            { name : 'recurrenceCombo', dataSource : 'RecurrenceCombo', type : 'string', allowNull : true },
            { name : 'allDay', dataSource : 'AllDay', type : 'boolean' },
            { name : 'eventColor', dataSource : 'EventColor', type : 'string'}
        ];
    }

    // Fields available on a default SharePoint TaskList.
    static get fields() {
        return [
            { name : 'startDate', dataSource : 'StartDate', type : 'date' },
            { name : 'endDate', dataSource : 'DueDate', type : 'date' },
            { name : 'GUID' },
            { name : 'name', dataSource : 'Title' },
            {
                name         : 'assignedToId',
                dataSource   : 'AssignedToId',
                convert      : LookupEventModel.setIntArrayAsStringValue,
                serialize    : (value, record) => record.serializeMultiLookupValue(value),
                defaultValue : ''
            }
        ].concat(this.additionalFields);
    }
}
