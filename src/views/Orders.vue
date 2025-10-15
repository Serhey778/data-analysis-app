<script setup>
import { ref, computed } from 'vue';
import OrdersAndSalesTableComponent from '../components/OrdersAndSalesTableComponent.vue';
import OrdersChartComponent from '../components/OrdersChartComponent.vue';
import fetchData from '../function/fetchData.js';
import {
  PORT,
  HOST,
  KEY,
  BEGINNING_OF_REPORTING_PERIOD,
  END_OF_REPORTING_PERIOD,
} from '../../config.js';
const data = ref([]);
const url = `http://${HOST}:${PORT}/api/orders?dateFrom=${BEGINNING_OF_REPORTING_PERIOD}&dateTo=${END_OF_REPORTING_PERIOD}&page=1&key=${KEY}&limit=500`;
fetchData(url, data);
</script>
<template>
  <div>
    <h1>График заказов</h1>
    <OrdersChartComponent :filteredData="data" />
    <h1>Таблица заказов</h1>
    <OrdersAndSalesTableComponent :data="data" />
  </div>
</template>
