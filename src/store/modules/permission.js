import {constantRoutes, asyncRoutes} from "@/utils/constant-routes"

const state = {
    routes: []
}
const mutations = {
    SET_ROUTES(state, routes) {
        state.routes = constantRoutes.concat(routes)
    },
}

const actions = {
    generateRoutes({commit}, roles) {
        return new Promise((resolve) => {
            let accessedRoutes;
            if (roles.includes('admin')) {
                accessedRoutes = asyncRoutes;
            } else {
                accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            }
            console.info("generateRoutes #1", accessedRoutes)
            commit("SET_ROUTES", accessedRoutes)
            resolve(accessedRoutes)
        })
    }
}

function filterAsyncRoutes(asyncRoutes, roles) {
    const res = []
    asyncRoutes.forEach((route) => {
        const routeItem = {...route}
        if (hasPermission(roles, route)) {
            if (routeItem.children) {
                routeItem.children = filterAsyncRoutes(routeItem.children, roles)
            }
            res.push(routeItem)
        }
    })

    return res
}

function hasPermission(roles, routeItem) {
    if (routeItem.meta && routeItem.meta.roles) {
        return roles.some(role => routeItem.meta.roles.includes(role))
    } else {
        return true
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}