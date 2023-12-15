import { createStore } from "vuex";
import login_module from "./modules/login.js"
import info_module from "./modules/info.js";
import idea_module from "./modules/idea.js";
import messages_module from "./modules/messages.js";

const store = createStore({
   modules:{
       a:login_module,
       b:info_module,
       c:idea_module,
       d:messages_module,
    }
});

export default store;