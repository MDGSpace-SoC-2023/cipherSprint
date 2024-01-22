import backend_client from "../../../BackendClient"
import router from "../../router";

const login_module={
    namespaced: true,
    state : {
        username:undefined,
        password : undefined,
        isLoggedIn:false,
        user_info:{},
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
      },
      setUserInfo(state,user_info){
        state.user_info=user_info;
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
              data={"password":state.password}
            }
            else if((state.username!=undefined && state.username!="") && (state.password==undefined || state.password=="")){
               data={"username":state.username}
            }
            else{
              data={"password":state.password,"username":state.username}
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
                commit("setUserInfo",response.data.user);
                console.log(state.user_info.username);
                localStorage.setItem('sessionId',response.data.session_id)
                console.log(localStorage.sessionId)
                router.push({ name: "home" });
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
        getUser: state => state.user_info,
      },
      
}


export default login_module