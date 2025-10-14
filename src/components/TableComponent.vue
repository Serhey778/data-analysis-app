<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.amount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['data'],
};
</script>
