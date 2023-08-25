<template>
<div>
    <v-app-bar
      color="cyan"
      dense
      dark
      absolute
    >
    
      <v-toolbar-title>Menu Principal</v-toolbar-title>
      <v-divider
      class="mx-4"
      vertical
    ></v-divider>  
      <v-spacer></v-spacer>
    <v-btn
    icon
    >
       <v-icon>mdi-menu</v-icon>
    </v-btn>
<v-divider
      class="mx-4"
      vertical
    ></v-divider>
      <v-btn icon @click="search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
<v-divider
      class="mx-4"
      vertical
    ></v-divider>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="option in options"
            @click="taketolink(option.link)"
          >
            <v-list-item-title>Option {{ option.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [{
        name:"something",
        link:"/testpage"
      },{
        name:"community",
        link:"/community"
      },{
        name:"downloads",
        link:"/downloads"
      },{
        name:"promotions",
        link:"/promotions"
      }],
    }
  },
  methods: {
    search(item){
     alert(`you are searching for ${item}`)
    },
    taketolink(link){
      alert(`you are being redirected to ${link}`)
    } 
  },
}
</script>