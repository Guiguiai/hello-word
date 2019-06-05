<template>
  <div>
    <h1>Page1</h1>
    {{name}}
    <p>我当前page1组件自己的技术属性 - {{firstName}}</p>
    <p>仓库中的title：{{ title }}</p>
    <p>仓库中的firstTitle：{{ firstTitle }}</p>
    <p>仓库中的lastTitle：{{ lastTitle }}</p>
    <button @click="chgtitle({naem: '鸡你-太美'})">修改 title 为 鸡你太美</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      name: '张三'
    }
  },

  computed: {
    ...mapState(['title']),
    ...mapGetters(['firstTitle', 'lastTitle']),
    firstName () {
      return this.name.split('')[0]
    }
  },

  methods: {
    ...mapMutations(['chgtitle'])
  }
}
</script>
