<template>
	<v-dialog v-model="dialog" max-width="900" persistent>
		<v-card>
			<v-card-title>
				<b>Consultar</b>
			</v-card-title>
			<v-card-text>
				<v-row>
					<v-col
						cols="6"
						class="mt-2"
					>
						<v-text-field
							label="Usuario"
							v-model="query.name"
							disabled
							required
							outlined
						/>
					</v-col>
					<v-col
						cols="6"
						class="mt-2"
					>
						<v-text-field
							label="Correo"
							v-model="query.email"
							disabled
							required
							outlined
						/>
					</v-col>
					<v-col
						cols="6"
						class="mt-2"
					>
						<v-text-field
							label="Telefono 1"
							v-model="query.phone1"
							required
							outlined
						/>
					</v-col>
					<v-col
						cols="6"
						class="mt-2"
					>
						<v-text-field
							label="Telefono 2 (opcional)"
							v-model="query.phone2"
							outlined
						/>
					</v-col>
					<v-col
						cols="12"
						class="mt-2"
					>
						<v-textarea
							label="Dirección"
							v-model="query.address"
							rows="1"
							required
							no-resize
							outlined
						/>
					</v-col>
					<v-col
						cols="12"
						class="mt-2"
					>
						<v-textarea
							label="Contenido"
							v-model="query.content"
							required
							outlined
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col
						cols="12"
						class="mt-2"
					>
						<v-btn
	            :disabled="query.attachments.length >= 6 ? true : false"
	            @click="pickFile"
	            color="grey"
	          >
	            <v-icon small color="white">
	              attach_file
	            </v-icon>
	          </v-btn>
          	<input ref="image" @change="onFilePicked" type="file" style="display: none" accept="image/*">
          </v-col>
          <v-col v-for="(image, index) in attachmentsPreview" :key="image.id" cols="12" sm="6" md="4">
              <v-hover>
                <v-img
                  slot-scope="{ hover }"
                  :src="image"
                  :lazy-src="image"
                  height="100px"
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
                          class="ma-1"
                        >
                          <v-icon dark class="d-flex justify-center align center">
                            delete
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-overlay>
                  </v-fade-transition>
                </v-img>
              </v-hover>
            </v-col>
				</v-row>
			</v-card-text>
			<v-card-actions class="pa-4 pt-0">
				<v-row>
					<v-col
						cols="6"
						class="d-flex justify-end"
					>
						<v-btn
							color="primary"
							small
							@click="send"
						>
							Enviar
						</v-btn>
					</v-col>
					<v-col
						cols="6"
						class="d-flex justify-start"
					>
						<v-btn
							color="primary"
							outlined
							small
							@click="$emit('close')"
						>
							Cerrar
						</v-btn>
					</v-col>
				</v-row>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
	name: 'Create',
	props: ['dialog'],
	mounted() {
		this.resetData()
	},
	data() {
		return {
			query: {
				name: '',
				email: '',
				user_id: '',
				address: '',
				phone1: '',
				phone2: '',
				content: '',
				attachments: []
			},
			attachmentsPreview: []
		}
	},
	methods: {
	...mapActions({
      storeUserQuery: 'storeUserQuery'
    }),
    resetData(){
    	this.query = {
    		name: this.currentUser.name,
			email: this.currentUser.email,
			user_id: this.currentUser.id,
			address: '',
			phone1: '',
			phone2: '',
			content: '',
			attachments: []
    	}
    	this.attachmentsPreview = []
    	this.$emit('close')
    },
		async send () {
			if (
				this.query.content 	!== '' &&
				this.query.address 	!== '' &&
				this.query.name 	!== '' &&
				this.query.email 	!== ''
			) {
				await this.storeUserQuery(this.query)
				this.$emit('updateTable')
				this.$emit('close')
				this.resetData()
			}else{
				this.$alertify.warning('Verifica la informacion!')
			}
		},
		removeFile(index) {
			this.query.attachments.splice(index, 1)
			this.attachmentsPreview.splice(index, 1)
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
							this.query.attachments.push(files[index])
							this.attachmentsPreview.push(fr.result)
						})
					} else {
						console.log('excede el peso permitido')
					}
				}
			}
		},
	},
	computed: {
	...mapGetters({
      isLoggedIn: 'isLoggedIn',
      isAdmin: 'isAdmin',
      currentUser: 'currentUser'
    })
  },
}
</script>
