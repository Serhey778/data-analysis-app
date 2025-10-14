<script setup>
import { ref, watch, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const props = defineProps({
  filteredData: Array,
});

const chartRefHours = ref(null);
const chartInstanceHours = ref(null);

const createHourChart = () => {
  const hourCounts = Array(24).fill(0); // Массив для подсчета заказов по часам

  props.filteredData.forEach((item) => {
    const hour = new Date(item.date).getHours(); // Получаем час из даты
    hourCounts[hour]++; // Увеличиваем счетчик для соответствующего часа
  });

  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`); // Метки для часов
  const dataCounts = hourCounts; // Данные для графика

  if (chartInstanceHours.value) {
    chartInstanceHours.value.destroy(); // Уничтожаем старый график, если он существует
  }

  const ctx = chartRefHours.value.getContext('2d');
  chartInstanceHours.value = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Количество заказов по часам',
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
            text: 'Часы',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Количество заказов',
          },
        },
      },
    },
  });
};

watch(() => props.filteredData, createHourChart); // Пересоздаем график при изменении данных

onMounted(() => {
  createHourChart(); // Создаем график при монтировании компонента
});
</script>

<template>
  <canvas ref="chartRefHours" width="400" height="200"></canvas>
</template>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
