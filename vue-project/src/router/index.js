import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import NoHeaderFooterLayout from '../layouts/NoHeaderFooterLayout.vue';
import HomePage from '../components/HomePage.vue';
import ArticlesPage from '../components/ArticlesPage.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: HomePage },
    ],
  },
  {
    path: '/articles',
    component: NoHeaderFooterLayout,
    children: [
      { path: '', component: ArticlesPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
