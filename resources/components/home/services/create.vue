<template>
	<v-dialog v-model="dialog" max-width="600" persistent>
		<v-card>
			<v-card-text>
				<v-row>
					<v-col
						cols="12"
						class="d-flex justify-center"
					>
						<span
							class="primary--text subtitle-2 font-weight-medium"
						>
							<b>
								Crear Servicio
							</b>
						</span>
					</v-col>
				</v-row>
				<v-row>
          <v-col
            cols="12"
            class="mt-2"
          >
          	<v-text-field
	            label="Titulo"
				      v-model="data.title"
				      outlined
				    />
        	</v-col>
      	</v-row>
      	<row>
      		<v-col
            cols="12"
            class="mt-2"
          >
	      		<v-textarea
	            label="Contenido"
	            v-model="data.content"
				      outlined
	          />
	        </v-col>
    		</row>
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
export default {
	name: 'Create',
	props: ['dialog'],
	data () {
		return {
			data: {
				title: '',
				content: ''
			}
		}
	},
	methods: {
		async save () {
			
		}
	}
}
</script>
