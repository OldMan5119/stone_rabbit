import axios from "axios";
import {getToken} from "@/utils/auth";

const request = axios.create({
    // baseURL: "http://localhost:3000",
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 6 * 1000 // request timeoutn
})
request.interceptors.request.use(config => {
        console.log("interceptors:req , authorization->", getToken())
        config.headers["authorization"] = getToken()
        return config
    },
    error => {
        console.log("interceptors:req->", error)
        return Promise.reject(error)
    })
request.interceptors.response.use({})

export default request