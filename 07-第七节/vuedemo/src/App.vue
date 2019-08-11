<template>
  <div id="app">
    <ul class="clearfix">
        <list v-for="item in goodsList" 
        @deleteitem = "deletes"
        :key="item.id" 
        :title.sync="item.title"
        :img-url="item.imgUrl"
        :is-big-imgs-show.sync = "isBigImgShow"
        :big-img-url.sync = "bigPic"
        :id="item.id"></list>
          
    </ul>
    <div class="mask" v-if="isBigImgShow" @click.stop="isBigImgShow = !isBigImgShow">
        <img :src="bigPic" alt="" @click.stop="">
      </div>
  </div>
</template>
<script>
// @以src为根目录
import list from "@/components/list.vue";
import mock from "mockjs";
export default {
  components: {
    list
  },
  data(){
      return {
          goodsList:"",
          bigPic:"",
          isBigImgShow:false
      }
  },
  methods:{
                deletes(val){
                    var index = this.goodsList.findIndex(ele => ele.id == val);
                    this.goodsList.splice(index , 1);
                }
            },
  created () {
     var mocks = mock.Random;
        var img = mocks.dataImage('200x100');
        var goodsList = [];
        for(var i = 0 ; i< 5;i++){
            let obj = {};
            obj.id = mocks.guid();
            obj.imgUrl = mocks.dataImage('200x100');
            obj.title = mocks.ctitle();
            goodsList.push(obj);
        };
      // console.log(goodsList);
      this.goodsList = goodsList
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.mask{
            position: fixed;
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.6);
            top: 0;
            left: 0;
        }
        .mask img{
            width: 80%;
        }
</style>
<style lang="scss" scoped>

</style>
