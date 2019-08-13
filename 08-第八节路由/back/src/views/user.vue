<template>
  <div class="">
      个人信息页面
      <br>
        <router-link to="/user/icon" tag="button">修改头像</router-link>
        <router-link to="/user/phone" tag="button">修改电话号码</router-link>
      <!-- <button>修改头像</button>
      <button>修改电话号码</button> -->
      <!-- 承载路由的容器 -->
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