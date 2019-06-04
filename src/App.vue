<template>
  <div>
    <h1>我是APP</h1>
    <!-- <a href="#/page1">page1</a>
    <hr>
    <a href="#/page2">page2</a> -->

    <router-link to="/page1">page1</router-link>
    <hr>
    <router-link to="/page2">page2</router-link>
    <!-- 路由坑 路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>
