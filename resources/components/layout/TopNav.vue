<template>
  <v-toolbar 
    class="white">
    <v-spacer 
      class="hidden-sm-and-up brand-spacer"/>
    <v-toolbar-title 
      class="text-xs-center brand-logo">
      <v-icon 
        link :to="{ path: '/' }"
        x-large class="primary--text hidden-sm-and-down brand-icon">
        mdi-plus
      </v-icon> 
      {{title}}
      <span 
        link :to="{ path: '/' }"
        class="blue--text text--darken-3 accented-text">
        {{subtitle}}
      </span>
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items 
      class="hidden-xs-only">
      <v-btn 
        v-for="item in menu" 
        :key="item.name"
        link :to="{ path: item.href }"
        class="blue--text text--darken-2 accented-text">
        {{ item.name }}
      </v-btn>
      <v-btn 
        v-if="!isLoggedIn"
        link :to="{ name: 'login' }"
        right
        class="blue--text text--darken-4 accented-text">
        Acceder/Registrar
      </v-btn>
      <v-btn 
        v-if="isLoggedIn && isAdmin"
        link :to="{ name: 'admin' }"
        right
        class="blue--text text--darken-4 accented-text">
        Configuracion
      </v-btn>
      <v-btn 
        v-if="isLoggedIn"
        @click.prevent="setLogout()"
        right
        class="blue--text text--darken-3 accented-text">
        Salir
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'top-nav',
  computed:{
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      isAdmin: 'isAdmin',
    })
  },
  props: {
    menu:{
      required:true,
      type:Array
    },
    title:{
      required:true,
      type:String
    },
    subtitle:{
      required:true,
      type:String
    }
  },
  methods: {
    ...mapActions({ logout: 'logout' }),
    setLogout(){
      this.logout()
      if (this.$route.name !== 'home')
      {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>

<style>

</style>