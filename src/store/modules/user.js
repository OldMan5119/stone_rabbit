import {getToken, removeToken, setToken} from "@/utils/auth";
import {login} from "@/api/userinfo";

const state = {
    token: getToken()
}
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
        setToken(token)
    },
    GET_TOKEN(state) {
        return state.token
    },
    REMOVE_TOKEN(state) {
        state.token = ''
        removeToken()
    },
}
const actions = {
    login({commit}, data) {
        return new Promise((resolve, reject) => {
            login(data).then(res => {
                const {ret, data} = res.data;
                console.log("store/user.js/login", ret, " : ", data);
                if (ret === 0 && data) {
                    resolve(res)
                    commit("SET_TOKEN", data.token);
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}