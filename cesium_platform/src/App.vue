<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import cesiumContainer from './components/cesiumContainer.vue'

// export default {
//   name: 'App',
//   components: {
//     cesiumContainer
//   }
// }
export default {

}
</script>

<style>
html{
  height:100%;
  width: 100%;
}
body {
  margin: 0;
  height:100%;
  width: 100%;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  width: 100%;
  height: 100%;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>