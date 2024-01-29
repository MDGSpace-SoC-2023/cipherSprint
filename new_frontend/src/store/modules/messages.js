import backend_client from "../../../BackendClient";
const messages_module={
    namespaced:true,
    state:{
        ws:null,
        pid:"",
        comment:"",
        sender:"",
        messages: [],
        members:[],
    },
    mutations : {
      setWs(state, ws) {
        state.ws = ws;
      },
      setMessages(state, messages) {
        state.messages = messages;
      },
      setContent(state,comment) {
        state.comment=comment;
      },
      addMessage(state, message) {
        state.messages.push(message);
      },
      setPID(state,pid){
        state.pid=pid;
      },
      setMember(state,members){
        state.members=members;
      },
      setSender(state,sender){
        state.sender = sender;
      },

    },
    actions:{
      initWs({ commit,dispatch }, payload) {
        dispatch('setPID',payload);
        dispatch('setMember',payload);
        dispatch('setSender');
        dispatch('loadMessages', payload);
        const wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
        const ws = new WebSocket(`${wsScheme}://localhost:8000/ws/project/${payload.pid}/comments/`);
        ws.onmessage = (event) => {
          console.log('Yayy');
          console.log(event.data);
          console.log(JSON.parse(event.data));
          dispatch('rcvMsg', JSON.parse(event.data));
        };
        commit('setWs', ws);
      },
      async loadMessages({state, commit }, payload) {
        try{
          const response=await backend_client.get(`message/project/${payload.pid}/`);
            if(response.data.error!=undefined){
              console.log(response.data.error)
            }
            else{
              console.log(response.data);
              commit('setMessages', response.data);
              console.log(state.messages);
            }
        }
        catch(error){
          console.log(error)
        }
      },
      rcvMsg({ commit }, message) {
        console.log(message);
        commit('addMessage', message);
      },

      submitMessage({state,commit},newValue){
        commit("setContent",newValue)
        console.log(newValue);
        console.log(state.comment);
        state.ws.send(JSON.stringify({'comment':state.comment,'sender':state.sender,'pid':state.pid }));
        state.comment='';
      },
      setPID({state,commit},payload){
        commit("setPID",payload.pid);
        console.log(state.pid);
      },
      setSender({state,commit,rootState}){
        console.log(rootState.a.username);
       commit("setSender",rootState.a.username);
       console.log(state.sender);
      },
      async setMember({state,commit},payload){
        await backend_client.get(`project/${payload.pid}/`)
        .then((response) => {
          console.log(response.data);
          commit('setMember', response.data.project_members);
          console.log([...state.members]);
        })
        .catch((error) => {
          console.error('Error loading messages:', error);
        });
      }

    }
}
export default messages_module