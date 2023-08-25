import Vue from "vue";
//Vuetify
import vuetify from "./lib/Vuetify.js";
//Vuex
import Vuex from "vuex";
Vue.use(Vuex);
//Vue Router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import { Menurouter } from "../routes/vue-router.js";

//-------------------------------------------------------------------------------------------------------------------------
import Menu from "./vue/Menu.vue";
//-------------------------------------------------------------------------------------------------------------------------
 const menu = new Vue({
   vuetify,
   router: Menurouter,
   render: (h) => h(Menu),
 }).$mount("#Menu");

// waos
 //esto es para configurar la clase de vue, sin esto la parte de webpack no sirve