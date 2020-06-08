<template>
	<v-row cols="12">
		<landing></landing>
	</v-row>
</template>

<script>

import Landing from '../components/admin/LandingConfig'
import { mapMutations } from 'vuex'

export default {
	name:'admin',
	mounted()
	{
		this.setParallax(false)
	},
	data()
	{
		return {
			
		}
	},
	methods:{
		...mapMutations({
			setParallax: 'setParallax' 
		})
	},
	components: {
		'landing': Landing
	}
}

</script>