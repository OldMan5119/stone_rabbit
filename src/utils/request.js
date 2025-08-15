import axios from "axios";

const request = axios.create({
    baseURL: "https://localhost:3443",
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 6 * 1000 // request timeoutn
})
request.interceptors.request.use({})
request.interceptors.response.use({})

export default request