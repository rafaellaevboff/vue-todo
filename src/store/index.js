import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations, //pode fazer algo com state, só aqui tem permissão de mudar a state, sempre recebe state
  actions, //toda action recebe um commit
  modules: {},
})