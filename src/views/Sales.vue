<script setup>
import { ref, computed } from 'vue';
import fetchData from '../function/fetchData.js';
import OrdersAndSalesTableComponent from '../components/OrdersAndSalesTableComponent.vue';
import SalesChartComponent from '../components/SalesChartComponent.vue';
import {
  PORT,
  HOST,
  KEY,
  BEGINNING_OF_REPORTING_PERIOD,
  END_OF_REPORTING_PERIOD,
} from '../../config.js';
const data = ref([]);
const url = `http://${HOST}:${PORT}/api/sales?dateFrom=${BEGINNING_OF_REPORTING_PERIOD}&dateTo=${END_OF_REPORTING_PERIOD}&page=1&key=${KEY}&limit=500`;
fetchData(url, data);
</script>
<template>
  <div>
    <h1>График продаж</h1>
    <SalesChartComponent :filteredData="data" />
    <h1>Таблица продаж</h1>
    <OrdersAndSalesTableComponent :data="data" />
  </div>
</template>
