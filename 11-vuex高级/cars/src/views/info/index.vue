<template>
  <div class="info">
      <div class="main">
        <div class="top">
                <div class="l" @click="$router.go(-1)">
                    &lt;
                </div>
                <div class="cen">
                    {{ obj.title }}
                </div>
                <div class="l">
                </div>
        </div>
        <div>
            <img :src="obj.img" alt="">
            <p>
                {{ obj.info }}
            </p>
        </div>
        <div>
            剩余数量 {{ obj.number }}
        </div>
      </div>
      <div class="fot" @click="addCar($route.params.id)">
          添加购物车 {{ carNum }}
      </div>
  </div>
</template>

<script>
import { mapState , mapMutations , mapGetters } from "vuex";
export default {
  name: '',
  data() { 
    return {

    }
  },
  computed: {
      ...mapState({
          obj : function(state){
            return state.car.list.find(ele => ele.id == this.$route.params.id)
        }
      }),
      ...mapGetters({
          carNum:"car/carNum"
      })
      
  },
  methods: {
     ...mapMutations({
         addCar:"car/addCar"
     }) 
  },
  created () {
      //this.$store.state
  }
 }
</script>

<style lang='scss' scoped>
.info{
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        flex: 1;
    }
    .fot{
        padding: 20px 0;
        border-top: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.top{
    display: flex;
    align-self: center;
    .l{
        width: 46px;
        height:46px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cen{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }
}
</style>