import '../assets/styles.css'
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from '../components/App.vue'
import DevToolIndex from '../components/devtools/DevToolIndex.vue'
import TabManager from "../manager/TabManager";
import RequestsManager from "../manager/RequestsManager";

TabManager.getInstance();
RequestsManager.getInstance();

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: DevToolIndex
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')