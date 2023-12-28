import backend_client from "../../../BackendClient";
const projects_module={
    namespaced: true,
    state : {
        projects:[]
      },
    mutations : {
        setProjects(state, projects) {
            state.projects = projects;
          },
      },
    actions : {
        async get_pro({state,commit},payload){
            try{
              backend_client.get(`project/project_user/${payload.uid}`).then(response=>{
                if(response.data.error!=undefined){
                  console.log(response.data.error)
                }
                else{
                  console.log(response.data)
                  commit("setProjects",response.data.projects);
                  console.log(state.projects);
                }
            })
            }
            catch(error){
              console.log(error)
            }
          }
    },
    getters:{
        getProjects: state => state.projects,
    }
      
}


export default projects_module