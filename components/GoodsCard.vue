<template>
  <li class="card mb-16">
    <img class="card__img" src="../assets/img/good-picture.jpeg" alt="Фото товара">
    <div class="card-wrapper">
      <h3 class="card__title">
        Наименование товара
      </h3>
      <p class="card__description">
        Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк
      </p>
      <span class="card__price">10 000 руб.</span>
    </div>
    <button class="delete"></button>
  </li>
</template>

<script>

export default({})
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
    background-image: url('../assets/img/delete.svg')
    background-position: center center
    background-repeat: no-repeat

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
