import vue from 'vue';
import vuex from 'vuex';
import mutations from './mutations';
import getters from "./getters";
import actions from "./actions";
import createPersistedState from "vuex-persistedstate";

vue.use(vuex);

const store = new vuex.Store({
  state: {
    categories: [],
    page: 1,
    hasNextPage: false,
    books: []
  },
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()]
});

export default store;