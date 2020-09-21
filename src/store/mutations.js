export default {
  getCategories(state, _categories) {
    state.categories = _categories;
  },
  changeActiveCategory(state, _item) {
    state.books.length = 0;
    state.page = 1;
    state.categories.find((item) => {
      if (item === _item)
        item.active = !item.active
    });
  },
  getBooks(state, args) {
    state.books.length = 0;
    state.books = args.books;
    state.hasNextPage = args.next;
    state.page = 2;
  },
  updateBooks(state, args) {
    state.books = args.books;
    state.hasNextPage = args.next;
    state.page++;
  },
  updatePage(state, _page) {
    state.page = _page;
  }
};