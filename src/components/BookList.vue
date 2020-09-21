<template>
  <section>
    <div class="book-list">
      <div v-for="item in list" class="book">
        <div class="book_cover-and-info">
          <img :src="item.image" alt="" class="book_cover" />
          <div class="book_info">
            <h2>{{item.name}}</h2>
            <p>{{item.author}}</p>
            <p>{{item.year}}</p>
          </div>
        </div>
        <p class="book_description">{{item.description}}</p>
      </div>
    </div>
    <div class="load-more-btn-block">
      <button v-if="hasNextPage"
              class="load-more"
              @click="loadMore">
        Загрузить ещё
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "BookList",
    computed: {
      list() {
        return this.$store.state.books;
      },
      hasNextPage() {
        return this.$store.getters.hasNextPage;
      }
    },
    methods: {
      loadMore() {
        this.$store.dispatch('loadMoreBooks');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .book-list
    align-items stretch
    box-sizing border-box
    display flex
    flex-wrap wrap
    font-family sans-serif
    justify-content space-around
    padding 20px
    width 100%

    .book
      border 1px solid #ddd
      border-radius 10px
      box-sizing border-box
      box-shadow 6px 3px 7px #eee
      margin 20px 0
      padding 20px
      width 45%
      @media (max-width 480px)
        width 100%

      &_cover
        border-radius 5px
        height 200px

      &_cover-and-info
        align-items flex-start
        display flex
        justify-content left

      &_info
        margin-left 20px

        h2
          margin-top 0

      &_description
        display block
        max-height 250px
        overflow hidden
        position relative
        text-align justify
        text-indent 30px

  .load-more
    background-color #000
    border 1px solid #000
    border-radius 10px
    color #fff
    cursor pointer
    font-size 1em
    font-weight bold
    padding 8px 20px

    &:hover
      background-color #fff
      color #000

    &:active
    &:focus
      outline none

    &-btn-block
      display flex
      justify-content center
      margin 15px 0
      width 100%
</style>