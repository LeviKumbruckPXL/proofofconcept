import { Combo, AjaxStore } from '@bryntum/calendar';
import Room from './Room.js';

const roomStore = new AjaxStore({
    readUrl    : 'data/rooms.json',
    autoLoad   : true,
    modelClass : Room
});

export default class RoomSelector extends Combo {

    static $name = 'RoomSelector';

    static type = 'roomSelector';

    static get configurable() {
        return {
            store        : roomStore,
            displayField : 'name'
        };
    }
}

// Register this type with its factory
RoomSelector.initClass();
