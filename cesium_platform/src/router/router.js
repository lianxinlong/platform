import { createRouter, createWebHistory } from 'vue-router'


//组件模块
// import cesiumContainer from '@/components/cesiumContainer'
import Daping from '@/components/Daping'
// import Home from '@/components/Home'
import GZ from '@/components/GZ'
import YJ from '@/components/YJ'
import JT from '@/components/JT'
import SL from '@/components/SL'

import Data from '@/components/Data'

const routerHistory = createWebHistory()

const routes = [
  { path: '/', name: 'App',component:Daping },
  { path: '/GZ', name: 'GZ', component: GZ },
  { path: '/YJ', name: 'YJ', component: YJ },
  { path: '/JT', name: 'JT', component: JT },
  { path: '/SL', name: 'SL', component: SL },
  { path: '/data', name: 'data', component: Data },
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router

