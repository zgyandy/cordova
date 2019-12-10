import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../page/home/home.vue'], resolve)
    },
    {
      path: '/video',
      name: 'video',
      component: resolve => require(['../page/video/video.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
