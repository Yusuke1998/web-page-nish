<template>
	<v-dialog v-model="dialog" max-width="350" persistent>
		<v-card>
			<v-card-text class="pt-7 px-12 pb-0">
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
							class="px-6"
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
							class="px-9"
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
	name: 'Edit',
	props: ['dialog'],
	data () {
		return {
			
		}
	},
	methods: {
		async update () {
			
		}
	}
}
</script>
