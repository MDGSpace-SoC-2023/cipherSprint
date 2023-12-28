import {createRouter , createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import Student_No_Project from '@/pages/Student_No_Project.vue';
import ProposalPage from '@/pages/ProposalPage.vue';
import Student_with_Project from '../pages/Student_with_project.vue'
import IdeaProposal from "../pages/IdeaProposal.vue"
import ResumePage from "../pages/ResumePage.vue"
import ChatPage from "../pages/ChatPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',name:'home', component: Student_No_Project },
        { path: '/login', component: LoginPage },
        { path: '/noproject', component: Student_No_Project },
        { path: '/proposalmaker',name:'proposalMaker', component: ProposalPage , props:true},
        { path: '/project', component: Student_with_Project, props:true},
        { path: '/proposalmaker',name:'ideaProposal', component: IdeaProposal , props:true},
        {path:'/message',component:ChatPage},
        {path:'/resumelist',component:ResumePage}

    ]
});

export default router