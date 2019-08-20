<template>
  <div class="home">
    <ul>
      <router-link :to="`/about/${item.id}`" v-for="item in list" :key="item.id" tag="li">
        {{ item.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { Loading } from 'element-ui';
var loadings;
axios.defaults.baseURL = "http://59.110.138.169/api/douban/movie";
// axios.defaults.timeout = 2000;
// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发起请求请做一些业务处理  
    // 如开启loading  对请求的参数做处理 添加token等
    // 例  在请求的时候开启elementui的loading 
    // 在请求的时候开启loading
    // Loading.service elementui开启弹窗组件的默认写法
  loadings = Loading.service({ fullscreen: true });
  // if(config.method == "post"){
  //     config.data = qs.stringify(config.data);
  // }
  // console.log(config)
    return config;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});
//响应拦截器
axios.interceptors.response.use(function (config) {
    // 在请求之后做处理 如关闭loading
   loadings.close();
   console.log(config)
    return config.data;
}, function (error) {
    // 对请求失败做处理
    loadings.close();
    return Promise.reject(error);
});
export default {
  name: 'home',
  data () {
    return {
      list:""
    }
  },
  methods: {
    init(){
      var item = axios.get(`/coming_soon`,{
      // 最终请求的地址 会把请求的参数拼接到请求地址里面 http://59.110.138.169/api/douban/movie/top250?start=2&limit=5
        params:{ // 
          start:1,
          limit:10
        }
      });
      item.then((val)=>{
        this.list = val.data
        console.log(val,this,11111);
      })
    }
  },
  created () {
    // axios.get就代表一个get请求
    // var item = axios.get("http://59.110.138.169/api/douban/movie/top250");
    // axios请求附带参数
    // 1. 在请求地址后面拼接 ?id=""&name=""
    // 2. get请求
    // var item = axios.get(`http://59.110.138.169/api/douban/movie/top250?start=2&limit=5`);
    // var item = axios.get(`http://59.110.138.169/api/douban/movie/top250`,{
    //   // 最终请求的地址 会把请求的参数拼接到请求地址里面 http://59.110.138.169/api/douban/movie/top250?start=2&limit=5
    //   params:{ // 
    //     start:1,
    //     limit:10
    //   }
    // });
    // item.then((val)=>{
    //   this.list = val.data.data
    //   console.log(val,this);
    // })
    // 1291561
    this.init();
  }
}
</script>
