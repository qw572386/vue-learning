<template>
  <div>
    <!-- <a-input :value="stateValue" @input="handlStateValueChange" /> -->
    <a-input v-model="stateValue" />
    <p>{{ stateValue }} last letter is : {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <p>
      appName: {{ appName }}
      <br />
      appNameWithVersion: {{ appNameWithVersion }}
      <br />
      userName: {{ userName }}
      <br />
      userName first letter is: {{ firstLetter }}
    </p>
    <button @click="hanleChangeAppName">修改appName</button>
    <button @click="hanleChangeUserName">修改userName</button>
    <button @click="registerModule">动态注册模块</button>

    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
    <P>{{ appVersion }}</P>
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
   ...mapState({
     appName: state => state.appName,
     userName: state => state.user.userName,
     appVersion: state => state.appVersion,
    //  todoList: state => state.todo ? state.todo.todoList : []
    // user模块下todo
     todoList: state => state.user.todo ? state.user.todo.todoList : [],
    //  stateValue: state => state.stateValue,
   }),
   stateValue: {
     get () {
       return this.$store.state.stateValue
     },
     set (value) {
        this.SET_STATE_VALUE(value)
     }
   },
  // ...mapState([
  //   appName
  // ])
   appName () {
      return this.$store.state.appName
    },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    ...mapGetters([
      // 'appNameWithVersion',
      'firstLetter'
    ]),
    inputValueLastLetter () {
      return this.inputValue.substr(-1,1)
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations ([
      'SET_APP_NAME',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions ([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    hanleChangeAppName () {
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      // this.SET_APP_NAME('newAppName')
      // this.$store.commit('SET_APP_VERSION')
      this.updateAppName()
    },
    hanleChangeUserName () {
      // this.SET_USER_NAME('VUE-LEARN')
      // this.$store.dispatch('updateAppName', 'vue-course')
    },
    registerModule () {
      // 将todo注册到全局
      // this.$store.registerModule('todo', {
      //   state: {
      //     todoList: [
      //       '学习mutations',
      //       '学习actions',
      //     ]
      //   }
      // })
      // 将todo注册到user模块中
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions',
          ]
        }
      })
    },
    handlStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>

