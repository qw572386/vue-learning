<template>
  <div>
    <a-input @input="handleInput" />
    <p>{{ inputValue }} last letter is : {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <p>
      <!-- appName: {{ appName }}
      <br />
      appNameWithVersion: {{ appNameWithVersion }} -->
      <br />
      userName: {{ userName }}
      <br />
      userName first letter is: {{ firstLetter }}
    </p>
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters } from 'vuex'
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
     userName: state => state.user.userName
   }),
  // ...mapState([
  //   appName
  // ])
   // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    ...mapGetters('user', [
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
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

