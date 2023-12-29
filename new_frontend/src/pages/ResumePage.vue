<template>
 <div class="container col-8">
    <h3 class="text-center mt-5 mb-5">LIST OF RESUME</h3>
    <div class=" d-flex flex-column p-4 gap-2  align-items-center justify-content-center">
    <VoteCard
      v-for="(componentName, index) in paginatedComponents"
      :key="index"
      :title="componentName"
      linkName="home" action="DOWNLOAD"
    />
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
 import VoteCard from "../components/VoteCard.vue"
 import Paginate from "vuejs-paginate-next";
 export default{
    components:{
        VoteCard,
        paginate:Paginate,
    },
    data(){
        return{
            resumeList:['User1','User2','User3','User4','User5'],
            itemsPerPage: 4, 
            currentPage: 1,
        };

    },
    computed: {
    totalPages() {
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
  },
 }
</script>