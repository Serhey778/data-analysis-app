<script setup>
import { ref, computed } from 'vue';
import fetchData from '../function/fetchData.js';
import StocksTableComponent from '../components/StocksTableComponent.vue';
import StocksChartComponent from '../components/StocksChartComponent.vue';
import { PORT, HOST, KEY } from '../../config.js';
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
const data = ref([]);
const url = `http://${HOST}:${PORT}/api/stocks?dateFrom=${formattedDate}&dateTo=&page=1&key=${KEY}&limit=500`;
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
