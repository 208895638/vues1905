Vue.component("tops",{
    template:`<div><a href='./index.html' :class="{red : currentPage == 'index.html'}">index页面</a>
    <a href='./project.html' :class="{red : currentPage == 'project.html'}">项目案例</a>
    <a href='./join.html' :class="{red : currentPage == 'join.html'}">加入我们</a>
    <a href='./contact.html' :class="{red : currentPage == 'contact.html'}">联系我们</a></div>`,
    data () {
        return {
            currentPage : "index.html"
        }
    },
    created () {
        
        var ele = window.location.pathname.split("/").find(ele => ele.includes(".html"));
        this.currentPage = ele;
        console.log(ele);
    }
})