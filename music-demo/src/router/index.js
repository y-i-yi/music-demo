// 导包
import Vue from "vue"
import VueRouter from "vue-router"


// VueRouter安装为Vue插件
Vue.use(VueRouter)

import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Search from '@/views/Search/index.vue'
import Play from '@/views/Play'
import Comment from '@/views/Comment'

// 创建路由实例对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/layout' },
    {
      path: '/layout',
      redirect: '/layout/home', //重定向到二级路由
      component: Layout,
      children: [
        { path: 'home', component: Home, meta: { title: "首页" } },//meta元信息给当前路由对象绑定值
        { path: 'search', component: Search, meta: { title: "搜索" } }
      ]
    },
    { path: '/play', component: Play },
    { path: '/comment', component: Comment }
  ]
})

// 向外共享
export default router