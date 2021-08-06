<template>
  <select class="filter position-absolute">
    <option class="filter__option" value="0">
      По умолчанию
    </option>
    <option class="filter__option" value="1">
      По умолчанию
    </option>
    <option class="filter__option" value="2">
      По умолчанию
    </option>
  </select>
</template>


<script>
export default {}
</script>

<style lang="sass" scoped>
  $item__bg: #FFFEFB
  $input__box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
  $placeholder: rgba(180, 180, 180, 0.7)

  .filter
    background-color: $item__bg
    box-shadow: $input__box-shadow
    border: none
    border-radius: 4px
    padding: 10px 24px 10px 16px
    font-weight: 400
    font-size: 12px
    line-height: 15px
    color: $placeholder

  .position-absolute
    position: absolute
    top: 31px
    right: 33px

</style>
