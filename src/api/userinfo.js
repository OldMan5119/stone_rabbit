import request from "@/utils/request";

export function login(data) {
    return request({
        url: "/api/rabbit/login",
        method: "POST",
        data: data
    })
}

export function getUserinfo() {
    return request({
        url: "/api/rabbit/getUserInfo",
        method: "GET",
    })
}