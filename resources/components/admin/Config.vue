<template>
	<v-col md="12" xs="12" sm="12" lg="12" class="gray">
		<v-card>
			<v-card-title>
				<span class="text-center mx-auto">{{ title }}</span>
			</v-card-title>
			<v-card-text>
				<v-container fluid class="px-3">
	                <v-layout row wrap>
	                  <v-flex xs6>
	                    <v-text-field
	                    	v-model="configs.title_web"
	                    	label="Titulo de la Web"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs6>
	                    <v-text-field
	                    	v-model="configs.subtitle_web"
	                      	label="Subtitulo de la web"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs6>
	                    <v-text-field
	                    	v-model="configs.title_parallax"
	                    	label="Titulo Paralax"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs6>
	                    <v-text-field
	                    	v-model="configs.subtitle_parallax"
	                    	label="Subtitulo Paralax"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs12>
	                    <v-text-field
	                    	v-model="configs.text_parallax"
	                    	label="Descripcion Paralax"
	                    ></v-text-field>
	                  </v-flex>
	                  <v-flex xs12>
	                    <v-text-field
	                    	v-model="configs.text_footer"
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
		<v-card>
			<v-card-text>
				<v-container fluid class="px-3">
	                <v-layout row wrap>
	                  <v-flex xs12>
	                    redes sociales
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
		<v-card>
			<v-card-text>
				<v-container fluid class="px-3">
	                <v-layout row wrap>
	                  <v-flex xs12>
	                    Imagen principal
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
	props:{
		title:{
			type:String,
			required:true
		}
	},
	async mounted(){
		await this.getConfigs()
		await this.setData()
	},
	data () {
		return {
			configs:{
		        title_web:'',
		        subtitle_web:'',
		        title_parallax:'',
		        subtitle_parallax:'',
		        text_parallax:'',
		        text_footer:''
			}
		}
	},
	methods: {
	    ...mapActions({
	      setUpdate: 'setUpdate',
	      getConfigs: 'getConfigs'
	    }),
	    update(){
	    	this.setUpdate(this.configs)
	    },
	    setData(){
	    	this.configs={
		        title_web:this.$store.state.title_web,
		        subtitle_web:this.$store.state.subtitle_web,
		        title_parallax:this.$store.state.title_parallax,
		        subtitle_parallax:this.$store.state.subtitle_parallax,
		        text_parallax:this.$store.state.text_parallax,
		        text_footer:this.$store.state.text_footer
			}
	    }
	}
}
</script>