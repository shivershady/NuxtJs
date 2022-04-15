<template>
  <div >
    <div v-for="( dataItem,dataIndex ) in data" :key="dataIndex">
    <InputRadio v-if="dataItem.type===1" :content="dataItem.type===1?dataItem:''" :indexContent="dataIndex"></InputRadio>
    <Texarea v-if="dataItem.type===2" :content="dataItem.type===2?dataItem:''" :indexContent="dataIndex"></Texarea>
    <InputCheckbox v-if="dataItem.type===3" :content="dataItem.type===3?dataItem:''" :indexContent="dataIndex"></InputCheckbox>
    <Select v-if="dataItem.type===4" :content="dataItem.type===4?dataItem:''" :indexContent="dataIndex"></Select>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['data'])
  },
}
</script>
