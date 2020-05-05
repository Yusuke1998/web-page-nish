<template>
	<div>
		ConsultingPage
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name:'consulting',
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
	}
}

</script>