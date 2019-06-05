import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  inputVal: '',
  todos: []
}

const getters = {

}

const mutations = {
  chgInputVal (state, payload) {
    state.inputVal = payload
  },

  initTodo (state, todos) {
    state.todos = todos
  },

  addTodo (state) {
    let todo = {
      name: state.inputVal
    }
    state.todos.push(todo)
    state.inputVal = ''
  },

  delTodo (state, payload) {
    let index = state.todos.findIndex(item => item.id === payload)
    state.todos.splice(index, 1)
  }
}

const actions = {
  fn1 ({ state, commit }) {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: state.inputVal })
    })
      .then(response => response.json())
      .then(() => {
        commit({
          type: 'addTodo'
        })
      })
  },

  initTodos ({ commit }) {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(res => {
        commit('initTodo', res)
      })
  },

  delTodo ({ commit, state }, todo) {
    let newTodos = [...state.todos]
    commit('delTodo', todo.id)
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: 'delete'
    }).then(response => response.json())
      .then(res => {
        // 删除成功
        console.log(res)
      })
      .catch(error => {
        // 删除失败
        console.log(error.message)
        commit('initTodo', newTodos)
      })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
