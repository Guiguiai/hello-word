# 组件通信

- 父 -> 子 props
- 子 -> 父 $emit
- 兄弟     $emit || eventBus
- 路由页面组件
- 最后的最后把 $root $parent $children $refs

### 什么时候需要使用 vuex

1. 当你不知道该不该用的时候，那就是不该用。（你自会知道什么时候需要用到它）
2. 组件之间通信很复杂的情况下
3. 项目中使用了路由，并且路由页面组件中需要通信的时候，
4. 项目写着写着头发一大把掉的时候。

### vuex的操作流程

1. 先要有仓库，将我们项目中组件上需要共享的数据放置到我们 仓库中 state 的位置。
2. 组件要使用 仓库 中 state 的数据，就从仓库里面拿出来用。
3. 要修改仓库中 state 的数据，
   1. commit(提交) mutation
   2. dispath(派发) action    -> commit mutation
4. 然后仓库中 state 数据发生变化，组件就会得到更新

### vuex 的使用
1. 安装 vuex `npm install --save vuex`
2. 项目中 src/store/index.js 文件中创建仓库的实例对象
3. 要 main.js new Vue 的地方配置一个 store 的选项。选项的值就是 2 中 仓库实例对象


### 如何将仓库中的数据拿到组件中去使用

this.$store 就是仓库的实例对象

1. 直接使用 this.$store 的方式在组件 template 模板中使用 （不推荐）
2. 组件中使用 计算属性 去拿 仓库的数据
   ```js
    computed: {
      title () {
        return this.$store.state.title
      }
    }
   ```
3. 借助 vuex 提供的辅助函数 mapState
mapState([])  - 组件的computed 的 key 必须要跟仓库中 state 里面某个key 相同
mapState({})  - 组件的computed 的 key 可以自定义。

4. 将 mapState 与 组件自身的 computed 结合 （推荐）
```js
computed: {
  ...mapState(['title']),
  firstName () {
    return this.name.split('')[0]
  }
},
```
