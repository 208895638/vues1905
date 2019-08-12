<template>
  <div class="">
      <router-link to="/home/weather/bj" tag="button">北京</router-link>
      <router-link to="/home/weather/sh" tag="button">上海</router-link>
      <router-link to="/home/weather/zz" tag="button">郑州</router-link>
      <!-- 容器 存放的是路由 -->
      <!-- router-view存放子路由的容器 -->
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