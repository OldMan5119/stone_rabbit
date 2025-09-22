const app = {
    namespaced: true,
    state() {
        return {
            sidebar: {
                opened: false,
                withoutAnimation: false
            },
        }
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            console.info("****", state.sidebar.opened)
            state.sidebar.opened = !state.sidebar.opened;
        },
        CLOSE_SIDEBAR: state => {
            state.sidebar.opened = false;
        }
    },
    actions: {
        toggleSideBar({commit}) {
            commit("TOGGLE_SIDEBAR")
        }
    },
    getters: {}
}

export default app