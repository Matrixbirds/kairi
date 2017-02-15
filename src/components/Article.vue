<template>
  <div id='article' class='article-wrapper'>
    <div class='articleboard'>
      <h3 class='article-title'>{{ article.title }}</h3>
      <p class='article-body'>
        {{ article.content }}
      </p>
    </div>
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
.article-wrapper {
  margin: auto 2%;
}

.articleboard {
  padding: 0 1%;
  box-shadow: 10px 5px 5px black;
  border: 3px solid #788488;
  min-height: 700px;
}

.article-body {
  font-size: 20px;
}
</style>
