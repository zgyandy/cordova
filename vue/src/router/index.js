import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../page/home/home.vue'], resolve),
    },
    {
      path: '/video',
      name: 'video',
      component: resolve => require(['../page/video/video.vue'], resolve)
    },
    {
      path: '/videoList',
      name: 'videoList',
      component: resolve => require(['../page/video/videoList.vue'], resolve)
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: resolve => require(['../page/knowledge/knowledge.vue'], resolve)
    },
    {
      path: '/job',
      name: 'job',
      component: resolve => require(['../page/job/job.vue'],resolve)
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['../page/my/my.vue'], resolve)
    },
    {
      path: '/find',
      name: 'find',
      component: resolve => require(['../page/find/find.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
