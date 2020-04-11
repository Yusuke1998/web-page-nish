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
		isLoading(state){
			return state.isLoading;
		},
		isLoggedIn(state){
			return state.isLoggedIn;
		},
		currenUser(state){
			return state.currenUser;
		},
		authError(state){
			return state.authError;
		},
		isAdmin(state){
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
		login(state){
			state.loading 	= true;
			state.authError = null;
		},
		loginSuccess(state, payload){
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
		loginFailed(state, payload){
			state.loading 	= false;
			state.authError = payload.error;
		},
		logout(state){
			localStorage.removeItem('user');
			state.isLoggedIn = false;
			state.currenUser = null;

			axios.defaults.headers.common['Authorization'] = '';
			delete axios.defaults.headers.common['Authorization'];
		}
	},
	actions: {
		login(context){
			context.commit('login')
		},
		logout(context){
			context.commit('logout')
		}
	}
}