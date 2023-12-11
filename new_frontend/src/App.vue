<script setup>
  import NavigationBar from "./components/NavigationBar.vue"
</script>

<template>
  <NavigationBar />
</template>



<style>
/* Apply background image to the entire screen */
body, html {
  height: 100%;
  margin: 0;
}

#app {
  /* Add other styles or content for your component */
  background-image: url('./assets/Background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
