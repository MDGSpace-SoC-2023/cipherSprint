<script setup>
    import { RouterLink,RouterView } from 'vue-router';
</script>

<template>
    <header class="p-3 navColor">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <RouterLink to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img class="img-fluid" src="../assets/LogoFinal.jpg" alt="logo" style="width:4vw;height:6vh;">
        </RouterLink>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><RouterLink to="/" class="nav-link px-2 text-secondary">Home</RouterLink></li>
          <li><RouterLink to="/noproject" class="nav-link px-2 text-white">Features</RouterLink></li>
          <li><RouterLink to="/project" class="nav-link px-2 text-white">Project</RouterLink></li>
          <li><RouterLink to="/noproject" v-if="$store.state.a.user_info.is_prof===true" class="nav-link px-2 text-white">Resume</RouterLink></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2"><RouterLink to="/login" class="nav-link px-2">Login</RouterLink></button>
        </div>
      </div>
    </div>
  </header>
      <RouterView />
</template>

<script>
export default {
    computed: {
    userName() {
      return this.$store.state.a.user_info.username;
    },
    },
    name:'NavigationBar'
}
</script>

<style>
   .navColor{
    background-color: rgb(23, 66, 97);
   }
</style>
