<script setup>
import { ref, watch } from 'vue';

const ordersData = ref(null);
const url =
  'http://109.73.206.144:6969/api/orders?dateFrom=2025-10-01&dateTo=2025-10-10&page=1&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie&limit=2';
async function fetchOrdersData() {
  ordersData.value = null;
  const res = await fetch(url);
  ordersData.value = await res.json();
  console.log(ordersData.value.data);
  console.log(ordersData.value.data[0]);
}
fetchOrdersData();
</script>

<template>
  <header>Orders!!!</header>
</template>
