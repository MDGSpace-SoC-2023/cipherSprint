const idea_module={
    namespaced: true,
    state : {
        project:"",
        problem:"",
        idea:"",
        message:""
      },
    mutations : {
        submitInfo(state){
            console.log(state.idea);
        },
      },
    actions : {

    }
      
}


export default idea_module