import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from './router'

// Vue.config.productionTip=false
// Vue.config.errorHandler = function(err) {
//     console.log("global", err);
//     message.error("出错了");
//   };

const app =createApp(App)
app.use(router)
app.mount('#app')
