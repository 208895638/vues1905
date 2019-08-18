const moduleB = {
    // 启用命名空间
    namespaced: true,
    state: { num:3 },
    // mutation 没有模块 
    mutations: { 
        addNum(state){
            state.num += 3
        }
    },
    actions: {  },
    
}
export default moduleB