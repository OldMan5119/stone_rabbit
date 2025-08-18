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
            state.sidebar.opened = !state.sidebar.opened;
        },
        CLOSE_SIDEBAR: state => {
            state.sidebar.opened = false;
        }
    },
    actions: {},
    getters: {}
}

export default app