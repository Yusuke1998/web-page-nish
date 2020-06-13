import { getLocalUser } from '../helpers/auth'

const user = getLocalUser();

export default {
	state: {
		currentUser: user,
		isLoggedIn: !!user,
		isLoading: false,
		authError: null,
		editProfile: false,
		editDraw: false,
		profile: {}
	},
	getters: {
		isLoading(state) {
			return state.isLoading;
		},
		isLoggedIn(state) {
			return state.isLoggedIn;
		},
		currentUser(state) {
			return state.currentUser;
		},
		authError(state) {
			return state.authError;
		},
		isAdmin(state) {
			if (state.currentUser!==null) {
				if (state.currentUser.rol === 'admin') {
					return true
				}
				return false
			}
			return false
		}
	},
	mutations: {
		login(state) {
			state.loading 	= true;
			state.authError = null;
		},
		loginSuccess(state, payload) {
			state.authError 	= null;
			state.isLoggedIn 	= true;
			state.isLoading 	= false;
			state.currentUser 	= Object.assign({},payload.user, {
				token:payload.access_token
			});
			localStorage.setItem('user',JSON.stringify(state.currentUser));
			
			if (payload.access_token!==null) {
				axios.defaults.headers.common['Authorization'] = `Bearer ${payload.access_token}`;
			}
		},
		loginFailed(state, payload) {
			state.loading 	= false;
			state.authError = payload.error;
			state.isLoggedIn = false;
		},
		logout(state) {
			localStorage.removeItem('user');
			state.isLoggedIn = false;
			state.currentUser = null;

			axios.defaults.headers.common['Authorization'] = '';
			delete axios.defaults.headers.common['Authorization'];
		},
		drawerEditProfile(state, payload) {
			state.editProfile = payload
		},
		drawerEdit(state, payload) {
			state.editDraw = payload
		},
		setProfile(state, payload) {
			state.profile = payload
		}
	},
	actions: {
		login(context) {
			context.commit('login')
		},
		logout(context) {
			context.commit('logout')
		},
		async refresh({ commit, rootState, dispatch }) {
			try {
      			const res = (await axios.post('api/refresh', rootState.auth.currentUser)).data
				commit('loginSuccess', res)
			} catch (e) {
				context.commit('logout')
			    console.log(e)
	    	}
		},
		async register({ commit, rootState }, payload) {
			try {
	      const res = (await axios.post('api/register', payload)).data
				commit('login')
				commit('loginSuccess', res)
			} catch (e) {
				commit('loginFailed',e)
			    let data = Object.values(e.response.data)
				data.forEach(element => {
			      console.log(element.toString());
				});
	    	}
		},
		async getProfile({ commit, rootState }, payload) {
			try {
	      		const res = (await axios.get(`api/user/profile/${payload}`)).data
				commit('setProfile', res)
			} catch (e) {
				commit('setProfile', {})
			    console.log(e)
	    	}
		},
		changeDrawerProfile({ commit, rootState }, payload) {
			commit('drawerEditProfile', payload)
		},
		changeDrawer({ commit, rootState }, payload) {
			commit('drawerEdit', payload)
		}
	}
}