<template>
  <v-menu>
    <v-list>
      <v-layout column align-center justify-center>
        <v-list-tile v-for="item in menu" :key="item.name">
          <v-list-tile-content>
            <v-btn 
              :href="item.href"
              link :to="{ path: item.href }"
              flat 
              class="blue--text text--darken-2 accented-text">
              {{ item.name }}
            </v-btn>
            <v-btn 
              v-if="isLoggedIn"
              link :to="{ path: 'consultas' }"
              flat
              class="blue--text text--darken-2 accented-text">
              consultas
            </v-btn>
            <v-btn 
              v-if="isLoggedIn"
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
          </v-list-tile-content>
        </v-list-tile>
      </v-layout>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'mobile-menu',
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      isLoggedIn: ({ auth: { isLoggedIn } }) => isLoggedIn
    })
  },
  props: {
    menu:{
      required:true,
      type:Array
    }
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    setLogout(){
      this.logout()
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>

</style>
