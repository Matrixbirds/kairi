export default {
  fetchData(API = `${window.location.origin}/assets/articles_01.json`) {
    return fetch(API).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    });
  },
};
