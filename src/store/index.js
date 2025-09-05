import Vue from 'vue'
import Vuex from 'vuex'
import app from '../store/modules/app'
import user from '../store/modules/user'
import permission from "@/store/modules/permission";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app, user, permission
    }
})
export default store