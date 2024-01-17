import backend_client from "../../../BackendClient";
const resume_module={
    namespaced: true,
    state : {
        resume:[],
        reqd_resume:[],
      },
    mutations : {
        setResume(state,resume){
            state.resume=resume;
        },
        setReqdResume(state,resumeList){
          state.reqd_resume=resumeList;
        }
      },
    actions : {
        async getResume({state,commit}){
            try{
                const response=await backend_client.get('resume/');
                  if(response.data.error!=undefined){
                    console.log(response.data.error)
                  }
                  else{
                    console.log(response.data);
                    commit("setResume",response.data);
                    console.log([...state.resume]);
                  }
              }
              catch(error){
                console.log(error)
              }
        },
        async getReqdResume({state,commit,rootState}){
          try{
            const uid =rootState.a.user_info.id;
            const pid = rootState.e.cur_Selected.pk;
            const response = await backend_client.get(`resume/${uid}/${pid}/`);
            console.log(response.data);
            commit("setReqdResume",response.data);
            console.log([state.reqd_resume]);

          }catch(error){
            console.log(error);
          }
        }

    },
    getters:{
      getResume:state => state.resume,
      getReqdResume:state =>state.reqd_resume.resume,
    }
      
}


export default resume_module