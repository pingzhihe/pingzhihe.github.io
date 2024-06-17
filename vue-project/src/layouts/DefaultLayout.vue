<template>
    <div>
      <AppHeader />
      <div class="wrapper">
        <main>
          <router-view></router-view> <!-- 动态内容 -->
        </main>
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/Header.vue';
  import AppFooter from '../components/Footer.vue';
  
  export default {
    name: 'DefaultLayout',
    components: {
      AppHeader,
      AppFooter,
    },
  };
  </script>
  
  <style scoped>
  /* 样式 */
  </style>
  