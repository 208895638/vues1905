import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import car from "./modules/car"
import user from "./modules/user"
export default new Vuex.Store({
  modules: {
    car,
    user
  }
})
