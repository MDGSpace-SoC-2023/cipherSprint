<template>
    <div class="card mx-3">
    <h5 class="card-header">Hey there if you need any help I'm always there</h5>
    <div class="card-body">
      <RouterLink to="/message" class="text-decoration-none" @click="handleclick"><input type="text" placeholder="Enter a message ..." class="form-control" ></RouterLink>
    </div>   
</div>
</template>

<script>
  export default{
    name:'ChatCard',
    props:{
      linkName:String
    },
    methods:{
      handleclick(){
        //location.reload();
      }
    }
  }
</script>