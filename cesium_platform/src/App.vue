<template>
  <div id="app"></div>
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
  overflow: hidden;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>