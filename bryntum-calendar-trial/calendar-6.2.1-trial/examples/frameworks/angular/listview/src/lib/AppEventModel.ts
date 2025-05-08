import { DataFieldConfig, DateHelper, EventModel, TextAreaField } from '@bryntum/calendar';

// A custom Event class with a few extra fields. You can extend this to add any fields and methods you want.
export default class AppEventModel extends EventModel {

    // Add some extra fields to demonstrate the createColumnsFromModel option of ColumnPicker
    static override get fields() {
        return [
            {
                name : 'notes',

                // Provide defaults for when a column is autocreated for this field
                column : {
                    width  : '20em',
                    editor : {
                        type : TextAreaField.type
                    }
                }
            } as DataFieldConfig,
            {
                name : 'important',
                type : 'boolean'
            }
        ];
    };

    // Define field getter to enable grouping by the start date not including time portion
    get eventStartDate() {
        return this.getData('eventStartDate') || DateHelper.startOf(this.startDate as Date);
    }
}
