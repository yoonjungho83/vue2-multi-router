/** view controll store */
const invCommon = {
	namespaced: true,
	state: {
		isViewMode : false
	},
    getters: {
		getViewMode: state => {
			return state.isViewMode;
		},
	},
	mutations: {
		setViewMode: (state, payload) => {
			console.log('❤️ mutations  -> setViewMode');
			state.isViewMode = payload;
		},
	},
	actions: {
		//context에는 state, commit, dispatch, rootstate 있음.
		setViewMode({ commit }, payload) { 
            console.log('❤️ actions  -> setViewMode');
			commit('setViewMode', payload);
		},
	},
};

export default invCommon;