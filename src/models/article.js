import store from '../store';

export default {
  fetchData(API = `${window.location.origin}/assets/articles_01.json`) {
    return new Promise((resolve) => {
      if (Array.isArray(store.articles) && store.articles.length > 0) {
        return resolve(store.articles);
      }
      return fetch(API)
        .then(response => ((response.ok) ? response.json() : []))
        .then(json => resolve(store.articles = json.articles));
    });
  },
};
