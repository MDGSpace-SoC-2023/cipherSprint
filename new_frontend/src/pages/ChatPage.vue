<template>
  <div class='container card mt-5 chatView'>
    <div class="heading d-flex justify-content-between ">
      <h1 class="text-center mb-5 mt-3">CHAT ROOM_{{ $store.state.d.pid }}</h1>


      <div class="mb-5 mt-3 memberBox">
        <button class="btn btn-outline-dark " type="button" @click="isVisible=!isVisible" >
        Members 👤
        </button>

        <!-- Dropdown menu -->
        <div class=" card card-body" v-if="isVisible===true">
          <li v-for="(name, index) in $store.state.d.members" :key="index" class="text-center list-unstyled" >
            {{ name.username }}
          </li>
        </div>
      </div>
    </div>
    
    <div class='messages'>
      <MessageText
          v-for='message in $store.state.d.messages'
          :key='message.id'
          :class='["message", { right:message.sender.username==$store.state.a.username }]'
          :dark='message.sender.username==$store.state.a.username'   
          :text='message.content'
          :author='message.sender.username'
          :timestamp="message.str_timestamp"
      />
    </div>

    <ChatBox
        class='chat-box py-3'
        @submit.prevent="$store.dispatch('d/submitMessage',$store.state.d.comment)"
    />
  </div>
  
</template>

<script>
  import ChatBox from "../extras/chatBox.vue"
  import MessageText from "@/extras/messageText.vue"
  import { mapGetters } from "vuex"
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
  computed:{
    ...mapGetters('e', ['getCurPro']),
  },
  created(){
      const pid = this.getCurPro.pk;
      console.log(pid);
      this.$store.dispatch('d/initWs', {pid});
  },
}
</script>

<style>
.message.right {
  margin-left: auto;
}
.chatView{
  background-color: rgba(230, 220, 220, 0.526);
}
.card-body{
  background-color: rgba(230, 220, 220, 0.525);
}
</style>
