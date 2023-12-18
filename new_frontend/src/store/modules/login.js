const login_module={
    namespaced: true,
    state : {
        username :"",
        password : ""
      },
     mutations : {
        submitForm(state){
            console.log(state.username)
        }
      }
      
}


export default login_module