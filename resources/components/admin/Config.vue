<template>
	<v-col md="12" xs="12" sm="12" lg="12" class="primary">
		<v-card>
			<v-card-text>
				<v-container fluid class="px-3">
	                <v-layout row wrap>
	                  <v-flex xs6>
	                    <v-text-field
	                    	v-model="configs.title_web=$store.state.title_web"
	                    	label="Titulo de la Web"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs6>
	                    <v-text-field
	                    	v-model="configs.subtitle_web=$store.state.subtitle_web"
	                      	label="Subtitulo de la web"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs6>
	                    <v-text-field
	                    	v-model="configs.title_parallax=$store.state.title_parallax"
	                    	label="Titulo Paralax"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs6>
	                    <v-text-field
	                    	v-model="configs.subtitle_parallax=$store.state.subtitle_parallax"
	                    	label="Subtitulo Paralax"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs12>
	                    <v-text-field
	                    	v-model="configs.text_parallax=$store.state.text_parallax"
	                    	label="Descripcion Paralax"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs12>
	                    <v-text-field
	                    	v-model="configs.text_footer=$store.state.text_footer"
	                    	label="Texto del pie de Pagina"
	                    ></v-text-field>
	                  </v-flex>
	                </v-layout>
            	</v-container>
			</v-card-text>
			<v-card-actions class="float-right">
				<v-btn @click.prevent="update" dark>
					Actualizar
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
	computed:{
		...mapState({
			isLoggedIn: ({ auth: { isLoggedIn } }) => isLoggedIn,
			getConfigsData: (getConfigsData) => getConfigsData
	    })
	},
	data () {
		return {
			configs:{
		    	networks:[],
				logo:'',
		        title_web:'',
		        subtitle_web:'',
		        img_parallax:'',
		        title_parallax:'',
		        subtitle_parallax:'',
		        text_parallax:'',
		        text_footer:''
			}
		}
	},
	components: {

	},
	methods: {
	    ...mapActions({
	      setUpdate: 'setUpdate',
	      getConfigs: 'getConfigs'
	    }),
	    update(){
	    	this.$store.dispatch('setUpdate',this.configs)
	    }
	}
}
</script>