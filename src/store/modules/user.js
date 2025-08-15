import {getToken} from "@/utils/auth";

const state = {
    token: getToken()
}
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    CLEAR_TOKEN: {}
}
const actions = {}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}