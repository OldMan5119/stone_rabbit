import router from "@/router/index";
import {getToken, setToken} from "@/utils/auth";


router.beforeEach((to, from, next) => {
    console.log("beforeEach : ", to.path, " , ", from.path)
    setToken("234")
    console.log("getToken() : ", getToken())
    next()
})
router.afterEach((to, from) => {
    console.log("afterEach : ", to.path, " , ", from.path)
})