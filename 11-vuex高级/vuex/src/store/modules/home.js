
const moduleA = {   // moduleA
    namespaced: true,
    // 如果不加namespaced 只有state是模块化的 其他的诸如 mutations actions  getters
    // 加了之后全部都是模块化 访问的时候需要在访问的某个属性或方法加模块名称
    state: { 
        // 模块之后的写法 this.$store.state.home1.num
        num:2 ,
        iptVal:""
    },
    mutations: {  
        addNum(state){
            // 模块之后的写法  this.$store.commit("home1/addNum");
            state.num += 2  // 调用的时候执行 this.$store.commit('addNum')
        },
        updatedIptVal (state,val) {
            state.iptVal = val;
        }
    },
    actions: { 
        syncAddNum(context,val){
            setTimeout(() => {
                // 使用模块之后访问 方法的话需要在前面加模块名称
                // 模块之后的写法  this.$store.commit("home1/syncAddNum");
                context.commit("addNum",val) // 调用的时候执行 this.$store.dispatch('syncAddNum')
            }, 2000);
            
        }
    },
    getters: { 
        addNums(state){
            // 模块之后的写法  this.$store.getters["home/addNums"]
            return state.num + "元 "  // 调用的时候执行 this.$store.getters.addNums
        }
    }
}
export default moduleA