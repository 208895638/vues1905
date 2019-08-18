<template>
  <div class="home">
    <ul>
      <li v-for="item in list" :key="item.id">{{item.name}} <button @click="add(item)">添加到购物车</button></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import mock from "mockjs";
var random = mock.Random;
var img = random.dataImage('200x100');
console.log(img,1111)
import { mapState , mapMutations , mapGetters } from "vuex"
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      list:"list"
    })
  },
  methods: {
    ...mapMutations({
      add:"addCar"
    })
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>