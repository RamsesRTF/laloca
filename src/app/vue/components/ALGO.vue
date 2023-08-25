<!-- como todo documento vue tenemos que empezar con el template -->
<!-- <template>
    <div>
        dentro del template siempre tiene que tener otra etiqueta por lo general es un div luego de esta etiqueta es que comenzamos
        a programar las demas en resumen div es como el body  de un html 
    </div> XDDDDDDDD
</template>
-->
<template>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scrollht
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>
  
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        
        <v-app-bar-title>Title</v-app-bar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-card>
  </template>
  <script> 
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  props:{
    
  },
    created() {
      
    },
    methods: {
      
    },
}
  </script>
