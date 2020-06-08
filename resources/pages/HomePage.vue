<template>
	<v-landing :landing-data="landing"/>
</template>

<script>
import Landing from '../components/home/Landing'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
	name:'home',
	mounted() {
		this.setParallax(true)
		this.getData()
	},
	data() {
		return {
			landing: []
		}
	},
	methods: {
		...mapActions({
				getLanding: 'getLanding'
			}),
		...mapMutations({
			setParallax: 'setParallax' 
		}),
		async getData() {
			await this.getLanding({ row: 5, order: 'DESC' })
			this.landing = this.landingData
		}
	},
	computed:{
		...mapState({
			landingData: ({ landing: { landingData } }) => landingData
		})
	},
	components: { 
		'v-landing': Landing 
	}
}

</script>