// import chat from "@/services/chat"
import axios from 'axios'
const messages_module={
    namespaced:true,
    state:{
        ws:null,
        pid:"",
        message:{
          content:"",
          sender:"",
        },
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
      setContent(state,content) {
        state.message.content=content;
      },
      addMessage(state, message) {
        state.messages.push(message);
      },
      setPID(state,pid){
        state.pid=pid;
      },
      setMember(state,members){
        state.members=members;
      }

    },
    actions:{
      initWs({ commit, dispatch }, roomLabel) {
        dispatch('setPID',roomLabel);
        dispatch('loadMessages', roomLabel);
        const wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
        const ws = new WebSocket(`${wsScheme}://${window.location.hostname}:8000/ws/project/'${roomLabel}/comments/`);
        ws.onmessage = (event) => {
          dispatch('rcvMsg', JSON.parse(event.data));
        };
        commit('setWs', ws);
      },
      loadMessages({ commit }, roomLabel) {
        axios.get(`http://localhost:8000/inno_api/message/project/${roomLabel}`)
          .then((response) => {
            commit('setMessages', response.data);
          })
          .catch((error) => {
            console.error('Error loading messages:', error);
          });
      },
      rcvMsg({ commit }, message) {
        commit('addMessage', message);
      },

      submitMessage({state,commit},newValue){
        commit("setContent",newValue)
        this.ws.send(JSON.stringify({ 'message':state.message }));
        state.message.content='';
      },
      setPID({commit},roomLabel){
        commit("setPID",roomLabel)
      },
      setMember({commit},roomLabel){
        axios.get(`http://localhost:8000/inno_api/project/${roomLabel}`)
        .then((response) => {
          commit('setMembers', response.data.project_members);
        })
        .catch((error) => {
          console.error('Error loading messages:', error);
        });
      }

    }
}

export default messages_module