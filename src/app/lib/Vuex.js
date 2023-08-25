const Vuex   = require('vuex');
const Vue = require('vue');
Vue.use(Vuex);
const userstore = new Vuex.Store({
    state:{
        users:[],
        signed:false,
        registrations:[]
    },

});
const playerstore = new Vuex.Store({
    state:{
        Players:[],
        Game:{
            Main:{
                Current_Size:10,
                Size_type:"mb",
                last_update_time:20220219,
                last_release_time:20220219, 
                ID:001,
                version:"0.0.1",
                name:"First Proyect"
            },
            Expansion:{
                ID:001,
                version:"0.0.1",
                name:"First Proyect"
            }

        },
        online:[]
    },
});
const gamestore = new Vuex.Store({
    state:{
        Game:{
            Main:{
                Current_Size:10,
                Size_type:"mb",
                last_update_time:20220219,
                last_release_time:20220219, 
                ID:001,
                version:"0.0.1",
                name:"First Proyect"
            },
            Expansion:{
                ID:001,
                version:"0.0.1",
                name:"First Proyect"
            }

        },
    }
})
const eventstore = new Vuex.Store({
    state:{
        events:[],
        promotions:[],
        requests:[]
    }
});
module.exports=[eventstore,playerstore,userstore]