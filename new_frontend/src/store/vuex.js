import { createStore } from "vuex";
import login_module from "./modules/login.js"
import info_module from "./modules/info.js";
const store = createStore({
   modules:{
       a:login_module,
       b:info_module,
    }
});

export default store;