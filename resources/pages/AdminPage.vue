<template>
	<v-row cols="12">
		<configs title="CONFIGURACION"></configs>
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