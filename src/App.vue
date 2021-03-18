<template>
  <div id="app">
    <categories-cloud></categories-cloud>
    <book-list></book-list>
  </div>
</template>

<script>
  import CategoriesCloud from "./components/CategoriesCloud.vue";
  import BookList from "./components/BookList.vue";

  export default {
    name: "App",
    components: {BookList, CategoriesCloud},
    mounted() {
      this.$store.dispatch('getCategories').then(() => {
        this.$store.dispatch('getBooks');
      });
    }
  }
</script>

<style lang="stylus" scoped>
  #app
    box-sizing border-box
    display block
    margin 0 auto
    max-width 1000px
    padding 20px
    width 100%
</style>