<template>
  <div class="catalogue__container">
    <header class="header">
      <h1 class="title">Добавление товара</h1>
      <Filters/>
    </header>
    <AddGoodsForm/>
    <GoodsCard :goods="this.$store.state.goods.goods"/>
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
  .header
    display: flex
    justify-content: space-between
    align-items: center

  .title
    width: 80%
</style>
