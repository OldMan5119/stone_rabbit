import router from "@/router/index";
import {getToken} from "@/utils/auth";


router.beforeEach((to, from, next) => {
    console.log("beforeEach : to - ", to.path, " , from - ", from.path + " , noNeedAuth = " + to.meta.noNeedAuth)
    if (to.meta.noNeedAuth) {
        next()
        return
    }
    const token = getToken()
    if (token === 'valid_token') {
        next()
    } else {
        if (to.path !== '/login') {
            next("/login")
        } else {
            next()
        }
    }
})