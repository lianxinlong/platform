import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';
import App from './App.vue'
import router from './router/router'
import * as echarts from 'echarts'
// import jquery from 'jquery'
// import $ from 'jquery'
import dataV from '@jiaminghi/data-view'
import Charts from '@jiaminghi/charts'

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZTA3NzY2ZC1lMDdmLTRjODAtYmI2My05NTI3MjNkYjNjZmEiLCJpZCI6MzczOTAsImlhdCI6MTYwNDk5Mzg5OX0.BYBiqacYVkJz-nXU1qopx7PKpDTfLe4490f-L1HuybQ'
     
const app = createApp(App)

// app.use(DataV, { classNamePrefix: 'dv-' });
app.use(dataV)
app.config.globalProperties.$echarts = echarts

app.use(ElementPlus)
app.use(router).mount('#app')
