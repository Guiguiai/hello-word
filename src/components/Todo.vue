<template>
  <div class='todo'>
    <input type='text' placeholder='请输入内容' v-model="inputVal">
    <button @click="addTodo">Add</button>

    <ul>
      <TodoItem
      v-for="(item,index) in todos"
      :key="item.id"
      :todo="item.name"
      :index="index"
      @abc="delTodo"
      />
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import TodoItem from './TodoItem.vue'
export default {
  data () {
    return {
      inputVal: '',
      todos: []
    }
  },

  components: {
    TodoItem
  },

  methods: {
    addTodo () {
      this.todos.push(this.inputVal)
      this.inputVal = ''
    },

    delTodo (index) {
      this.todos.splice(index, 1)
    }
  },

  created () {
    axios.get('http://localhost:8080/api/todos.json')
      .then(response => {
        let res = response.data
        if (res.code === 0) {
          this.todos = res.data
        } else {
          alert(res.msg)
        }
      })
  }
}
</script>

<style lang='less'>

</style>
