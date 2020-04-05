<template>
	<v-content>
		<v-login/>
	</v-content>
</template>

<script>
import Login from '../components/auth/Login'

export default {
	name:'login',

	mounted()
	{

	},

	data()
	{
		return {

		}
	},
	components: {
	    'v-login': Login
  	}
}

</script>