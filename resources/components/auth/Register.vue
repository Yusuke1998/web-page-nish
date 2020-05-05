<template>
	<v-card>
	  <v-card-title class="text-center">
	    <span>Registro de Usuario</span>
	  </v-card-title>
	  <v-card-text>
	    <v-card class="grey lighten-4 elevation-0">
	    	<v-card-text>
	    		<v-card class="grey lighten-3 elevation-0 px-2">
	    			<v-card-text>
			    		<v-layout row>
		            <v-flex xs4>
		              <v-subheader>Nombres</v-subheader>
		            </v-flex>
		            <v-flex xs8>
		              <v-text-field
		                label="Yusuke"
		                single-line
		                v-model="form.firstname"
		              ></v-text-field>
		            </v-flex>
		          </v-layout>
		          <v-layout row>
		            <v-flex xs4>
		              <v-subheader>Apellidos</v-subheader>
		            </v-flex>
		            <v-flex xs8>
		              <v-text-field
		                label="Urameshi"
		                single-line
		                v-model="form.lastname"
		              ></v-text-field>
		            </v-flex>
		          </v-layout>
		          <v-layout row>
		            <v-flex xs4>
		              <v-subheader>Cedula</v-subheader>
		            </v-flex>
		            <v-flex xs8>
		              <v-text-field
		                label="123456789"
		                single-line
		                v-model="form.identity"
		              ></v-text-field>
		            </v-flex>
		          </v-layout>
		        </v-card-text>
	        </v-card>
	    	</v-card-text>
	      <v-card-text>
	      	<v-card class="grey lighten-3 elevation-0 px-2">
	    			<v-card-text>
			      	<v-layout row>
		            <v-flex xs4>
		              <v-subheader>Nombre de Usuario</v-subheader>
		            </v-flex>
		            <v-flex xs8>
		              <v-text-field
		                label="yusuke1998"
		                single-line
		                v-model="form.name"
		              ></v-text-field>
		            </v-flex>
		          </v-layout>
		          <v-layout row>
		            <v-flex xs4>
		              <v-subheader>Correo Electronico</v-subheader>
		            </v-flex>
		            <v-flex xs8>
		              <v-text-field
		                label="yusuke@yusuke.com"
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
		          <v-layout row>
		            <v-flex xs4>
		              <v-subheader>Confirma la Contraseña</v-subheader>
		            </v-flex>
		            <v-flex xs8>
		              <v-text-field
		                label="**************"
		                class="input-group--focused"
		                single-line
		                v-model="form.password_confirmation"
		              ></v-text-field>
		            </v-flex>
		          </v-layout>
		        </v-card-text>
		      </v-card>
	      </v-card-text>
	      <v-card-actions>
	      	<v-layout row>
            <v-col 
              sm="2" 
              md="2" 
              lg="2" 
              offset-sm="9"
              offset-md="9"
              offset-lg="9"
            >
              <v-btn 
                class="primary"
                @click.preventdefault="registerAction">
                <v-icon left>mdi-send</v-icon>
                Registrar
              </v-btn>
            </v-col>
          </v-layout>
	      </v-card-actions>
	    </v-card>
	  </v-card-text>
	</v-card>
</template>

<script>
import {login} from '../../helpers/auth.js'
import { mapActions, mapState } from 'vuex'

export default {
  data(){
    return {
      form: {
        firstname: "",
        lastname: "",
        identity: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    }
  },
  computed:{
    ...mapState({
      isLoggedIn: ({ auth: { isLoggedIn } }) => isLoggedIn
    })
  },
  methods:{
  	...mapActions({
      register: 'register'
    }),
  	async registerAction() {
  		await this.register(this.form)
  		if (this.isLoggedIn) {
  			this.$router.push({ name: 'home' })
  		}
  	}
  }
}
</script>
