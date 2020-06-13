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
				      :disabled="!isAdmin"
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
	            :disabled="!isAdmin"
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
							v-if="isLoggedIn && isAdmin"
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
		}
	},
	methods: {
		...mapActions({
      updateServices: 'updateServices'
    }),
		async update () {
			await this.updateServices(this.service)
			this.$emit('updateTable')
			this.$emit('close')
		}
	},
	computed:{
		...mapState({
			service: ({ service: { ServiceSelected } }) => ServiceSelected
		}),
		...mapGetters({
      isLoggedIn: 'isLoggedIn',
      isAdmin: 'isAdmin',
    })
	}
}
</script>
