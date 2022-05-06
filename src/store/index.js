import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id:1, titulo:'Estudar Vue.js', concluido:false},
      {id: 2, titulo:'Estudar JavaScript', concluido:false},
  ]
  },
  mutations: { //pode fazer algo com state, só aqui tem permissão de mudar a state
    adicionaTarefa(state, titulo){
      if(titulo){
        state.tarefas.push({
            id: new Date().getTime(),
            titulo,
            concluido:false
        })
      }
    },

    removeTarefa(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
  },
  actions: {
  },
  modules: {
  }
})
