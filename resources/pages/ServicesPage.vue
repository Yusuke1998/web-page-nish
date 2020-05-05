<template>
	<div>
		ServicesPage
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name:'services',
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