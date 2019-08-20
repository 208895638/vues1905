<template>
  <div class="">

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: '',
  data() { 
    return {

    }
  },
  methods: {
    init(){
      // 正在热映
      axios.get(`http://59.110.138.169/api/douban/movie/in_theaters`)
      .then((val)=>{
        console.log(val.data)
      })
    }
  },
  created () {
    this.init();
  }
 }
</script>

<style lang='scss' scoped>
</style>