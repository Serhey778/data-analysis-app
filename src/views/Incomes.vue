<script setup>
import { ref, computed } from 'vue';
import fetchData from '../function/fetchData.js';
import IncomesTableComponent from '../components/IncomesTableComponent.vue';
import IncomesChartComponent from '../components/IncomesChartComponent.vue';
import {
  PORT,
  HOST,
  KEY,
  BEGINNING_OF_REPORTING_PERIOD,
  END_OF_REPORTING_PERIOD,
} from '../../config.js';
const data = ref([]);
const url = `http://${HOST}:${PORT}/api/incomes?dateFrom=${BEGINNING_OF_REPORTING_PERIOD}&dateTo=${END_OF_REPORTING_PERIOD}&page=1&key=${KEY}&limit=500`;
fetchData(url, data);
</script>
<template>
  <div>
    <h1>График доходов</h1>
    <IncomesChartComponent :filteredData="data" />
    <h1>Таблица доходов</h1>
    <IncomesTableComponent :data="data" />
  </div>
</template>
