<script setup lang="ts">

import { reactive } from 'vue';
import { BryntumCalendar, BryntumDemoHeader } from '@bryntum/calendar-vue-3';
import { calendarConfiguration } from './AppConfig';

const calendarConfig = reactive(calendarConfiguration);

</script>

<template>
    <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
    <bryntum-demo-header />
    <bryntum-calendar
        v-bind="calendarConfig"
    />
</template>

<style lang="scss">
@import './App.scss';
</style>
