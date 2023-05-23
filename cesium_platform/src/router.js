// import { createApp } from 'vue'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'


//组件模块
import cesiumContainer from '@/components/cesiumContainer'
import home from '@/components/home'
import data from '@/components/data'

const routerHistory = createWebHistory()

const routes = [
  { path: '/', name: 'cesiumContainer', component: cesiumContainer },
  { path: '/home', name: 'home', component: home },
  { path: '/data', name: 'data', component: data },
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router

