export function setToken(val) {
    console.info(val)
    window.localStorage.setItem("access_token", val)
}

export function getToken() {
    return window.localStorage.getItem("access_token")
}