<template>
    <div class="container mt-4">
  <!-- Card with Form -->
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-center"> Personal Info</h5>

      <!-- Form -->
      <form  class="d-flex flex-wrap justify-content-between infoBox">
        <Form_Input  Id="name" title="Name" v-model="$store.state.b.name" class="p-2" />
        <Form_Input  Id="project_name" title="Project Name" v-model="$store.state.b.project_name" class="p-2" />
        <Form_Input  Id="prof" title="Name of Professor" v-model="$store.state.b.prof" class="p-2" />
        <Form_Input  Id="email" title="Email ID" v-model="$store.state.b.email" class="p-2"  />
        <Form_Input  Id="date_of_birth" title="Date Of Birth" v-model="$store.state.b.date_of_birth" class="p-2"  />
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
.card-body{
  background-color: rgb(23, 66, 97);
  color:white;
}
</style>