<template>
  <div class='container card mt-5 chatView'>
    <div class="heading d-flex justify-content-between ">
      <h1 class="text-center mb-5 mt-3">CHAT ROOM_{{ $store.state.d.pid }}</h1>
      <div class="dropdown mb-5 mt-3">
        <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
        Users
        </button>

        <!-- Dropdown menu -->
        <ul class="dropdown-menu" >
          <li v-for="(name, index) in $store.state.d.members" :key="index" class="dropdown-item" >
            {{ name }}
          </li>
        </ul>
      </div>
    </div>
    
    <div class='messages'>
      <MessageText
          v-for='message in $store.state.d.messages'
          :key='message.id'
          :class='["message", { right:message.sender==$store.state.a.username }]'
          :dark='message.sender==$store.state.a.username'   
          :text='message.content'
          :author='message.sender'
          :timestamp="message.timestamp"
      />
    </div>

    <ChatBox
        class='chat-box py-3'
        @submit.prevent="$store.dispatch('d/submitMessage',$store.state.d.message.content)"
    />
  </div>
  
</template>

<script>
  import ChatBox from "../extras/chatBox.vue"
  import MessageText from "@/extras/messageText.vue"

  export default {
  components:{
   MessageText,
   ChatBox,
  },

  data() {
    return{
    isVisible: false,
    }
    
  },
  methods: {
    initWs() {
      const roomLabel = this.$route.project_id;
      this.$store.dispatch('initWs', roomLabel);
    },
    
  }
}
</script>

<style>
.message.right {
  margin-left: auto;
}
.chatView{
  background-color: rgba(230, 220, 220, 0.526);
}
</style>
