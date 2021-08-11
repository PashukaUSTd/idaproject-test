<template>
  <form action="" class="form-agree" :class="classes" @submit.prevent="confirm()">
    <h2 class="form-agree__title">Вы уверены что хотите удалить позицию?</h2>
    <div class="form-agree__wrapper">
      <button type="submit" class="confirm"
        @focus="confirmButton.focused = true" @blur="confirmButton.focused = false">
        Да
      </button>
      <button type="button" class="cancel" @click="cancel()"
        @focus="cancelButton.focused = true" @blur="cancelButton.focused = false">
        Нет
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      confirmButton: {
        focused: false,
      },
      cancelButton: {
        focused: false,
      }
    }
  },
  methods: {
    confirm() {
      this.$store.commit('goods/addClass', '')
      this.$store.commit('goods/deleteGood')
    },
    cancel() {
      this.$store.commit('goods/addClass', '')
    }
  },
  computed: {
    classes() {
      return this.$store.state.goods.formAgreeClasses
    }
  }
}
</script>

<style lang="sass" scoped>
  $width: 400px

  @mixin button
    border: none
    border-radius: 10px
    font-size: 16px
    padding: .9rem 3rem
    cursor: pointer
    color: #fff
    &:focus
      outline: none
      box-shadow: 0 0 0 2pt#FF8484 !important
    @media (max-width: 550px)
      font-size: 12px
      padding: .5rem 1.5rem

  .form-agree
    display: none
    position: fixed
    left: calc(50% - #{$width} / 2)
    top: calc(50% - 100px)
    z-index: 10
    width: $width
    padding-bottom: 20px
    border-radius: 4px
    background-color: #FFFEFB
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)

    @media (max-width: 550px)
      width: (#{$width} / 2)
      left: calc(50% - #{$width} / 4)

  .appear-form
    display: block

  .form-agree__title
    font-size: 24px
    text-align: center
    @media (max-width: 550px)
      font-size: 20px

  .form-agree__wrapper
    display: flex
    justify-content: space-around

  .confirm
    background-color: #7BAE73
    @include button

  .cancel
    background-color: #FF8484
    @include button

</style>


