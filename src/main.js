// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './js/api-config.js'
Vue.prototype.$api = api;


//第三方包
import ElementUi from 'element-ui'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8899/'
Vue.prototype.$http = axios

//css
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/less/index.less'
import './css/style.css'

// use
Vue.use(ElementUi)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
