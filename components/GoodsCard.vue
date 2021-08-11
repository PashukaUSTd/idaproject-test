<template>
<ul class="goods">
  <li v-for="(good, index) in this.goods" :key="index"
    @mouseout="mouseOut" :class="classes" class="card mb-16" >
    <img class="card__img" :src="good.image" :alt="good.title">
    <div class="card-wrapper">
      <h3 class="card__title">
        {{ good.title }}
      </h3>
      <p class="card__description">
        {{ good.description }}
      </p>
      <span class="card__price">{{ numberFormat(good.price) }} руб.</span>
    </div>
    <button class="delete" @click="deleteGood(good.id)"></button>
  </li>
</ul>
</template>

<script>
import numberFormat from '../helpers/numberFormat'

export default({
  props:['goods'],
  data() {
    return {
      classes: '',
    }
  },
  methods: {
    numberFormat,

    deleteGood(id) {
      this.$store.commit('goods/addClass', 'appear-form')
      // this.classes = 'delete__card'
      this.$store.commit('goods/setGoodId', id)
    },
    mouseOut(event) {
      console.log(event)
    },
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
  $card_shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)

  .mb-16
    margin-bottom: $margin

  .goods
    position: relative
    display: flex
    flex-wrap: wrap
    margin-left: 332px
    padding: 0
    width: calc(100% - 332px)
    list-style: none

    @media (max-width: 1000px)
      margin-left: 250px
      width: calc(100% - 250px)
    @media (max-width: 700px)
      margin-left: 200px
      width: calc(100% - 200px)
    @media (max-width: 550px)
      margin-left: 150px
      width: calc(100% - 150px)
    @media (max-width: 500px)
      margin-left: 200px
      width: 55%
    @media (max-width: 470px)
      margin-left: 165px
    @media (max-width: 400px)
      margin-left: 155px
    @media (max-width: 360px)
      margin-left: 130px

  @keyframes appear
    from
      transform: scale(0)
    50%
      transform: scale(1)
    75%
      transform: scale(0.7)
    100%
      transform: scale(1)

  @keyframes disappear
    from
      transform: scale(1) rotate(90deg)
      border-radius: 10px
    to
      transform: scale(0) rotate(-360deg)
      border-radius: 50%

  @keyframes click-me
    0%
      transform: scale(.7)
    5%
      transform: scale(1)
    10%
      transform: scale(.7)
    15%
      transform: scale(1)
    100%
      transform: scale(1)

  .delete
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
    transform: scale(0)

  .card
    position: relative
    width: calc(#{$block-width} / #{$card-count} - #{$margin})
    margin-left: $margin
    padding-bottom: 24px
    background-color: $item__bg
    box-shadow: $card_shadow
    border-radius: 4px
    cursor: pointer
    .delete
       animation: .5s linear 0s 1 disappear
    &:hover
      .delete
       transform: scale(1)
       animation: .7s linear 0s 1 appear
       &:hover
         animation: 2s linear 0s infinite click-me
    @media (max-width: 900px)
      width: calc(#{$block-width} / 2 - #{$margin})
    @media (max-width: 500px)
      width: calc(#{$block-width} / 1 - #{$margin})

  .delete__card
    animation: 1s linear 0s 1 disappear

  .card__img
    width: 100%
    height: 200px
    border-radius: 4px 4px 0 0
    @media (max-width: 700px)
      height: 150px
    @media (max-width: 550px)
      height: 100px
    @media (max-width: 500px)
      height: 200px
    @media (max-width: 450px)
      height: 150px
    @media (max-width: 400px)
      height: 100px

  .card-wrapper
    padding-left: $margin
    padding-right: $margin

  .card__title
    font-size: 20px
    font-weight: $bold-text
    line-height: 25px
    margin-bottom: $margin
    @media (max-width: 700px)
      font-size: 16px
      line-height: 20px
      margin-bottom: $margin / 4
    @media (max-width: 550px)
      margin-top: $margin / 2

  .card__description
   font-size: 16px
   font-weight: 400
   line-height: 20px
   margin-bottom: $margin * 2
   @media (max-width: 700px)
    font-size: 10px
    line-height: 12px
    margin-bottom: $margin
   @media (max-width: 550px)
     margin-bottom: $margin / 2

  .card__price
   font-size: 24px
   font-weight: $bold-text
   line-height: 30px
   @media (max-width: 700px)
     font-size: 16px
     line-height: 20px
</style>
