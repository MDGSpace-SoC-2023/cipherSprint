<template>
    <!--To store project names--> 
    <div class="card">
        <div class="card-body">
          <h5 class="card-title" @click="setPro"><router-link :to="{name:link_name}" class="nav-link text-black">{{ title }}</router-link></h5>  
        </div>
    </div>
</template>

<script>
export default {
  props:{
    title:String,
    link_name:String,
    pid: Number,
  },
  methods: {
    setPro() {
      let pid=this.pid;
      console.log(`project${pid}`);
      this.$store.dispatch('e/setPro',{pid} );
    },
  },
}
</script>
