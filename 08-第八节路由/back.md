# vue 
## 路由
### 路由配置
### this.$route this.$router 
$route 代表当前的路由对象 $router 代表所有的路由对象可以理解为router.js配置文件
### 跳转页面的方式 
+ router-link进行跳转
```
<router-link to="/home">home页</router-link>
```
+ js的方式进行跳转
```

this.$router.push({path:"/home"})
```
### 路由传值
动态路由传值 动态路由 vuerouter会把动态路由对应的组件给缓存 缓存之后多次访问这个路由  但是声明周期只能走一次 也就是说在生命周期created或者mounted里面定义的方法是不能用的 
解决方法呢 可以使用watch的方式监听路由的变化
+ query 
```
<router-link to="/info?id=3">跳转到详情也</router-link>
<!-- js的方式进行跳转 -->

this.$router.push({path:"/info",query:{id:5}});

<!-- 获取query传递过来的参数 this.$route.query.id -->
```
+ 动态路由 params 
```
{
    path:"/home/info/:id",
    component : infos
}
<router-link to="/home/info/4">动态路由跳转到详情也</router-link>
<router-link :to="{name:'info',params:{id:4}}">动态路由跳转到详情也</router-link>
// 动态路由传值path 与 params不能共存
// js的方式进行跳转 只能使用命名路由的方式进行跳转
      this.$router.push({name:"info",params:{id:5}});
<!-- 获取params传递过来的参数 this.$route.params.id -->

```
### 嵌套路由
一个路由中嵌套一个路由
```html
<script>
{
    path:"/user",
    component:user,
    // 重定向到某个页面  可以理解为访问淘宝 但实际展示的是京东的页面
    redirect:"/user/phone",
    children:[
    // 修改头像
    {
        // 跳转到icon页面 to="/user/icon"
        path:"icon",
        component:icon
    },
    // 修改电话号码
    {
        path:"phone",
        component:phone
    },
    ]
}
</script>

```

