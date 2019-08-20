<template>
  <div class="car">
      购物车
      <div class="main">
        <ul>
          <li v-for="item in carList" :key="item.infos.id"> 
            <div>
              <input type="checkbox" v-model="item.isChecked">
            </div>
            <div class="c">
              <p>
                {{item.infos.title}}
              </p>
              <p>
                单价{{ item.infos.price  }}元
              </p>
            </div>
            <div>
              <button  @click="inc(item.infos.id)">-</button>
                {{ item.nums }}
              <button @click="addCar(item.infos.id)"> +</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="bot">
        <div>
          <!-- v-model v-bind -->
          全选<input type="checkbox" :checked="allChecked" @click="checks">
        </div>
        <div>
          总价 {{ allPrice }}
        </div>
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
      carList:(state)=> state.car.carList
    }),
    ...mapGetters({
      allPrice:"car/allPrice",
      allChecked:"car/allChecked"
    })
  },
  methods: {
    ...mapMutations({
      checks:"car/checks",
      addCar:"car/addCar",
      inc:"car/inc"
    })
  }
 }
</script>

<style lang='scss' scoped>
.car{
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    ul{
      width: 90%;
      margin: 0 auto;
      li{
        display: flex;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
        .c{
          flex: 1;
          display: flex;
          align-items: center;
          padding-left: 20px;
          p:nth-child(2){
            color: red;
          }
        }
      }
    }
  }
  .bot{
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>