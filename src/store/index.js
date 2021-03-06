import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import chat from './modules/chat/'

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		chat
	}
})

export default store