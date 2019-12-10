// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import {get, post} from './config/base'
import Gray from './componentjs/gray.js'
var VueCookie = require('vue-cookie')
// 引过滤器
import  filters from './filters/index'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.use(VueCookie)
Vue.use(Gray)
Vue.prototype.$post = post
Vue.prototype.$get = get


Vue.config.productionTip = false

require('swiper/css/swiper.min.css')
require('./assets/iconfont/iconfont.css')
require ('./assets/css/common.css')
require ('./config/rem.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
