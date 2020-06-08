import Home from './pages/HomePage'
import Services from './pages/ServicesPage'
import Query from './pages/QueryPage'
import Demo from './pages/DemoPage'
import Login from './pages/LoginPage'
import Admin from './pages/AdminPage'
import Landing from './pages/LandingConfigPage'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/servicios',
    name: 'services',
    component: Services
  },
  {
    path: '/consultas',
    name: 'query',
    component: Query
  },
  {
    path: '/blog',
    name: 'blog',
    component: Demo
  },
  {
    path: '/acceder',
    name: 'login',
    component: Login
  },
  {
    path: '/configurar',
    name: 'admin',
    component: Admin,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/configurar-inicio',
    name: 'landing',
    component: Landing,
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