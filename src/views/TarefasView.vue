<template>
    <div>
        <v-col
          cols="12"
        >
            <v-text-field
                v-model="campoInput"
                label="Adicionar Tarefa"
                outlined
                clearable
                @keyup.enter="handleAddTarefa"
            ></v-text-field>
        </v-col>

        <v-list
        flat
        subheader
        >
            <v-list-item-group
            multiple
            active-class=""
            >
                <div
                v-for="tarefa, index in $store.state.tarefas"
                :key="index"
                >
                    <TarefaProjeto
                    :tarefa="tarefa"
                    />
                </div>

            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
import TarefaProjeto from '../components/tarefas/TarefaProjeto.vue'

export default {
    name: 'TodoTarefas',

    components: {
        TarefaProjeto
    },

    data(){
        return{
            campoInput: null,
        }
    },
    created(){
        this.$store.commit('buscaTarefas')
    },
    methods:{
        handleAddTarefa(){
            //this.$store.commit('adicionaTarefa', this.campoInput)
            this.$store.dispatch('adicionaTarefa', this.campoInput)
            this.campoInput = null;
        }
    },
}
</script>