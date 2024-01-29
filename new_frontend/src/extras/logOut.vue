<template>
    <div v-if="visible" class="popup-overlay">
      <div class="popup">
        <h2>Are you sure you want to Logout ?</h2>
        <div class="d-flex justify-content-center">
          <button class="btn btn-lg btn-success mx-2" @click="logout">YES</button>
          <button class="btn btn-dark mx-2"  @click="closePopup">Cancel</button>
        </div>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closePopup() {
        this.$emit('close');
      },
      logout(){
        this.$store.dispatch('a/logout');
        console.log('clicked');
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(75, 75, 75, 0.5);
    display: flex;
    justify-content: center;
    align-items: start;
  }
  .popup {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
  }
  </style>