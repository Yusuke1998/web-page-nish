<template>
	<v-row cols="12">
		<configs title="CONFIGURACION"></configs>
	</v-row>
</template>

<script>

import Config from '../components/admin/Config'
import { mapMutations } from 'vuex'

export default {
	name:'admin',
	mounted()
	{
		this.setParallax(true)
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
		'configs': Config
  }
}

</script>