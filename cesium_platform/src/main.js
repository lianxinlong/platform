import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';

// import Vue from 'vue'
import router from './router/router'

// Vue.config.productionTip=false
// Vue.config.errorHandler = function(err) {
//     console.log("global", err);
//     message.error("出错了");
//   };
// Vue.use(ElementUI)

const app = createApp(App)

app.use(ElementPlus)
// app.use(DataV, { classNamePrefix: 'dv-' });
app.use(router).mount('#app')
