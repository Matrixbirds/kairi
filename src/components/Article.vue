<template>
  <div id='article'>
    <p>
      {{ article.id }}
    </p>
    <p>
      {{ article.title }}
    </p>
    <p>
      {{ article.content }}
    </p>
  </div>
</template>

<script>
import Article from '../models/article';

export default {
  props: ['id'],
  data() {
    return {
      articleData: {},
    };
  },
  computed: {
    article: {
      set(val) {
        this.articleData = val;
      },
      get() {
        return this.articleData;
      },
    },
  },
  mounted() {
    Article.fetchData()
      .then(articles =>
        articles.filter(article => (`${article.id}` === `${this.id}`))[0])
      .then(article => (this.article = article));
  },
};
</script>

<style scoped>
</style>
