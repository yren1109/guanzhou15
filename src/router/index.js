import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'

import Detail from '@/components/store/goods/Detail'
import List from '@/components/store/goods/List'
import Commit from '@/components/store/order/Commit'
import Pay from '@/components/store/order/Pay'
import Shopcart from '@/components/store/shopcart/Shopcart'
Vue.use(Router)


export default new Router({
  routes: [
    {name:"index",path:"/",redirect:"/goods/index"},
    {name: "login", path: "/login", component:Login},

    { name: "detail", path: "/goods/detail/:id", component: Detail},
    { name: "list", path: "/goods/list", component: List},

    { name: "commit", path: "/order/commit", component: Commit},
    { name: "pay", path: "/order/pay", component: Pay},

    { name: "shopcart", path: "/shopcart", component: Shopcart},
  ]
})
