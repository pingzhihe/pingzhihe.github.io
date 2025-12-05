<template>
  <div class="article-block">
    <h3 class="article-title">{{ title }}</h3>
    <div class="article-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppArticle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.article-block {
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.article-block:hover {
  background-color: var(--hover-bg-color);
}

.article-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
}

.article-content {
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
}
</style>