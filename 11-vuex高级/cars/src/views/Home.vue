<template>
  <div class="home">
    <ul>
      <router-link tag="li" :to="`/info/${item.id}`" v-for="item in list" :key="item.id">
        <img :src="item.img" alt=""> {{ item.title }} 
      </router-link>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState , mapMutations , mapGetters } from "vuex";
export default {
  name: 'home',
  computed: {
    ...mapState({
      list:(state) => state.car.list
    })
  },
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
  .home{
    ul{
      li{
        display: flex;
        align-items: center;
        padding:0 20px;
        margin: 20px 0;
        img{
          height: 34px;
          margin-right: 30px;
        }
      }
    }
  }
</style>