<template>
  <li>
    {{ todo.name }} - <button @click="delTodo(todo)">Del</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    todo: Object,
    index: Number
  },

  methods: {
    ...mapActions(['delTodo'])
  }
}
</script>
