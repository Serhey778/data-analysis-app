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
  props.filteredData.forEach((item) => {
    const date = item.date.split(' ')[0];
    if (!incomeCounts[date]) {
      incomeCounts[date] = 0;
    }
    incomeCounts[date] += 1;
  });
  const sortedDates = Object.keys(incomeCounts).sort(
    (a, b) => new Date(a) - new Date(b)
  );
  const dataCounts = sortedDates.map((date) => incomeCounts[date]);
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }
  const ctx = chartRef.value.getContext('2d');
  chartInstance.value = new Chart(ctx, {
    type: 'line',
    data: {
      labels: sortedDates,
      datasets: [
        {
          label: 'Количество продаж',
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
            text: 'Количество продаж',
          },
        },
      },
    },
  });
};
watch(() => props.filteredData, createIncomeChart);
onMounted(() => {
  createIncomeChart();
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
