<template>
	<v-col md="12" xs="12" sm="12" lg="12" class="gray">
		<v-card>
			<v-card-title>
				<span class="text-center mx-auto">{{ title }}</span>
			</v-card-title>
			<v-card-text>
				<v-container>
					<v-row cols="12">
						<v-btn 
							color="primary" 
							class="float-left"
							link :to="{ path: 'configurar-inicio' }"
						>
							Pagina de Inicio
						</v-btn>
					</v-row>
				</v-container>
			</v-card-text>
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
			<v-card-text>
				<v-container fluid class="px-3">
					<v-layout row wrap>
						<v-flex xs12>
							redes sociales
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
			<v-card-text>
			<v-container fluid class="px-3">
				<v-layout row wrap>
					<v-flex xs12>
						<v-row dense>
							<v-col cols="12" sm="6">
								<v-hover>
									<v-card
										slot-scope="{ hover }"
										@click="pickFile"
										tile
										color="grey lighten-1"
										height="100"
										class="border-radius-1 cursor-pointer elevation-4"
									>
										<div class="d-flex justify-center align-center" style="height:100%">
											<v-icon dark size="60" class="d-flex justify-center">
												camera_alt
											</v-icon>
										</div>
										<v-fade-transition>
											<v-overlay v-if="hover" absolute color="black" opacity="0.8">
												<div class="d-flex justify-center align-center body-2 white--text">
													+ agregar
												</div>
											</v-overlay>
										</v-fade-transition>
										<input ref="image" @change="onFilePicked" type="file" style="display: none" accept="image/*">
									</v-card>
								</v-hover>
							</v-col>
							<v-col v-for="(image, index) in attachmentsPreview" :key="image.id" cols="12" sm="6">
								<v-hover>
									<v-img
										slot-scope="{ hover }"
										:src="image"
										:lazy-src="image"
										height="250px"
										class="grey lighten-2 border-radius-1 elevation-4"
									>
										<template v-slot:placeholder>
											<v-layout fill-height align-center justify-center ma-0>
												<v-progress-circular indeterminate color="grey lighten-5" />
											</v-layout>
										</template>
										<v-fade-transition>
											<v-overlay v-if="hover" absolute color="black" opacity="0.8">
												<div class="d-flex justify-center align-center body-2 white--text">
													<v-btn
														@click="removeFile(index)"
														fab
														dark
														small
														color="red"
														class="ma-4 float-left"
													>
														<v-icon dark class="d-flex justify-center align center">
															delete
														</v-icon>
													</v-btn>
													<v-btn
														@click="selectFile(index)"
														fab
														dark
														small
														color="primary"
														class="ma-4 float-right"
													>
														<v-icon dark class="d-flex justify-center align center">
															done
														</v-icon>
													</v-btn>
												</div>
											</v-overlay>
										</v-fade-transition>
									</v-img>
								</v-hover>
							</v-col>
						</v-row>                    
					</v-flex xs12>
					<v-flex xs12>
						<v-row>
							<v-col cols="12" sm="12">
								<span v-if="image==''||image==undefined||image==null">Sin imagen</span>
								<v-hover v-else class="py-2">
									<v-img
										slot-scope="{ hover }"
										:src="image.b64"
										:lazy-src="image.b64"
										class="grey lighten-2 border-radius-1 elevation-4"
									>
										<template v-slot:placeholder>
											<v-layout fill-height align-center justify-center ma-0>
												<v-progress-circular indeterminate color="grey lighten-5" />
											</v-layout>
										</template>
									</v-img>
								</v-hover>
							</v-col>
						</v-row>                    
					</v-flex xs12>
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
				text_footer:'',
				img_parallax:''
			},
			image:null,
			attachments:[],
			attachmentsPreview:[],
		}
	},
	methods: {
		...mapActions({
			setUpdate: 'setUpdate',
			getConfigs: 'getConfigs'
		}),
		async update(){
			await this.setUpdate(this.configs)
			this.$alertify.success('Configuración actualizada con exito!')
			this.$emit('update')
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
		},
		removeFile(index) {
			if (this.image!==null) {
				if (this.image.index == index) {
					this.image=null
				}
			}
			if (this.attachmentsPreview.length == 0) {
					this.image=null
			}
			this.attachments.splice(index, 1)
			this.attachmentsPreview.splice(index, 1)
		},
		selectFile(index) {
			this.configs.img_parallax = this.attachments[index]
			this.image = {
				'index':index,
				'b64':this.attachmentsPreview[index]
			}
		},
		pickFile() {
			this.$refs.image.click()
		},
		onFilePicked(e) {
			const { files } = e.target
			for (let index = 0; index < files.length; index++) {
				const fr = new FileReader()
				if (files[index] !== undefined) {
					if (files[index].size < 2600000) {
						fr.readAsDataURL(files[index])
						fr.addEventListener('load', () => {
							this.attachments.push(files[index])
							this.attachmentsPreview.push(fr.result)
						})
					} else {
						this.$toast.global.error('Tamaño de archivo excedido')
					}
				}
			}
		}
	}
}
</script>