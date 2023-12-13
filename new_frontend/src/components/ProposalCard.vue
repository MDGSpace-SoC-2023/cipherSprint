<template>
    <div class="card mt-5">
    <h5 class="card-header">Proposal Maker</h5>
    <div class="card-body">
      <p class="card-text">Interested to be a part of any project click the button below.</p>
      <router-link :to="{name: 'proposalMaker',}" class="btn btn-outline-success text-black">Design your Proposal</router-link>
    </div>   
</div>
</template>

<style scoped>
  .card-header{
    background-color: rgb(80, 183, 158);
  }
</style>