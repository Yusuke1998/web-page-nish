<template>
	<v-card>
		<v-card-title class="text-center">
			<span>Inicio de Sesión</span>
		</v-card-title>
		<v-card-text>
			<v-card class="grey lighten-4 elevation-0 px-2">
				<v-card-text>
					<v-layout row>
						<v-flex xs4>
							<v-subheader>Correo</v-subheader>
						</v-flex>
						<v-flex xs8>
							<v-text-field
							label="user@user.com"
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
							type="password"
							v-model="form.password"
							></v-text-field>
						</v-flex>
					</v-layout>
				</v-card-text>
				<v-card-actions>
					<v-layout row>
						<v-col 
						sm="2" 
						offset-sm="6"
						>
						<v-btn 
						class="primary"
						@click.preventdefault="authenticate">
						<v-icon left>mdi-send</v-icon>
						Ingresar
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
	export default {
		data(){
			return {
				form: {
					email: "",
					password: ""
				}
			}
		},
		methods:{
			authenticate(){
				this.$store.dispatch('login')
				login(this.$data.form)
				.then((res) => {
					this.$store.commit('loginSuccess', res)
					this.$router.push({ name: 'home' })
				})
				.catch((err) => {
					this.$store.commit('loginFailed', err)
				})
			}
		}
	}
</script>
