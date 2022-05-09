<template>
  <div>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2"> Informe o novo título </v-card-text>
        <v-text-field
            class="px-4"
            label="Título"
            placeholder="Informe um título"
            outlined
            v-model="title"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-5"
            text
            @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="handleEditar()">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    props:['tarefa'],
    
    data() {
      return{
        dialog: true,
        title: null,
      }
    },
    created(){
      this.title = this.tarefa.title;
    },
    methods:{
      handleEditar(){
        let novaTarefa = {
          title : this.title,
          id: this.tarefa.id
        }
        this.$store.dispatch('editaTarefa', novaTarefa);
        this.$emit('fechaModal');
      }
    }
}
</script>

<style>

</style>