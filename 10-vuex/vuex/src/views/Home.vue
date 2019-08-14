<template>
  <div class="home">
    <!-- {{ name }} -->
    <ul>
      <li v-for="item in list" :key="item.name"> 
        {{ item.name }} {{ age }} 人名币{{ getRMB }} = {{ getPrice }} 美元 
        <button @click="updateAge">+</button><button @click="syncUpdate">异步</button>
        <button @click="updateRMB">更改人名币</button>
      </li>
    </ul>
    <ul>
      <li v-for="item in lists" :key="item.id"> {{ item.id }} </li>
    </ul>
    <button @click="getmes">获取ajax数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
   
  },
  computed: {
    lists(){
       return this.$store.state.list
    },
    age(){
      // 获取到了定义在store.js里面的属性
      return this.$store.state.age
    },
    getRMB(){
      return this.$store.state.price
    },
    getPrice(){
      return this.$store.getters.getPrice
    }
  },
  methods: {
    getmes(){
      this.$store.dispatch("getMes");
    },
    updateRMB(){
      this.$store.commit("updatermb");
    },
    updateAge(){
      /// 非常不推荐 
      // 共享的数据不在一个组件里面使用 
      //this.$store.state.age = 10
      // commit提交的参数 叫做 载荷 vuex起的名称
      this.$store.commit("update",[30,40]);
    },
    syncUpdate(){
      // 分发
      this.$store.dispatch("upt1");
    }
  },
  data () {
    return {
      name:"王五",
      list:[
        {
          name:"啤酒"
        },
        {
          name:"黄酒"
        },
        {
          name:"白酒"
        },
        {
          name:"葡萄酒"
        },
      ]
    }
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
