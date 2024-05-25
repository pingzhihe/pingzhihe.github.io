<template>
    <article>
      <h2>{{ title }}</h2>
      <slot></slot>
    </article>
  </template>
  
  <script>
  export default {
    name: 'AppArticle',
    props: ['title'],
  }
  </script>
  
  <style scoped>
  article {
    background: #fff;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>