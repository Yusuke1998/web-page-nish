export default {
	state: {
		ServicesData: [],
		ServiceSelected: {}
	},
	getters: {},
	mutations: {
		setServicesData(state, payload) {
			state.ServicesData = payload
		},
		setServiceSelected(state, payload) {
			state.ServiceSelected = payload
		}
	},
	actions: {
		async getServices({ dispatch, commit, rootState }) {
			try {
				const res = (await axios.get('api/services')).data
				commit('setServicesData', res)
			} catch (e) {
				console.log(e)
			}
		},
		async getService({ dispatch, commit, rootState }, payload) {
			try {
				const res = (await axios.get(`api/services/${payload}`)).data
				dispatch('getServices')
				commit('setServiceSelected', res)
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
						console.log(element.toString());
				});
			}
		},
		async storeServices({ dispatch, commit, rootState }, payload) {
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
		async updateServices({ dispatch, commit, rootState }, payload) {
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
		async destroyServices({ dispatch, commit, rootState }, payload) {
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