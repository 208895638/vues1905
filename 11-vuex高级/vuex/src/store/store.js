import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from "./modules/home"
import about from "./modules/about"
const store = new Vuex.Store({
    // state: {
    //     count: 1,
    //     age:30,
    //     name:"张三"
    // },
    // mutations: {
    //     increment (state) {
    //         state.count++ // this.$store.commit("increment")
    //     },
    //     increment1 (state,val) {
    //         state.count = state.count + val // this.$store.commit("increment")
    //     }
    // },
    // // ajax  
    // actions:{

    //     add1({state}){
    //         setTimeout(()=>{
    //             state.count = state.count + 10
    //         },2000)
    //     }
    // },
    // getters:{
    //     price(state){
    //         return state.count + "元"
    //     }
    // },
    // modules 模块 
    modules:{
        // about 对应about页面的vuex
        about:about, // + 3
        // home1 home页面的vuex
        home1:home, // + 2 
        
    }
})
export default store