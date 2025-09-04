import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from "@/layout/components/HomePage";

Vue.use(VueRouter)

export const constantRoutes = [
    {
        path: "/",
        component: HomePage,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/index")
            }
        ]
    }, {
        path: "/guide",
        component: HomePage,
        redirect: '/guide/index',
        children: [{
            path: 'index',
            component: () => import('@/views/guide/index'),
            name: 'Guide',
            meta: {title: 'Guide', icon: 'guide', noCache: true}
        }]
    }, {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/LoginPage"),
        meta: {
            noNeedAuth: true
        }
    }
]

const router = new VueRouter({
    routes: constantRoutes,
})

export default router