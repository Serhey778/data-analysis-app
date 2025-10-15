<script setup>
import { ref, computed } from 'vue';
import fetchData from '../function/fetchData.js';
import StocksTableComponent from '../components/StocksTableComponent.vue';
import StocksChartComponent from '../components/StocksChartComponent.vue';
const data = ref([]);
const url =
  'http://109.73.206.144:6969/api/stocks?dateFrom=2025-10-15&dateTo=&page=1&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie&limit=500';

fetchData(url, data);
</script>
<template>
  <div>
    <h1>График выгрузки на склад</h1>
    <StocksChartComponent :filteredData="data" />
    <h1>Таблица выгрузки на склад</h1>
    <StocksTableComponent :data="data" />
  </div>
</template>
