<script setup>
  import NavigationBar from "./components/NavigationBar.vue"
  import footerBar from "./components/footerBar.vue";
  // import { check_login } from '@/Is_authenticated';
  // const isAuthenticated = check_login();
</script>

<template>
  <NavigationBar />
  <footerBar v-if="$store.state.a.isLoggedIn" />
</template>



<style>
/* Apply background image to the entire screen */
body {
  /* Add other styles or content for your component */
  background-image: url('./assets/Background.jpg');
  width:100%;
  margin: 0;
  padding: 0;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  background-repeat: no-repeat;
  height:100%;
  overflow-x: hidden;
}
</style>