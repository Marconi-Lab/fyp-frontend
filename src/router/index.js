import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/LoginScreen.vue"

let routes = [
    {
        path: "/login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;