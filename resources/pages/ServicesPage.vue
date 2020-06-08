<template>
	<v-services></v-services>
</template>

<script>
import { mapMutations } from 'vuex'
import Service from '../components/home/Services'

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
	},
	components:{
		'v-services': Service
	}
}

</script>