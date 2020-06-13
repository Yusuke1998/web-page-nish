<template>
	<v-dialog v-model="dialog" max-width="600" persistent>
		<v-card>
			<v-card-title>
				<b>Servicio</b>
			</v-card-title>
			<v-card-text>
				<v-row>
		  <v-col
			cols="12"
			class="mt-2"
		  >
			<v-text-field
				label="Titulo"
					  v-model="service.title"
					  outlined
					/>
			</v-col>
			<v-col
			cols="12"
			class="mt-2"
		  >
				<v-textarea
				label="Contenido"
				v-model="service.content"
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
							@click="save"
						>
							Registrar
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
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
	name: 'Create',
	props: ['dialog'],
	data () {
		return {
			service: {
				title: '',
				content: ''
			}
		}
	},
	methods: {
		...mapActions({
	  storeServices: 'storeServices'
	}),
		async save () {
			await this.storeServices(this.service)
			this.$emit('updateTable')
			this.$emit('close')
		}
	}
}
</script>
