import 'reflect-metadata';
import '../assets/styles.css'
import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from '../components/App.vue'
import devToolIndex from '../components/devtools/DevToolIndex.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: devToolIndex
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')