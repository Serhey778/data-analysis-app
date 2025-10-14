import { createRouter, createWebHistory } from 'vue-router';
import Incomes from './views/Incomes.vue';
import Orders from './views/Orders.vue';
import Sales from './views/Sales.vue';
import Stocks from './views/Stocks.vue';
import Home from './views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/incomes', component: Incomes },
  { path: '/orders', component: Orders },
  { path: '/sales', component: Sales },
  { path: '/stocks', component: Stocks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
