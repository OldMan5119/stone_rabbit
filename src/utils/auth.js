import Cookies from 'js-cookie'

export function setToken(val) {
    // console.info(val)
    // window.localStorage.setItem("access_token", val)
    Cookies.set("access_token", val)
}

export function getToken() {
    // return window.localStorage.getItem("access_token")
    return Cookies.get("access_token")
}


export function removeToken() {
    // return window.localStorage.getItem("access_token")
    Cookies.remove("access_token")
}