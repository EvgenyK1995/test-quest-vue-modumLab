import axios from "axios";

export default {
  getCategories(context) {
    return new Promise((resolve, reject) => {
      axios.post('https://webdev.modumlab.com/api/book/categories')
        .then(response => {
          let list = [];

          response.data.data.list.forEach((item) => {
            list.push({ id: item.id, name: item.name, active: false });
          });

          context.commit('getCategories', list);
          resolve();
        })
        .catch((e) => {
          console.log(e);
          reject();
        });
    });
  },
  getBooks(context) {
    let categoryIds = context.getters.getCategoryIds;

    if (categoryIds.length === 0) {
      categoryIds = context.getters.getCategoryAllIds;
    }

    axios.post('https://webdev.modumlab.com/api/book/list',
      {
        'categories': categoryIds,
        'page': context.getters.getPage
      })
      .then(response => {
        let list = [];

        response.data.data.list.forEach((item) => {
          list.push(item);
        });

        context.commit('getBooks', { books: list, next: response.data.data.next });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  loadMoreBooks(context) {
    let categoryIds = context.getters.getCategoryIds;

    if (categoryIds.length === 0) {
      categoryIds = context.getters.getCategoryAllIds;
    }

    axios.post('https://webdev.modumlab.com/api/book/list',
      {
        'categories': categoryIds,
        'page': context.getters.getPage
      })
      .then(response => {
        let list = context.state.books;

        response.data.data.list.forEach((item) => {
          list.push(item);
        });

        context.commit('updateBooks', { 'books': list, 'next': response.data.data.next });
      })
      .catch((e) => {
        console.log(e);
      });
  }
}