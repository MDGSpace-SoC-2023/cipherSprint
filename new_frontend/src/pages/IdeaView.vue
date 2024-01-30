<template>
     <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{this.$store.state.c.cur_SelectedIdea [0] }}</h5>
            <p class="card-text">Project : {{this.$store.state.c.cur_SelectedIdea[3] }}</p>
            <ul class="list-group">
              <li class="list-group-item">Problem  : {{ this.$store.state.c.cur_SelectedIdea[1]}}</li>
              <li class="list-group-item">Amount  : {{ this.$store.state.c.cur_SelectedIdea[2] }}</li>
              <!-- Add more list items for additional information -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body{
    background-color: rgb(81, 168, 147);
}
</style>