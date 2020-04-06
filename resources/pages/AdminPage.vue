<template>
	<v-row cols="12">
		<v-col md="12" xs="12" sm="12" lg="12" dark class="text-center">
			<span>CONFIGURACION</span>
		</v-col>
		<configs></configs>
	</v-row>
</template>

<script>

import Config from '../components/admin/Config'

export default {
	name:'admin',

	mounted()
	{

	},

	data()
	{
		return {

		}
	},
	components: {
	    'configs': Config
  	}
}

</script>