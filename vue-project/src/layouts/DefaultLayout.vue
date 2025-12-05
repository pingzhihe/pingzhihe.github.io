<template>
  <div class="layout">
    <AppNavbar />
    <div class="main-content">
      <main>
        <router-view></router-view>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/Navbar.vue';
import AppFooter from '../components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 60px; /* Space for fixed navbar */
}

main {
  flex: 1;
  width: 100%;
  max-width: 1100px; /* Standard marketing site width */
  margin: 0 auto;
  padding: 0 20px;
}
</style>
  