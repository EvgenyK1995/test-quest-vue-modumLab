export default {
  getCategoryIds(state) {
    let ids = [];

    state.categories.filter(category => {
      if (category.active) {
        ids.push(category.id);
      }
    });

    return ids;
  },
  getCategoryAllIds(state) {
    let ids = [];

    state.categories.filter(category => {
      ids.push(category.id);
    });

    return ids;
  },
  getPage(state) {
    return state.page;
  },
  hasNextPage(state) {
    return state.hasNextPage;
  }
}