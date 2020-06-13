<template>
  <v-container>  
    <v-card class="rounded-2">
      <v-card-title class="pa-4">
        <div class="title">
          Perfil de Usuario
        </div>
        <v-spacer />
        <v-btn
          @click="update"
          icon
        >
          <v-icon>create</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text v-if="info" class="pa-4 pt-0">
        <v-row dense>
          <v-col cols="3" class="text-center">
            <v-avatar color="deep-purple accent-1" size="75">
              <span class="white--text headline">
                <b>
                  {{ getAvatarName(data.name) }}
                </b>
              </span>
            </v-avatar>
            <v-layout>
              <v-flex mt-5>
                <v-avatar size="120">
                  <img :src="performaceImg('ddddad')" />
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-col>
          <v-col cols="9">
            <v-row dense>
              <v-col cols="4">
                <h3>{{data.name}}</h3>
              </v-col>
              <v-col cols="4">
                <h4 class="success--text">
                  {{data.status}}
                </h4>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="4">
                <h4 class="primary--text">
                  correo
                </h4>
                <h4>{{data.email}}</h4>
              </v-col>
              <v-col cols="4">
                <h4 class="primary--text">
                  telefono
                </h4>
                <h4>{{data.person.phone}}</h4>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="4">
                <h4 class="primary--text">
                  Nombres
                </h4>
                <h4>{{data.person.firstname}}</h4>
              </v-col>
              <v-col cols="4">
                <h4 class="primary--text">
                  Apellidos
                </h4>
                <h4>{{data.person.lastname}}</h4>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="4">
                <h4 class="primary--text">
                  Genero
                </h4>
                <h4>{{data.person.genere}}</h4>
              </v-col>
              <v-col cols="8">
                <h4 class="primary--text">
                  Direccion
                </h4>
                <h4>{{data.person.address}}</h4>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="4">
                <h4 class="primary--text">
                  Ciudad
                </h4>
                <h4>{{data.person.city}}</h4>
              </v-col>
              <v-col cols="4">
                <h4 class="primary--text">
                  Municipio
                </h4>
                <h4>{{data.person.municipality}}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h4 class="primary--text">
                  Estado
                </h4>
                <h4>{{data.person.state}}</h4>
              </v-col>
              <v-col cols="4">
                <h4 class="primary--text">
                  Pais
                </h4>
                <h4>{{data.person.country}}</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else>
        <v-row dense>
          <v-col cols="2" offset="5">
            <v-btn text large color="primary" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <DrawerProfile />
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import DrawerProfile from '../components/home/profile/drawer'

export default {
  data: () => ({
    info : true,
    data: {
      id: '',
      name: '',
      status: '',
      rol: '',
      email: '',
      photo: '',
      person:{
        firstname: '',
        lastname: '',
        identity: '',
        city: '',
        state: '',
        municipality: '',
        genere: '',
        country: '',
        phone: '',
        address: ''
      }
    }
  }),
  components: {
    DrawerProfile
  },
  computed: mapState({
    user: ({ auth: { currentUser } }) => currentUser,
    profile: ({ auth: { profile } }) => profile
  }),
  async created() {
    await this.setParallax(false)
    await this.getProfile(this.user.id)
    const {
      id,
      name,
      status,
      rol,
      email,
      photo,
      person:{
        firstname,
        lastname,
        identity,
        city,
        state,
        municipality,
        genere,
        country,
        phone,
        address
      }
    } = this.profile

    this.data = {
      id,
      name,
      status,
      rol,
      email,
      photo,
      person:{
        id,
        firstname,
        lastname,
        identity,
        city,
        state,
        municipality,
        genere,
        country,
        phone,
        address
      }
    }
  },
  methods: {
    ...mapActions({
      getProfile: 'getProfile',
      changeDrawerProfile: 'changeDrawerProfile'
    }),
    ...mapMutations({
      setParallax: 'setParallax' 
    }),
    getAvatarName(name) {
      const n = name.split(' ')
      let nombre = ''
      n.map(el => {
        nombre += el[0]
      })
      return nombre
    },
    update() {
      console.log('changeDrawerProfile: true')
      this.changeDrawerProfile(true)
    },
    performaceImg(url) {
      return `${url}?${performance.now()}`
    }
  }
}
</script>
