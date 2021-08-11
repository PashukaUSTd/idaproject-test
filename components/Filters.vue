<template>
<div class="filter-container" :class="{'focused': focused}">
  <select class="filter" v-model="selected" @change="sort()" @focus="focused = true" @blur="focused = false">
    <option class="filter__option" value="0" disabled>
      По умолчанию
    </option>
    <option class="filter__option" v-for="option in options"
     :value="option.id" :key="option.id">
      {{ option.title }}
    </option>
  </select>
</div>
</template>


<script>
import options from '../static/data/options'

export default {
  data() {
    return {
      selected: '0',
      focused: false,
    }
  },
  methods: {
    sort() {
      this.$store.commit('goods/sortByProp', this.selectedOption);
    }
  },
  computed: {
    options() {
      return options;
    },
    selectedOption() {
      return this.options.filter(e => e.id === this.selected).find(e => e.id)
    },
  }
}
</script>

<style lang="sass" scoped>
  $item__bg: #FFFEFB
  $input__box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
  $placeholder: rgba(180, 180, 180, 0.7)

  .filter-container
    display: inline-block
    padding: 10px 24px 10px 16px
    background-color: $item__bg
    box-shadow: $input__box-shadow
    border-radius: 4px
    cursor: pointer
    @media (max-width: 550px)
      padding: 10px 8px 10px 4px

  .focused
    box-shadow: 0 0 0 1pt #FF8484

  .filter
    border: none
    border-radius: 4px
    font-weight: 400
    font-size: 12px
    line-height: 15px
    color: $placeholder
    cursor: pointer
    &:focus
      outline: none
    @media (max-width: 450px)
      font-size: 10px
      line-height: 12px
</style>
