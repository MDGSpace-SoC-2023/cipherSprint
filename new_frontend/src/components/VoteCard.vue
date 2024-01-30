<template>
    <div class="card mt-3" v-if="title!==''"> 
        <div class="card-body d-flex justify-content-between voteBox" >
          <div class="p-2"><h5 >{{ title }}</h5></div> 
          <div class="p-2 d-flex justify-content-between" >
            <div><router-link :to="{name:linkName}" class="nav-link text-black mx-5" ><button class="btn btn-outline-dark"  @click="handleView">View </button></router-link></div>
            <div><button class="btn btn-outline-success" @click="handleAction">{{ action }}</button></div>
          </div> 
        </div>
    </div>
</template>

<script>
export default {
  props:{
    title:String,
    action:String,
    linkName:String,
    isMember:Boolean,
    handleViewClick: Function,
    handleActionClick: Function,
  },
 methods:{
  handleView() {
      if (this.handleViewClick) {
        this.handleViewClick();
      }
    },
  async  handleAction() {
      if (this.handleActionClick) {
        this.handleActionClick();
      }
    },
 }

}
</script>

<style scoped>
 .card{
     width:75%;
 }
 @media screen and (max-width: 400px){
  .voteBox{
   flex-direction: column;
  }
 }
</style>