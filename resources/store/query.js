export default {
	state: {
		QueriesData: [],
		QuerySelected: {},
		openQuerySelectedDetail: false
	},
	getters: {},
	mutations: {
		setQueriesData(state, payload) {
			state.QueriesData = payload
		},
		setQueriesSelected(state, payload) {
			state.QuerySelected = payload
		},
		openQueryDetails(state, payload) {
			const { query, status } = payload
			state.QuerySelected = query
			state.openQuerySelectedDetail = status
		}
	},
	actions: {
		async getAllQueries({ commit, rootState, dispatch }, payload) {
			try {
				const res = (await axios.get(`api/queries`)).data
				commit('setQueriesData', res)
			} catch (e) {
				console.log(e)
			}
		},
		async getQuerySelected({ commit, rootState, dispatch }, payload) {
			try {
				const res = (await axios.get(`api/queries/${payload}`)).data
				commit('openQueryDetails', {query: res, status: true})
			} catch (e) {
				console.log(e)
			}
		},
		async storeUserQuery({ commit, rootState, dispatch }, payload) {
			try {
				const body = new FormData()
				body.append('name', payload.name)
				body.append('email', payload.email)
				body.append('user_id', payload.user_id)
				body.append('address', payload.address)
				body.append('phone1', payload.phone1)
				body.append('phone2', payload.phone2)
				body.append('content', payload.content)
				for (let index = 0; index < payload.attachments.length; index++) {
					body.append('attachments[]', payload.attachments[index])
				}
				const res = (await axios.post('api/queries', body,
					{ headers: { 'Content-Type': 'multipart/form-data' } }
				)).data
				dispatch('getAllQueries')
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
					console.log(element.toString());
				});
			}
		},
		async updateUserQuery({ commit, rootState, dispatch }, payload) {
			try {
				const { id } = payload
				const res = (await axios.put(`api/queries/${id}`, payload)).data
				dispatch('getAllQueries')
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
					console.log(element.toString());
				});
			}
		},
		async updateStateUserQuery({ commit, rootState, dispatch }, payload) {
			try {
				const { id } = payload
				const res = (await axios.put(`api/queries/${id}/state`, payload)).data
				dispatch('getAllQueries')
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
					console.log(element.toString());
				});
			}
		},
		async destroyUserQuery({ commit, rootState, dispatch }, payload) {
			try {
				const res = (await axios.delete(`api/queries/${payload}`)).data
				dispatch('getAllQueries')
			} catch (e) {
				let data = Object.values(e.response.data)
				data.forEach(element => {
					console.log(element.toString());
				});
			}
		}
	}
}