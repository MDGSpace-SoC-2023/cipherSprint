import { createStore } from "vuex";

const store = createStore({
    state:{
       username :"",
       password : ""
    },
    mutations:{
        submitForm(state){
            console.log(state.username)
        }
    },
    actions:{

    },
    getters:{

    },
    modules:{
        
    }
});

export default store;