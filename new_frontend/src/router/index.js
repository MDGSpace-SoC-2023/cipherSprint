import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import Student_No_Project from "@/pages/Student_No_Project.vue";
import ProposalPage from "@/pages/ProposalPage.vue";
import Student_with_Project from "../pages/Student_with_project.vue";
import IdeaProposal from "../pages/IdeaProposal.vue";
import ResumePage from "../pages/ResumePage.vue";
import ChatPage from "../pages/ChatPage.vue";
import { check_login } from "@/Is_authenticated";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/resumelist', component: ResumePage,name:"resume",meta: { requiresAuth:true }, },
        { path: '/',name:"login", component: LoginPage,meta: { requiresAuth: false }, },
        { path: '/home',name:"home", component: Student_No_Project,meta: { requiresAuth: true }, },
        { path: '/proposalmaker',name:'proposalMaker', component: ProposalPage , props:true,meta: { requiresAuth: true },},
        { path: '/project',name:"ideas", component: Student_with_Project, props:true,meta: { requiresAuth: true },},
        { path: '/proposal',name:'ideaProposal', component: IdeaProposal , props:true,meta: { requiresAuth: true },},
        {path:'/message',component:ChatPage,meta: { requiresAuth: true },},
        {path:'/resumelist',component:ResumePage},
    ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const isAuthenticated = check_login();

    if (!isAuthenticated) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
