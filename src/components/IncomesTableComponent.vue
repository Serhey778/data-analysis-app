<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  data: Array,
});

const filters = ref({
  income_id: '',
  date: '',
  supplier_article: '',
});

const filteredData = computed(() => {
  return props.data.filter((item) => {
    return (
      (filters.value.income_id
        ? `${item.income_id}`.includes(`${filters.value.income_id}`)
        : true) &&
      (filters.value.date ? item.date.startsWith(filters.value.date) : true) &&
      (filters.value.supplier_article
        ? item.supplier_article.includes(filters.value.supplier_article)
        : true)
    );
  });
});
</script>
<template>
  <div>
    <div>
      <label for="filter-income_id">Фильтр по номеру:</label>
      <input v-model="filters.income_id" id="filter-income_id" />

      <label for="filter-date">Фильтр по дате:</label>
      <input v-model="filters.date" id="filter-date" type="date" />

      <label for="filter-supplier_article">Фильтр по артикулу:</label>
      <input v-model="filters.supplier_article" id="filter-supplier_article" />
    </div>

    <table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Дата</th>
          <th>Дата изменения</th>
          <th>Артикул поставщика</th>
          <th>Размер</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredData" :key="index">
          <td>{{ item.income_id }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.last_change_date }}</td>
          <td>{{ item.supplier_article }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
