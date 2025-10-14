<script setup>
import { ref, computed } from 'vue';
import TableComponent from '../components/TableComponent.vue';
import ChartComponent from '../components/ChartComponent.vue';

const data = ref([]);
const url =
  'http://109.73.206.144:6969/api/orders?dateFrom=2025-10-01&dateTo=2025-10-10&page=1&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie&limit=500';

async function fetchData(url) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    data.value = json.data;
  } catch (err) {
    console.error(err);
  }
}

fetchData(url);
</script>
<template>
  <div>
    <ChartComponent :filteredData="data" />
    <TableComponent :data="data" />
  </div>
</template>
