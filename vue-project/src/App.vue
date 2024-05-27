<template>
  <div id="app">
    <AppHeader />
    <div class="wrapper">
      <main>
        <AppArticle title="Hello! Here is Zhihe Ping">
          <p>I am an Unimelb Student, Master of IT.</p>
          <p>I like astronomy, physics, and computer science.</p>
          <p>This is my blog and welcome to my own world!</p>
        </AppArticle>
        <AppArticle title="TO DO">
          <p>Final exam revision</p>
          <p>Rebuild the blog using vue or react</p>
          <p>Learn more about machine learning</p>
        </AppArticle>
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'
import AppArticle from '@/components/Article.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppArticle,
  },
}
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