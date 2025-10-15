<script setup>
import { ref, computed } from 'vue';
import fetchData from '../function/fetchData.js';
import OrdersAndSalesTableComponent from '../components/OrdersAndSalesTableComponent.vue';
import SalesChartComponent from '../components/SalesChartComponent.vue';
const data = ref([]);
const url =
  'http://109.73.206.144:6969/api/sales?dateFrom=2025-09-01&dateTo=2025-09-30&page=1&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie&limit=500';

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
