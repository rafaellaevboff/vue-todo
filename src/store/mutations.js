import db from '../services/localbase.js';

export default{
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
}