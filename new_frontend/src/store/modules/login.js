import backend_client from "../../../BackendClient"

const login_module={
    namespaced: true,
    state : {
        username :undefined,
        password : undefined,
        isLoggedIn:false,
        user_info:[],
        error_message:"",
      },
     mutations : {
      setUsername(state, username) {
        state.username = username;
      },
      setPassword(state, password) {
        state.password = password;
      },
      setLoggedIn(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
      },
      setErrorMessage(state,error_message){
        state.error_message=error_message;
      }
      },
      
      actions:{
        async login({state,commit}){
          try{
            let data;
            if((state.username==undefined || state.username=="") && (state.password==undefined || state.password=="")){
              data={}
            }
            else if((state.username==undefined || state.username=="") && (state.password!=undefined && state.password!="")){
              data={password:state.password}
            }
            else if((state.username!=undefined && state.username!="") && (state.password==undefined || state.password=="")){
               data={username:state.username}
            }
            else{
              data={username:state.username,password:state.password}
            }
            console.log(data)
            console.log(backend_client)
            console.log(state)
            backend_client.post('login/',JSON.stringify(data)).then(response=>{
              if(response.data.error!=undefined){
                console.log(response.data.error)
                commit("setErrorMessage",response.data.error)

              }
              else{
                sessionStorage.setItem('sessionId',response.data.session_id)
                console.log(sessionStorage.sessionId)
              }
          })
          }
          catch(error){
            console.log(error)
          }
        }
      },
      getters: {
        errorMessage: (state) => state.error_message,
      },
      
}


export default login_module