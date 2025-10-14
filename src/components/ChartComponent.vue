<template>
  <div>
    <h2>Chart</h2>
    <!-- Здесь может быть код для отображения графика -->
    <p>График данных: {{ data }}</p>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>
