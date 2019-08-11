<template>
  <div id="app">
   <li>
        <div class="top">
            <img :src="imgUrl" alt="">
        </div>
        <div class="cen">
            <div v-if="!isInputShow">
                {{ title }}
            </div>
            <input @blur="updateTitle(title)" v-focus v-if="isInputShow" type="text" v-model="title">
        </div>
        <div class="bot">
            <button @click="delete1(id)">
                删除
            </button>
            <button @click="updates">
                编辑
            </button>
            <button @click="goBigImg(imgUrl)">
                查看大图
            </button>
        </div>
    </li>
  </div>
</template>
<script>
export default {
  props:{
      id:String,
      title:String,
      imgUrl:String,
      "is-big-imgs-show":Boolean,
      bigImgUrl:String
  },
  data(){
      return {
          isInputShow:false,
          
      }
  },
  methods: {
                        delete1(val){
                            this.$emit("deleteitem",val)
                        },
                        updateTitle(val){
                            this.isInputShow = !this.isInputShow;
                            this.$emit("update:title",val)
                        },
                        updates(){
                            this.isInputShow = !this.isInputShow;
                            console.log(this.isInputShow)
                        },
                        goBigImg(val){
                            console.log(1231);
                            this.$emit('update:is-big-imgs-show',true);
                            this.$emit('update:bigImgUrl',val);
                        }
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
</style>

<style lang="scss" scoped>
//  scoped 当前的style里面的样式只能作用与当前组件
*{
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .clearfix:after {/* 给浮动元素的父级元素加上class='clearfix' */
            content: "";
            display: block;
            height: 0;
            clear: both;
        }
        .clearfix {
            zoom: 1;/* 在IE6/7中,利用zoom:1触发haslayout属性 */
        }
        ul{
           width: 900px;
           margin: 50px auto;
        }
        li{
            border: 1px solid red;
            width: 200px;
            float: left;
            margin: 20px;
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

