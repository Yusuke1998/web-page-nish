<template>
  <v-app>
    <top-nav 
        :title="title" 
        :subtitle="subtitle" 
        :menu="menu"
    />
    <v-content>
      <hero 
        :titleXs="hero.titleXs" 
        :titleMd="hero.titleMd" 
        :titleLg="hero.titleLg"
      />
      <mobile-menu 
        :title="title" 
        :subtitle="subtitle" 
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
      <ic-footer :list="footer" :text="footerText"/>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from './components/layout/TopNav'
import MobileMenu from './components/layout/MobileMenu'
import Hero from './components/layout/Hero'
import Footer from './components/layout/Footer'
export default {
  name: 'App',
  data () {
    return {
      title: 'Luis',
      hero: {
        titleXs:"Soluciones Informaticas",
        titleMd:"Soporte tecnico de calidad",
        titleLg:"Servicio especializado"
      },
      subtitle: 'Machado',
      footerText: 'Inversiones Luis Machado',
      menu: [
        {
          name: 'Servicios',
          href: 'servicios'
        },
        {
          name: 'Consultas',
          href: 'consultas'
        },
        {
          name: 'Productos',
          href: 'productos'
        },
        {
          name: 'Demostraciones',
          href: 'demostraciones'
        }
      ],
      footer: [
        {
          name: 'Contactame',
          href: 'mailto:steve@islandcivil.com'
        },
        {
          name: 'Facebook',
          href: 'luis machado'
        },
        {
          name: 'Whatsapp',
          href: '+58123456789'
        },
        {
          name: 'Telegram',
          href: '+58123456789'
        }
      ]
    }
  },
  components: {
    'top-nav': TopNav,
    'mobile-menu': MobileMenu,
    'hero': Hero,
    'ic-footer': Footer
  }
}
</script>

<style>
/*@import url('https://fonts.googleapis.com/css?family=Zilla+Slab');*/
/*@import url('https://fonts.googleapis.com/css?family=Raleway');*/
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
