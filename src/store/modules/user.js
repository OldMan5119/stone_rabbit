import {getToken, removeToken, setToken} from "@/utils/auth";
import {login, getUserinfo} from "@/api/userinfo";

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
}

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
        setToken(token)
    },
    SET_NAME(state, name) {
        state.name = name
    },
    SET_AVATAR(state, avatar) {
        state.avatar = avatar
    },
    SET_ROLES(state, roles) {
        state.roles = roles
    }
}

const actions = {
    login({commit}, data) {
        return new Promise((resolve, reject) => {
            login(data).then(res => {
                const {ret, data} = res.data;
                console.log("store/user.js/login", ret, " : ", data);
                if (ret === 0 && data) {
                    commit("SET_TOKEN", data.token);
                    resolve(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    },

    logout({commit}) {
        return new Promise(() => {
            commit("SET_TOKEN", '');
            removeToken();
            commit("SET_NAME", "");
            commit("SET_AVATAR", "");
            commit("SET_ROLES", []);
        })
    },

    getUserInfo() {
        return new Promise((resolve, reject) => {
            getUserinfo().then(res => {
                const {ret, data} = res.data;
                console.log("store/userInfo", ret, " : ", data);
                resolve(data)
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