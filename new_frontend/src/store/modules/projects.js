import backend_client from "../../../BackendClient";
const projects_module={
    namespaced: true,
    state : {
        projects:[],
        cur_Selected:{},
        query:'',
        searchResults:[],
        message:"",
        disable:false,
      },
    mutations : {
        setProjects(state, projects) {
            state.projects = projects;
          },
          setCurPro(state, project) {
            state.cur_Selected = project;
          },
          setSearchResult(state,searchResults){
            state.searchResults = searchResults;
          }
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
                console.log(response);
                commit("setCurPro",response.data);
                console.log("CURRENT PROJECT");
                console.log([state.cur_Selected]);
            }
            catch(error){
              console.log(error)
            }
          },
          async addProjectMember({state,rootState}){
            console.log(rootState.f.selected_resume);
            const pid=rootState.f.selected_resume.pid;
            const pk = rootState.f.selected_resume.id;
            console.log(pid);
            try{
              const response = await backend_client.post(`resume/accept/${pid}/${pk}/`,{'sender':rootState.f.selected_resume.sender})
              console.log(response.data['message']);
              state.message=response.data['message'];
              state.disable=true;
              rootState.f.selected_resume=[];
            }catch(error){
              console.log(error);
            }
           
          },

          async getSearch({state,commit}) {
            await backend_client.get(`search/?q=${state.query}`)
              .then(response => {
                commit("setSearchResult",response.data.projects)
                console.log(state.searchResults);
                state.query='';
              })
              .catch(error => {
                console.error('Search failed:', error);
              });
          },

    },
    getters:{
        getProjects:state => state.projects,
        getCurPro:state=>state.cur_Selected,
        getCurProN:state => state.cur_Selected.project_topic,
        getSearch:state =>state.searchResults,
    }
      
}


export default projects_module