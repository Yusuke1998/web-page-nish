<template>
	<v-row cols="12">
		<configs 
			title="CONFIGURACION" 
			@update="update"></configs>
	</v-row>
</template>

<script>

import Config from '../components/admin/Config'
import { mapMutations, mapActions } from 'vuex'

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
			}),
		...mapActions({
				getConfigs: 'getConfigs'
			}),
		update(){
			this.getConfigs()
		}
	},
	components: {
		'configs': Config
	}
}

</script>