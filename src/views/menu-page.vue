<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-submenu>
        <div slot="title">333</div>
        <a-menu-item>333-1</a-menu-item>
        <a-menu-item>333-2</a-menu-item>
        <a-submenu>
          <div slot="title">333-3</div>
          <a-menu-item>333-3-1</a-menu-item>
          <a-menu-item>333-3-2</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_ite_${index}`">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="`menu_ite_${index}`" :parent="item"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from '_c/menu'
import ReSubmenu from './re-submenu'
const { AMenu, AMenuItem, ASubmenu } = menuComponents
export default {
  name: 'menu_page',
  components: {
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '111'
        },
        {
          title: '222'
        },
        {
          title: '333',
          children: [
            {
              title: '333-1'
            },
            {
              title: '333-2',
              children: [
                {
                  title: '333-2-1'
                },
                {
                  title: '333-2-2'
                }
              ]
            }
          ]
        },
      ]
    }
  }
}
</script>
<style lang="less">
.menu-box{
  width: 300px;
  height: 400px;
}
</style>

