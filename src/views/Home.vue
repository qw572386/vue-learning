<template>
  <div class="home">
    <b>{{ food }}</b>
    <img :src="url">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到argu</button>
    <button @click="getInfo" :style="{ background: bgcolor }">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'
export default {
  name: 'home',
  data () {
    return {
      url: '',
      bgcolor: ''
    }
  },
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    // next()
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave(to, from, next) {
    //has access to `this` component instance
    const leave = confirm('您确定要离开吗？')
    if (leave) next()
    else next(false)
  },
  methods: {
    handleClick (type) {
      if (type === "back") {
        this.$router.back()
      } else if (type === 'push') {
        this.$router.push('/parent')
      } else if (type === 'replace'){
        const name = 'qiwei';
        this.$router.replace({
          // name: 'argu',
          // // query: {
          // //   name: 'qiwei'
          // // }
          // params: {
          //   name: 'qiwei'
          // }
          path: `/argu/${ name }`
        })
      }
    },
    getInfo () {
      getUserInfo().then(res => {
        console.log('res: ', res.data)
        this.url = res.data.img
        this.bgcolor = res.data.color
      })
    }
  }
}
</script>
