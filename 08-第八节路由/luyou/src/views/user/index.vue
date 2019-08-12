<template>
  <div class="">
      use页面
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  created () {
      ///console.log(window.location.href.split("?"))
      console.log(this.$route)
  }
 }
</script>

<style lang='scss' scoped>
</style>