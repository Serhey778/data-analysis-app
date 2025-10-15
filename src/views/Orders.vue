<script setup>
import { ref, computed } from 'vue';
import OrdersAndSalesTableComponent from '../components/OrdersAndSalesTableComponent.vue';
import OrdersChartComponent from '../components/OrdersChartComponent.vue';
import fetchData from '../function/fetchData.js';
const data = ref([]);
const url =
  'http://109.73.206.144:6969/api/orders?dateFrom=2025-09-01&dateTo=2025-09-30&page=1&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie&limit=500';

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
