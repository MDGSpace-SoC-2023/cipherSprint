<template>
 <div class="container col-8">
    <h3 class="text-center mt-5 mb-5" v-if="resumeList.length!==0">LIST OF RESUME</h3>
    <h3 class="text-center mt-5 mb-5" v-if="resumeList.length==0">NO RESUME SUBMITTED</h3>
    <div class=" d-flex flex-column p-4 gap-2  align-items-center justify-content-center">
    
    <div class="card mt-3" v-for="(componentName, index) in paginatedComponents"
      :key="index">
        <div class="card-body d-flex justify-content-between ">
          <div class="p-2"><h5 >{{getName(componentName.resume_file)}}</h5></div> 
          <div class="p-2 mx-4"><button class="btn btn-dark"><a :href="componentName.resume_file" download="User_resume.pdf" class="text-decoration-none text-white">View</a></button></div>
          <div class="p-2 mx-1"><button class="btn btn-outline-success" @click="addMember(componentName.pid)">Accept</button></div> 
          <div class="p-2 mx-2"><button class="btn btn-outline-danger">Reject</button></div>  
        </div>
    </div>
    <div class="modifyPaginate mt-3">
    <paginate
      :page-count="totalPages"
      :click-handler="goToPage"
      :prev-text="'Previous'"
      :next-text="'Next'"
      :container-class="'pagination'"
    ></paginate></div>
  </div>
 </div>
</template>
<script>
//  import VoteCard from "../components/VoteCard.vue"
 import Paginate from "vuejs-paginate-next";
 export default{
    components:{
        // VoteCard,
        paginate:Paginate,
    },
    async created() {
      await this.$store.dispatch('f/getReqdResume');
    },
    data(){
        return{
            // resumeList:this.$store.state.f.reqd_resume.resume,
            itemsPerPage: 4, 
            currentPage: 1,
        };

    },
    computed: {
      resumeList() {
        return this.$store.state.f.reqd_resume.resume;
    },
    totalPages() {
      // console.log(this.resumeList);
      // this.$store.dispatch('f/getReqdResume');
      console.log(this.resumeList);
      return Math.ceil(this.resumeList.length / this.itemsPerPage);
    },
    paginatedComponents() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.resumeList.slice(startIndex, endIndex);
    },
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    getName(url)
    {
      const fileName = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.pdf'));
      return fileName;
    },
    addMember(pid){
      // console.log(uid);
      console.log(pid);
      const project_id=pid;
      console.log(project_id);
      this.$store.dispatch('e/addProjectMember', project_id); 
    }
  },
 }
</script>