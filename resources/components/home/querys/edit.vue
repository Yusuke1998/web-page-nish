<template>
	<v-dialog v-model="dialog" max-width="900" persistent>
		<v-card>
			<v-card-title>
				<b>Consulta</b>
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
							@click="update"
						>
							Actualizar
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
	name: 'Edit',
	props: ['dialog'],
	data () {
		return {
			attachmentsPreview: []
		}
	},
	methods: {
		...mapActions({
			updateUserQuery: 'updateUserQuery'
		}),
		async update () {
			await this.updateUserQuery(this.query)
			this.$emit('updateTable')
			this.$emit('close')
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
	computed:{
		...mapGetters({
			isLoggedIn: ({ auth: { isLoggedIn } }) => isLoggedIn,
			currentUser: ({ auth: { currentUser } }) => currentUser
		}),
		...mapState({
			query: ({ query: { QuerySelected } }) => QuerySelected
		})
	},
}
</script>
