const info_module={
    namespaced: true,
    state : {
        name :" ",
        email : " ",
        city:"",
        blood_group:"",
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
      },
    mutations : {
        submitInfo(state){
            console.log(state.name);
        },
      },
    actions : {

    }
      
}


export default info_module