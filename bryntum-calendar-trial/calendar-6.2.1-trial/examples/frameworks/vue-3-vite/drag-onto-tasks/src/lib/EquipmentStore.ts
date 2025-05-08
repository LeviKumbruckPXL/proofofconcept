import { EventModel, GridRowModel, Store } from '@bryntum/calendar';

export class EquipmentModel extends GridRowModel {
    declare id: number;
    declare name: string;
    declare iconCls: string;
}

export class AppEventModel extends EventModel {
    declare name: string;
    equipment: EquipmentModel[];
}

export const equipmentStore = new Store({
    id     : 'equipment',
    fields : [
        'name',
        'iconCls'
    ],
    sorters : [
        { field : 'name', ascending : true }
    ]
});
