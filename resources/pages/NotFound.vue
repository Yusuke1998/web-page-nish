<template>
	<div>
		<v-layout>
			<v-flex xs12>
				<v-card 
					class="mx-auto mt-5"
					:loading="false"
					:shaped="true">
					<v-card-text>
						<h4>Pagina no Encontrada!</h4>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name:'notFound',
	mounted()
	{
		this.setParallax(false)
	},
	data()
	{
		return {
		}
	}
	methods:{
	...mapMutations({
	    setParallax: 'setParallax' 
	  })
	}
}

</script>