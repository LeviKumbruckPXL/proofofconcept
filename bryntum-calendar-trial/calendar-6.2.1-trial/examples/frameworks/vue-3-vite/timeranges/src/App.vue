<script setup lang="ts">
import { reactive } from 'vue';
import { BryntumDemoHeader, BryntumCalendar } from '@bryntum/calendar-vue-3';
import { calendarConfiguration, timeRangesFeatureConfig, eventTooltipFeatureConfig } from './AppConfig';

const calendarConfig = reactive(calendarConfiguration);

</script>

<template>
    <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
    <bryntum-demo-header />
    <bryntum-calendar
        v-bind = "calendarConfig"
        :eventTooltipFeature = "eventTooltipFeatureConfig"
        :timeRangesFeature = "timeRangesFeatureConfig"
    />
</template>

<style lang="scss">
@import './App.scss';
</style>
