<template>
<div class="form-container">
<h1>Добавление товара</h1>
  <form action="" class="form" @submit.prevent="">
    <div class="form-wrapper">
      <label for="good-title">
          <span class="form__input-name form__input-name--text">Наименование товара*</span>
          <input class="form__input" placeholder="Введите наименование товара" type="text" name="good-title">
          <span class="form__input-name attention">Поле является обязательным</span>
      </label>
      <label for="good-description">
        <span class="form__input-name form__input-name--text">Описание товара</span>
        <textarea class="form__input form__textarea" placeholder="Введите описание товара" name="good-description"></textarea>
      </label>
      <label for="good-image">
        <span class="form__input-name form__input-name--text">Ссылка на изображение*</span>
        <input class="form__input" placeholder="Введите ссылку" type="text" name="good-image">
        <span class="form__input-name attention">Поле является обязательным</span>
      </label>
      <label for="good-price">
        <span class="form__input-name form__input-name--text">Цена товара*</span>
        <input class="form__input" placeholder="Введите цену" type="number" name="good-price">
        <span class="form__input-name attention">Поле является обязательным</span>
      </label>
      <div class="form__button-wrapper">
        <button class="form__button form__button--shadow" type="submit">
          Добавить товар
        </button>
      </div>
    </div>
  </form>
</div>
</template>

<script>

export default ({
  setup() {

  },
})
</script>

<style lang="sass" scoped>
  $form__bg: #FFFEFB
  $placeholder: rgba(180, 180, 180, 0.5)
  $button__text-color: #B4B4B4
  $button__bg: #EEEEEE

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
    padding: 24px 24px
    background-color: $form__bg
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)

  .form-wrapper
    display: flex
    flex-direction: column
    max-width: 332px

  .form__input
    width: 100%
    padding: 10px 16px
    margin-bottom: 16px
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
    border: none
    border-radius: 4px

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
    background-color: $button__bg
    border: none
    border-radius: 10px
    cursor: pointer

  .form__button--shadow
    box-shadow: 0px 5px 0 rgba(0, 0, 0, 0.3)
    transition: all 0.1s ease-in-out
    &:active
      transform: translateY(5px)
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3)


</style>
