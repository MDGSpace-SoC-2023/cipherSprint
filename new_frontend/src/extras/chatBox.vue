<template>
    <form class='chat-box' @submit.prevent="onSubmit">
      <input
          v-model="$store.state.d.comment"
          placeholder='Enter a message'
          type='text'
          class="form-control"
      />
      <button class="btn btn-success text-white">Send</button>
    </form>
  </template>

<script>
export default {
  name: 'ChatBox',
  props:{
    onSubmit: {
      type: Function,
      required: true
    }

  },
  method:{
    onSubmit() {
      this.onSubmit();
      // this.$store.state.d.message.content='';
  }
},
 
}
</script>

<style scoped>
.chat-box {
  width: 100%;
  display: flex;
}

input {
  width: min(100%, 20rem);
  flex-grow: 1;
}

</style>