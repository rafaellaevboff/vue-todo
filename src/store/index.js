import Vue from 'vue'
import Vuex from 'vuex'

import Localbase from 'localbase'
let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      // {id:1, title:'Estudar Vue.js', concluido:false},
      // {id: 2, title:'Estudar JavaScript', concluido:false},
  ]
  },
  mutations: { //pode fazer algo com state, só aqui tem permissão de mudar a state, sempre recebe state
    buscaTarefas(state){
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB;
      })
      
    },
    
    adicionaTarefa(state, title){
      db.collection('tarefas').add({
        id: new Date().getTime(),
        title,
        concluido:false
      })
    },

    editaTarefa(state, novaTarefa){
      // let tarefa = state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0]
      // tarefa.title = novaTarefa.title;

      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        title: novaTarefa.title
      })
    }, 

    // removeTarefa(state, id){
    //   state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id);
    // },
  },
  actions: { //toda action recebe um commit
    async adicionaTarefa({commit}, title){
      await commit('adicionaTarefa', title);
      await commit('buscaTarefas');
    },
    editaTarefa({commit}, novaTarefa){
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        title: novaTarefa.title
      }).then(()=>{
        commit('buscaTarefas');
      })
    },
    removeTarefa({commit}, id){
      db.collection('tarefas').doc({ id }).delete().then(()=>{
        commit('buscaTarefas');
      })
    }
  },
  modules: {
  },
})