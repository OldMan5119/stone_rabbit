import router from "@/router/index";
import {getToken} from "@/utils/auth";
import store from "@/store";
// beforeEach : to -  /icon/index  , from -  /guide/index , noNeedAuth = undefined

router.beforeEach(async (to, from, next) => {
    console.log("beforeEach : to - ", to.path, " , from - ", from.path + " , noNeedAuth = " + to.meta.noNeedAuth)
    if (to.meta.noNeedAuth) {
        next()
        return
    }
    const token = getToken()
    if (token) {
        const hasRole = store.state.user.roles && store.state.user.roles.length > 0
        if (hasRole) {
            next()
        } else {
            const roles = await store.dispatch("user/getUserInfo")
            console.log("路由守卫@1：", roles)
            const accessedRoutes = await store.dispatch("permission/generateRoutes", roles)
            router.addRoutes(accessedRoutes)
            console.log("路由守卫@2：", accessedRoutes)
            next()
        }
    } else {
        if (to.path !== '/login') {
            next("/login")
        } else {
            next()
        }
    }
})