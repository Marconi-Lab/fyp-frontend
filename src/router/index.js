import VueRouter from 'vue-router'
import Login from "../views/Login.vue"

routes = [
    {
        path: "/login",
        component: Login
    }
]

const router = VueRouter.createRouter({
    history: "",
    routes
})

exports.router = router;