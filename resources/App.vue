<template>
  <v-app>
    <top-nav 
        :title="c.title_web" 
        :subtitle="c.subtitle_web" 
        :menu="menu"
    />
    <v-content>
      <hero 
        :img="c.img_parallax"
        :titleLg="c.title_parallax"
        :titleMd="c.text_parallax" 
        :titleXs="c.subtitle_parallax" 
      />
      <mobile-menu 
        :title="c.title_web" 
        :subtitle="c.subtitle_web" 
        :menu="menu" 
        class="hidden-sm-and-up"
      />
      <v-content>
        <v-container id="ver-mas">
          <transition name="fade">
            <router-view/>
          </transition>
        </v-container>
      </v-content>
      <ic-footer :list="c.networks" :text="c.text_footer"/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

import TopNav from './components/layout/TopNav'
import MobileMenu from './components/layout/MobileMenu'
import Hero from './components/layout/Hero'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  async created(){
    await this.getConfigs()
  },
  computed:{
    ...mapState({
      isLoggedIn: ({ auth: { isLoggedIn } }) => isLoggedIn,
      c: (getConfigsData) => getConfigsData
    })
  },
  data () {
    return {
      menu: [
        {
          name: 'inicio',
          href: '/'
        },
        {
          name: 'servicios',
          href: 'servicios'
        },
        {
          name: 'blog',
          href: 'blog'
        }
      ]
    }
  },
  components: {
    'top-nav': TopNav,
    'mobile-menu': MobileMenu,
    'hero': Hero,
    'ic-footer': Footer
  },
  methods: {
    ...mapActions({
      getConfigs: 'getConfigs'
    })
  }
}
</script>

<style>
.brand-logo {
  font-family: 'Zilla Slab', serif;
  font-size: 36px!important;
  font-weight: bold!important;
  color: #2c3e50;
}
.brand-spacer {
  margin-left: -10px!important;
}
.brand-icon {
  margin-top: -3px;
}
.accented-text {
  font-family: 'Raleway', sans-serif;
}
p {
  font-family: 'Raleway', sans-serif;
}
.hero-text-header {
  font-family: 'Zilla Slab', serif;
}
.hero-text-sub {
  font-family: 'Raleway', sans-serif;
}
.brand-text {
  font-weight: bold;
}
</style>
