<template>
      <vue-advanced-chat
    :current-user-id="$store.state.d.userId"
    :rooms="JSON.stringify($store.state.d.rooms)"
    :messages="JSON.stringify($store.state.d.messages)"
    :room-actions="JSON.stringify(roomActions)"
  />
</template>

<script>
  import { register } from 'vue-advanced-chat'
  register()


  export default {
    data() {
      return {
        roomActions: [
          { name: 'inviteUser', title: 'Invite User' },
          { name: 'removeUser', title: 'Remove User' },
          { name: 'deleteRoom', title: 'Delete Room' }
        ]
      }
    }
  }
</script>
