import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import BlogPage from '../views/BlogPage.vue'; // 确保导入 BlogPage
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const routes = [
  {
    path: '/',
    component: DefaultLayout, // 确保使用的是正确的布局
    children: [
      { path: '', component: BlogPage }, // 使用 BlogPage 代替 ArticlesPage
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
