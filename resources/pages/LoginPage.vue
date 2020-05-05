<template>
	<v-content>
		<v-row cols="12">
			<v-col sm="4">
				<v-login/>
			</v-col>
			<v-col sm="8">
				<v-register/>
			</v-col>
		</v-row>
	</v-content>
</template>

<script>
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { mapMutations } from 'vuex'

export default {
	name:'login',
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
	},
	components: {
	  'v-login': Login,
	  'v-register': Register
  }
}

</script>