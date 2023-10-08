import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import Employee from '../views/Employee.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
    { path: '/', component: Home },
    { path: '/employee', component: Employee },
]
})

export default router;