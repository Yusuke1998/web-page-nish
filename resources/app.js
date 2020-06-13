import '../node_modules/vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'trumbowyg/dist/ui/trumbowyg.css';
import App from './App.vue';
import Vue from 'vue'
import Vuetify from 'vuetify';
import VueAlertify from 'vue-alertify';
import swal from 'sweetalert';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {routes} from './routes';
import eventBus from './plugins/event-bus';
import Vuex from 'vuex';
import Store from './store';
import VueTrumbowyg from 'vue-trumbowyg';
import Toasted from 'vue-toasted';

require('./bootstrap');

Vue.use(Vuetify, {
  iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.use(VueAlertify, {
  position: 'top'
})
Vue.use(eventBus)
Vue.use(Toasted)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueTrumbowyg)

const store = new Vuex.Store(Store)
// store.dispatch('refresh')

const router = new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) => {
  const auth = to.matched.some(record => record.meta.requiresAuth);
  const logued = store.state.auth.isLoggedIn
  const rol = logued ? store.state.auth.currentUser.rol : ''

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

if (Store.state.auth.currentUser!==null) {
  let token = Store.state.auth.currentUser.token
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
      },
      success: function() {
        this.$alertify.success('success');
      },
      alert: function() {
        this.$alertify.alert('This is alert', () =>
          this.$alertify.warning('alert is closed')
        );
      },
      alertWithTitle: function() {
        this.$alertify.alert('alert title', 'This is alert', () =>
          this.$alertify.warning('alert is closed')
        );
      },
      confirm: function() {
        this.$alertify.confirm(
          'This is comfirm',
          () => this.$alertify.success('ok'),
          () => this.$alertify.error('cancel')
        );
      }
    },
    render: h=>h(App)
}).$mount('#app');