export default {
    state: { 
        username:"",
        userpass:""
    },
    mutations: { 
        addUser(state,{username, userpass}){
            state.username = username ;
            state.userpass = userpass ;
        }
    },
    actions: { 
        
    },
    getters: {  },
    namespaced: true
}