<script setup></script>

<template>
  <h1>Incomes!!!</h1>
</template>

<!-- <template>
  <div>
    <h1>Incomes</h1>
    <ChartComponent :data="chartData" />
    <TableComponent :data="filteredData" />
    <div>
      <label>Filter:</label>
      <input v-model="filter" placeholder="Filter by name" />
    </div>
    <pagination :total="totalPages" @page-changed="fetchData" />
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import ChartComponent from '../components/ChartComponent.vue';
import TableComponent from '../components/TableComponent.vue';

export default {
  components: { ChartComponent, TableComponent },
  setup() {
    const data = ref([]);
    const filter = ref('');
    const currentPage = ref(1);
    const itemsPerPage = 10;

    const filteredData = computed(() => {
      return data.value.filter((item) => item.name.includes(filter.value));
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredData.value.length / itemsPerPage.value);
    });

    const fetchData = async () => {
      // Здесь вы должны выполнить запрос к вашему API
      const response = await fetch('/api/incomes');
      data.value = await response.json();
    };

    onMounted(fetchData);

    const chartData = computed(() => {
      return data.value.map((item) => item.amount); // пример данных для графика
    });

    return { chartData, filteredData, filter, totalPages, fetchData };
  },
};
</script> -->
