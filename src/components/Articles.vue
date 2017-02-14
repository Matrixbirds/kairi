<template>
  <div id='articles' class='article-container'>
    <div class='article-preview' v-for="article in articles">
      <router-link :to="{ name: 'article', params: { id: article.id }}" class='menu-bar-button'>
        <div class='article-title'>
          <h3 class='title'>{{ article.title }}</h3>
        </div>
      </router-link>
      <div class='article-short-content'>{{ article.content }}</div>
    </div>
  </div>
</template>

<script>
import Article from '../models/article';

export default {
  name: 'articles',
  data() {
    return {
      articlesData: [],
    };
  },
  computed: {
    articles: {
      set(val) {
        this.articlesData = val;
      },
      get() {
        return this.articlesData;
      },
    },
  },
  mounted() {
    Article.fetchData().then((data) => {
      this.articles = data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-container {
  padding: 0 25px;
}

.article-preview {
  border: 1px solid black;
  box-shadow: 0 0 1em #8e8d88;
  display: flex;
  display: -webkit-flex;
  flex-flow: column nowrap;
  margin-top: 25px;
}

.article-title {
  max-height: 35px;
  height: 35px;
  padding: 5px 15px;
}

.title {
  margin: 0 0;
  display: inline-block;
  vertical-align: text-top;
  width: 24em;
  height: 100%;
  white-space: nowrap;
  line-height: 2em;
  text-overflow: ellipsis;
  overflow: hidden;
}

.article-short-content {
  padding-left: 10px;
  max-height: 180px;
  white-space: pre-wrap;
  overflow: hidden;
  padding: 0px 15px;
  padding-bottom: 15px;
}

</style>
