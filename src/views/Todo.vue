<template>
  <div>
    <input type="text" v-model="inputVal">
    <button @click="fn1">Add</button>
    <ul>
      <TodoItem
        v-for="(item, index) in todos"
        :key="index"
        :todo="item"
        :index="index"
      >
      </TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['todos']),
    inputVal: {
      get () {
        return this.$store.state.inputVal
      },

      set (value) {
        this.$store.commit('chgInputVal', value)
      }
    }
  },

  methods: {
    ...mapActions(['fn1', 'initTodos'])
  },

  created () {
    this.initTodos()
  },

  components: {
    TodoItem
  }
}
</script>
