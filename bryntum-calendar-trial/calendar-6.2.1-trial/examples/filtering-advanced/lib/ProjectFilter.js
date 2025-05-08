import List from '../../../lib/Core/widget/List.js';

// List subclass which allows Projects to be checked and unchecked.
// The checked set is used to filter events in or out of visibility for the selected projects.
export default class ProjectFilter extends List {
    static $name = 'ProjectFilter';
    static type = 'projectfilter';

    static configurable = {
        // Allow checkbox selection to select multiple rows
        multiSelect : true,

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
