import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'
import beforeEach from './beforeEach.js'


import Detail from '@/components/store/goods/Detail'
import List from '@/components/store/goods/List'
import Commit from '@/components/store/order/Commit'
import Pay from '@/components/store/order/Pay'
import Shopcart from '@/components/store/shopcart/Shopcart'
import Store from '@/components/store/Store'
Vue.use(Router)


let router = new Router({
  routes: [
    {
      name: "index", path: "/", component: Store, children: [
        { name: "detail", path: "goods/detail/:id", component: Detail },
        { name: "list", path: "goods/list", component: List },

        { name: "commit", path: "order/commit", component: Commit },
        { name: "pay", path: "order/pay", component: Pay },

        { name: "shopcart", path: "shopcart", component: Shopcart },
      ]
    },
    { name: "login", path: "/login", component: Login },
  ],
})
router.beforeEach(beforeEach);
export default router
