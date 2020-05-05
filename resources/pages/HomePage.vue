<template>
	<v-content>
		<!-- Servicios ofrecidos -->
		<v-services/>
		<!-- Productos ofrecidos -->
		<v-products/>
		<!-- Demostraciones -->
		<v-demo/>
		<!-- Consultas -->
		<v-consulting/>
	</v-content>
</template>

<script>
import Demo from '../components/home/Demo'
import Consulting from '../components/home/Consulting'
import Products from '../components/home/Products'
import Services from '../components/home/Services'
import { mapMutations } from 'vuex'

export default {
	name:'home',
	mounted() {
		this.setParallax(true)
	},
	data() {
		return {
		}
	},
	methods: {
	...mapMutations({
	    setParallax: 'setParallax' 
	  })
	},
	components: {
    'v-services': Services,
    'v-products': Products,
    'v-demo': Demo,
    'v-consulting': Consulting
  }
}

</script>