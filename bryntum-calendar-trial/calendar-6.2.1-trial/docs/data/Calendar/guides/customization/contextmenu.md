# Customizing the Event and Schedule context menus

Bryntum Calendar ships with built-in context menus for events, and for the empty schedule area. All the context menu 
features are customizable. 

<div class="external-example" data-file="Calendar/guides/menu/Basic.js"></div>

The menus can be customized, turned off or replaced with your own implementation (see the "Replace context menus" guide).

## Turning the menus off entirely

The menus are supplied by corresponding features: [EventMenu](#Calendar/feature/EventMenu) feature provides menu for events,
and [ScheduleMenu](#Calendar/feature/ScheduleMenu) feature provides menu for the schedule area.
These features are enabled by default. To turn a feature off, configure it with `false`:

```javascript
const calendar = new Calendar({
    features : {
        // Turn the Event menu off completely, will not be created
        eventMenu : false,
        // Turn the Schedule menu off completely, will not be created
        scheduleMenu : false
    }
});
```

## Enabling or disabling the menus

You can also enable or disable any of the provided menus programmatically, perhaps depending on user rights:

```javascript
const calendar = new Calendar({
    features : {
        eventMenu : {
            // The Event menu is created, but starts disabled
            disabled : true
        },
        scheduleMenu : {
            // The Schedule menu is created, but starts disabled
            disabled : true
        }
    }
});

// To enable
calendar.features.eventMenu.disabled = false;
calendar.features.scheduleMenu.disabled = false;

// To disable again
calendar.features.eventMenu.disabled = true;
calendar.features.scheduleMenu.disabled = true;
```

Try it in the demo below:

<div class="external-example" data-file="Calendar/guides/menu/DisableFeature.js"></div>

## Customizing the menu items

The menu items in the Event and Schedule menus can be fully customized.
Existing items can be changed or removed, and new items can be added. This is handled using the `items` config of the features.

### Default event menu items

Here is the list of menu items provided by the [EventMenu](#Calendar/feature/EventMenu) feature and populated by the other features:

| Reference      | Text            | Weight | Feature                                  | Description                                           |
|----------------|-----------------|--------|------------------------------------------|-------------------------------------------------------|
| `editEvent`    | Edit event      | 100    | [EventEdit](#Calendar/feature/EventEdit) | Open the event editor. Hidden for read-only Calendar |
| `deleteEvent`  | Delete event    | 200    | [EventMenu](#Calendar/feature/EventMenu) | Remove the event. Hidden for read-only Calendar       |
| `duplicate`    | Duplicate event | 300    | [EventMenu](#Calendar/feature/EventMenu) | Duplicate the event.                                  |

### Default menu items for right-clicks on empty schedule area

The [ScheduleMenu](#Calendar/feature/ScheduleMenu) feature provides only one item:

| Reference      | Text      | Weight | Feature                                        | Description                                                                                      |
|----------------|-----------|--------|------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `addEvent`     | Add event | 100    | [ScheduleMenu](#Calendar/feature/ScheduleMenu) | Add a new event for the clicked point in time. Hidden if the Calendar is read-only               |

### Removing default items

To remove a default item no matter if it is provided by a context menu feature, or it is provided by another feature,
configure it as `false` in the `items` config of the context menu feature:

```javascript
const calendar = new Calendar({
    features : {
        eventMenu : {
            items : {
                // Remove "Edit event" item provided by EventEdit feature
                editEvent : false
            }
        },
        scheduleMenu : {
            items : {
                // Remove "Add event" default item
                addEvent : false
            }
        }
    }
});
```

<div class="external-example" data-file="Calendar/guides/menu/DisableItems.js"></div>

### Customizing the built-in items

The default menu items can be customized by supplying config objects for them in the `items` config of the menu feature.
These config objects will be merged with their default configs. Similar to removing default items, it does not matter
if the item is provided by the menu feature or not.

The order of the default items is determined by the `weight` property. The higher the `weight`, the further down they are
displayed. See the table above for the default weights.

For example, to rename the "Edit event" item:

```javascript
const calendar = new Calendar({
    features : {
        eventMenu : {
            items : {
                // Rename editEvent
                editEvent    : {
                    text: 'Edit activity'
                }
            }
        }
    }
});
```

Try it out in this demo:

<div class="external-example" data-file="Calendar/guides/menu/CustomizeItems.js"></div>

### Add custom items

Custom items are added in the same way as you customize the built-in ones, add new properties to the `items`
config of the menu feature to add new items. The key you choose to use for your item will be used as its `ref`,
through which it can be accessed later.

Here we add a custom item to the event menu to move the selected task 1 hour forward:

```javascript
const calendar = new Calendar({
    features : {
        eventMenu : {
            items : {
                // Custom reference to the new menu item
                postpone    : {
                    text   : 'Postpone 1h',
                    weight : 200,
                    icon   : 'b-fa b-fa-fw b-fa-arrow-down',
                    onItem({ item, eventRecord }) {
                        eventRecord.shift(1, 'h');
                    }
                }
            }
        }
    }
});
```

Try new custom items here:

<div class="external-example" data-file="Calendar/guides/menu/AddItems.js"></div>

### Runtime control of menu item visibility

If you need to control menu item visibility or text depending on a dynamic condition, for example user access rights,
you can mutate `items` in the `processItems` hook provided by the menu.

Here we disable "Edit event", "Delete event", "Unassign event", and "Add event" items based on a condition:

```javascript
let accessGranted = false;

const calendar = new Calendar({
    features : {
        eventMenu   : {
            // Process event items before showing the menu
            processItems({ items }) {
                // Not possible to edit, delete, or change event assignments if there are no rights for it
                if (!accessGranted) {
                    items.editEvent = false;
                    items.deleteEvent = false;
                    items.unassignEvent = false;
                }
            }
        },
        scheduleMenu : {
            // Process schedule zone items before showing the menu
            processItems({ items }) {
                // Not possible to add new events if there are no rights for it
                if (!accessGranted) {
                    items.addEvent = false;
                }
            }
        }
    }
});
```

See it in action in this demo:

<div class="external-example" data-file="Calendar/guides/menu/Dynamic.js"></div>


<p class="last-modified">Last modified on 2025-04-23 10:28:23</p>