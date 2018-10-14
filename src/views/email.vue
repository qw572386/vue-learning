<template>
  <div class="email">
    <button @click="handleClick">click Me</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () {
    console.log(this.$bus)
  }
}
</script>
<style>
.email{
  border: 1px solid blue
}
</style>

