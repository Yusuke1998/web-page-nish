export default {
	state: {
		landingData: []
	},
	getters: {},
	mutations: {
		setLandingData(state, payload) {
			state.landingData = payload
		}
	},
	actions: {
		async getLanding({ commit, rootState }, payload) {
			try {
				const res = (await axios.post('api/landing', payload)).data
				commit('setLandingData', res)
			} catch (e) {
				console.log(e)
			}
		},
		async storeLanding({ commit, rootState }, payload) {
			try {
				const res = (await axios.post('api/landing/store', payload)).data
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
						console.log(element.toString());
				});
			}
		}
	}
}