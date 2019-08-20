<template>
  <div class="">
      <button @click="add1">
          添加
      </button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://59.110.138.169/api/douban/movie";
import qs from "qs";
// 请求拦截器
axios.interceptors.request.use(function (config) {
    if(config.method == "post"){
        config.data = qs.stringify(config.data);
    }
    console.log(config,111)
    return config;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});
//响应拦截器
axios.interceptors.response.use(function (config) {
    
    return config.data;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});
export default {
  name: '',
  data() { 
    return {

    }
  },
  methods: {
      add1(){
          axios.all([this.top()])
          .then((val)=>{
              // val 返回的是一个数据 分别对应上面的请求
              console.log(val)
          })
      },
      add(){
          // post
          // post请求如果附带参数 那么需要附带的参数用qs.stringify转一下
        // var obj = {
        //     name:"张飞1",
        //     age:10,
        //     sex:"女", // 
        //     tel:123,
        //     address:"不凡1",
        //     school:"不凡1",
        // }
        // axios.post("http://59.110.138.169/api/ajax/user/save",qs.stringify(obj))
      },
      // 一次执行多次ajax请求
        top(){
            // top 250  http://59.110.138.169/api/douban/movie
            //return axios.post("/top250")
            var obj = {
                name:"张飞2",
                age:10,
                sex:"女", // 
                tel:123,
                address:"不凡2",
                school:"不凡2",
            }
            axios.post("http://59.110.138.169/api/ajax/user/save",obj)
        },
        intheaters(){
            // 正在热映
            return axios.get("/in_theaters")
        }
  }
 }
</script>

<style lang='scss' scoped>
</style>