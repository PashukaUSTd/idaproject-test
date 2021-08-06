<template>
  <div class="catalogue__container">
    <AddGoodsForm/>
    <div class="goods">
      <GoodsCard/>
      <GoodsCard/>
      <GoodsCard/>
    </div>
  </div>
</template>

<script>
import AddGoodsForm from '../components/AddGoodsForm.vue'
import GoodsCard from '../components/GoodsCard.vue'

export default {
  components: {AddGoodsForm, GoodsCard},
}
</script>


<style lang="sass" scoped>
  .goods
    padding: 83px 16px 0 340px
</style>
