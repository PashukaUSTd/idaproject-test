<template>
  <div class="catalogue__container">
    <AddGoodsForm/>
    <ul class="goods">
      <GoodsCard v-for="(good, index) in goods" :key="index"/>
    </ul>
    <Filters/>
  </div>
</template>

<script>
import AddGoodsForm from '../components/AddGoodsForm.vue'
import GoodsCard from '../components/GoodsCard.vue'
import Filters from '../components/Filters.vue'

export default {
  components: {AddGoodsForm, GoodsCard, Filters},
}
</script>


<style lang="sass" scoped>
  .goods
    position: relative
    display: flex
    flex-wrap: wrap
    margin-left: 332px
    padding: 0
    padding-top: 83px
    width: calc(100% - 332px)
    list-style: none
</style>
