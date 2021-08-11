<template>
  <div class="catalogue__container">
    <Conformation/>
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
import Conformation from '../components/Conformation.vue'

export default {
  components: {AddGoodsForm, GoodsCard, Filters, Conformation},
}
</script>


<style Conformation lang="sass" scoped>
  .header
    display: flex
    justify-content: space-between
    align-items: center

  .title
    width: 80%
    @media (max-width: 550px)
      font-size: 24px

</style>
