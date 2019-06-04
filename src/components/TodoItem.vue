<template>
  <li>{{todo}} - <button @click="delTodo">Dle</button></li>
</template>

<script>
export default {
  props: {
    todo: String,
    index: Number
  },

  methods: {
    delTodo () {
      this.$emit('abc', this.index)
    }
  }
}
</script>

<style lang='less'>

</style>
