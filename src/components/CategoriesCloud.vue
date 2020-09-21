<template>
  <section class="cloud">
    <h1 class="cloud_h1">Категории:</h1>
    <div class="cloud_list">
      <button v-for="item in list"
              v-bind:class="[{ 'active': item.active }, 'category']"
              @click="changeActive(item)">
        {{item.name}}
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "CategoriesCloud",
    computed: {
      list() {
        return this.$store.state.categories;
      }
    },
    methods: {
      changeActive(item) {
        this.$store.commit('changeActiveCategory', item);
        this.$store.dispatch('getBooks');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cloud
    box-sizing border-box
    font-family sans-serif
    width 100%

    &_h1
      font-size 2em

    &_list
      align-items center
      display flex
      justify-content space-around

      .category
        background-color #fff
        border 1px solid #000
        border-radius 10px
        color #000
        cursor pointer
        font-size 1em
        font-weight bold
        padding 8px 10px

        &.active:hover
          background-color #fff
          color #000

        &.active
        &:hover
          background-color #000
          color #fff

        &:active
        &:focus
          outline none
</style>