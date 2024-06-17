<template>
    <div>
      <h1>Articles</h1>
      
      <AppArticle
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
      >
        <p>{{ article.content }}</p>
      </AppArticle>
    </div>
  </template>
  
  <script>
  import AppArticle from '@/components/Article.vue';
  
  export default {
    name: 'ArticlesPage',
    components: {
      AppArticle,
    },
    data() {
      return {
        articles: [
          { id: 1, title: 'Article 1', content: 'Content for article 1' },
          { id: 2, title: 'Article 2', content: 'Content for article 2' },
        ],
      };
    },
  };
  </script>
  