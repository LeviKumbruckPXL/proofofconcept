<script setup lang="ts">

import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { BryntumCalendar, BryntumDemoHeader, BryntumGrid, BryntumSplitter } from '@bryntum/calendar-vue-3';
import { equipmentGridConfig, eventEditFeatureConfig, filterBarFeatureConfig, myCalendarConfig } from './AppConfig';
import type { CrudManagerConfig, Model } from '@bryntum/calendar';
import Drag from './lib/Drag';
import { equipmentStore } from './lib/EquipmentStore';

const
    calendarConfig = reactive(myCalendarConfig),
    gridConfig     = reactive(equipmentGridConfig),
    calendarRef    = ref(null),
    gridRef        = ref(null),
    dragRef        = ref(null);

// Configure crudManager in App.vue to access equipmentStore and prevent the equipment object to be a proxy object (as returned value from vue reactive)
const crudManagerConfig: CrudManagerConfig = {
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudStores : [equipmentStore],
    loadUrl    : 'data/data.json',
    autoLoad   : true,
    eventStore : {
        fields : [
            // A custom equipment field where we store items assigned to the task
            {
                name : 'equipment',
                convert(data) {
                    return (data || []).map((id: string | number | Model) => equipmentStore.getById(id));
                }
            }
        ]
    }
};

onMounted(() => {
    const
        calendar = calendarRef.value.instance.value,
        grid     = gridRef.value.instance!.value;

    // event renderer expects equipmentStore to be class property of calendar
    // equipmentStore is not a default property of calendar so it is assigned here instead of in calendar configuration
    calendar['equipmentStore'] = equipmentStore;

    // Assign grid store to equipmentStore
    const gridStore = grid.store = equipmentStore;

    const equipmentCombo = calendar!.eventEdit.editor.widgetMap.equipment;
    // Use a chained Store to avoid its filtering to interfere with calendar's rendering
    equipmentCombo.store = gridStore.chain();

    dragRef.value = new Drag({
        grid,
        calendar,
        outerElement : grid.element
    });
});

// To destroy Drag instance to avoid potential side effects or memory leaks after component is unmounted
onUnmounted(() => {
    (dragRef as Drag)?.current?.destroy?.();
});

</script>

<template>
    <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
    <bryntum-demo-header />
    <div id="calendar-container">
        <bryntum-calendar
            ref="calendarRef"
            v-bind="calendarConfig"
            :crud-manager="crudManagerConfig"
            :event-edit-feature="eventEditFeatureConfig"
        />
        <bryntum-splitter />
        <bryntum-grid
            ref="gridRef"
            v-bind="gridConfig"
            :filter-bar-feature="filterBarFeatureConfig"
            :cell-edit-feature="false"
        />
    </div>
</template>

<style lang="scss">
@import './App.scss';
</style>
