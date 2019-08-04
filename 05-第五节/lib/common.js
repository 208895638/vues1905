Vue.component("headers",{
    template:"<div><a href='./index.html'>首页</a><a :class='{red:isTestAddClass}' href='./test.html'>测试页</a></div>",
    data () {
        return {
            isTestAddClass:false
        }
    },
    created () {
        
        var item = window.location.href.split("/").find(ele => ele.includes(".html"))
        console.log(item);
        if(item == "test.html"){
            this.isTestAddClass = true
        }
    }
})