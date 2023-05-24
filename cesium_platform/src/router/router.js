// import { createApp } from 'vue'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'


//组件模块
import cesiumContainer from '@/components/cesiumContainer'
import Home from '@/components/Home'
import Data from '@/components/Data'

const routerHistory = createWebHistory()

const routes = [
  { path: '/', name: 'App', component: cesiumContainer },
  { path: '/home', name: 'home', component: Home },
  { path: '/data', name: 'data', component: Data },
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router

