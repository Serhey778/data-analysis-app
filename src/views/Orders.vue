<script setup>
import { ref, computed } from 'vue';

const data = ref(null);
const url =
  'http://109.73.206.144:6969/api/orders?dateFrom=2025-10-01&dateTo=2025-10-10&page=1&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie&limit=2';

async function fetchData(url) {
  try {
    data.value = null;
    const res = await fetch(url);
    const json = await res.json();
    data.value = json.data;
    console.log(data.value);
  } catch (err) {
    console.error(err);
  }
}
fetchData(url);

const originalObject = [
  {
    g_number: '98457641480322122043',
    date: '2025-10-01 00:00:50',
    last_change_date: '2025-10-01',
    supplier_article: '1b1344eff6fcec54',
    tech_size: '66e7dff9f98764da',
  },
  // Добавьте другие объекты по необходимости
];

const filters = ref({
  g_number: '',
  date: '',
  supplier_article: '',
});

const filteredData = computed(() => {
  return originalObject.filter((item) => {
    return (
      (filters.value.g_number
        ? item.g_number.includes(filters.value.g_number)
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
  <header>Orders!!!</header>
  <div>
    <h1>Таблица заказов</h1>
    <div>
      <label for="filter-g_number">Фильтр по номеру:</label>
      <input v-model="filters.g_number" id="filter-g_number" />

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
          <td>{{ item.g_number }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.last_change_date }}</td>
          <td>{{ item.supplier_article }}</td>
          <td>{{ item.tech_size }}</td>
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
