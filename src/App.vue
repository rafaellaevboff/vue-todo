<template>
  <v-app id="inspire">

    <v-navigation-drawer
    v-model="drawer"
    app>
      <v-img
      src="./assets/imagemPrincipal.jpg"
      gradient="to top right, rgba(255,255,200,.2), rgba(255,255,102,.5)"
      dark
      class="pt-5 text-center"
      >
      <v-avatar
      size="100">
        <img
          src="https://avatars.githubusercontent.com/u/81710271?v=4"
          alt="Rafaella"
        >
      </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Vue.js
            </v-list-item-title>
            <v-list-item-subtitle>
              Lista de Tarefas
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in itens"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

<v-app-bar
      app
      color="#43a047"
      dark
      prominent
      height="190"
      src="./assets/imagemPrincipal.jpg"
      fade-img-on-scroll
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(255,255,200,.2), rgba(255,255,102,.5)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <center>
        <v-app-bar-title
        class="mt-16"
        >
        <InputTarefa/>
        </v-app-bar-title>
      </center>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from './components/InputTarefa.vue'

  export default {
  components: { InputTarefa },
    data: () => ({ 
      drawer: true,
      itens: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to:'/' },
          { title: 'Sobre', icon: 'mdi-help-box', to:'/sobre'  },
        ],
    }),
  }
</script>