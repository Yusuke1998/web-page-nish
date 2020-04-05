import Home from './pages/HomePage'
import Products from './pages/ProductsPage'
import Services from './pages/ServicesPage'
import Consulting from './pages/ConsultingPage'
import Demo from './pages/DemoPage'
import Login from './pages/LoginPage'
import Admin from './pages/AdminPage'

export const routes = [
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
  },
  {
    path: '/admin',
    name: 'login',
    component: Login
  },
  {
    path: '/administrar',
    name: 'admin',
    component: Admin,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'default',
    component: Home
  }
]