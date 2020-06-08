<template>
	<div>
		BlogPage
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name:'demo',
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