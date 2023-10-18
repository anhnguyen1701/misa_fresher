import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Employee from '../pages/Employee.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/employee', component: Employee },
    ]
})

export default router;