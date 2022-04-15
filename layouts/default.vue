<template>
  <div id="app">
    <Nuxt/>
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
