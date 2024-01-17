import backend_client from "../../../BackendClient";
const info_module={
    namespaced: true,
    state : {
        name :" ",
        email : " ",
        project_name:"",
        prof:"",
        date_of_birth:" ",
        branch :" ",
        degree : " ",
        college:" ",
        message:" ",
        skills :" ",
        language : " ",
        projects:" ",
        message1:" ",
        organization :" ",
        post : " ",
        responsibilities:" ",
        message2:" ",
        resume_file:null,
      },
    mutations : {
        submitInfo(state){
            console.log(state.name);
        },
        setResume(state,resume_file){
          state.resume_file=resume_file;
        }
      },
    actions : {
      setResume({commit},pdf){
        // console.log(pdf);
        // console.log('Hi');
        commit('setResume',pdf);
      },
      async postResume({state,rootState},pdfPromise){
        const id = rootState.f.resume.length+1;
        const formData = new FormData();
        formData.append('sender', rootState.a.user_info.id);
        formData.append('username',state.prof);
        formData.append('project',state.project_name);
        formData.append('resume_file', pdfPromise, `${rootState.a.username}_${state.project_name}.pdf`);
        try{
          // console.log(state.resume_file);
          console.log(state.prof);
          await backend_client.post(`resume/${id}/post/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        } catch(error)
        {
          console.log(error);
        }
      },
    }
      
}


export default info_module