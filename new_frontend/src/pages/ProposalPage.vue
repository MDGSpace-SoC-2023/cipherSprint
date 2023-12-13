<template>
<div class="d-flex">
    <div class="container mt-4 col-md-3 mx-3">
  
        <div class="card colorCode">
          <div class="card-body">
            <!-- Options for different fields -->
            <div class="d-flex flex-wrap justify-content-between ">
              <ProjectCard class="col-lg-5 mx-1 mt-3" title="Personal Info" @click="goToPage(1)"/>
              <ProjectCard class="col-lg-5 mx-1 mt-3" title="Work Experience" @click="goToPage(2)" />
              <ProjectCard class="col-lg-5 mx-1 mt-5" title="Education" @click="goToPage(4)" />
              <ProjectCard class="col-lg-5 mx-1 mt-5" title="Areas of Expertise" @click="goToPage(3)" />
              <ProjectCard class="col-lg-5 mx-1 mt-5" title="Preview" @click="isVisible=!isVisible" />
            </div>
          </div>
        </div>
    </div>
    <div v-if="!isVisible" class="container mt-1 col-md-6">
    <component
      v-for="(componentName, index) in paginatedComponents"
      :key="index"
      :is="componentName"
    />
    <paginate
      :page-count="totalPages"
      :click-handler="goToPage"
      :prev-text="'Previous'"
      :next-text="'Next'"
      :container-class="'pagination'"
      class="modifyPaginate mt-3 align-content-center"
    ></paginate>
  </div>
  <div v-if="isVisible" class="container my-1 col-md-6">
    <personalInfo />
    <workExperience />
    <areasOfExpertise />
    <educationInfo />
    <div class=" text-center">
      <button type="submit" class="btn btn-outline-dark btn-lg my-3  mx-auto "  @click="$store.commit('b/submitInfo')">Submit</button>
    </div>
  </div>
</div>
</template>


<script>
import personalInfo from '../extras/personalInfo.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import workExperience from '../extras/workExperience.vue';
import areasOfExpertise from '@/extras/areasOfExpertise.vue';
import educationInfo from '../extras/educationInfo.vue'
import Paginate from "vuejs-paginate-next";
export default{
  name:'ProposalPage',
  components:{
    ProjectCard ,
    paginate:Paginate,
    personalInfo,
    workExperience,
    areasOfExpertise,
    educationInfo,
  },
  data() {
    return {
      componentList: ['personalInfo', 'workExperience','areasOfExpertise','educationInfo'], // Add more component names as needed
      itemsPerPage: 1, // Assuming one component per page, adjust as needed
      currentPage: 1,
      isVisible:false
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.componentList.length / this.itemsPerPage);
    },
    paginatedComponents() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.componentList.slice(startIndex, endIndex);
    },
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      this.isVisible=false;
    },
  },
}
</script>
<style>
 .modifyPaginate{
    margin-left:30vh;
 }
 .colorCode{
  background-color:rgb(23, 66, 97) ;
 }
</style>