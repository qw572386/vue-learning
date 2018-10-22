<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ASubmenu'
}
</script>
<style lang="less">
.a-menu{
  //
  & *{
    list-style: none
  }
  ul{
    margin: 0;
    padding: 0;
  }
  
}
</style>
