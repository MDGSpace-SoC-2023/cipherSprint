<template>
      <div
      :class='["message", { dark }]'
       >
    <h6>{{ author }}</h6>
    {{ text }}
    <span class="badge badge-pill bg-secondary">{{ timestamp }}</span>
  </div>
</template>

<script>
export default {
  name: 'MessageText',
  props: [
    'text', // Content of the message
    'author', // Author of the message
    'dark', // Background variant of the box
    'timestamp'
  ]
}
</script>

<style scoped>
.message {
  background:whitesmoke;
  border-radius: 10px;
  padding: 1rem;
  margin:1rem;
  width: fit-content;
  color: black;
}

.message.dark {
  background: #32333c;
  color:white;
}


h5 {
  margin: 0 0 .5rem 0;
}
</style>