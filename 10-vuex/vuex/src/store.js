import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/api/index.js"
Vue.use(Vuex) 
 
// 引入vuex 再注册vuex插件

export default new Vuex.Store({
  // state 全局的数据仓库 需要共享的数据都共享到state里面
  state: { // this.$store.state.age
    age:50,
    price:100,
    list:""
  },
  //  mutations 可以理解为methods 在mutations里面可以更改state里面的数据 
  //  mutations 里面的函数是同步函数 
  mutations: { // 在其他页面执行这个函数 this.$store.commit("函数名称")
    updatermb(state){
      state.price = state.price + 100;
    },
    update(state,val,val1){  // update 函数的参数就是state 
      console.log(val,val1)
      state.age = val[0] + val[1]; // 在其他页面调用写在mutation里面的函数 this.$store.commit("update")
    },
    updateAge(state){
      state.age = 80;
    }
  },
  // 异步函数 actions可以理解为methods 但是actions里面的函数通常都是一些异步的函数 ajax 
  actions: { // 调用action里面的方法 通过 this.$store.dispatch("函数名称")  把dispatch 叫做分发  
    upt(context){ // context 是一个对象
      console.log(context); // this.$store.dispatch("upt");
      setTimeout(()=>{
        // context.commit("updateAge");
        context.state.age = 90;
      },1000)
      
    },
    upt1({commit,state}){
      setTimeout(()=>{
        //commit("updateAge");
        state.age = 90;
      },2000)
      
    },
    getMes({state}){
      api.get("/api/ajax/user/list")
      .then((val)=>{
        state.list = val.data.data.list;
        console.log(val.data.data.list)
      })
    }
  },
  // 可以想象成计算属性 
  getters:{ // getters相当于vuex的计算属性  this.$store.getters.函数名
    // 把人民币转换成美元
    getPrice(state){
      return state.price*0.1426; // this.$store.getters.getPrice
    }
  },
  modules:{

  }
})
