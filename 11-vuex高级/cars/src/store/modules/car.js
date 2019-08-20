
import mock from "mockjs";
var mocks = mock.Random;
var list = []
for(var i = 0;i<10;i++){
    var price = mock.mock({
        "price|1-100": 100
      });
    var num = mock.mock({
        "number|1-5": 100
    })
    var obj = {
        id:mocks.guid(),
        img:mocks.dataImage('200x100'),
        ...num,
        title:mocks.ctitle(),
        info:mocks.cparagraph(),
        ...price,
    };

  list.push(obj)
}


export default {
    state: { 
        list:list,
        // 购物车
        carList:[],
    },
    mutations: { 
      // id对应的商品添加进购物车
      addCar(state,id){
          var item = state.list.find(ele => ele.id == id);
          // 购物车里面的商品是否跟传进去的商品相同
          var carItem = state.carList.find(ele => ele.infos.id == id);
          var obj = {
            nums:1,
            infos:item,
            isChecked:false
          }
          console.log(1)
          if(item.number <= 0){

          }else{
            if(carItem != undefined){
              carItem.nums ++ ;
            }else{
              state.carList.push(obj);
            }
            item.number -- ;
          }
          //  如果购物车有相同商品
         
          
      },
      //删减商品
      inc(state,id){

        var item = state.list.find(ele => ele.id == id);
        // 购物车里面的商品是否跟传进去的商品相同
        var carItem = state.carList.find(ele => ele.infos.id == id);

        if(carItem.nums <= 0){

        }else{
          
            item.number ++ ;
          
          carItem.nums -- ;
        }
        //  如果购物车有相同商品
       
        
    },
      checks(state){
        var bol = state.carList.every(ele => ele.isChecked == true);
        if(bol){
          state.carList.forEach(ele => ele.isChecked = false);
        }else{
          state.carList.forEach(ele => ele.isChecked = true);
        }
      }
    },
    actions: { },
    getters: { 
      //购物车商品数量
      carNum(state){
        return state.carList.reduce(function(total , current){
          return total + current.nums
        },0)
      },
      allPrice(state){
        return state.carList.reduce(function(total, current){
          if(current.isChecked){
            return total = total + current.nums*current.infos.price
          }else{
            return total
          }
        },0)
      },
      allChecked(state){
        var bol = state.carList.every(ele => ele.isChecked == true);
        return bol
      }
    },
    namespaced: true
  }