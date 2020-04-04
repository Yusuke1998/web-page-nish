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

export default {
	name:'home',

	mounted()
	{

	},

	data()
	{
		return {

		}
	},
	components: {
	    'v-services': Services,
	    'v-products': Products,
	    'v-demo': Demo,
	    'v-consulting': Consulting
	  }
}

</script>