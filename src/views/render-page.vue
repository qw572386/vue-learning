<template>
  <div>
    <!-- <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item, index) in list" :key="`list_item_${index}`">{{ item.name }}</li>
    </ul> -->
    <list :list='list' :style="{color: 'red'}" :render="renderFunc"></list>
  </div>
</template>
<script>
import List from '_c/list'
export default {
  data () {
    return {
      list: [
        { name: 'qiwei' },
        { name: 'qw' }
      ]
    }
  },
  components: {
    List
  },
  methods: {
    handleClick (event) {
      console.log(event)
    },
    // renderFunc (h, name) {
    //   return h('i', {
    //     style: {
    //       color: 'prink'
    //     }
    //   }, name)
    // }
    renderFunc (h, name) {
      return (
        <i on-click='{this.handleClick}' style={{color: 'prink'}}>{name}</i>
      )
    }
  }
}
</script>
