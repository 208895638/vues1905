import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 假设这个数据是从后台获取的
    carList:[
    ],
    list:[
      {
        name:"白酒",
        price:100,
        id:1
      },
      {
        name:"葡萄酒",
        price:90,
        id:2
      },
      {
        name:"红酒",
        price:80,
        id:3
      },
      {
        name:"啤酒",
        price:70,
        id:4
      },
    ]
  },
  mutations: {
    // 添加商品到购物车
    addCar(state,val){ // val是传过来的商品数据
      // 这是购物车需要的数据 商品名称 商品价格 商品数量 商品id
      // 
      var item = state.carList.find(ele =>ele.id == val.id);
      if(item){
        // 有相同的商品 就不添加进购物车 对数量加一下
        item.num ++ ;
      }else{
        var obj = {
          name:val.name,
          price:val.price,
          num : 1,
          id:val.id,
          isChecked:false
        };
        // 把商品添加进购物车
        state.carList.push(obj);
      }
      
    },
    // 全选与非全选
    updateChecked(state){
      var bool = state.carList.every(ele => ele.isChecked == true);
      if(bool){ // 为true就是每一项都勾选 点击全选的时候把每一项取消选中
        state.carList.forEach(ele => ele.isChecked = false);
      }else{
        state.carList.forEach(ele => ele.isChecked = true);
      }
    },
    // 增加商品数量
    add(state,id){
      var item = state.carList.find(ele => ele.id == id);
      item.num ++;
    },
    // 减少商品数量
    inc(state,id){
      var item = state.carList.find(ele => ele.id == id);
      item.num --;
    }
  },
  getters:{
    // 通过getters来监听购物车input的变化
    // 不能直接更改计算属性
    isAllChecked(state){
      var bool = state.carList.every(ele => ele.isChecked == true);
      // 如果为true 代表购物车里面的checkbox全部勾选  
      // 如果为false代表至少一个没勾选 
      return bool
    },
    // allPrice计算的总价
    allPrice(state){
      // 计算选中商品的价格
      return state.carList.reduce(function(total , current){
        if(current.isChecked == true){
          // 价格 商品数量乘以商品价格
          return  total = total + current.price*current.num
        }
        return total
      },0)
    }
  },
  actions: {

  }
})
