<template>
	<div>
		BlogPage
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name:'blog',
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
	}
}

</script>