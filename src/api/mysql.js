import request from "@/utils/request";

export function executeSql(sql) {
    return request({
        url: "/api/sql/execute",
        method: "POST",
        data: sql
    })
}