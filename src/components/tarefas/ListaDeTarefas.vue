<template>
    <div>
        <drop-list
        :items="tarefasComputadas" 
        @reorder="$event.apply(tarefasComputadas)" 
        >
            <template v-slot:item="{item, reorder}">
                <drag 
                :key="item.id" 
                :data="item" 
                >
                    <TarefaProjeto
                    style="background-color: white"
                    :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}"
                    :tarefa="item"
                    />
                    <v-divider/>
                </drag>
            </template>
        </drop-list>
    </div>
</template>

<script>
import {Drag,DropList} from "vue-easy-dnd";
import TarefaProjeto from './TarefaProjeto.vue';

export default {
    components: {
        Drag,
        DropList,
        TarefaProjeto,
    },
    computed:{
        tarefasComputadas(){
            return this.$store.state.tarefas;
        }
    }
}

</script>

<style>

</style>