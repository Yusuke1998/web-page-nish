import App from './App.vue';
import '../node_modules/vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import swal from 'sweetalert';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {routes} from './routes';
import eventBus from './plugins/event-bus';
import Vuex from 'vuex';
import Store from './store'

require('./bootstrap');
window.Vue = require('vue');

Vue.use(Vuetify,
{
    icons: {
        iconfont: 'mdi'
    },
    theme: {
      primary: '#2c3e50',
      secondary: '#00b894',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }
})

Vue.use(eventBus);
Vue.use(Vuex);
Vue.use(VueRouter)

const store = new Vuex.Store(Store)
const router = new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) => {
  const auth = to.matched.some(record => record.meta.requiresAuth);
  const logued = store.state.auth.isLoggedIn

  if (auth && !logued)
  {
    next('/admin');
  }
  else if(to.path == '/admin' && logued) 
  {
    next('/administrar')
  }
  else
  {
    next()
  }
})

new Vue({
    vuetify : new Vuetify,
    router,
    store,
    methods:{
    	loading(name, content, time = 2000){
        swal({
            title:name,
            text:content,
            button:{
                text: "Ok!",
                closeModal: false,
            },
            icon:'/imgDefault/spin.gif',
            closeOnClickOutside: false,
            timer: time
        })
      }
    },
    render: h=>h(App)
}).$mount('#app');