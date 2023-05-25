import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';
import App from './App.vue'
import router from './router/router'
import * as echarts from 'echarts'


const app = createApp(App)

// app.use(DataV, { classNamePrefix: 'dv-' });

app.config.globalProperties.$echarts = echarts
app.use(ElementPlus)
app.use(router).mount('#app')
