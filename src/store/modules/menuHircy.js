/** hircy store */
const menuHircy = {
	namespaced: true,
	state: {
		hircyList : []
	},
    getters: {
		getHircyList: state => {
			return state.hircyList;
		},
	},
	mutations: {
		setHircy: (state, payload) => {
			console.log('❤️ mutations  -> setHircy');
            let data = {};
			data.path = payload.path;
			data.name = payload.name;
			data.component = payload.component;
			state.hircyList.push(data);
		},
	},
	actions: {
		setHircy({ commit }, payload) {
            console.log('❤️ actions  -> setHircy');
			commit('setHircy', payload);
		},
	},
};

export default menuHircy;