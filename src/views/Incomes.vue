<script setup>
import { ref, computed } from 'vue';
import fetchData from '../function/fetchData.js';
import IncomesTableComponent from '../components/IncomesTableComponent.vue';
import IncomesChartComponent from '../components/IncomesChartComponent.vue';
const data = ref([]);
const url =
  'http://109.73.206.144:6969/api/incomes?dateFrom=2025-10-01&dateTo=2025-10-30&page=1&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie&limit=500';

fetchData(url, data);
</script>
<template>
  <div>
    <IncomesChartComponent :filteredData="data" />
    <IncomesTableComponent :data="data" />
  </div>
</template>
