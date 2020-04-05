import auth from './store/auth'

export default {
	state: {
		
		networks:[],
		logo:'',
        title_web:'',
        subtitle_web:'',
        img_parallax:'',
        title_parallax:'',
        subtitle_parallax:'',
        text_parallax:'',
        text_footer:''

	},
	getters: {

		getConfigs(state)
		{
			return {
				'title_web': state.title_web,		
				'logo': state.logo,	
		        'subtitle_web': state.subtitle_web,		
		        'img_parallax': state.img_parallax,		
		        'title_parallax': state.title_parallax, 	
		        'subtitle_parallax': state.subtitle_parallax,
		        'text_parallax': state.text_parallax,
		        'text_footer': state.text_footer,	
				'networks': state.networks		
			}
		}

	},
	mutations: {

		setConfigs(state, payload){
			state.title_web 		= payload.title_web
			state.logo 				= payload.logo
	        state.subtitle_web 		= payload.subtitle_web
	        state.img_parallax 		= payload.img_parallax
	        state.title_parallax 	= payload.title_parallax
	        state.subtitle_parallax = payload.subtitle_parallax
	        state.text_parallax 	= payload.text_parallax
	        state.text_footer 		= payload.text_footer
			state.networks 			= payload.networks
		}

	},
	actions: {

		async getConfigs({ commit }) {
		    try {
		      const conf = (await axios.get('api/configs')).data
		      commit('setConfigs', conf)
		    } catch (error) {
		      console.log('error al obtener las configuraciones')
		    }
	  	}
	},
	modules: {

		auth

	}
}