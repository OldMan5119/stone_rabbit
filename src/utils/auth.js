export function setToken(val) {
    console.info(val)
    window.localStorage.setItem("token", val)
}

export function getToken() {
    return window.localStorage.getItem("token")
}