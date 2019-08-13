<template>
  <div class="home">
    首页内容
    <br>
    <br>
    <br>
    <ul>
      <router-link :to="`/info/${item.id}`" v-for="item in list" tag="li" :key="item.id">{{ item.text }}</router-link>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      list:[
        {
          text:"商品列表1",
          id:"1"
        },
        {
          text:"商品列表2",
          id:"2"
        },
        {
          text:"商品列表3",
          id:"3"
        },
      ]
    }
  }
}
</script>
