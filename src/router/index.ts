import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import ProductPage from '@/views/ProductPage.vue';

const routes = [
  { path: '/', name: 'Main', component: MainPage },
  { path: '/product/:id', name: 'ProductPage', component: ProductPage, props: true },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
