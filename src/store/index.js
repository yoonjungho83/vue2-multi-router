import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import invCommon from '@/store/modules/invCommon.js'; 
import menuHircy from '@/store/modules/menuHircy.js'; 

const store = new Vuex.Store({
	modules: {
		invCommon,
		menuHircy,
	},
});

export default store;