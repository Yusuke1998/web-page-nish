<template>
  <v-container text-xs-center>
    <v-card>
      <v-card-title class="text-center">
        <span>Inicio de sesión</span>
      </v-card-title>
      <v-card-text>
        <v-card class="grey lighten-4 elevation-0">
          <v-card-text>
            <v-container fluid>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Correo Electronico</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    label="johndoe@google.com"
                    single-line
                    v-model="form.email"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Contraseña</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    label="**************"
                    class="input-group--focused"
                    single-line
                    v-model="form.password"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row cols="12">
                <v-col 
                  sm="2" 
                  md="2" 
                  lg="2" 
                  offset-sm="10"
                  offset-md="10"
                  offset-lg="10"
                >
                  <v-btn 
                    class="primary"
                    @click.preventdefault="authenticate">
                    <v-icon left>mdi-send</v-icon>
                    Ingresar
                  </v-btn>
                </v-col>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {login} from '../../helpers/auth.js'
export default {
  data(){
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods:{
    authenticate(){
      this.$store.dispatch('login')
      login(this.$data.form)
        .then((res) => {
          this.$store.commit('loginSuccess', res)
          this.$router.push({ name: 'home' })
        })
        .catch((err) => {
          this.$store.commit('loginFailed', err)
        })
    }
  }
}
</script>
