import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/HomePage'
import Products from './pages/ProductsPage'
import Services from './pages/ServicesPage'
import Consulting from './pages/ConsultingPage'
import Demo from './pages/DemoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/productos',
      name: 'products',
      component: Products
    },
    {
      path: '/servicios',
      name: 'services',
      component: Services
    },
    {
      path: '/consultas',
      name: 'consulting',
      component: Consulting
    },
    {
      path: '/demostraciones',
      name: 'demo',
      component: Demo
    }
  ],
  mode: 'history'
})