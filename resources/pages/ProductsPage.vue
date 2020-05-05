<template>
	<div>
		ProducsPage
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name:'products',
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