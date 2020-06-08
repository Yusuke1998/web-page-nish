<template>
	<div>
		QueryPage
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name:'query',
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