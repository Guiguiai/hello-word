import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/todo',
      component: () => import('../views/Todo.vue')
    },
    // {
    //   path: '/page2',
    //   component: () => import('../views/Page2.vue')
    // },
    {
      path: '*',
      redirect: '/todo'
    }
  ]
})
