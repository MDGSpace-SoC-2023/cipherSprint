import backend_client from "../../../BackendClient";
const projects_module={
    namespaced: true,
    state : {
        projects:[],
        cur_Selected:{},
      },
    mutations : {
        setProjects(state, projects) {
            state.projects = projects;
          },
          setCurPro(state, project) {
            state.cur_Selected = project;
          },
      },
    actions : {
        async get_pro({state,commit},payload){
            try{
              const response=await backend_client.get(`project/project_user/${payload.uid}`);
                if(response.data.error!=undefined){
                  console.log(response.data.error)
                }
                else{
                  console.log(response.data);
                  commit("setProjects",response.data.projects);
                  console.log("STATE PROJECTS");
                  console.log([...state.projects]);
                }
            }
            catch(error){
              console.log(error)
            }
          },
          async setPro({state,commit},payload){
            try{
                let pid=payload.pid;
                console.log(`Entered setpro ${pid}`);
                console.log([...state.projects]);
                const response=await backend_client.get(`project/${payload.pid}/`);
                commit("setCurPro",response.data);
                console.log("CURRENT PROJECT");
                console.log([state.cur_Selected]);
            }
            catch(error){
              console.log(error)
            }
          },

    },
    getters:{
        getProjects:state => state.projects,
        getCurPro:state=>state.cur_Selected,
        getCurProN:state => state.cur_Selected.project_topic,
    }
      
}


export default projects_module