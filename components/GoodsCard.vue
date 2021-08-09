<template>
<ul class="goods">
  <li class="card mb-16" v-for="(good, index) in this.goods" :key="index">
    <img class="card__img" :src="good.image" :alt="good.title">
    <div class="card-wrapper">
      <h3 class="card__title">
        {{ good.title }}
      </h3>
      <p class="card__description">
        {{ good.description }}
      </p>
      <span class="card__price">{{ good.price }}</span>
    </div>
    <button class="delete" @click="deleteGood(good.id)"></button>
  </li>
</ul>
</template>

<script>
export default({
  props:['goods'],
  methods: {
    deleteGood(id) {
      this.$store.commit('goods/deleteGood', id);
    }
  }
})
</script>

<style lang="sass" scoped>
  $block-width: 100%
  $margin: 16px
  $card-count: 3
  $bold-text: 600
  $delete: #FF8484
  $delete-size: 32px
  $item__bg: #FFFEFB

  .mb-16
    margin-bottom: $margin

  .delete
    display: none
    position: absolute
    top: -8px
    right: -8px
    width: $delete-size
    height: $delete-size
    border: none
    cursor: pointer
    border-radius: 10px
    background-color: $delete
    background-image: url('../static/img/delete.svg')
    background-position: center center
    background-repeat: no-repeat

  .goods
    position: relative
    display: flex
    flex-wrap: wrap
    margin-left: 332px
    padding: 0
    width: calc(100% - 332px)
    list-style: none

  .card
   position: relative
   width: calc(#{$block-width} / #{$card-count} - #{$margin})
   margin-left: $margin
   padding-bottom: 24px
   background-color: $item__bg
   box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
   border-radius: 4px
   cursor: pointer
   &:hover
     .delete
       display: inline-block

  .card__img
    width: 100%
    height: 200px

  .card-wrapper
    padding-left: $margin
    padding-right: $margin

  .card__title
    font-size: 20px
    font-weight: $bold-text
    line-height: 25px
    margin-bottom: $margin

  .card__description
   font-size: 16px
   font-weight: 400
   line-height: 20px
   margin-bottom: $margin * 2

  .card__price
   font-size: 24px
   font-weight: $bold-text
   line-height: 30px
</style>
