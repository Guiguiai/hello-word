// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
// 使用VueRouter插件
Vue.use(VueRouter)
// 配置路由规则 [{},{}]
const routes = [
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  }
]
// 实例化路由器对象
const router = new VueRouter({
  routes
})
// 暴露 router
export default router
