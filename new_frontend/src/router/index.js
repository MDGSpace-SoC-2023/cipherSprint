import {createRouter , createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import LoginPage from '../pages/LoginPage.vue'
import Student_No_Project from '@/pages/Student_No_Project.vue';
import ProposalPage from '@/pages/ProposalPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/login', component: LoginPage },
        { path: '/noproject', component: Student_No_Project },
        { path: '/proposalmaker',name:'proposalMaker', component: ProposalPage , props:true},
    ]
});

export default router