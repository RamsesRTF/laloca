<template>
 <!-- App.vue -->

<v-app>
  

 

  <!-- Sizes your content based upon application components -->
  <v-main>
<navbar></navbar>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
           
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>
<script>
//esto es la pagina principal de vue aca es donde cargan los demas archivos .vue y sus componentes
import Bar from "./components/LeftBar.vue"
export default {
 components:{
   navbar:Bar
 }
}
</script>
