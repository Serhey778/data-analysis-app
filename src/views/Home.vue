<script setup></script>

<template>
  <header class="header">ТАБЛИЦЫ ОТЧЁТНОСТИ</header>
  <div class="navigation">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/incomes">Таблица доходов</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/orders">Таблица заказов</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/sales">Таблица продаж</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/stocks">Таблица выгрузки на склад</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.header {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  color: #333;
}
.navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.nav-list {
  list-style-type: none;
  padding: 0;
}
.nav-item {
  margin: 20px;
}
.nav-item a {
  padding: 5px;
  text-decoration: none;
  font-size: 20px;
  color: #007bff;
  transition: color 0.3s;
}
.nav-item a:hover {
  background-color: #0056b3;
  color: #fff;
}
.nav-item a:active {
  color: grey;
}
</style>
