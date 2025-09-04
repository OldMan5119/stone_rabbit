import request from "@/utils/request";

export function login(data) {
    return request({
        url: "/rabbit/login",
        method: "POST",
        data: data
    })
}

export function getUserinfo() {
    return request({
        url: "/rabbit/getUserInfo",
        method: "GET",
    })
}