<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <cesiumContainer/>
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
