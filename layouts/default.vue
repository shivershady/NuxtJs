<template>
  <div id="app">
    <Header></Header>
    <Nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import { feeds } from '~/common/api'
export default {
  name: "default",
  computed: {
    feeds: () => feeds
  }
}
</script>

<style scoped>

</style>
