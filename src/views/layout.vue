<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger v-model="collapsed">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handlCollapsed" type="md-menu" :size="32"></Icon>
        </Header>
        <Content class="conten-con">
          <Card class="page-card" shadow>
            <router-view></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from '_c/side-menu'
export default {
  data() {
    return {
      collapsed: false,
      menuList: [
        {
          title: '1111',
          name: 'menu1',
          icon: 'ios-alarm'
        },
        {
          title: '2222',
          name: 'menu2',
          icon: 'ios-alarm'
        },
        {
          title: '3333',
          name: 'menu3',
          icon: 'ios-alarm',
          children: [
            {
              title: '3333-11',
              name: 'menu3-1',
              icon: 'ios-alarm'
            },
            {
              title: '3333-22',
              name: 'menu3-2',
              icon: 'ios-alarm',
              children: [
                {
                  title: '3333-22-11',
                  name: 'menu3-2-1',
                  icon: 'ios-alarm'
                },
                {
                  title: '3333-22-22',
                  name: 'menu3-2-2',
                  icon: 'ios-alarm'
                }
              ]
            }
          ]
        },
      ]
    }
  },
  components: {
    SideMenu
  },
  computed: {
    triggerClasses() {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
  },
  methods: {
    handlCollapsed() {
      this.collapsed = !this.collapsed
    }
  },
}
</script>

<style lang="less" scoped>
.layout-wrapper, .layout-outer{
  height: 100%;
  .header-wrapper{
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
    padding: 0 23px;
    .trigger-icon{
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate{
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
    }
  }
  .conten-con{
    padding: 10px;
    .page-card{
      min-height: ~"calc(100vh - 84px)"
    }
  }
}

</style>
