import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from "@/layout/components/HomePage";
import DashBoard from "@/views/dashboard/index"
import LoginPage from "@/views/login/LoginPage";

Vue.use(VueRouter)

export const constantRoutes = [
    {
        path: "/",
        component: HomePage,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: DashBoard
            }
        ]
    }, {
        path: "/guide",
        component: HomePage,
        redirect: '/guide/index',
        item: {
            path: 'index',
            component: () => import('@/views/guide/index'),
            name: 'Guide',
            meta: {title: 'Guide', icon: 'guide', noCache: true}
        }
    }, {
        path: "/login",
        name: "Login",
        component: LoginPage,
        meta: {
            noNeedAuth: true
        }
    }
]

const router = new VueRouter({
    routes: constantRoutes,
})

export default router