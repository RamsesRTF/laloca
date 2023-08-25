<template>
  <div>
    <v-card>
      <v-card-title>

      </v-card-title>
      <v-card-text>
        
      </v-card-text>
    </v-card>
    <v-card>
      <v-btn  v-on:click="SEGSSOOO()">
        <v-badge overlap>
        <span slot="badge" v-if="SEGSO">xoxoXD</span>
        <v-avatar color="red red--after">
          <v-icon dark>icon</v-icon>
        </v-avatar>
      </v-badge>
      </v-btn>
      
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SEGSO:false,
    };
  },
  methods: {
    Save() {
      console.log(this.studient);
     
    },
    SEGSSOOO(){
      alert("Fotosintesis")
      this.SEGSO=true
      
    }
  },
};
</script>
