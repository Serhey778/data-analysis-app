<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  data: Array,
});

const filters = ref({
  tech_size: '',
  last_change_date: '',
  supplier_article: '',
});

const filteredData = computed(() => {
  return props.data.filter((item) => {
    return (
      (filters.value.tech_size
        ? item.tech_size.includes(filters.value.tech_size)
        : true) &&
      (filters.value.last_change_date
        ? item.last_change_date.startsWith(filters.value.last_change_date)
        : true) &&
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
      <label for="filter-last_change_date">Фильтр по дате изменения:</label>
      <input
        v-model="filters.last_change_date"
        id="filter-last_change_date"
        type="date"
      />
      <label for="filter-supplier_article">Фильтр по артикулу:</label>
      <input v-model="filters.supplier_article" id="filter-supplier_article" />
      <label for="filter-tech_size">Фильтр по техническому размеру:</label>
      <input v-model="filters.tech_size" id="filter-tech_size" />
    </div>
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Дата изменения</th>
          <th>Артикул поставщика</th>
          <th>Технический размер</th>
          <th>Штрих-код</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredData" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.last_change_date }}</td>
          <td>{{ item.supplier_article }}</td>
          <td>{{ item.tech_size }}</td>
          <td>{{ item.barcode }}</td>
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
