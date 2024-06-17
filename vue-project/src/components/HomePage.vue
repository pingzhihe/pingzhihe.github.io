<template>
    <div>
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
      <button @click="goToArticles">Go to Articles</button>
    </div>
  </template>
  
  <script>
  import AppArticle from './Article.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AppArticle,
    },
    methods: {
      goToArticles() {
        this.$router.push('/articles');
      }
    }
  }
  </script>
  
  <style scoped>
  /* 样式 */
  </style>
  