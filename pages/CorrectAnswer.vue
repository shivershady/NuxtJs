<template>
<div>

</div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "CorrectAnswer",
  computed: {
    ...mapState(['data','answersUser'])
  },
}
</script>

<style scoped>

</style>
