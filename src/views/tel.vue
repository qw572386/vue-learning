<template>
  <div class="tel">
    {{ message }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', msg => {
      this.message = msg
    })
  }
}
</script>
<style>
.tel{
  border: 1px solid red
}
</style>
