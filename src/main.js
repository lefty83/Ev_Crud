import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/router.js'
import { createPinia } from 'pinia'
import piniaPLuginPersistedstate from 'pinia-plugin-persistedstate'
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const pinia = createPinia()
pinia.use(piniaPLuginPersistedstate)
const myApp = createApp(App)

myApp.use(Quasar,{
    plugins:{
        Notify
    }
})

myApp.use(router)
myApp.use(pinia)
myApp.mount('#app')