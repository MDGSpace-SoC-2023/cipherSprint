<template>
    <div class="container mt-4">
  <!-- Card with Form -->
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-center">Work Experience</h5>

      <!-- Form -->
      <form class="d-flex flex-wrap justify-content-between infoBox">
        <Form_Input  Id="organization" title="Name of Organization" v-model="$store.state.b.organization"  class="p-2" />
        <Form_Input  Id="post" title="Post" v-model="$store.state.b.post"  class="p-2"  />
        <Form_Input  Id="responsibilities" title="Responsibilities" v-model="$store.state.b.responsibilities"  class="p-2" />
        <Form_Input  Id="message" title="Message" v-model="$store.state.b.message"  class="p-2" />
      </form>
      <!-- End Form -->

    </div>
  </div>
  <!-- End Card with Form -->
</div>
</template>

<script>
import Form_Input from '../components/Form_Input.vue'
export default{
    name: 'Card_Form',
    components: { Form_Input },
}   
</script>

<style scoped>
.card{
  background-color: rgb(23, 66, 97);
  color:white;
}
</style>