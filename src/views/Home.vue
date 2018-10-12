<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到argu</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
    }
  }
}
</script>
