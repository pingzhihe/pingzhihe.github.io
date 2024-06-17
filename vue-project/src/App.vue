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
html, body, #app {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
}
.wrapper {
  min-height: 100%;
  padding-bottom: 60px;
  padding-top: 100px;
}

main {
  margin: 2rem;
}

@media screen and (max-width: 800px) {
  /* Add any global responsive styles */
  .wrapper {
    padding-top: 150px;
  }
}
</style>
