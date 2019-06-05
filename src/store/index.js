import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 创建仓库的实例对象
const store = new Vuex.Store({
  // 仓库选项对象
  // 选项  状态
  state: {
    title: 'hello-world'
  },

  // 针对 state 的二次计算
  getters: {
    // key:value
    // key - getter 的名字
    // value - 值 函数 要有 return
    firstTitle (state) {
      return state.title.split('-')[0]
    },
    lastTitle (state) {
      return state.title.split('-')[1]
    }
  },

  mutations: {
    // key:value
    // key - mutation 的名字
    // value - 函数 接受到 state

  },

  actions: {

  }
})

export default store
