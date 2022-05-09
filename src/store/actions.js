import db from '../services/localbase.js';

export default{
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
      concluiTarefa({commit}, novaTarefa){
        db.collection('tarefas').doc({ id: novaTarefa.id }).update({
          concluido: !novaTarefa.concluido
        }).then(()=>{
          commit('buscaTarefas');
        })
      },
      removeTarefa({commit}, id){
        db.collection('tarefas').doc({ id }).delete().then(()=>{
          commit('buscaTarefas');
        })
      }
}