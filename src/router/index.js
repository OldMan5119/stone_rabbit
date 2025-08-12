import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from "@/layout/components/HomePage";
import DashBoard from "@/views/dashboard/index"
import LoginPage from "@/views/login/LoginPage";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HomePage,
            redirect: "dashboard",
            children: [
                {
                    path: "dashboard",
                    component: DashBoard
                }
            ]
        }, {
            path: "/login",
            name: "Login",
            component: LoginPage,
            meta: {
                noNeedAuth: true
            }
        }
    ]
})

export default router