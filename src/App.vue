<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles are now in src/styles/main.css */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
