export default [
  {
    path: '',
    name: 'knowledge',
    component: resolve => require(['../page/knowledge/knowledge.vue'], resolve)
  },
  {
    path: 'blog',
    name: 'knowledgeBlog',
    component: resolve => require(['../page/knowledge/blog.vue'], resolve)
  },
  {
    path: 'news',
    name: 'knowledgeNews',
    component: resolve => require(['../page/knowledge/news.vue'], resolve)
  }
]