<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrik-icon">^</span>
    </div>
    <div v-show="showChild" class="a-submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name: 'ASubmenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>
<style lang="less">
.a-submenu{
  background: rgb(33, 35, 39);
  &-title{
    background: rgb(90, 92, 39);
    color: #ffffff;
    user-select: none;
    position: relative;
    .shrik-icon{
      position: absolute;
      right: 10px;
      top: 2px;
    }
  }
  &-child-box{
    overflow: hidden;
    padding-left: 20px
  }
  li{
    background: rgb(33, 35, 39);
  }
}
</style>
