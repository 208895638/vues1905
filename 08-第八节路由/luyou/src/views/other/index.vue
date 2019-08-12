<template>
  <div class="">
      <!-- 手机点餐 | 手机外卖 | 网络预定 -->
      <router-link to="/other/dc">手机点餐</router-link>|
      <router-link to="/other/wm">手机外卖</router-link>|
      <router-link to="/other/yd">网络预定</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang='scss' scoped>
</style>