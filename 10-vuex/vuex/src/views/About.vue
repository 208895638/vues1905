<template>
  <div class="about">
    <!-- <h1>This is an about page</h1>
    <button @click="update">修改name</button> -->
    <h2>购物车页面 {{ age }}</h2>
    购物车商品:
  </div>
</template>
<script>
export default {
  methods: {
    update(){
      this.$root.name = "李四";
    }
  },
  computed: {
    age(){
      // 获取到了定义在store.js里面的属性
      return this.$store.state.age
    }
  },
  created () {
    
  }
}
</script>