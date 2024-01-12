<script setup>
    import { RouterLink,RouterView } from 'vue-router';
    import logOut from "../extras/logOut.vue";
    import { check_login } from '@/Is_authenticated';
    const isAuthenticated = check_login();
</script>

<template>
    <header class="p-3 navColor" v-if="isAuthenticated">
    <div class="container" >
      <div class="d-flex flex-wrap align-items-center justify-content-between ">
        <RouterLink to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img class="img-fluid" src="../assets/LogoFinal.jpg" alt="logo" style="width:4vw;height:6vh;">
        </RouterLink>


        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2" @click="openPopup">LogOut</button>
          <logOut :visible="isPopupVisible" @close="closePopup" />
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
    data() {
    return {
      isPopupVisible: false,
    };
    },
    methods: {
    openPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
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
