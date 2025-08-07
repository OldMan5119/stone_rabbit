import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from "@/layout/components/HomePage";
import DashBoard from "@/views/dashboard/index"

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
        }
    ]
})

export default router