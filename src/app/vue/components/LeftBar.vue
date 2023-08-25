<template>
    <div>
      
        <v-navigation-drawer

      right
      app
    >
      <v-divider></v-divider>
      <router-link to="/database"><v-btn icon><Icon icon="si-glyph:person-plus" color="green" width="32" height="32"></Icon></v-btn></router-link><router-link to="/database">Administrar</router-link><br>
      <v-divider></v-divider>
      <router-link to="/estudiante"><v-btn icon><Icon icon="si-glyph:person-plus"  width="32" height="32"></Icon></v-btn></router-link><router-link to="/estudiante">Estudiante</router-link><br>
      <v-divider></v-divider>
    </v-navigation-drawer>
    </div>
</template>
<script>
export default {
  props:{
    
  },
    created() {
      
    },
    methods: {
      
    },
}
</script>