<script setup lang="ts">
import { BryntumCalendar, BryntumDemoHeader } from '@bryntum/calendar-vue-3';
import { calendarProps } from './AppConfig';
</script>

<template>
    <!-- Bryntum-demo-header is used for Bryntum example only. Not required for application -->
    <bryntum-demo-header />
    <bryntum-calendar
        v-bind="calendarProps"
    />
</template>

<style lang="scss">
@import "./App.scss";
</style>
