import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import login_module from "./modules/login.js"
import info_module from "./modules/info.js";
import idea_module from "./modules/idea.js";
import messages_module from "./modules/messages.js";
import projects_module from "./modules/projects.js";
import resume_module from "./modules/resume.js";
//import reset from "./modules/reset.js"

const store = createStore({
   modules:{
       a:login_module,
       b:info_module,
       c:idea_module,
       d:messages_module,
       e:projects_module,
       f:resume_module,
    //    reset
    },
    plugins: [createPersistedState()],
});

export default store;