import router from "@/router/index";
import {getToken} from "@/utils/auth";
import store from "@/store";


router.beforeEach(async (to, from, next) => {
    console.log("beforeEach : to - ", to.path, " , from - ", from.path + " , noNeedAuth = " + to.meta.noNeedAuth)
    if (to.meta.noNeedAuth) {
        next()
        return
    }
    const token = getToken()
    if (token) {
        const result = await store.dispatch("user/getUserInfo")
        console.log(result)
        next()
    } else {
        if (to.path !== '/login') {
            next("/login")
        } else {
            next()
        }
    }
})