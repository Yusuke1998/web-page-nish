export default {
	state: {
		ServicesData: []
	},
	getters: {},
	mutations: {
		setServicesData(state, payload) {
			state.ServicesData = payload
		}
	},
	actions: {
		async getServices({ commit, rootState }) {
			try {
				const res = (await axios.get('api/services')).data
				commit('setServicesData', res)
			} catch (e) {
				console.log(e)
			}
		},
		async storeServices({ commit, rootState }, payload) {
			try {
				const res = (await axios.post('api/services', payload)).data
				dispatch('getServices')
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
						console.log(element.toString());
				});
			}
		},
		async updateServices({ commit, rootState }, payload) {
			try {
				const { id } = payload
				const res = (await axios.put(`api/services/${id}`, payload)).data
				dispatch('getServices')
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
						console.log(element.toString());
				});
			}
		},
		async destroyServices({ commit, rootState }, payload) {
			try {
				const res = (await axios.delete(`api/services/${payload}`)).data
				dispatch('getServices')
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
						console.log(element.toString());
				});
			}
		}
	}
}