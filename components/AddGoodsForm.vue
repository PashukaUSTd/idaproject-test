<template>
<div class="form-container">
  <form action="" class="form" @submit.prevent="addGood">
    <div class="form-wrapper">
      <label for="good-title">
          <span class="form__input-name form__input-name--text">Наименование товара*</span>
          <input v-model="inputs.title.text" @focus="inputs.title.focused = true" @blur="inputs.title.focused = false"
            class="form__input" placeholder="Введите наименование товара" type="text" name="good-title">
          <span v-if="inputs.title.focused" class="form__input-name attention">Поле является обязательным</span>
      </label>
      <label for="good-description">
        <span class="form__input-name form__input-name--text">Описание товара</span>
        <textarea v-model="inputs.description.text" class="form__input form__textarea"
          placeholder="Введите описание товара" name="good-description"></textarea>
      </label>
      <label for="good-image">
        <span class="form__input-name form__input-name--text">Ссылка на изображение*</span>
        <input v-model="inputs.image.text" @focus="inputs.image.focused = true" @blur="inputs.image.focused = false"
          class="form__input"  placeholder="Введите ссылку" type="text" name="good-image">
        <span v-show="inputs.image.focused" class="form__input-name attention">Поле является обязательным</span>
      </label>
      <label for="good-price">
        <span class="form__input-name form__input-name--text">Цена товара*</span>
        <input v-model="inputs.price.text" @focus="inputs.price.focused = true" @blur="inputs.price.focused = false"
          class="form__input" placeholder="Введите цену" type="number" name="good-price">
        <span v-show="inputs.price.focused" class="form__input-name attention">Поле является обязательным</span>
      </label>
      <div class="form__button-wrapper">
        <button class="form__button form__button--shadow" :class="{'form__button--active': !validate}"
          :disabled="validate" type="submit">
          Добавить товар
        </button>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import Good from '../static/classes/good'

export default ({
  data() {
    return {
      inputs: {
        title:{text:'', important: true, focused: false},
        description:{text:'', important: false, focused: false},
        image:{text:'', important: true, focused: false},
        price:{text:'', important: true, focused: false},
      }
    }
  },
  methods: {
    clear() {
      Object.keys(this.inputs).forEach((key) => {
        this.inputs[key].text = '';
      })
    },
    addGood() {
      let storeGood = new Good(
        this.inputs.title.text, this.inputs.description.text, this.inputs.image.text, this.inputs.price.text, this.getId
      )
      this.$store.commit('goods/addGood', storeGood);
      this.clear();
    },
  },
  computed: {
    validate() {
      let importantFields = Object.values(this.inputs)
      importantFields = importantFields.filter(e => e.important)
      return importantFields.some((value) => value.text === '')
    },
    getId() {
      return this.$store.state.goods.goods.length + 1;
    }
  }
})
</script>

<style lang="sass" scoped>
  $input__box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
  $placeholder: rgba(180, 180, 180, 0.5)
  $button__text-color: #B4B4B4
  $item__bg: #FFFEFB
  $button__bg--disabled: #EEEEEE
  $button__bg--active: #7BAE73

  .form-container
    position: fixed
    left: 32px

  .attention
    margin-top: -10px
    font-size: 8px
    font-weight: 400
    line-height: 1
    color: red

  .form
    background-color: $item__bg
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)

  .form-wrapper
    display: flex
    flex-direction: column
    padding: 24px 24px
    width: 332px

  .form__input
    width: 100%
    padding: 10px 16px
    margin-bottom: 16px
    box-shadow: $input__box-shadow
    border: none
    border-radius: 4px
    &:focus
      outline: none
      box-shadow: 0 0 0 1pt#FF8484 !important

  .form__textarea
    position: relative
    height: 108px
    resize: none

  .form__input::placeholder
    font-size: 12px
    color: $placeholder
    font-weight: 600px

  .form__input-name
    display: block
    margin-bottom: 4px

  .form__input-name--text
    font-size: 10px
    font-weight: 400px

  .form__button
    width: 100%
    margin-top: 10px
    padding: 10px 0
    text-align: center
    line-height: 15px
    font-size: 12px
    color: $button__text-color
    background-color: $button__bg--disabled
    border: none
    border-radius: 10px
    cursor: pointer

  .form__button--active
    background-color: $button__bg--active
    color: #FFFFFF

  .form__button--shadow
    box-shadow: 0px 5px 0 rgba(0, 0, 0, 0.7)
    transition: all 0.1s ease-in-out
    &:active
      transform: translateY(5px)
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.7)
</style>
