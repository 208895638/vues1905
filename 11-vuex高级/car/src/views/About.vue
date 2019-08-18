<template>
  <div class="about">
    <h1>购物车</h1>
    <ul>
      <li v-for="item in carList" :key="item.id">
        <input v-model="item.isChecked" type="checkbox">
        商品名称:{{ item.name }} 
        商品价格:{{ item.price }} 
        商品数量:<span>
          <button :disabled="item.num == 0"  @click="inc(item.id)">-</button>
          {{ item.num }}
          <button  @click="add(item.id)">+</button>
        </span>
        </li>
    </ul>
    <div>
      <span>全选<input type="checkbox" :checked="isAllChecked" @click="updateChecked"></span> 
      <span>价格:{{ allPrice }}元</span>
      
    </div>
  </div>
</template>
<script>
import { mapState , mapMutations , mapGetters } from "vuex"
export default {
  computed: {
    ...mapState({
      carList:"carList"
    }),
    ...mapGetters({
      isAllChecked:"isAllChecked",
      allPrice:"allPrice"
    })
  },
  methods: {
    ...mapMutations({
      updateChecked:"updateChecked",
      add:"add",
      inc:"inc"
    })
  }
  
}
</script>