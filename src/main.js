import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router"
import "@/third/element"
import "@/styles/index.scss"
import store from "./store";
import "@/router/permission"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
