export default [
  {
    path: '',
    name: 'my',
    component: resolve => require(['../page/my/my.vue'], resolve)
  },
  {
    path: 'login',
    name: 'login',
    component: resolve => require(['../page/my/login.vue'], resolve)
  },
  {
    path: 'register',
    name: 'register',
    component: resolve => require(['../page/my/register.vue'], resolve)
  }
]