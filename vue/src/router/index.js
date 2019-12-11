import Vue from 'vue'
import Router from 'vue-router'
import knowldegePage from './knowledge.js'
import myPage from './my.js'
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
      component: resolve => require(['../page/video/index.vue'], resolve),
      children: [
        {
          path: '',
          name: 'video',
          component: resolve => require(['../page/video/video.vue'], resolve)
        },
        {
          path: 'list/:subject/:difficulty/:sort',
          name: 'videoList',
          component: resolve => require(['../page/video/videoList.vue'], resolve)
        }
      ]
    },
    {
      path: '/knowledge',
      component: resolve => require(['../page/knowledge/index.vue'], resolve),
      children: knowldegePage
    },
    {
      path: '/job',
      component: resolve => require(['../page/job/index.vue'], resolve),
      children: [
        {
          path: '',
          name: 'job',
          component: resolve => require(['../page/job/job.vue'], resolve),
        },
        {
          path: 'list',
          name: 'jobList',
          component: resolve => require(['../page/job/list.vue'], resolve)
        },
        {
          path: 'detail/:id',
          name: 'jobDetail',
          component: resolve => require(['../page/job/detail.vue'], resolve)
        }
      ]
    },
    {
      path: '/my',
      component: resolve => require(['../page/my/index.vue'], resolve),
      children: myPage
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
