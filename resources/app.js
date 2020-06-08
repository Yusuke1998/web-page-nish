import App from './App.vue';
import '../node_modules/vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import Alertify from 'vue-alertify'
import swal from 'sweetalert';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {routes} from './routes';
import eventBus from './plugins/event-bus';
import Vuex from 'vuex';
import Store from './store'
import VueTrumbowyg from 'vue-trumbowyg'
import 'trumbowyg/dist/ui/trumbowyg.css'

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

Vue.use(Alertify, {
  notifier: {
    delay: 5,
    position: 'top-right',
    closeButton: true,
  }
})

Vue.use(eventBus)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueTrumbowyg)

const store = new Vuex.Store(Store)
const router = new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) => {
  const auth = to.matched.some(record => record.meta.requiresAuth);
  const logued = store.state.auth.isLoggedIn
  const rol = logued ? store.state.auth.currenUser.rol : ''

  if (auth && !logued)
  {
    next('/acceder');
  }
  else if(to.path == '/acceder' && logued && rol !== 'admin') 
  {
    next('/')
  }
  else if(to.path == '/acceder' && logued && rol === 'admin') 
  {
    next('/configurar')
  }
  else if(to.path == '/configurar' && logued && rol !== 'admin') 
  {
    next('/')
  }
  else if(to.path == '/configurar-inicio' && logued && rol !== 'admin') 
  {
    next('/')
  }
  else
  {
    next()
  }
})

if (Store.state.auth.currenUser!==null) {
  let token = Store.state.auth.currenUser.token
  if (token){ 
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}else{
  axios.defaults.headers.common['Authorization'] = '';
  delete axios.defaults.headers.common['Authorization'];
}

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
            icon:'assets/spin.gif',
            closeOnClickOutside: false,
            timer: time
        })
      }
    },
    render: h=>h(App)
}).$mount('#app');