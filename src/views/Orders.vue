<script setup>
import { ref, computed } from 'vue';
import OrdersTableComponent from '../components/OrdersTableComponent.vue';
import OrdersChartComponent from '../components/OrdersChartComponent.vue';
import fetchData from '../function/fetchData.js';
const data = ref([]);
const url =
  'http://109.73.206.144:6969/api/orders?dateFrom=2025-10-01&dateTo=2025-10-10&page=1&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie&limit=500';

fetchData(url, data);
</script>
<template>
  <div>
    <OrdersChartComponent :filteredData="data" />
    <OrdersTableComponent :data="data" />
  </div>
</template>
