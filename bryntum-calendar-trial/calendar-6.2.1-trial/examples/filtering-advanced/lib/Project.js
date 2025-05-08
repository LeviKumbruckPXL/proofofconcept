import Model from '../../../lib/Core/data/Model.js';

// A custom record definition with two extra fields. You can extend this to add any fields and methods you want.
export default class Project extends Model {
    static $name = 'Project';

    static fields = [
        { name : 'icon' },
        { name : 'name' }
    ];
}
