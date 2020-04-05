import App from './App.vue';
import '../node_modules/vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import swal from 'sweetalert';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import eventBus from './plugins/event-bus';
import Vuex from 'vuex';
import Store from './store'

require('./bootstrap');
window.Vue = require('vue');

// DECLARANDO COMPONENTES
// FIN COMPONENTES

/* PLUGINS */
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
/* FIN DE PLUGINS */

const store = new Vuex.Store(Store)

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
        },
        getImgUrl(img){
          return `/assets/${img}`
        }
    },
    render: h=>h(App)
}).$mount('#app');