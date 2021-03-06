# vue-router路由高级
<!-- 需求 -->
比如在网页中 打开购物车页面 购物车页面只有登陆才能查看 但是呢 用户还没有登陆  没登陆直接访问登陆页面页面 登陆就直接访问购物车页面

## 导航守卫
vue-router官方解释 导航”表示路由正在发生改变。 vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
理解: 导航守卫可以看做是 vue-router 的生命周期钩子 假设用户要查看个人信息(用户直接输入url进入个人信息页面) 如果没登陆是不是不让获取用户信息 但是用户已经进入了个人信息页面 这个导航守卫呢 就是帮助开发者处理这种事件

导航守卫的功能 根据判断条件处理地址栏的变化 
### 全局守卫(只要加了全局守卫，每次路由的跳转都要经过全局守卫，一般是用的都是前置守卫)
> 全局前置守卫  
```
router.beforeEach((to, from, next) => { 
    // 里面三个参数  to代表我们将要跳转的路径
    // from 代表从那个路径跳转过来 就是上一个路径
    // next代表 守卫可以通过next控制下一步的跳转 如果写了前置守卫 一定要添加next()到下一步 
    // 因为路由还没有跳转 next可以是路由跳转
    // 需要注意的是 如果当跳转的地址带参数的时候(动态路由) 跳转的时候就会忽略后面传递的参数 
    // 如 next({path:"/user",params:{id:1}})
    // 解决方法 换一种写法
    // next("/user/1") 或用命名路由的方式跳转next({name:"user",params:{id:1}})
  // ...
})
```
> 全局前置守卫应用场景(进入页面登录判断、管理员权限判断、浏览器判断等)

> 全局后置守卫(没啥用)
```
router.afterEach((to, from) => {   
  
})
```
### 路由守卫  运行在路由上的守卫  (相比上面的全局守卫 全局守卫是只要有跳转就会执行守卫函数 而路由守卫呢 是只有跳转到当前的守卫时才执行路由守卫函数) 用处做跳转判断
```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```
### 组件内的守卫 (也可以理解为这个组件的生命周期 与全局守卫使用方法一致)
> beforeRouteEnter 这个守卫不做什么操作 在这一步的时候this都还没有绑定到vue实例类上(组件实例还没有被创建) 也就是说在这一步我们还不能用this
> beforeRouteUpdate  (在组件复用的时候调用 用于解决组件复用问题)
> beforeRouteLeave (导航离开该组件的对应路由时调用 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。 还可以用来清除定时器)
```
beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
```
```
beforeRouteLeave (to, from , next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```
### 路由元信息 在路由列表中，每个路由都有一个 meta 元数据字段， 我们可以在这里设置一些自定义信息，供页面组件或者路由钩子函数中使用。（如设置网页标题,设置某个页面是否需要登陆才能进入）
```
export default new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { title: true }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
```
### 过渡动效 通过transition组件实现路由切换效果
```
<transition :name="names">
      <router-view></router-view>
    </transition>
    .left-enter{
transform: translateX(-100%);
}
.left-enter-active{
  transition: .3s ease-in;
}
.right-enter{
transform: translateX(100%);
}
.right-enter-active{
  transition: .3s ease-in;
}
```
### 滚动行为 （使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，这个时候就可以使用router的滚动行为）
> 理解 vue在页面切换的时候 比如a页面跳转到b页面的时候 滚动条的位置是保持不变的 跟传统路由切换页面相差很大 
如果要实现和前端路由一样的效果 这个时候就可以使用router提供的滚动行为 这个更好[vue-router官方issues](https://github.com/vuejs/vue-router/issues/2533 "官方issues") (浏览器后退时返回到顶部)
```
scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({ x: 0, y: 0 })
        })
    })
    }
```
### 路由懒加载 像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。简单的说就是：进入首页不用一次加载过多资源造成用时过长！！！

路由使用懒加载的时候 默认的会把懒加载的路由给他单独打包  这样就节省了 app.js文件的体积 那么页面首次进入的体积就不会很大 对项目加载耗时有很大的帮助
```
component:() => import( '@/view/mine/mine.vue')
```

###  登陆鉴权
在客户端发送账号密码到服务端，服务端验证成功后返回token存储用户的权限，前端用Cookie把token存储在本地，在路由跳转（router.beforeEach）中判断是否存在token，另外前端可以通过token请求服务端获取userInfo，在vuex中存储着用户的信息（用户名，头像，注册时间等等）。

