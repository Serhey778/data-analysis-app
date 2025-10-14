<script setup>
import { ref, watch, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const props = defineProps({
  filteredData: Array,
});

const chartRef = ref(null);
const chartInstance = ref(null);

const createIncomeChart = () => {
  const incomeCounts = {};

  // Считаем количество поступлений по дате
  props.filteredData.forEach((item) => {
    const date = item.date.split(' ')[0]; // Получаем только дату
    if (!incomeCounts[date]) {
      incomeCounts[date] = 0; // Инициализируем, если даты еще нет
    }
    incomeCounts[date] += 1; // Увеличиваем счетчик поступлений по дате
  });

  // Сортируем даты и получаем данные для графика
  const sortedDates = Object.keys(incomeCounts).sort(
    (a, b) => new Date(a) - new Date(b)
  );
  const dataCounts = sortedDates.map((date) => incomeCounts[date]); // Количество поступлений для оси Y

  if (chartInstance.value) {
    chartInstance.value.destroy(); // Уничтожаем старый график, если он существует
  }

  const ctx = chartRef.value.getContext('2d');
  chartInstance.value = new Chart(ctx, {
    type: 'line',
    data: {
      labels: sortedDates, // Даты для оси X
      datasets: [
        {
          label: 'Количество поступлений дохода',
          data: dataCounts,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Дата',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Количество поступлений',
          },
        },
      },
    },
  });
};

watch(() => props.filteredData, createIncomeChart); // Пересоздаем график при изменении данных

onMounted(() => {
  createIncomeChart(); // Создаем график при монтировании компонента
});
</script>

<template>
  <canvas ref="chartRef" width="400" height="200"></canvas>
</template>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
