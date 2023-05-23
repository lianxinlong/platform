<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <cesiumContainer/> -->
  <div id="app">
    <!-- <router-link to="/">主页</router-link>
    <router-link to="/home">首页</router-link>
    <router-link to="/data">数据</router-link> -->
  </div>
  <router-view/>
</template>

<script>
import cesiumContainer from './components/cesiumContainer.vue'

export default {
  name: 'App',
  components: {
    cesiumContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
