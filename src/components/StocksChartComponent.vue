<script setup>
import { ref, watch, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const props = defineProps({
  filteredData: Array,
});
const chartRef = ref(null);
const chartInstance = ref(null);
const createSupplierChart = () => {
  const shipmentCounts = {};
  props.filteredData.forEach((item) => {
    const supplier = item.supplier_article;
    if (!shipmentCounts[supplier]) {
      shipmentCounts[supplier] = 0;
    }
    shipmentCounts[supplier] += 1;
  });
  const labels = Object.keys(shipmentCounts);
  const dataCounts = Object.values(shipmentCounts);
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }
  const ctx = chartRef.value.getContext('2d');
  chartInstance.value = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Количество отгрузок на склад',
          data: dataCounts,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Поставщик',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Количество отгрузок',
          },
        },
      },
    },
  });
};

watch(() => props.filteredData, createSupplierChart);
onMounted(() => {
  createSupplierChart();
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
