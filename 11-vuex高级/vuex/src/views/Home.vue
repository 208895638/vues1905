<template>
  <div class="home"> 
    {{ num }} {{ num1 }} **** {{num2}} {{ num3 }} *** {{ addNums  }}
    <!-- {{ num }}  {{ count }} {{ age }} {{ name }} {{ price }}
    <div>
      <button @click="increment1(3)">+</button>
      <button @click="add1">异步增加</button>
    </div> -->
    <button @click="syncAddNum">+</button>
  </div>
</template>
<script>
import { mapState , mapMutations , mapActions , mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      //   箭头函数 不能使用this 普通函数  
      num2:(state)=>{
        console.log(state)
        return state.home1.num
      },
      num3(state){
        return state.home1.num
      }
    }),
    ...mapGetters({
      addNums:"home1/addNums"
    }),
    num(){
      // 使用模块化之后 访问某个模块仓库里面的属性 需要在前面加一个模块名称
      return this.$store.state.home1.num
    },
    num1(){
      // home1/addNums
      // localStorage.getItem("user");
      // localStorage["user"]
      return this.$store.getters["home1/addNums"]
    }
  },
  methods: {
    ...mapMutations({
      addNum:"home1/addNum"
    }),
    ...mapActions({
      syncAddNum:"home1/syncAddNum"
    }),
    add(){ 
      // about/addNum home1/addNum

      ///this.$store.commit("home1/addNum");
      this.$store.dispatch("home1/syncAddNum");
    }
  },
  created () {
    console.log(this.$store);
  }
}
</script>
<!--  <script> 
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapState , mapMutations , mapActions , mapGetters } from "vuex";
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
        school:"不凡"
    }
  },
  methods: {
    ...mapMutations({
      increment : "increment",  // this.increment(); this.$store.commit("increment"); 
      increment1 : "increment1" // this.increment1(1)
    }),
    ...mapActions({
      add1:"add1" // this.$store.dispatch("add1");  this.add1();
    }),
    // 没有用mapMutations之前 如果需要调用store.js里面的方法
    add(){
      this.$store.commit("increment");
      // this.$store.dispatch("increment");
    }
  },
  computed: {
    
    ...mapState({
      count:"count", ///  字符串的形式
      age : (state)=>{  // 第二种 箭头函数 
        console.log(this,"箭头函数this");
        return state.age +"岁";
      },
      name:function(state){ // 普通函数 
        console.log(this.school,"普通函数this");
        return state.name
      }
    }),
    ...mapGetters({
        // price 自己定义的 最好与定义getters里面的函数一样 
        price:"price"
    }),
    num(){
      return this.$store.state.count
    }
  },
  created () {
    console.log();
  }
}
</script> 
-- >
