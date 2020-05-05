import { getLocalUser } from '../helpers/auth'

const user = getLocalUser();

export default {
	state: {
		currenUser:user,
		isLoggedIn:!!user,
		isLoading:false,
		authError:null
	},
	getters: {
		isLoading(state) {
			return state.isLoading;
		},
		isLoggedIn(state) {
			return state.isLoggedIn;
		},
		currenUser(state) {
			return state.currenUser;
		},
		authError(state) {
			return state.authError;
		},
		isAdmin(state) {
			if (state.currenUser!==null) {
				if (state.currenUser.rol === 'admin') {
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
			state.currenUser 	= Object.assign({},payload.user, {
				token:payload.access_token
			});
			localStorage.setItem('user',JSON.stringify(state.currenUser));
			
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
			state.currenUser = null;

			axios.defaults.headers.common['Authorization'] = '';
			delete axios.defaults.headers.common['Authorization'];
		},
		register(state, payload) {
			console.log('mutations', payload)
		}
	},
	actions: {
		login(context) {
			context.commit('login')
		},
		logout(context) {
			context.commit('logout')
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
		}
	}
}