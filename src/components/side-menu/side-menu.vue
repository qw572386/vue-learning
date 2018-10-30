<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu width="auto" theme="dark" v-show="!collapsed" @on-select="handleSelect">
      <template v-for="item in list">
        <re-submenu 
          v-if="item.children" 
          :key="`menu_${item.name}`" 
          :name="item.name"
          :parent="item">
        </re-submenu> 
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon" />
          {{ item.title }}
        </menu-item>
      </template>
    </Menu>
    <div v-show="collapsed" class="drop-wrapper">
      <template v-for="item in list">
        <re-dropdown @on-select="handleSelect" v-if="item.children" :show-title="false" icon-color="#fff" :key="`drop_${item.name}`" :parent="item"></re-dropdown>
        <Tooltip v-else transfer :content="item.title" placement="right" :key="`drop_${item.name}`">
          <span class="drop-menu-span" @click="handleClick(item.name)">
            <Icon :type="item.icon" :size="20" color="#fff"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
 
<script>
  import ReSubmenu from './re-submenu.vue'
  import ReDropdown from './re-dropdown.vue'
  export default {
    name: 'SideMenu',
    props: {
      collapsed: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default: () => []
      }
    },
    components: {
      ReSubmenu,
      ReDropdown
    },
    methods: {
      handleSelect (name) {
        console.log(name)
      },
      handleClick (name) {
        console.log(name)
      }
    }
  }
</script>

<style scoped lang="less">
.side-menu-wrapper{
  width: 100%;
  .drop-menu-span, .ivu-tooltip{
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
  .drop-wrapper > .ivu-dropdown{
    display: block;
    padding-top: 5px;
    margin: 0 auto;
  }
  .drop-wrapper > .ivu-dropdown > .ivu-dropdown-rel{
    text-align: center;
  }
}
</style>