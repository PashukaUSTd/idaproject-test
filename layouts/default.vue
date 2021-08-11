<template>
<div>
  <main>
    <div class="container">
      <Nuxt />
    </div>
  </main>
</div>
</template>

<script>
export default ({})
</script>

<style lang="sass" scoped>
  .container
    max-width: 1440px
    padding: 0 32px
    margin: 0 auto
    @media (max-width: 550px)
      padding: 0 14px
</style>
